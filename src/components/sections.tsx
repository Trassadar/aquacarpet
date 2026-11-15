import Link from 'next/link';
import type { CSSProperties, ReactNode } from 'react';
import { BUSINESS, MAPS_EMBED_URL, MAPS_LINK_URL, MIN_ORDER_LABEL } from '@/lib/business';
import { SERVICES } from '@/lib/services';
import type { FaqItem } from '@/lib/faq';
import Breadcrumbs, { type Crumb } from './Breadcrumbs';
import HeroFoam from './HeroFoam';
import {
  ArrowRightIcon,
  CheckIcon,
  ChevronDownIcon,
  ClockIcon,
  DropletIcon,
  LeafIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  ShieldIcon,
  SparklesIcon,
  TruckIcon,
  WhatsAppIcon,
} from './Icons';

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${
        light ? 'bg-white/10 text-aqua-200 ring-1 ring-white/20' : 'bg-aqua-50 text-aqua-800'
      }`}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  center = true,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  center?: boolean;
}) {
  return (
    <div data-reveal className={`mb-10 md:mb-14 ${center ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-navy-950">{title}</h2>
      {lead && <p className="mt-4 text-lg text-ink-soft">{lead}</p>}
    </div>
  );
}

/** Butoanele principale de conversie: comandă, telefon, WhatsApp. */
export function CtaButtons({
  dark = true,
  className = '',
  pulse = false,
}: {
  dark?: boolean;
  className?: string;
  /** Puls discret pe butonul principal (atrage atenția). */
  pulse?: boolean;
}) {
  return (
    <div className={`flex flex-col sm:flex-row flex-wrap gap-3 ${className}`}>
      <Link
        href="/comanda"
        className={`tap group inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-aqua-500 px-7 text-lg font-bold text-navy-950 shadow-lg shadow-aqua-500/30 hover:bg-aqua-400 ${
          pulse ? 'cta-pulse' : ''
        }`}
      >
        Comandă ridicare gratuită
        <ArrowRightIcon className="arrow-nudge h-5 w-5" />
      </Link>
      <a
        href={BUSINESS.phoneHref}
        className={`tap inline-flex h-14 items-center justify-center gap-2 rounded-2xl px-6 font-semibold ${
          dark
            ? 'bg-white/10 text-white ring-1 ring-white/30 hover:bg-white/20'
            : 'bg-white text-navy-950 ring-2 ring-navy-950 hover:bg-slate-50'
        }`}
      >
        <PhoneIcon className="icon-tick h-5 w-5" /> {BUSINESS.phoneDisplay}
      </a>
      <a
        href={BUSINESS.whatsappOrderHref}
        target="_blank"
        rel="noopener noreferrer"
        className="tap inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-whatsapp px-6 font-semibold text-navy-950 hover:brightness-95"
      >
        <WhatsAppIcon className="h-5 w-5" /> WhatsApp
      </a>
    </div>
  );
}

/** Hero pentru paginile interioare. */
export function PageHero({
  crumbs,
  title,
  lead,
  children,
}: {
  crumbs: Crumb[];
  title: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-bubbles text-white">
      <span className="bubble h-64 w-64 -right-16 -top-20 animate-float" aria-hidden="true" />
      <span className="bubble h-24 w-24 right-1/4 bottom-6 animate-float [animation-delay:-3s]" aria-hidden="true" />
      <HeroFoam count={7} />
      <Container className="relative py-12 md:py-20">
        <Breadcrumbs items={crumbs} />
        <h1 className="max-w-4xl text-4xl md:text-5xl font-extrabold tracking-tight">{title}</h1>
        {lead && <p className="load-in mt-5 max-w-2xl text-lg md:text-xl text-white/90">{lead}</p>}
        {children && <div className="load-in" style={{ '--delay': '0.15s' } as CSSProperties}>{children}</div>}
      </Container>
    </section>
  );
}

const TRUST = [
  { icon: TruckIcon, anim: 'icon-drive', title: 'Ridicare și livrare gratuite', text: `În ${BUSINESS.localities.join(', ')}` },
  { icon: ClockIcon, anim: 'icon-tick', title: 'Gata în 24–48 de ore', text: 'Pentru spălarea standard' },
  { icon: LeafIcon, anim: 'icon-sway', title: 'Detergenți biodegradabili', text: 'Siguri pentru copii și animale' },
  { icon: ShieldIcon, anim: 'icon-beat', title: 'Garanția satisfacției', text: 'Nu ești mulțumit? Refacem gratuit' },
];

export function TrustBar() {
  return (
    <section aria-label="Avantaje" className="relative z-10 -mt-10 md:-mt-14">
      <Container>
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {TRUST.map(({ icon: Icon, anim, title, text }, i) => (
            <li
              key={title}
              data-reveal
              style={{ '--i': i } as CSSProperties}
              className="rounded-2xl bg-white p-4 md:p-5 shadow-xl shadow-navy-950/10 ring-1 ring-slate-200 transition hover:-translate-y-1"
            >
              <span className="icon-pop inline-block">
                <Icon className={`${anim} h-7 w-7 text-aqua-600`} />
              </span>
              <p className="mt-3 font-bold text-navy-950 leading-snug">{title}</p>
              <p className="mt-1 text-sm text-ink-soft">{text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

const STEPS = [
  { icon: PhoneIcon, title: 'Comanzi', text: 'Telefonic, pe WhatsApp sau prin formularul online. Alegi ziua și intervalul orar.' },
  { icon: TruckIcon, title: 'Ridicăm gratuit', text: 'Venim la adresa ta și preluăm covoarele. Nu cari nimic.' },
  { icon: DropletIcon, title: 'Spălăm și uscăm', text: 'Spălare profesională, igienizare și uscare la temperatură controlată.' },
  { icon: SparklesIcon, title: 'Livrăm în 24–48 h', text: 'Îți aducem covoarele curate, verificate și ambalate, acasă.' },
];

export function Steps() {
  return (
    <section className="py-16 md:py-24 bg-slate-50" id="cum-functioneaza">
      <Container>
        <SectionHeading
          eyebrow="Cum funcționează"
          title="Covoare curate în 4 pași simpli"
          lead="Tu doar suni sau completezi formularul. Noi ne ocupăm de tot restul, de la ridicare până la livrare."
        />
        <ol data-reveal className="relative grid gap-5 lg:grid-cols-4">
          {/* Linie de progres: verticală pe mobil, orizontală pe desktop */}
          <span
            className="steps-line pointer-events-none absolute left-[3rem] top-6 bottom-6 w-1 rounded-full bg-gradient-to-b from-aqua-300 via-aqua-500 to-navy-950 lg:left-12 lg:right-12 lg:top-12 lg:bottom-auto lg:h-1 lg:w-auto lg:bg-gradient-to-r"
            aria-hidden="true"
          />
          {STEPS.map(({ icon: Icon, title, text }, i) => (
            <li
              key={title}
              data-reveal="left"
              style={{ '--i': i * 2 } as CSSProperties}
              className="relative rounded-3xl bg-white p-6 ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-950/10"
            >
              <span className="absolute right-5 top-4 text-5xl font-black text-aqua-100" aria-hidden="true">
                {i + 1}
              </span>
              <span className="icon-pop relative grid h-12 w-12 place-items-center rounded-2xl bg-navy-950 text-aqua-300 ring-4 ring-slate-50">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-xl font-bold text-navy-950">
                <span className="sr-only">Pasul {i + 1}: </span>
                {title}
              </h3>
              <p className="mt-2 text-ink-soft">{text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

const SERVICE_ICONS: Record<string, typeof DropletIcon> = {
  'spalare-covoare-brasov': DropletIcon,
  'igienizare-covoare': ShieldIcon,
  'ridicare-livrare-covoare-brasov': TruckIcon,
};

export function ServicesGrid({ headingLevel = 'h3' }: { headingLevel?: 'h2' | 'h3' }) {
  const H = headingLevel;
  return (
    <ul className="grid gap-5 md:grid-cols-3">
      {SERVICES.map((s, i) => {
        const Icon = SERVICE_ICONS[s.slug] ?? SparklesIcon;
        return (
          <li key={s.slug} data-reveal style={{ '--i': i } as CSSProperties} className="group flex flex-col rounded-3xl bg-white p-7 ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-navy-950/10">
            <span className="icon-pop grid h-14 w-14 place-items-center rounded-2xl bg-aqua-50 text-aqua-700 transition group-hover:bg-aqua-500 group-hover:text-navy-950 group-hover:rotate-6 group-hover:scale-110">
              <Icon className="h-7 w-7" />
            </span>
            <H className="mt-5 text-xl font-bold text-navy-950">
              <Link href={`/servicii/${s.slug}`} className="after:absolute after:inset-0 relative">
                {s.name}
              </Link>
            </H>
            <p className="mt-2 text-ink-soft">{s.summary}</p>
            <ul className="mt-4 space-y-2">
              {s.bullets.slice(0, 3).map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-ink">
                  <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-aqua-600" />
                  {b}
                </li>
              ))}
            </ul>
            <span className="mt-auto pt-6 inline-flex items-center gap-1 font-semibold text-aqua-700">
              Detalii <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" />
            </span>
          </li>
        );
      })}
    </ul>
  );
}

export function Coverage() {
  return (
    <section className="py-16 md:py-24" id="zona">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div data-reveal="left">
            <Eyebrow>Zona de acoperire</Eyebrow>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-navy-950">
              Ridicăm gratuit covoarele din Brașov și împrejurimi
            </h2>
            <p className="mt-4 text-lg text-ink-soft">
              Venim la adresa ta, preluăm covoarele și le aducem înapoi curate. Ridicarea și livrarea nu costă nimic în plus.
            </p>
            <ul className="mt-6 flex flex-wrap gap-3">
              {BUSINESS.localities.map((l, i) => (
                <li key={l} data-reveal="zoom" style={{ '--i': i + 2 } as CSSProperties} className="inline-flex items-center gap-2 rounded-full bg-navy-950 px-5 py-2.5 font-semibold text-white">
                  <MapPinIcon className="h-4 w-4 text-aqua-300" /> {l}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-ink-soft">
              Ești din altă localitate?{' '}
              <a href={BUSINESS.phoneHref} className="font-semibold text-aqua-700 underline underline-offset-4">
                Sună-ne
              </a>{' '}
              și verificăm împreună.
            </p>
          </div>
          <div data-reveal="right" className="relative overflow-hidden rounded-3xl bg-bubbles p-8 text-white min-h-72" aria-hidden="true">
            <span className="bubble h-40 w-40 -right-8 -top-8 animate-float" />
            <span className="bubble h-20 w-20 left-10 bottom-10 animate-float [animation-delay:-2s]" />
            <div className="relative grid grid-cols-2 gap-3 pb-4">
              {BUSINESS.localities.map((l, i) => (
                <div key={l} className={`rounded-2xl bg-white/10 p-4 ring-1 ring-white/20 backdrop-blur ${i % 2 ? 'translate-y-4' : ''}`}>
                  <TruckIcon className="icon-drive h-5 w-5 text-aqua-300" />
                  <p className="mt-2 font-bold">{l}</p>
                  <p className="text-xs text-white/80">Transport gratuit</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function FaqList({ items, headingLevel = 'h3' }: { items: FaqItem[]; headingLevel?: 'h2' | 'h3' }) {
  const H = headingLevel;
  return (
    <div className="space-y-3">
      {items.map((f, i) => (
        <details key={f.q} data-reveal style={{ '--i': Math.min(i, 5) } as CSSProperties} className="group rounded-2xl bg-white ring-1 ring-slate-200 open:ring-aqua-300 open:shadow-lg open:shadow-aqua-500/10 transition">
          <summary className="tap flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-5 py-4 md:px-6 md:py-5 active:bg-aqua-50">
            <H className="text-base md:text-lg font-semibold text-navy-950">{f.q}</H>
            <span className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-full bg-aqua-50 text-aqua-700 transition duration-300 group-open:rotate-180 group-open:bg-aqua-500 group-open:text-navy-950">
              <ChevronDownIcon className="h-4 w-4" />
            </span>
          </summary>
          <p className="faq-answer px-5 pb-5 md:px-6 text-ink-soft leading-relaxed">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function ContactBlock() {
  return (
    <div className="grid gap-6 lg:grid-cols-5">
      <div data-reveal="left" className="lg:col-span-2 rounded-3xl bg-navy-950 p-7 md:p-8 text-white">
        <h3 className="text-2xl font-bold">Hai să programăm ridicarea</h3>
        <ul className="mt-6 space-y-5">
          <li className="flex gap-4">
            <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-white/10 text-aqua-300"><PhoneIcon /></span>
            <div>
              <p className="text-sm text-white/70">Telefon</p>
              <a href={BUSINESS.phoneHref} className="text-lg font-bold hover:text-aqua-300">{BUSINESS.phoneDisplay}</a>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-white/10 text-aqua-300"><WhatsAppIcon /></span>
            <div>
              <p className="text-sm text-white/70">WhatsApp</p>
              <a href={BUSINESS.whatsappOrderHref} target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-aqua-300">
                Trimite un mesaj
              </a>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-white/10 text-aqua-300"><MailIcon /></span>
            <div>
              <p className="text-sm text-white/70">Email</p>
              <a href={`mailto:${BUSINESS.email}`} className="font-semibold hover:text-aqua-300">{BUSINESS.email}</a>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-white/10 text-aqua-300"><MapPinIcon /></span>
            <div>
              <p className="text-sm text-white/70">Adresă</p>
              <address className="not-italic font-semibold">{BUSINESS.addressLine}</address>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-white/10 text-aqua-300"><ClockIcon /></span>
            <div>
              <p className="text-sm text-white/70">Program</p>
              <ul className="font-semibold">
                {BUSINESS.hours.map((h) => (
                  <li key={h.label}>{h.label}: {h.value}</li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div data-reveal="right" className="lg:col-span-3 flex flex-col overflow-hidden rounded-3xl ring-1 ring-slate-200 bg-slate-100">
        <iframe
          src={MAPS_EMBED_URL}
          title={`Hartă: AquaCarpet, ${BUSINESS.addressLine}`}
          className="h-80 lg:h-full min-h-80 w-full flex-1 border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        <a
          href={MAPS_LINK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-white px-4 py-3 font-semibold text-aqua-700 hover:text-aqua-800"
        >
          <MapPinIcon className="h-4 w-4" /> Deschide în Google Maps
        </a>
      </div>
    </div>
  );
}

export function CtaBanner({
  title = 'Gata pentru covoare curate?',
  text = `Comandă online și primești ${BUSINESS.onlineDiscount} reducere la spălare. Ridicarea și livrarea sunt gratuite.`,
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <div data-reveal="zoom" className="relative overflow-hidden rounded-[2rem] bg-bubbles px-6 py-12 md:px-14 md:py-16 text-white">
          <span className="bubble h-56 w-56 -right-10 -top-16 animate-float" aria-hidden="true" />
          <span className="bubble h-16 w-16 right-1/3 bottom-8 animate-float [animation-delay:-4s]" aria-hidden="true" />
          <HeroFoam count={6} />
          <div className="relative max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">{title}</h2>
            <p className="mt-4 text-lg text-white/90">{text}</p>
            <CtaButtons className="mt-8" pulse />
          </div>
        </div>
      </Container>
    </section>
  );
}

export function PriceFacts() {
  return (
    <ul className="space-y-3">
      {[
        `${BUSINESS.pricePerSqm} RON/mp – spălare, uscare, ridicare și livrare incluse`,
        `Comandă ${MIN_ORDER_LABEL}`,
        'Fără costuri ascunse – plătești suprafața reală măsurată',
        `${BUSINESS.onlineDiscount} reducere la spălare pentru comenzile online`,
        'Plata numerar la livrare, cu cardul sau prin transfer bancar',
      ].map((t, i) => (
        <li key={t} data-reveal="left" style={{ '--i': i } as CSSProperties} className="flex items-start gap-3">
          <span className="mt-0.5 grid h-6 w-6 flex-shrink-0 place-items-center rounded-full bg-aqua-500 text-navy-950">
            <CheckIcon className="h-4 w-4" />
          </span>
          <span className="text-ink">{t}</span>
        </li>
      ))}
    </ul>
  );
}

