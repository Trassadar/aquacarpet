import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { BUSINESS, BUSINESS_ID } from '@/lib/business';
import { SERVICES, getService } from '@/lib/services';
import { absoluteUrl, pageMetadata } from '@/lib/seo';

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return pageMetadata({ title: s.metaTitle, description: s.metaDescription, path: `/servicii/${s.slug}` });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const path = `/servicii/${s.slug}`;
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: s.name,
    description: s.metaDescription,
    url: absoluteUrl(path),
    serviceType: s.name,
    provider: { '@id': BUSINESS_ID },
    areaServed: { '@type': 'City', name: 'Brașov' },
  };
  const others = SERVICES.filter((o) => o.slug !== s.slug);

  return (
    <div className="min-h-screen">
      <JsonLd data={serviceJsonLd} />
      <Header />

      <main>
        <section className="hero-gradient text-white pt-24 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Breadcrumbs items={[{ name: 'Servicii', path: '/servicii' }, { name: s.shortName, path }]} />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{s.h1}</h1>
            <p className="text-xl mb-8 text-white max-w-3xl mx-auto">{s.intro}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={BUSINESS.phoneHref} className="bg-white text-navy font-semibold py-3 px-8 rounded-lg hover:bg-light-aqua transition-colors">
                📞 Sună la {BUSINESS.phoneDisplay}
              </a>
              <a href="/comanda" className="bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                🖥️ Comandă online
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-card">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Ce include serviciul</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-12">
              {s.bullets.map((b) => (
                <li key={b} className="flex items-start text-secondary">
                  <span className="text-aqua mr-3" aria-hidden="true">✓</span>
                  {b}
                </li>
              ))}
            </ul>

            {s.sections.map((sec) => (
              <div key={sec.heading} className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">{sec.heading}</h2>
                {sec.paragraphs.map((p) => (
                  <p key={p} className="text-secondary text-lg mb-4">{p}</p>
                ))}
              </div>
            ))}

            <div className="bg-light-aqua/10 rounded-lg p-6">
              <h2 className="text-xl font-bold text-primary mb-2">Prețuri și întrebări</h2>
              <p className="text-secondary">
                Vezi <a href="/preturi" className="text-aqua underline">prețurile și exemplele de calcul</a> sau{' '}
                <a href="/faq" className="text-aqua underline">întrebările frecvente</a>. Program: L–V 08:00–18:00, S 09:00–13:00.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-card border-t border-custom">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-primary mb-4">Alte servicii</h2>
            <ul className="space-y-2">
              {others.map((o) => (
                <li key={o.slug}>
                  <a href={`/servicii/${o.slug}`} className="text-aqua underline">{o.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
