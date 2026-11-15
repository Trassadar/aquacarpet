import type { CSSProperties } from 'react';
import BeforeAfterSlider from './BeforeAfterSlider';
import ProcessImage from './ProcessImage';
import { Container, SectionHeading } from './sections';
import { WORKSHOP_PHOTOS as P } from '@/lib/workshopPhotos';

const GRID = [P.wash, P.spin, P.dry, P.wrap, P.deliver] as const;

export default function WorkshopGallery() {
  return (
    <section className="py-16 md:py-24" id="cum-spalam">
      <Container>
        <SectionHeading
          eyebrow="Din atelier"
          title="Cum spălăm covoarele"
          lead="De la spălarea cu presiune până la uscare și ambalare, fiecare covor trece printr-un proces profesional, apoi ți-l aducem acasă."
        />

        <BeforeAfterSlider
          beforeSrc={P.before.src}
          afterSrc={P.after.src}
          beforeAlt={P.before.alt}
          afterAlt={P.after.alt}
          className="mx-auto max-w-4xl"
        />

        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {GRID.map((photo, i) => {
            const lastRow = i >= 3;
            return (
              <li
                key={photo.src}
                className={lastRow ? 'lg:col-span-3' : 'lg:col-span-2'}
                style={{ '--i': i } as CSSProperties}
              >
                <ProcessImage
                  photo={photo}
                  sizes={
                    lastRow
                      ? '(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw'
                      : '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw'
                  }
                />
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
