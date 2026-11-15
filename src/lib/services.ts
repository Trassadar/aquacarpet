/**
 * Serviciile listate pe site. Conținutul folosește doar informații deja publicate
 * pe aquacarpet.ro (prețuri, termene, procese) – nu adăuga servicii neconfirmate.
 */

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  icon: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  summary: string;
  bullets: string[];
  sections: { heading: string; paragraphs: string[] }[];
};

export const SERVICES: Service[] = [
  {
    slug: 'spalare-covoare-brasov',
    name: 'Spălare profesională covoare',
    shortName: 'Spălare covoare',
    icon: '🧼',
    metaTitle: 'Spălare covoare Brașov – 13 RON/mp, uscare controlată',
    metaDescription:
      'Spălare profesională covoare în Brașov: curățare profundă, detergenți biodegradabili, uscare controlată și livrare în 24–48 de ore. 13 RON/mp, ridicare gratuită.',
    h1: 'Spălare profesională covoare în Brașov',
    intro:
      'Spălăm covoarele din locuințe și spații comerciale cu echipamente moderne și detergenți profesionali, apoi le uscăm în spații special amenajate, la temperatură controlată.',
    summary:
      'Spălare profundă cu echipamente moderne și detergenți profesionali, pentru a elimina murdăria, petele și alergenii.',
    bullets: [
      'Eliminarea petelor dificile',
      'Curățarea profundă a fibrelor',
      'Reîmprospătarea culorilor',
      'Eliminarea mirosurilor neplăcute',
      'Uscare la temperatură controlată, fără mucegai',
      'Inspecție de calitate înainte de livrare',
    ],
    sections: [
      {
        heading: 'Cum spălăm covoarele',
        paragraphs: [
          'Fiecare covor este spălat cu echipamente și detergenți potriviți pentru tipul lui de fibră, astfel încât culorile și textura să fie păstrate. Folosim detergenți biodegradabili, siguri pentru copii și animale de companie.',
          'După spălare, covoarele sunt uscate în spații specializate, la temperatură și umiditate controlate. Uscarea corectă previne apariția mucegaiului și păstrează forma și dimensiunile covorului.',
          'Înainte de livrare facem o verificare finală a fiecărui covor, apoi îl ambalăm pentru transport.',
        ],
      },
      {
        heading: 'Preț și termen de livrare',
        paragraphs: [
          'Prețul spălării este de 13 RON/mp și include spălarea, uscarea, ridicarea și livrarea. Comanda minimă este de 91 RON (echivalentul a 7 mp).',
          'Pentru spălarea standard, covoarele ajung înapoi la tine în 24–48 de ore. Tratamentele speciale sau covoarele delicate pot necesita până la 72 de ore.',
        ],
      },
      {
        heading: 'Covoare delicate, de mătase sau persane vechi',
        paragraphs: [
          'Covoarele de mătase sau persane vechi necesită tratamente speciale și atenție deosebită. Pentru acestea, contactează-ne pentru o evaluare și o ofertă de preț adaptată.',
        ],
      },
    ],
  },
  {
    slug: 'igienizare-covoare',
    name: 'Igienizare și dezinfecție covoare',
    shortName: 'Igienizare covoare',
    icon: '🦠',
    metaTitle: 'Igienizare și dezinfecție covoare Brașov – anti-acarieni',
    metaDescription:
      'Igienizare covoare în Brașov: tratamente pentru eliminarea bacteriilor și acarienilor, tratament anti-alergic, produse sigure pentru copii și animale. Ridicare gratuită.',
    h1: 'Igienizare și dezinfecție covoare în Brașov',
    intro:
      'Pe lângă spălare, aplicăm tratamente de igienizare care ajută la eliminarea bacteriilor, a acarienilor și a altor microorganisme din covoare.',
    summary:
      'Tratamente speciale pentru eliminarea bacteriilor, acarienilor și a altor microorganisme dăunătoare.',
    bullets: [
      'Eliminarea acarienilor',
      'Dezinfectare bacteriologică',
      'Tratament anti-alergic',
      'Sigur pentru copii și animale de companie',
    ],
    sections: [
      {
        heading: 'De ce să igienizezi covoarele',
        paragraphs: [
          'Covoarele rețin praf, acarieni și bacterii care nu se văd cu ochiul liber. Igienizarea este utilă mai ales în casele cu copii mici, persoane alergice sau animale de companie.',
          'Folosim produse biodegradabile, fără substanțe toxice, sigure pentru copii și animale.',
        ],
      },
      {
        heading: 'Preț',
        paragraphs: [
          'Tratamentele speciale (anti-alergic, anti-purici) și dezinfectarea cu ozon sau aburi nu sunt incluse în prețul standard de 13 RON/mp. Contactează-ne pentru o ofertă personalizată, în funcție de covoarele tale.',
          'Pentru covoarele cu tratamente speciale, termenul de livrare poate ajunge la 72 de ore.',
        ],
      },
    ],
  },
  {
    slug: 'ridicare-livrare-covoare-brasov',
    name: 'Ridicare și livrare gratuită covoare',
    shortName: 'Ridicare și livrare',
    icon: '🚚',
    metaTitle: 'Ridicare și livrare covoare gratuită în Brașov',
    metaDescription:
      'Ridicăm gratuit covoarele de acasă în Brașov și zonele limitrofe și le aducem înapoi curate în 24–48 de ore. Comandă la 0757 219 695 sau online.',
    h1: 'Ridicare și livrare gratuită a covoarelor în Brașov',
    intro:
      'Nu trebuie să cari covoare grele până la mașină. Venim la adresa ta din Brașov sau din zonele limitrofe, ridicăm covoarele și le aducem înapoi curate, gata de folosit.',
    summary:
      'Transport gratuit la domiciliu în Brașov și zonele limitrofe, cu ambalare profesională la returnare.',
    bullets: [
      'Transport gratuit dus-întors',
      'Program flexibil, stabilit cu tine',
      'Ambalare profesională la returnare',
      'Livrare în 24–48 de ore pentru spălarea standard',
    ],
    sections: [
      {
        heading: 'Cum funcționează',
        paragraphs: [
          'Ne suni la 0757 219 695, ne scrii pe WhatsApp sau completezi formularul de comandă online. Stabilim împreună ziua și intervalul orar potrivit pentru ridicare.',
          'Echipa noastră vine la adresa indicată și preia covoarele. După spălare și uscare, le aducem înapoi tot la tine acasă, ambalate.',
        ],
      },
      {
        heading: 'Cât costă transportul',
        paragraphs: [
          'Ridicarea și livrarea sunt gratuite în Brașov și zonele limitrofe. Plătești doar spălarea: 13 RON/mp, cu o comandă minimă de 91 RON.',
          'Comandă online pe site și primești 10% reducere la spălare.',
        ],
      },
    ],
  },
];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
