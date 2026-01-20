import { NextRequest, NextResponse } from 'next/server';
import { getOrdersCollection, serverTimestamp, generateId } from '@/lib/firebaseAdmin';

export const runtime = "nodejs";

// Debug environment variables
console.log('=== ENV CHECK ===');
console.log('FIREBASE_PROJECT_ID:', process.env.FIREBASE_PROJECT_ID ? 'SET' : 'MISSING');
console.log('FIREBASE_SERVICE_ACCOUNT_KEY:', process.env.FIREBASE_SERVICE_ACCOUNT_KEY ? 'SET' : 'MISSING');
console.log('AQUACARPET_TENANT_ID:', process.env.AQUACARPET_TENANT_ID ? 'SET' : 'MISSING');

// Configurare CORS
const corsHeaders = {
  'Access-Control-Allow-Origin': process.env.NODE_ENV === 'production' 
    ? 'https://aquacarpet.ro, https://www.aquacarpet.ro'
    : 'http://localhost:3000, http://localhost:3001',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, x-public-order-key',
  'Access-Control-Max-Age': '86400',
};

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
  
  if (data.gdpr !== true) {
    errors.push('Acordul GDPR este obligatoriu');
  }
  
  if (data.telefon) {
    const normalizedPhone = normalizePhone(data.telefon);
    const phoneRegex = /^(\+4\d{10}|07\d{8})$/;
    if (!phoneRegex.test(normalizedPhone)) {
      errors.push('Telefonul nu este valid (format: 07xxxxxxxx sau +407xxxxxxxx)');
    }
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

// Handle OPTIONS request pentru CORS preflight
export async function OPTIONS() {
  return NextResponse.json(null, {
    status: 200,
    headers: corsHeaders,
  });
}

// Handle POST request
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Debug payload in dev
    if (process.env.NODE_ENV !== 'production') {
      console.log("PAYLOAD:", { 
        nume: body.nume, 
        telefon: body.telefon, 
        oras: body.oras, 
        strada: body.strada, 
        numar: body.numar, 
        bloc: body.bloc, 
        scara: body.scara, 
        apartament: body.apartament, 
        gdpr: body.gdpr, 
        website: body.website 
      });
    }
    
    // Anti-spam honeypot check
    if (body.website && body.website.trim().length > 0) {
      return NextResponse.json(
        { ok: true },
        { 
          status: 200,
          headers: corsHeaders
        }
      );
    }

    // Validare date
    const validation = validateOrderData(body);
    if (!validation.isValid) {
      const errorResponse = {
        ok: false, 
        error: validation.errors.join(', ')
      };

      // Debug pentru "Numarul este obligatoriu"
      if (process.env.NODE_ENV !== 'production' && validation.errors.includes('Numarul este obligatoriu')) {
        errorResponse.debug = {
          receivedNumar: body.numar,
          keys: Object.keys(body || {})
        };
      }

      return NextResponse.json(errorResponse, {
        status: 400,
        headers: corsHeaders
      });
    }

    // Verificare tenant ID
    const tenantId = process.env.AQUACARPET_TENANT_ID;
    if (!tenantId || tenantId.trim() === '' || tenantId === 'aquacarpet-tenant-id') {
      console.error('AQUACARPET_TENANT_ID invalid sau lipseste');
      return NextResponse.json(
        { ok: false, error: 'Server config invalid: AQUACARPET_TENANT_ID lipseste' },
        { 
          status: 500,
          headers: corsHeaders
        }
      );
    }

    console.log('=== FIRESTORE DEBUG ===');
    console.log('TENANT_ID:', tenantId);
    console.log('FIRESTORE PATH:', 'orders');

    // Pregatire date pentru salvare
    const orderId = generateId();
    const normalizedPhone = normalizePhone(body.telefon);
    
    // Construire adresa completa
    const adresaLinie1 = `${body.strada?.trim() || ''} ${body.numar?.trim() || ''}, ${body.oras?.trim() || ''}, Romania`;
    const adresaDetalii = [
      body.bloc?.trim() && `Bloc ${body.bloc.trim()}`,
      body.scara?.trim() && `Scara ${body.scara.trim()}`,
      body.apartament?.trim() && `Ap ${body.apartament.trim()}`,
      body.etaj?.trim() && `Etaj ${body.etaj.trim()}`
    ].filter(Boolean).join(', ');
    
    const adresa = adresaDetalii ? `${adresaLinie1}, ${adresaDetalii}` : adresaLinie1;
    
    // Gaseste userId-ul owner-ului tenantului (pentru rules)
    let userId = tenantId; // Fallback: folosim tenantId ca userId daca nu gasim altul
    try {
      const { getDb } = await import('@/lib/firebaseAdmin');
      const db = getDb();
      const tenantDoc = await db.collection('tenants').doc(tenantId).get();
      if (tenantDoc.exists) {
        const tenantData = tenantDoc.data();
        if (tenantData?.createdByUid) {
          userId = tenantData.createdByUid;
        } else if (tenantData?.uid) {
          userId = tenantData.uid;
        }
      }
    } catch (err) {
      console.warn('Nu am putut gasi userId din tenant, folosim tenantId:', err);
    }

    const orderData = {
      id: orderId,
      userId: userId, // IMPORTANT: pentru Firestore rules
      nume: body.nume.trim(),
      telefon: normalizedPhone,
      telefonDigits: normalizedPhone.replace(/\D/g, ''),
      status: 'inregistrata',
      archived: false,
      created: serverTimestamp(),
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
      pretM2: 13,
      min1m2: true,
      minOrderApplied: false,
      minOrderBadge: '',
      totalBeforeMin: 0,
      totalFinal: 0,
      totalGeoM2: 0,
      totalM2: 0,
      totalTarifM2: 0,
      // Adresa
      adresaLinie1,
      adresa,
      adresaSearchLower: adresaLinie1.toLowerCase(),
      bloc: body.bloc?.trim() || '',
      scara: body.scara?.trim() || '',
      apartament: body.apartament?.trim() || '',
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

    console.log(`Comanda salvata: ${orderId} in orders`);

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

  } catch (error: any) {
    console.error('POST ERROR:', error);
    
    const errorResponse: {
      ok: boolean; 
      error: string; 
      debug?: any;
    } = {
      ok: false, 
      error: process.env.NODE_ENV !== 'production' 
        ? `Server error: ${error.message}`
        : 'Eroare la trimitere comanda. Incercati din nou.'
    };

    if (process.env.NODE_ENV !== 'production') {
      errorResponse.debug = {
        message: error.message,
        code: error.code,
        stack: error.stack
      };
    }
    
    return NextResponse.json(errorResponse, {
      status: 500,
      headers: corsHeaders
    });
  }
}
