import { BUSINESS, MIN_ORDER_LABEL, MIN_ORDER_SQM_LABEL } from './business';

export type FaqItem = { q: string; a: string };

export const FAQS: FaqItem[] = [
  {
    q: 'Care este programul de funcționare?',
    a: 'Suntem deschiși de luni până vineri, între orele 09:00 și 17:00. Sâmbăta și duminica suntem închiși. Comenzile se pot face online și în afara programului, iar noi te contactăm pentru confirmare.',
  },
  {
    q: 'Cât timp durează spălarea covoarelor?',
    a: 'Pentru serviciul standard, livrarea se face în 24–48 de ore. Pentru tratamente speciale sau covoare delicate, timpul poate ajunge la 72 de ore. Te anunțăm exact când ridicăm covoarele.',
  },
  {
    q: 'Faceți transport la domiciliu?',
    a: 'Da, ridicarea și livrarea sunt gratuite în Brașov și zonele limitrofe. Echipa noastră vine la adresa indicată, ambalează covoarele și le returnează curate.',
  },
  {
    q: 'Cum se calculează prețul?',
    a: `Prețul este de ${BUSINESS.pricePerSqm} RON pe metru pătrat, comanda fiind de ${MIN_ORDER_LABEL}. Pentru suprafețe mai mici de ${MIN_ORDER_SQM_LABEL} se facturează ${BUSINESS.minOrder} lei. Măsurăm suprafața reală a covorului și calculăm prețul în consecință.`,
  },
  {
    q: 'Ce faceți cu covoarele foarte murdare sau cu pete dificile?',
    a: 'Pentru pete dificile (cerneală, vopsea, sânge etc.) avem tratamente speciale, la cost suplimentar. Te rugăm să menționezi acest lucru la programare, ca să pregătim soluțiile potrivite.',
  },
  {
    q: 'Este sigur pentru copii și animale de companie?',
    a: 'Da, folosim doar detergenți biodegradabili, ecologici, siguri pentru copii și animale de companie. Produsele noastre nu conțin substanțe toxice.',
  },
  {
    q: 'Ce se întâmplă dacă nu sunt mulțumit de rezultat?',
    a: 'Oferim garanția satisfacției. Dacă nu ești mulțumit de rezultat, refacem spălarea gratuit.',
  },
  {
    q: 'Spălați și covoare de mătase sau persane vechi?',
    a: 'Da, însă acestea necesită tratamente speciale și atenție deosebită. Contactează-ne pentru o evaluare personalizată și o ofertă de preț adaptată.',
  },
  {
    q: 'Cum se usucă covoarele după spălare?',
    a: 'Folosim spații specializate de uscare, cu temperatură și umiditate controlate. Acest proces previne apariția mucegaiului și păstrează forma și culorile covoarelor.',
  },
  {
    q: 'Ce metode de plată acceptați?',
    a: 'Acceptăm plata numerar la livrare, transfer bancar și card. Pentru clienții corporate oferim și posibilitatea de plată la 30 de zile.',
  },
];

export function faqJsonLd(items: FaqItem[] = FAQS) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}
