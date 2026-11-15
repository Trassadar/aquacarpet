import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { BUSINESS } from '@/lib/business';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Prețuri Spălătorie Covoare Brașov – 13 RON/mp',
  description:
    'Prețuri spălare covoare în Brașov: 13 RON/mp, comandă minimă 91 RON, ridicare și livrare gratuite. Exemple de calcul, ce este inclus și fără costuri ascunse.',
  path: '/preturi',
});

export default function Preturi() {
  const exempleCalcul = [
    {
      descriere: 'Covor living (2 m × 3 m)',
      suprafata: 6,
      pret: 91,
      detalii: '6 mp × 13 RON = 78 RON (se aplică comanda minimă: 91 RON)'
    },
    {
      descriere: 'Set 2 covoare mici (1,5 m × 2 m fiecare)',
      suprafata: 6,
      pret: 91,
      detalii: '3 mp + 3 mp = 6 mp × 13 RON = 78 RON (se aplică comanda minimă: 91 RON)'
    },
    {
      descriere: 'Covor dormitor (2 m × 2,5 m) + covor baie (1 m × 1,5 m)',
      suprafata: 6.5,
      pret: 91,
      detalii: '6,5 mp × 13 RON = 84,5 RON (se aplică comanda minimă: 91 RON)'
    },
    {
      descriere: 'Covor mare (3 m × 4 m)',
      suprafata: 12,
      pret: 156,
      detalii: '12 mp × 13 RON = 156 RON'
    }
  ];

  const serviciiIncluse = [
    'Ridicare gratuită la domiciliu',
    'Spălare profesională cu echipamente moderne',
    'Detergenți profesionali de calitate',
    'Uscare controlată în spații specializate',
    'Livrare gratuită la domiciliu',
    'Ambalare profesională la returnare',
    'Inspecție finală de calitate'
  ];

  const serviciiNuIncluse = [
    'Tratamente speciale (anti-alergic, anti-purici)',
    'Reparații covoare (cusături, refacere margini)',
    'Curățare pete foarte dificile (cerneală, vopsea)',
    'Spălare covoare de mătase sau persane vechi',
    'Serviciu expres (livrare în aceeași zi)',
    'Dezinfectare cu ozon sau aburi'
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="hero-gradient text-white pt-24 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Breadcrumbs items={[{ name: 'Prețuri', path: '/preturi' }]} />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Prețuri spălătorie covoare Brașov – transparente și corecte
              </h1>
              <p className="text-xl mb-8 text-white max-w-3xl mx-auto">
                Calitate garantată la prețuri competitive. Fără costuri ascunse,
                transparență totală în calculul prețurilor.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-md mx-auto">
                <div className="text-5xl font-bold mb-2">13 RON</div>
                <div className="text-xl mb-2">pe metru pătrat</div>
                <div className="text-white">Comandă minimă: 91 RON (7 mp)</div>
              </div>
            </div>
          </div>
        </section>

        {/* Pret Standard */}
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Cum calculăm prețul?
              </h2>
              <p className="text-secondary text-lg">
                Simplu și transparent – plătești doar pentru suprafața reală curățată
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-card border border-custom rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">Preț standard</h3>
                <div className="text-4xl font-bold text-aqua mb-4">13 RON/mp</div>
                <p className="text-secondary mb-6">
                  Prețul include servicii complete de spălare, uscare și transport.
                </p>
                <div className="bg-light-aqua/10 rounded-lg p-4 mb-6">
                  <div className="font-semibold text-primary mb-2">Comandă minimă:</div>
                  <div className="text-2xl font-bold text-aqua">91 RON</div>
                  <div className="text-sm text-muted">(echivalentul a 7 mp)</div>
                </div>
                <div className="space-y-3">
                  <a 
                    href={BUSINESS.phoneHref} 
                    className="w-full bg-white text-navy border-2 border-navy hover:bg-light-aqua font-semibold py-3 px-6 rounded-lg transition-colors inline-block text-center"
                  >
                    📞 Comandă telefonic
                  </a>
                  <a 
                    href="/comanda" 
                    className="w-full bg-aqua-dark hover:bg-navy text-white font-semibold py-3 px-6 rounded-lg transition-colors inline-block text-center"
                  >
                    🖥️ Comandă online
                  </a>
                </div>
              </div>
              
              <div className="bg-card border border-custom rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">Ce este inclus?</h3>
                <ul className="space-y-3">
                  {serviciiIncluse.map((serviciu, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-aqua mr-3 mt-1">✓</span>
                      <span className="text-secondary">{serviciu}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Exemple Calcul */}
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Exemple de calcul
              </h2>
              <p className="text-secondary text-lg">
                Vezi exact cum se calculează prețul pentru diferite covoare
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {exempleCalcul.map((exemplu, index) => (
                <div key={index} className="bg-card border border-custom rounded-lg p-6">
                  <h3 className="font-semibold text-primary mb-2">{exemplu.descriere}</h3>
                  <div className="grid grid-cols-2 gap-4 mb-3">
                    <div>
                      <span className="text-sm text-muted">Suprafață:</span>
                      <div className="font-semibold">{exemplu.suprafata} mp</div>
                    </div>
                    <div>
                      <span className="text-sm text-muted">Preț final:</span>
                      <div className="font-semibold text-aqua">{exemplu.pret} RON</div>
                    </div>
                  </div>
                  <div className="text-sm text-muted bg-light-aqua/10 rounded p-2">
                    {exemplu.detalii}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Servicii suplimentare */}
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Servicii suplimentare
              </h2>
              <p className="text-secondary text-lg">
                Opțiuni extra pentru nevoi speciale
              </p>
            </div>
            
            <div className="bg-card border border-custom rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4 text-primary">Ce NU este inclus în prețul standard?</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {serviciiNuIncluse.map((serviciu, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-muted mr-3 mt-1">•</span>
                    <span className="text-secondary">{serviciu}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-light-aqua/10 rounded-lg">
                <p className="text-secondary">
                  <strong>Notă:</strong> Pentru aceste servicii suplimentare, contactează-ne
                  pentru o ofertă personalizată, în funcție de nevoile tale.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 hero-gradient text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Gata pentru o ofertă personalizată?
            </h2>
            <p className="text-xl mb-8 text-white">
              Contactează-ne pentru un calcul exact sau comandă online direct!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/comanda" 
                className="bg-white text-navy font-semibold py-3 px-8 rounded-lg hover:bg-light-aqua transition-colors inline-block"
              >
                Comandă online
              </a>
              <a 
                href="/contact" 
                className="border-2 border-white hover:bg-white hover:text-navy text-white font-semibold py-3 px-8 rounded-lg transition-colors inline-block"
              >
                Contactează-ne
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
