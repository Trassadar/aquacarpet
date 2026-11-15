'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Animații la scroll pentru elementele cu `data-reveal`.
 * Conținutul e vizibil implicit (fără JS / SEO); ascundem doar elementele aflate
 * sub ecran la încărcare, apoi le animăm când intră în viewport.
 * Stagger: `style={{ '--i': index }}` pe element.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-visible)'));
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const show = (el: Element) => {
      el.classList.add('reveal-in');
      requestAnimationFrame(() => {
        el.classList.remove('reveal-pending');
        el.classList.add('is-visible');
      });
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            show(e.target);
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.1 },
    );

    const vh = window.innerHeight;
    for (const el of els) {
      const r = el.getBoundingClientRect();
      if (r.top < vh && r.bottom > 0) {
        // Deja vizibil la încărcare: îl animăm doar dacă e marcat explicit.
        el.classList.add('is-visible');
      } else {
        el.classList.add('reveal-pending');
        io.observe(el);
      }
    }
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
