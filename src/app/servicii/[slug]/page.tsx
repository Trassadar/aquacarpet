import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import PriceCalculator from '@/components/PriceCalculator';
import { Container, CtaBanner, CtaButtons, PageHero } from '@/components/sections';
import { ArrowRightIcon, CheckIcon } from '@/components/Icons';
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
    areaServed: BUSINESS.localities.map((name) => ({ '@type': 'City', name })),
  };
  const others = SERVICES.filter((o) => o.slug !== s.slug);

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <Header />
      <main>
        <PageHero crumbs={[{ name: 'Servicii', path: '/servicii' }, { name: s.shortName, path }]} title={s.h1} lead={s.intro}>
          <CtaButtons className="mt-8" />
        </PageHero>

        <section className="py-14 md:py-20">
          <Container className="grid gap-12 lg:grid-cols-[1fr_380px]">
            <article>
              <div className="rounded-3xl bg-aqua-50 p-6 md:p-8">
                <h2 className="text-2xl font-extrabold text-navy-950">Ce include serviciul</h2>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="mt-0.5 grid h-6 w-6 flex-shrink-0 place-items-center rounded-full bg-aqua-500 text-navy-950">
                        <CheckIcon className="h-4 w-4" />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {s.sections.map((sec) => (
                <div key={sec.heading} className="mt-10">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-navy-950">{sec.heading}</h2>
                  {sec.paragraphs.map((p) => (
                    <p key={p} className="mt-4 text-lg leading-relaxed text-ink-soft">{p}</p>
                  ))}
                </div>
              ))}

              <div className="mt-12">
                <h2 className="text-xl font-bold text-navy-950">Alte servicii</h2>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {others.map((o) => (
                    <li key={o.slug}>
                      <Link
                        href={`/servicii/${o.slug}`}
                        className="group flex items-center justify-between rounded-2xl bg-slate-50 px-5 py-4 font-semibold text-navy-950 ring-1 ring-slate-200 hover:ring-aqua-400"
                      >
                        {o.name}
                        <ArrowRightIcon className="h-4 w-4 text-aqua-700 transition group-hover:translate-x-1" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            <aside className="lg:sticky lg:top-28 self-start">
              <PriceCalculator compact />
              <p className="mt-4 text-sm text-ink-soft">
                Vezi și <Link href="/preturi" className="font-semibold text-aqua-700 underline">prețurile</Link> și{' '}
                <Link href="/faq" className="font-semibold text-aqua-700 underline">întrebările frecvente</Link>.
              </p>
            </aside>
          </Container>
        </section>

        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
