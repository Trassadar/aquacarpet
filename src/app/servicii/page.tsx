import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { SERVICES } from '@/lib/services';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Servicii Spălătorie Covoare Brașov',
  description:
    'Servicii profesionale de spălare covoare în Brașov: spălare, igienizare, uscare controlată, ridicare și livrare gratuită. 13 RON/mp, livrare în 24–48 de ore.',
  path: '/servicii',
});

const beneficii = [
  { icon: '✨', titlu: 'Calitate', descriere: 'Folosim echipamente și produse de calitate superioară pentru rezultate foarte bune.' },
  { icon: '⏱️', titlu: 'Timp rapid', descriere: 'Livrare în 24–48 de ore pentru serviciul standard, 72 de ore pentru tratamente speciale.' },
  { icon: '🌿', titlu: 'Ecologic', descriere: 'Produse biodegradabile, sigure pentru mediu, copii și animale de companie.' },
  { icon: '💰', titlu: 'Preț corect', descriere: 'Transparență totală în prețuri, fără costuri ascunse.' },
  { icon: '🔧', titlu: 'Echipamente moderne', descriere: 'Tehnologie modernă pentru spălare și uscare profesională.' },
  { icon: '🏆', titlu: 'Garanție', descriere: 'Satisfacție garantată. Dacă nu ești mulțumit, refacem serviciul gratuit.' },
];

export default function Servicii() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <section className="hero-gradient text-white pt-24 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Breadcrumbs items={[{ name: 'Servicii', path: '/servicii' }]} />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Servicii profesionale de spălătorie covoare în Brașov</h1>
              <p className="text-xl mb-8 text-white max-w-3xl mx-auto">
                Oferim servicii complete de curățare și întreținere pentru covoarele tale, folosind echipamente moderne și produse de calitate superioară.
              </p>
              <a
                href="/comanda"
                className="bg-white text-navy hover:bg-light-aqua font-semibold py-3 px-8 rounded-lg transition-colors inline-block"
              >
                Comandă serviciul
              </a>
            </div>
          </div>
        </section>

        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Serviciile noastre</h2>
              <p className="text-secondary text-lg">Soluții complete pentru curățarea covoarelor tale</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {SERVICES.map((s) => (
                <div key={s.slug} className="bg-card border border-custom rounded-lg p-6 hover:shadow-lg transition-shadow flex flex-col">
                  <div className="text-4xl mb-4" aria-hidden="true">{s.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">
                    <a href={`/servicii/${s.slug}`} className="hover:underline">{s.name}</a>
                  </h3>
                  <p className="text-secondary mb-4">{s.summary}</p>
                  <ul className="space-y-1 mb-4">
                    {s.bullets.slice(0, 4).map((b) => (
                      <li key={b} className="text-sm text-secondary flex items-center">
                        <span className="text-aqua mr-2" aria-hidden="true">✓</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <a href={`/servicii/${s.slug}`} className="mt-auto text-aqua font-semibold underline">
                    Detalii despre {s.shortName.toLowerCase()}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">De ce să ne alegi?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {beneficii.map((b) => (
                <div key={b.titlu} className="text-center">
                  <div className="text-4xl mb-4" aria-hidden="true">{b.icon}</div>
                  <h3 className="text-lg font-semibold mb-2 text-primary">{b.titlu}</h3>
                  <p className="text-secondary">{b.descriere}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 hero-gradient text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Gata pentru covoare impecabile?</h2>
            <p className="text-xl mb-8 text-white">Comandă acum și beneficiezi de transport gratuit!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/comanda" className="bg-white text-navy font-semibold py-3 px-8 rounded-lg hover:bg-light-aqua transition-colors inline-block">
                Comandă acum
              </a>
              <a href="/preturi" className="border-2 border-white hover:bg-white hover:text-navy text-white font-semibold py-3 px-8 rounded-lg transition-colors inline-block">
                Vezi prețurile
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
