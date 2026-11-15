import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Container, CtaBanner, CtaButtons, PageHero, SectionHeading, ServicesGrid, Steps } from '@/components/sections';
import { ClockIcon, LeafIcon, ShieldIcon, SparklesIcon, TruckIcon, CheckIcon } from '@/components/Icons';
import { BUSINESS } from '@/lib/business';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Servicii Spălătorie Covoare Brașov',
  description: `Servicii profesionale de spălare covoare în Brașov: spălare, igienizare, uscare controlată, ridicare și livrare gratuită. ${BUSINESS.pricePerSqm} RON/mp, livrare în 24–48 de ore.`,
  path: '/servicii',
});

const beneficii = [
  { icon: SparklesIcon, titlu: 'Echipamente moderne', descriere: 'Spălare și uscare profesională, adaptată fiecărui tip de fibră.' },
  { icon: ClockIcon, titlu: 'Rapid', descriere: 'Livrare în 24–48 de ore pentru serviciul standard, 72 de ore pentru tratamente speciale.' },
  { icon: LeafIcon, titlu: 'Ecologic', descriere: 'Produse biodegradabile, sigure pentru copii și animale de companie.' },
  { icon: TruckIcon, titlu: 'Transport gratuit', descriere: `Ridicare și livrare gratuite în ${BUSINESS.localities.join(', ')}.` },
  { icon: CheckIcon, titlu: 'Preț corect', descriere: `${BUSINESS.pricePerSqm} RON/mp, fără costuri ascunse.` },
  { icon: ShieldIcon, titlu: 'Garanție', descriere: 'Dacă nu ești mulțumit, refacem spălarea gratuit.' },
];

export default function Servicii() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          crumbs={[{ name: 'Servicii', path: '/servicii' }]}
          title="Servicii profesionale de spălătorie covoare în Brașov"
          lead="Servicii complete de curățare și întreținere pentru covoarele tale, cu echipamente moderne și produse de calitate. Ridicarea și livrarea sunt gratuite."
        >
          <CtaButtons className="mt-8" />
        </PageHero>

        <section className="py-16 md:py-24">
          <Container>
            <SectionHeading eyebrow="Ce facem" title="Serviciile noastre" lead="Alege serviciul de care ai nevoie – sau sună-ne și te ajutăm să alegi." />
            <ServicesGrid />
          </Container>
        </section>

        <Steps />

        <section className="py-16 md:py-24">
          <Container>
            <SectionHeading eyebrow="Avantaje" title="De ce să ne alegi?" />
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {beneficii.map(({ icon: Icon, titlu, descriere }) => (
                <li key={titlu} className="reveal flex gap-4 rounded-3xl bg-slate-50 p-6 ring-1 ring-slate-200">
                  <span className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-2xl bg-white text-aqua-700 ring-1 ring-slate-200">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-navy-950">{titlu}</h3>
                    <p className="mt-1 text-ink-soft">{descriere}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
