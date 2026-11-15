import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PriceCalculator from '@/components/PriceCalculator';
import CountUp from '@/components/CountUp';
import HeroFoam from '@/components/HeroFoam';
import {
  Container,
  ContactBlock,
  Coverage,
  CtaBanner,
  CtaButtons,
  Eyebrow,
  FaqList,
  PriceFacts,
  SectionHeading,
  ServicesGrid,
  Steps,
  TrustBar,
} from '@/components/sections';
import { CheckIcon } from '@/components/Icons';
import { BUSINESS, MIN_ORDER_LABEL, MIN_ORDER_SQM_LABEL } from '@/lib/business';
import { FAQS } from '@/lib/faq';
import { pageMetadata } from '@/lib/seo';
import WorkshopGallery from '@/components/WorkshopGallery';

export const metadata = pageMetadata({
  title: `Spălătorie Covoare Brașov | AquaCarpet – ${BUSINESS.pricePerSqm} RON/mp, Ridicare Gratuită`,
  description: `Spălătorie profesională de covoare în Brașov. Ridicăm covoarele de acasă gratuit și le aducem curate în 24–48 de ore. ${BUSINESS.pricePerSqm} RON/mp, comandă ${MIN_ORDER_LABEL}. Sună la ${BUSINESS.phoneDisplay}.`,
  path: '/',
  absoluteTitle: true,
});

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-bubbles text-white">
          <span className="bubble h-72 w-72 -right-20 -top-24 animate-float" aria-hidden="true" />
          <span className="bubble h-28 w-28 left-[45%] top-16 animate-float [animation-delay:-2s]" aria-hidden="true" />
          <span className="bubble h-16 w-16 left-8 bottom-24 animate-float [animation-delay:-5s]" aria-hidden="true" />
          <HeroFoam />
          <Container className="relative grid items-center gap-10 pt-10 pb-24 md:pt-16 md:pb-32 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <Eyebrow light>Spălătorie covoare · Brașov</Eyebrow>
              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight">
                Spălătorie covoare Brașov cu <span className="text-shine">ridicare și livrare gratuită</span>
              </h1>
              <p className="load-in mt-6 max-w-xl text-lg md:text-xl text-white/90" style={{ '--delay': '0.1s' } as React.CSSProperties}>
                Ridicăm covoarele de acasă, le spălăm profesional, le uscăm controlat și ți le aducem înapoi curate în
                24–48 de ore.
              </p>

              <div className="load-in mt-7 flex flex-wrap items-end gap-x-6 gap-y-3" style={{ '--delay': '0.25s' } as React.CSSProperties}>
                <p className="flex items-baseline gap-2">
                  <CountUp to={BUSINESS.pricePerSqm} className="text-6xl md:text-7xl font-black text-white" />
                  <span className="text-2xl font-bold text-aqua-300">lei/mp</span>
                </p>
                <ul className="pb-2 text-sm text-white/85 space-y-1">
                  <li className="flex items-center gap-2"><CheckIcon className="h-4 w-4 text-aqua-300" /> Transport inclus, fără costuri ascunse</li>
                  <li className="flex items-center gap-2"><CheckIcon className="h-4 w-4 text-aqua-300" /> Comandă {MIN_ORDER_LABEL}</li>
                </ul>
              </div>

              <CtaButtons className="load-in mt-8" pulse />
              <p className="mt-4 text-sm text-white/80">
                Program: {BUSINESS.hoursShort}. Comenzile online sunt preluate oricând.
              </p>
            </div>

            <div className="load-in lg:pl-6" style={{ '--delay': '0.35s' } as React.CSSProperties}>
              <PriceCalculator compact />
            </div>
          </Container>
        </section>

        <TrustBar />

        {/* SERVICII */}
        <section className="py-16 md:py-24">
          <Container>
            <SectionHeading
              eyebrow="Servicii"
              title="Spălătorie profesională de covoare în Brașov"
              lead={
                <>
                  AquaCarpet curăță temeinic covoarele din locuințe și spații comerciale – living, dormitor sau birou – cu
                  echipamente și detergenți potriviți pentru fiecare tip de fibră, ca să păstreze culorile și textura.
                </>
              }
            />
            <ServicesGrid />
            <p className="mt-8 text-center">
              <Link href="/servicii" className="font-semibold text-aqua-700 underline underline-offset-4">
                Vezi toate serviciile
              </Link>
            </p>
          </Container>
        </section>

        <Steps />

        <WorkshopGallery />

        {/* PREȚ */}
        <section className="py-16 md:py-24">
          <Container>
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div data-reveal="left">
                <Eyebrow>Preț transparent</Eyebrow>
                <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-navy-950">
                  Preț spălare covoare Brașov: {BUSINESS.pricePerSqm} RON/mp, totul inclus
                </h2>
                <p className="mt-4 text-lg text-ink-soft">
                  Plătești doar suprafața reală a covoarelor. Comanda este de {MIN_ORDER_LABEL}: pentru suprafețe
                  mai mici de {MIN_ORDER_SQM_LABEL} se facturează {BUSINESS.minOrder} lei.
                </p>
                <div className="mt-6">
                  <PriceFacts />
                </div>
                <Link
                  href="/preturi"
                  className="tap mt-8 inline-flex h-12 items-center rounded-xl bg-navy-950 px-6 font-semibold text-white hover:bg-navy-800"
                >
                  Exemple de calcul și detalii
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { size: '2 × 3 m', sqm: 6 },
                  { size: '2 × 2,5 m', sqm: 5 },
                  { size: '3 × 4 m', sqm: 12 },
                  { size: '2,5 × 3,5 m', sqm: 8.75 },
                ].map((c, i) => {
                  const raw = c.sqm * BUSINESS.pricePerSqm;
                  const total = Math.max(raw, BUSINESS.minOrder);
                  return (
                    <div key={c.size} data-reveal="zoom" style={{ '--i': i } as React.CSSProperties} className="rounded-3xl bg-slate-50 p-6 ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg">
                      <p className="text-sm font-medium text-ink-soft">Covor {c.size}</p>
                      <p className="mt-1 text-sm text-ink-soft">{c.sqm.toLocaleString('ro-RO')} mp</p>
                      <p className="mt-3 text-3xl font-extrabold text-navy-950">
                        {total.toLocaleString('ro-RO', { maximumFractionDigits: 2 })} <span className="text-lg">RON</span>
                      </p>
                      {raw < BUSINESS.minOrder && <p className="mt-1 text-xs text-ink-soft">{MIN_ORDER_LABEL}</p>}
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </section>

        <div className="bg-slate-50">
          <Coverage />
        </div>

        {/* FAQ */}
        <section className="py-16 md:py-24">
          <Container className="max-w-4xl">
            <SectionHeading eyebrow="Întrebări frecvente" title="Ce ne întreabă clienții" />
            <FaqList items={FAQS.slice(0, 5)} />
            <p className="mt-8 text-center">
              <Link href="/faq" className="font-semibold text-aqua-700 underline underline-offset-4">
                Toate întrebările frecvente
              </Link>
            </p>
          </Container>
        </section>

        {/* CONTACT */}
        <section className="pb-4 md:pb-8" id="contact">
          <Container>
            <SectionHeading eyebrow="Contact" title="Suntem la un telefon distanță" />
            <ContactBlock />
          </Container>
        </section>

        <CtaBanner />
      </main>

      <Footer />
    </>
  );
}
