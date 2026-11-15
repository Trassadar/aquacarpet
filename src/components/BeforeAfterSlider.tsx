'use client';

import Image from 'next/image';
import { useCallback, useId, useRef, useState, type PointerEvent } from 'react';

type Props = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  className?: string;
};

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  className = '',
}: Props) {
  const [pos, setPos] = useState(50);
  const frame = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const labelId = useId();

  const setFromClientX = useCallback((clientX: number) => {
    const el = frame.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const next = ((clientX - r.left) / r.width) * 100;
    setPos(Math.min(100, Math.max(0, next)));
  }, []);

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0 && e.pointerType === 'mouse') return;
    dragging.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    setFromClientX(e.clientX);
  };

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (dragging.current) setFromClientX(e.clientX);
  };

  const stopDrag = () => {
    dragging.current = false;
  };

  return (
    <figure data-reveal className={className}>
      <p id={labelId} className="sr-only">
        Compară covorul înainte și după spălare. Trage cursorul stânga-dreapta.
      </p>
      <div
        ref={frame}
        className="ba-slider relative aspect-[4/3] cursor-ew-resize select-none overflow-hidden rounded-3xl bg-slate-100 shadow-lg shadow-navy-950/10 ring-1 ring-slate-200 touch-none"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={stopDrag}
        onPointerCancel={stopDrag}
      >
        <Image
          src={afterSrc}
          alt={afterAlt}
          fill
          sizes="(min-width: 1280px) 1200px, 100vw"
          className="object-cover"
          draggable={false}
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <Image
            src={beforeSrc}
            alt={beforeAlt}
            fill
            sizes="(min-width: 1280px) 1200px, 100vw"
            className="object-cover"
            draggable={false}
          />
        </div>

        <div
          className="pointer-events-none absolute inset-y-0 z-10 w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,0.35)]"
          style={{ left: `${pos}%` }}
          aria-hidden="true"
        >
          <span className="absolute top-1/2 left-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-navy-950 shadow-lg ring-1 ring-slate-200">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M8 12H4m0 0 3-3M4 12l3 3M16 12h4m0 0-3-3m3 3-3 3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>

        <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-navy-950/80 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
          Înainte
        </span>
        <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-aqua-500/95 px-3 py-1 text-xs font-bold uppercase tracking-wider text-navy-950">
          După
        </span>

        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-labelledby={labelId}
          aria-valuetext={`${Math.round(pos)} la sută înainte de spălare`}
          className="sr-only"
        />
      </div>
      <figcaption className="mt-3 text-center text-sm text-ink-soft">
        Trage cursorul ca să vezi diferența: același covor, înainte și după spălare.
      </figcaption>
    </figure>
  );
}
