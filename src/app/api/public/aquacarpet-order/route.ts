import { NextRequest, NextResponse } from 'next/server';
import { getOrdersCollection, serverTimestamp, generateId } from '@/lib/firebaseAdmin';

export const runtime = "nodejs";

// Rate limiting store (in production, use Firestore instead)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

// Debug environment variables
if (process.env.NODE_ENV !== 'production') {
  console.log('=== ENV CHECK ===');
  console.log('FIREBASE_PROJECT_ID:', process.env.FIREBASE_PROJECT_ID ? 'SET' : 'MISSING');
  console.log('FIREBASE_SERVICE_ACCOUNT_KEY:', process.env.FIREBASE_SERVICE_ACCOUNT_KEY ? 'SET' : 'MISSING');
  console.log('AQUACARPET_TENANT_ID:', process.env.AQUACARPET_TENANT_ID ? 'SET' : 'MISSING');
}

// Configurare CORS
const corsHeaders = {
  'Access-Control-Allow-Origin': process.env.NODE_ENV === 'production' 
    ? 'https://aquacarpet.ro, https://www.aquacarpet.ro'
    : 'http://localhost:3000, http://localhost:3001',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, x-public-order-key',
  'Access-Control-Max-Age': '86400',
};

// Get client IP
function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  const realIp = request.headers.get('x-real-ip');
  if (realIp) {
    return realIp.trim();
  }
  const cfConnectingIp = request.headers.get('cf-connecting-ip');
  if (cfConnectingIp) {
    return cfConnectingIp.trim();
  }
  return 'unknown';
}

// Rate limiting check
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000; // 10 minutes
  
  if (!rateLimitStore.has(ip)) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }
  
  const record = rateLimitStore.get(ip)!;
  
  // Reset window if expired
  if (now > record.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }
  
  // Check limit
  if (record.count >= 3) {
    return false; // Rate limited
  }
  
  // Increment count
  rateLimitStore.set(ip, { count: record.count + 1, resetTime: record.resetTime });
  return true;
}

// Functie pentru a normaliza telefonul
function normalizePhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  
  if (cleaned.startsWith('4') && cleaned.length === 11) {
    return `+${cleaned}`;
  }
  
  if (cleaned.startsWith('07') && cleaned.length === 10) {
    return cleaned;
  }
  
  return cleaned;
}

// Functie pentru a valida datele
function validateOrderData(data: any): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  // Anti-spam: check honeypot
  if (data.website) {
    return { isValid: false, errors: ['Spam detected'] };
  }
  
  // Time-to-submit check (anti-bot)
  if (data.ttsMs && data.ttsMs < 2000) {
    return { isValid: false, errors: ['Submit too fast'] };
  }
  
  if (!data.nume || typeof data.nume !== 'string' || data.nume.trim().length < 2) {
    errors.push('Numele este obligatoriu si trebuie sa aiba minim 2 caractere');
  }
  
  if (!data.telefon || typeof data.telefon !== 'string') {
    errors.push('Telefonul este obligatoriu');
  }
  
  if (!data.oras || typeof data.oras !== 'string' || data.oras.trim().length < 2) {
    errors.push('Orasul este obligatoriu');
  }
  
  if (!data.strada || typeof data.strada !== 'string' || data.strada.trim().length < 2) {
    errors.push('Strada este obligatorie');
  }
  
  if (!data.numar || typeof data.numar !== 'string' || data.numar.trim().length < 1) {
    errors.push('Numarul este obligatoriu');
  }
  
  if (!data.gdpr || data.gdpr !== true) {
    errors.push('GDPR agreement is required');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

export async function POST(request: NextRequest) {
  try {
    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new NextResponse(null, { status: 200, headers: corsHeaders });
    }

    // Rate limiting
    const clientIP = getClientIP(request);
    if (!checkRateLimit(clientIP)) {
      return NextResponse.json(
        { 
          ok: false, 
          error: 'Prea multe incercari. Va rugam incercati mai tarziu.' 
        },
        { 
          status: 429,
          headers: corsHeaders
        }
      );
    }

    // Parse request body
    let body;
    try {
      body = await request.json();
    } catch (error) {
      if (process.env.NODE_ENV !== 'production') {
        console.error('JSON parse error:', error);
      }
      return NextResponse.json(
        { 
          ok: false, 
          error: 'Invalid JSON format' 
        },
        { 
          status: 400,
          headers: corsHeaders
        }
      );
    }

    // Validate data
    const validation = validateOrderData(body);
    if (!validation.isValid) {
      if (process.env.NODE_ENV !== 'production') {
        console.log('Validation errors:', validation.errors);
      }
      return NextResponse.json(
        { 
          ok: false, 
          error: validation.errors.join('; ') 
        },
        { 
          status: 400,
          headers: corsHeaders
        }
      );
    }

    // Generate order ID
    const orderId = generateId();
    const tenantId = process.env.AQUACARPET_TENANT_ID;

    if (!tenantId) {
      if (process.env.NODE_ENV !== 'production') {
        console.error('AQUACARPET_TENANT_ID not set');
      }
      return NextResponse.json(
        { 
          ok: false, 
          error: 'Server configuration error' 
        },
        { 
          status: 500,
          headers: corsHeaders
        }
      );
    }

    // Prepare adresa
    const adresaLinie1 = `${body.strada} ${body.numar}${body.bloc ? ` Bl. ${body.bloc}` : ''}${body.scara ? ` Sc. ${body.scara}` : ''}${body.ap ? ` Ap. ${body.ap}` : ''}`;
    const adresa = `${body.oras}, ${adresaLinie1}`;

    // Create order data
    const orderData = {
      // Date client
      nume: body.nume,
      telefon: normalizePhone(body.telefon),
      email: body.email || '',
      // Date comanda
      dataComanda: serverTimestamp(),
      // Status
      status: 'pending',
      etapa: 'comanda-noua',
      subetapa: 'asteptare-confirmare',
      // Financiar
      pretM2: 13,
      min1m2: false,
      minOrderApplied: false,
      minOrderBadge: '',
      totalBeforeMin: 0,
      totalFinal: 0,
      totalGeoM2: 0,
      totalM2: 0,
      totalTarifM2: 0,
      nrCovoare: body.nrCovoare || '1',
      // System
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      assignedDriverUid: '',
      driverId: '',
      drivers: {},
      nrArticole: 0,
      itemsCount: 0,
      orderInRoute: 0,
      nrComanda: null,
      orderNumber: null,
      number: null,
      // Adresa
      adresaLinie1,
      adresa,
      adresaSearchLower: adresaLinie1.toLowerCase(),
      bloc: body.bloc?.trim() || '',
      scara: body.scara?.trim() || '',
      apartament: body.ap?.trim() || '',
      etaj: body.etaj?.trim() || '',
      // Date si observatii
      dataRidicare: body.dataPreferata?.trim() || '',
      dataLivrare: '',
      observatii: body.observatii?.trim() || '',
      // Tracking
      source: 'aquacarpet.ro',
      channel: 'website',
      // Tenant ID
      tenantId: tenantId
    };

    // Salvare in Firestore
    const ordersCollection = getOrdersCollection();
    await ordersCollection.doc(orderId).set(orderData);

    if (process.env.NODE_ENV !== 'production') {
      console.log(`Comanda salvata: ${orderId} in orders`);
    }

    return NextResponse.json(
      { 
        ok: true, 
        orderId: orderId,
        message: 'Comanda inregistrata cu succes'
      },
      { 
        status: 200,
        headers: corsHeaders
      }
    );

  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Order creation error:', error);
    }
    
    return NextResponse.json(
      { 
        ok: false, 
        error: 'Eroare interna. Va rugam incercati din nou.' 
      },
      { 
        status: 500,
        headers: corsHeaders
      }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { 
      ok: false, 
      error: 'Method not allowed' 
    },
    { 
      status: 405,
      headers: corsHeaders
    }
  );
}
