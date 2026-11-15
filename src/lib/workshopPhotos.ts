/** Fotografii de proces pentru galerie (generate, nu din atelierul real). */
export type WorkshopPhoto = {
  src: string;
  alt: string;
  caption: string;
};

export const WORKSHOP_PHOTOS = {
  wash: {
    src: '/images/spalare-presiune.webp',
    alt: 'Angajat care spală cu aparat de presiune un covor oriental pe pardoseala umedă a spălătoriei de covoare, cu spumă albă pe fibre',
    caption: 'Spălare cu presiune și spumă',
  },
  spin: {
    src: '/images/centrifuga.webp',
    alt: 'Covor ud scos din centrifuga industrială a spălătoriei, cu apa scurgându-se pe pardoseala de beton',
    caption: 'Stoarcere în centrifugă',
  },
  dry: {
    src: '/images/uscare.webp',
    alt: 'Covoare proaspăt spălate, atârnate la uscat pe bare metalice într-o cameră de uscare cu aerisire profesională',
    caption: 'Uscare controlată',
  },
  wrap: {
    src: '/images/ambalare.webp',
    alt: 'Covor curat, rulat și ambalat în folie de protecție, pregătit pentru livrare la domiciliu',
    caption: 'Ambalare pentru livrare',
  },
  deliver: {
    src: '/images/livrare-domiciliu.webp',
    alt: 'Livrare la ușa casei: un covor curat, rulat și ambalat, dus de la duba de transport până la intrarea locuinței',
    caption: 'Livrare gratuită la domiciliu',
  },
  before: {
    src: '/images/covor-inainte.webp',
    alt: 'Covor oriental murdar, cu fibre turtite și culori șterse, fotografiat înainte de spălarea profesională',
    caption: 'Înainte de spălare',
  },
  after: {
    src: '/images/covor-dupa.webp',
    alt: 'Același covor oriental după spălarea profesională, cu culorile reîmprospătate și fibrele curate',
    caption: 'După spălare',
  },
} as const satisfies Record<string, WorkshopPhoto>;
