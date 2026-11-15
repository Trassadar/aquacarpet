import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { BUSINESS } from '@/lib/business';
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
    <div className="min-h-screen">
      <JsonLd data={faqJsonLd()} />
      <Header />

      <main>
        <section className="hero-gradient text-white pt-24 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Breadcrumbs items={[{ name: 'Întrebări frecvente', path: '/faq' }]} />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Întrebări frecvente despre spălarea covoarelor</h1>
              <p className="text-xl mb-8 text-white max-w-3xl mx-auto">
                Găsește răspunsuri la cele mai comune întrebări despre serviciile noastre de spălătorie profesională.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-card">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-4">
              {FAQS.map((faq) => (
                <details key={faq.q} className="group bg-card border border-custom rounded-lg overflow-hidden">
                  <summary className="cursor-pointer list-none w-full px-6 py-4 flex justify-between items-center hover:bg-light-aqua/5 transition-colors">
                    <h2 className="font-semibold text-primary text-base">{faq.q}</h2>
                    <svg
                      className="w-5 h-5 text-aqua transform transition-transform group-open:rotate-180 flex-shrink-0 ml-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 py-4 bg-light-aqua/5 border-t border-custom">
                    <p className="text-secondary leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>

            <div className="mt-16 text-center bg-navy text-white rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Nu ai găsit răspunsul căutat?</h2>
              <p className="text-white/90 mb-6">Suntem aici să te ajutăm! Contactează-ne pentru orice întrebare.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={BUSINESS.phoneHref} className="bg-white text-navy font-semibold py-3 px-8 rounded-lg hover:bg-light-aqua transition-colors inline-block">
                  📞 Sună acum
                </a>
                <a href="/contact" className="border-2 border-white hover:bg-white hover:text-navy text-white font-semibold py-3 px-8 rounded-lg transition-colors inline-block">
                  Trimite mesaj
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
