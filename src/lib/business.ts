/**
 * Sursa unică de adevăr pentru datele firmei (NAP: nume, adresă, telefon).
 * Orice modificare de adresă / telefon / program se face DOAR aici.
 */

export const SITE_URL = 'https://www.aquacarpet.ro';

/** Data ultimei actualizări de conținut (folosită în sitemap). */
export const SITE_UPDATED = '2026-11-15';

const PRICE_PER_SQM = 14;
const MIN_ORDER_SQM = 7;

export const BUSINESS = {
  name: 'AquaCarpet',
  description:
    `Spălătorie profesională de covoare în Brașov, cu ridicare și livrare gratuită la domiciliu. ${PRICE_PER_SQM} RON/mp, comandă minim ${MIN_ORDER_SQM} mp (${MIN_ORDER_SQM * PRICE_PER_SQM} lei), livrare în 24–48 de ore.`,
  phoneDisplay: '0757 219 695',
  phoneE164: '+40757219695',
  phoneHref: 'tel:+40757219695',
  whatsappHref: 'https://wa.me/40757219695',
  whatsappOrderHref:
    'https://wa.me/40757219695?text=Salut%20AquaCarpet%2C%20vreau%20s%C4%83%20fac%20o%20comand%C4%83',
  email: 'contact@aquacarpet.ro',
  address: {
    street: 'Șoseaua Cristianului',
    city: 'Brașov',
    region: 'Județul Brașov',
    country: 'RO',
  },
  /** Adresa pe un singur rând, așa cum apare pe site. */
  addressLine: 'Șoseaua Cristianului, Brașov',
  mapsQuery: 'Șoseaua Cristianului, Brașov, România',
  hours: [
    { label: 'Luni – Vineri', value: '09:00 – 17:00' },
    { label: 'Sâmbătă', value: 'Închis' },
    { label: 'Duminică', value: 'Închis' },
  ],
  /** Program pe scurt, pentru texte. */
  hoursShort: 'L–V 09:00–17:00 · sâmbătă și duminică închis',
  pricePerSqm: PRICE_PER_SQM,
  /** Comanda minimă: 7 mp; valoarea în lei se calculează din preț (7 × 14 = 98). */
  minOrderSqm: MIN_ORDER_SQM,
  minOrder: MIN_ORDER_SQM * PRICE_PER_SQM,
  currency: 'RON',
  delivery: '24–48 de ore',
  areaServed: 'Brașov și zonele limitrofe',
  /** Localitățile disponibile în formularul de comandă. */
  localities: ['Brașov', 'Săcele', 'Predeal', 'Râșnov'],
  /** Reducere afișată pe site pentru comenzile online. */
  onlineDiscount: '10%',
} as const;

/** Suprafața minimă a comenzii, formatată (ex: „7 mp”). */
export const MIN_ORDER_SQM_LABEL = `${BUSINESS.minOrderSqm} mp`;

/** Comanda minimă, așa cum apare pe site: „minim 7 mp (98 lei)”. */
export const MIN_ORDER_LABEL = `minim ${BUSINESS.minOrderSqm} mp (${BUSINESS.minOrder} lei)`;

/** Prețul estimat pentru o suprafață dată (cu aplicarea comenzii minime). */
export function estimatePrice(sqm: number) {
  const raw = Math.max(0, sqm) * BUSINESS.pricePerSqm;
  return { raw, total: sqm > 0 ? Math.max(raw, BUSINESS.minOrder) : 0, minApplied: sqm > 0 && raw < BUSINESS.minOrder };
}

export const MAPS_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(
  BUSINESS.mapsQuery,
)}&output=embed`;

export const MAPS_LINK_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  BUSINESS.mapsQuery,
)}`;

export const BUSINESS_ID = `${SITE_URL}/#business`;

/** Schema.org LocalBusiness (DryCleaningOrLaundry), inclusă pe toate paginile. */
export function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'DryCleaningOrLaundry',
    '@id': BUSINESS_ID,
    name: BUSINESS.name,
    description: BUSINESS.description,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/og.png`,
    telephone: BUSINESS.phoneE164,
    email: BUSINESS.email,
    priceRange: `${BUSINESS.pricePerSqm} RON/mp`,
    currenciesAccepted: 'RON',
    paymentAccepted: 'Numerar, Card, Transfer bancar',
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.region,
      addressCountry: BUSINESS.address.country,
    },
    hasMap: MAPS_LINK_URL,
    areaServed: BUSINESS.localities.map((name) => ({ '@type': 'City', name })),
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00',
      }
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicii spălătorie covoare',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Spălare profesională covoare',
            url: `${SITE_URL}/servicii/spalare-covoare-brasov`,
          },
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: BUSINESS.pricePerSqm,
            priceCurrency: 'RON',
            unitCode: 'MTK',
            unitText: 'mp',
            eligibleQuantity: {
              '@type': 'QuantitativeValue',
              minValue: BUSINESS.minOrderSqm,
              unitCode: 'MTK',
            },
          },
          description: `Comandă ${MIN_ORDER_LABEL}`,
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Igienizare și dezinfecție covoare',
            url: `${SITE_URL}/servicii/igienizare-covoare`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Ridicare și livrare gratuită covoare în Brașov',
            url: `${SITE_URL}/servicii/ridicare-livrare-covoare-brasov`,
          },
          price: 0,
          priceCurrency: 'RON',
        },
      ],
    },
  };
}
