import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ContactBlock, Container, Coverage, CtaButtons, PageHero } from '@/components/sections';
import { BUSINESS } from '@/lib/business';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: `Contact Spălătorie Covoare Brașov – ${BUSINESS.phoneDisplay}`,
  description: `Contactează AquaCarpet, spălătorie de covoare în Brașov (Șoseaua Cristianului). Telefon ${BUSINESS.phoneDisplay}, program L–V 08:00–18:00, S 09:00–13:00. Comandă online sau pe WhatsApp.`,
  path: '/contact',
});

export default function Contact() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          crumbs={[{ name: 'Contact', path: '/contact' }]}
          title="Contact – spălătorie covoare Brașov"
          lead="Sună-ne, scrie-ne pe WhatsApp sau comandă online. Îți răspundem rapid și stabilim împreună ridicarea covoarelor."
        >
          <CtaButtons className="mt-8" />
        </PageHero>

        <section className="py-14 md:py-20">
          <Container>
            <h2 className="sr-only">Date de contact și hartă</h2>
            <ContactBlock />
          </Container>
        </section>

        <div className="bg-slate-50">
          <Coverage />
        </div>
      </main>
      <Footer />
    </>
  );
}
