import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { Container, CtaBanner, FaqList, PageHero } from '@/components/sections';
import { FAQS, faqJsonLd } from '@/lib/faq';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Întrebări Frecvente – Spălătorie Covoare Brașov',
  description:
    'Răspunsuri la cele mai frecvente întrebări despre spălarea covoarelor în Brașov: program, prețuri, transport gratuit, termen de livrare, plată și garanție.',
  path: '/faq',
});

export default function FAQ() {
  return (
    <>
      <JsonLd data={faqJsonLd()} />
      <Header />
      <main>
        <PageHero
          crumbs={[{ name: 'Întrebări frecvente', path: '/faq' }]}
          title="Întrebări frecvente despre spălarea covoarelor"
          lead="Tot ce trebuie să știi despre program, prețuri, transport, termene și plată."
        />
        <section className="py-14 md:py-20">
          <Container className="max-w-4xl">
            <FaqList items={FAQS} headingLevel="h2" />
          </Container>
        </section>
        <CtaBanner title="Nu ai găsit răspunsul?" text="Sună-ne sau scrie-ne pe WhatsApp – te ajutăm cu plăcere." />
      </main>
      <Footer />
    </>
  );
}
