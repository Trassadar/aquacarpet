import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PriceCalculator from '@/components/PriceCalculator';
import { Container, CtaBanner, PageHero, PriceFacts, SectionHeading } from '@/components/sections';
import { CheckIcon } from '@/components/Icons';
import { BUSINESS, MIN_ORDER_LABEL, MIN_ORDER_SQM_LABEL } from '@/lib/business';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: `Prețuri Spălătorie Covoare Brașov – ${BUSINESS.pricePerSqm} RON/mp`,
  description: `Prețuri spălare covoare în Brașov: ${BUSINESS.pricePerSqm} RON/mp, comandă ${MIN_ORDER_LABEL}, ridicare și livrare gratuite. Calculator de preț, exemple de calcul și fără costuri ascunse.`,
  path: '/preturi',
});

const fmt = (n: number) => n.toLocaleString('ro-RO', { maximumFractionDigits: 2 });

const exemple = [
  { descriere: 'Covor living (2 m × 3 m)', sqm: 6, calc: '2 × 3 = 6 mp' },
  { descriere: 'Set 2 covoare mici (1,5 m × 2 m)', sqm: 6, calc: '3 mp + 3 mp = 6 mp' },
  { descriere: 'Covor dormitor (2 m × 2,5 m) + covor baie (1 m × 1,5 m)', sqm: 6.5, calc: '5 mp + 1,5 mp = 6,5 mp' },
  { descriere: 'Covor mare (3 m × 4 m)', sqm: 12, calc: '3 × 4 = 12 mp' },
];

const incluse = [
  'Ridicare gratuită la domiciliu',
  'Spălare profesională cu echipamente moderne',
  'Detergenți profesionali, biodegradabili',
  'Uscare controlată în spații specializate',
  'Inspecție finală de calitate',
  'Ambalare profesională la returnare',
  'Livrare gratuită la domiciliu',
];

const extra = [
  'Tratamente speciale (anti-alergic, anti-purici)',
  'Reparații covoare (cusături, refacere margini)',
  'Curățare pete foarte dificile (cerneală, vopsea)',
  'Spălare covoare de mătase sau persane vechi',
  'Serviciu expres (livrare în aceeași zi)',
  'Dezinfectare cu ozon sau aburi',
];

export default function Preturi() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          crumbs={[{ name: 'Prețuri', path: '/preturi' }]}
          title={`Prețuri spălătorie covoare Brașov – ${BUSINESS.pricePerSqm} RON/mp`}
          lead={`Simplu și transparent: ${BUSINESS.pricePerSqm} RON pe metru pătrat, cu ridicare și livrare incluse. Comandă ${MIN_ORDER_LABEL}.`}
        />

        <section className="py-14 md:py-20">
          <Container className="grid gap-12 lg:grid-cols-2 items-start">
            <div>
              <SectionHeading center={false} eyebrow="Cum calculăm" title="Plătești doar suprafața reală" lead="Măsurăm fiecare covor și înmulțim suprafața cu prețul pe metru pătrat. Fără taxe de transport și fără costuri ascunse." />
              <PriceFacts />
              <div className="mt-8 rounded-3xl bg-navy-950 p-6 text-white">
                <p className="text-sm text-white/80">Preț standard</p>
                <p className="text-5xl font-black">{BUSINESS.pricePerSqm} <span className="text-2xl text-aqua-300">RON/mp</span></p>
                <p className="mt-2 text-white/85">Comandă {MIN_ORDER_LABEL}. Pentru suprafețe sub {MIN_ORDER_SQM_LABEL} se facturează {BUSINESS.minOrder} lei.</p>
              </div>
            </div>
            <div className="lg:sticky lg:top-28">
              <PriceCalculator />
            </div>
          </Container>
        </section>

        <section className="py-14 md:py-20 bg-slate-50">
          <Container>
            <SectionHeading eyebrow="Exemple" title="Exemple de calcul" lead="Vezi cum se calculează prețul pentru câteva covoare obișnuite." />
            <ul className="grid gap-5 md:grid-cols-2">
              {exemple.map((e, i) => {
                const raw = e.sqm * BUSINESS.pricePerSqm;
                const total = Math.max(raw, BUSINESS.minOrder);
                return (
                  <li key={e.descriere} data-reveal style={{ '--i': i } as React.CSSProperties} className="rounded-3xl bg-white p-6 ring-1 ring-slate-200">
                    <h3 className="font-bold text-navy-950">{e.descriere}</h3>
                    <div className="mt-4 flex items-end justify-between gap-4">
                      <p className="text-sm text-ink-soft">
                        {e.calc}
                        <br />
                        {fmt(e.sqm)} mp × {BUSINESS.pricePerSqm} RON = {fmt(raw)} RON
                        {raw < BUSINESS.minOrder && (
                          <>
                            <br />
                            se aplică minimul de {MIN_ORDER_SQM_LABEL} ({BUSINESS.minOrder} lei)
                          </>
                        )}
                      </p>
                      <p className="text-3xl font-extrabold text-navy-950 whitespace-nowrap">{fmt(total)} RON</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Container>
        </section>

        <section className="py-14 md:py-20">
          <Container className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl bg-aqua-50 p-7">
              <h2 className="text-2xl font-extrabold text-navy-950">Ce este inclus în preț</h2>
              <ul className="mt-5 space-y-3">
                {incluse.map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <CheckIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-aqua-700" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-slate-50 p-7 ring-1 ring-slate-200">
              <h2 className="text-2xl font-extrabold text-navy-950">Servicii suplimentare (la cerere)</h2>
              <p className="mt-2 text-ink-soft">Nu sunt incluse în prețul standard. Contactează-ne pentru o ofertă personalizată.</p>
              <ul className="mt-5 space-y-3">
                {extra.map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-navy-950" aria-hidden="true" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </section>

        <CtaBanner title="Vrei un preț exact?" text="Sună-ne sau trimite-ne pe WhatsApp dimensiunile covoarelor – îți spunem imediat cât costă." />
      </main>
      <Footer />
    </>
  );
}
