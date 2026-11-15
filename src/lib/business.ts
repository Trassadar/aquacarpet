/**
 * Sursa unică de adevăr pentru datele firmei (NAP: nume, adresă, telefon).
 * Orice modificare de adresă / telefon / program se face DOAR aici.
 */

export const SITE_URL = 'https://www.aquacarpet.ro';

/** Data ultimei actualizări de conținut (folosită în sitemap). */
export const SITE_UPDATED = '2026-11-15';

export const BUSINESS = {
  name: 'AquaCarpet',
  description:
    'Spălătorie profesională de covoare în Brașov, cu ridicare și livrare gratuită la domiciliu. 13 RON/mp, comandă minimă 91 RON, livrare în 24–48 de ore.',
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
    { label: 'Luni – Vineri', value: '08:00 – 18:00' },
    { label: 'Sâmbătă', value: '09:00 – 13:00' },
    { label: 'Duminică', value: 'Închis' },
  ],
  pricePerSqm: 13,
  minOrder: 91,
  minOrderSqm: 7,
  currency: 'RON',
  delivery: '24–48 de ore',
  areaServed: 'Brașov și zonele limitrofe',
} as const;

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
    areaServed: {
      '@type': 'City',
      name: 'Brașov',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '13:00',
      },
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
          },
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
