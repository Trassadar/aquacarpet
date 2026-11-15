/** Fotografii de proces pentru galerie. */
export type WorkshopPhoto = {
  src: string;
  alt: string;
  caption: string;
};

export const WORKSHOP_PHOTOS = {
  wash: {
    src: '/images/spalare-presiune.webp',
    alt: 'Mașină automată industrială de spălat covoare în atelierul AquaCarpet: covorul trece întins pe bandă, prin perii rotative și clătire',
    caption: 'Spălare automată industrială',
  },
  spin: {
    src: '/images/centrifuga.webp',
    alt: 'Centrifugă industrială orizontală pentru covoare, în care un covor ud rulat este introdus pe la capătul cilindrului, în atelier',
    caption: 'Stoarcere în centrifugă',
  },
  dry: {
    src: '/images/uscare.webp',
    alt: 'Cameră închisă de uscare a covoarelor: câteva covoare proaspăt spălate, atârnate pe bare metalice, la temperatură controlată',
    caption: 'Cameră de uscare',
  },
  wrap: {
    src: '/images/ambalare.webp',
    alt: 'Covor curat, rulat și ambalat în folie de protecție pe masa de lucru din atelier, pregătit pentru livrare la domiciliu',
    caption: 'Ambalare pentru livrare',
  },
  deliver: {
    src: '/images/livrare-domiciliu.webp',
    alt: 'Livrare la un bloc din Brașov: un covor curat, rulat și ambalat, dus de la duba de transport până la intrarea scării',
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
