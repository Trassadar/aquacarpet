'use client';

import { useEffect, useRef, useState } from 'react';

/** Numără de la 0 la `to` când elementul apare. Valoarea finală e randată pe server (SEO). */
export default function CountUp({ to, duration = 1100, className }: { to: number; duration?: number; className?: string }) {
  const [value, setValue] = useState(to);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf = 0;
    const run = () => {
      const start = performance.now();
      const step = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        setValue(Math.round(eased * to));
        if (t < 1) raf = requestAnimationFrame(step);
      };
      setValue(0);
      raf = requestAnimationFrame(step);
    };
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          run();
          io.disconnect();
        }
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, duration]);

  return (
    <span ref={ref} className={className} style={{ fontVariantNumeric: 'tabular-nums', display: 'inline-block', position: 'relative' }}>
      {/* Ocupă lățimea finală, ca numărătoarea să nu miște layout-ul (CLS 0). */}
      <span aria-hidden="true" style={{ visibility: 'hidden' }}>{to}</span>
      <span aria-hidden="true" style={{ position: 'absolute', left: 0, top: 0 }}>{value}</span>
      <span className="sr-only">{to}</span>
    </span>
  );
}
