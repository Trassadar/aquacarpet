import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Preturi Spalatorie Covoare Brasov | 13 RON/mp | AquaCarpet',
  description: 'Preturi competitive pentru spalatorie covoare in Brasov. 13 RON/mp, comanda minima 78 RON. Servicii profesionale, transport gratuit. Calcul transparent si fara costuri ascunse.',
};

export default function Preturi() {
  const exempleCalcul = [
    {
      descriere: 'Covor living (2m x 3m)',
      suprafata: 6,
      pret: 78,
      detalii: '6 mp x 13 RON = 78 RON (comanda minima atinsa)'
    },
    {
      descriere: 'Set 2 covoare mici (1.5m x 2m fiecare)',
      suprafata: 6,
      pret: 78,
      detalii: '3 mp + 3 mp = 6 mp x 13 RON = 78 RON (comanda minima)'
    },
    {
      descriere: 'Covor dormitor (2m x 2.5m) + covor baie (1m x 1.5m)',
      suprafata: 6.5,
      pret: 85,
      detalii: '5 mp + 1.5 mp = 6.5 mp x 13 RON = 84.5 RON ≈ 85 RON'
    },
    {
      descriere: 'Covor mare (3m x 4m)',
      suprafata: 12,
      pret: 156,
      detalii: '12 mp x 13 RON = 156 RON'
    }
  ];

  const serviciiIncluse = [
    'Ridicare gratuita la domiciliu',
    'Spalare profesionala cu echipamente moderne',
    'Detergenti profesionali de calitate',
    'Uscare controlata in spatii specializate',
    'Livrare gratuita la domiciliu',
    'Ambalare profesionala la returnare',
    'Inspectie calitate finala'
  ];

  const serviciiNuIncluse = [
    'Tratamente speciale (anti-alergic, anti-purici)',
    'Reparatii covoare (cusaturi, refacere margini)',
    'Curatare pete foarte dificile (cerneala, vopsea)',
    'Spalare covoare de matase sau persane vechi',
    'Serviciu expres (livrare in aceeasi zi)',
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Preturi Transparente si Corecte
              </h1>
              <p className="text-xl mb-8 text-light-aqua max-w-3xl mx-auto">
                Calitate garantata la preturi competitive. Fara costuri ascunse, 
                transparenta totala in calculul preturilor.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-md mx-auto">
                <div className="text-5xl font-bold mb-2">13 RON</div>
                <div className="text-xl mb-2">pe metru patrat</div>
                <div className="text-light-aqua">Comanda minima: 78 RON</div>
              </div>
            </div>
          </div>
        </section>

        {/* Pret Standard */}
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Cum calculam pretul?
              </h2>
              <p className="text-secondary text-lg">
                Simplu si transparent - platiti doar pentru suprafata reala curatata
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-card border border-custom rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">Pret Standard</h3>
                <div className="text-4xl font-bold text-aqua mb-4">13 RON/mp</div>
                <p className="text-secondary mb-6">
                  Pretul include servicii complete de spalare, uscare si transport.
                </p>
                <div className="bg-light-aqua/10 rounded-lg p-4 mb-6">
                  <div className="font-semibold text-primary mb-2">Comanda minima:</div>
                  <div className="text-2xl font-bold text-aqua">78 RON</div>
                  <div className="text-sm text-muted">(echivalentul a 6 mp)</div>
                </div>
                <a 
                  href="/comanda" 
                  className="w-full bg-aqua hover:bg-light-aqua text-white font-semibold py-3 px-6 rounded-lg transition-colors inline-block text-center"
                >
                  Comanda Acum
                </a>
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
                Exemple de Calcul
              </h2>
              <p className="text-secondary text-lg">
                Vezi exact cum se calculeaza pretul pentru diferite tipuri de covoare
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {exempleCalcul.map((exemplu, index) => (
                <div key={index} className="bg-card border border-custom rounded-lg p-6">
                  <h4 className="font-semibold text-primary mb-2">{exemplu.descriere}</h4>
                  <div className="grid grid-cols-2 gap-4 mb-3">
                    <div>
                      <span className="text-sm text-muted">Suprafata:</span>
                      <div className="font-semibold">{exemplu.suprafata} mp</div>
                    </div>
                    <div>
                      <span className="text-sm text-muted">Pret final:</span>
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

        {/* Servicii Suplimentare */}
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Servicii Suplimentare
              </h2>
              <p className="text-secondary text-lg">
                Optiuni extra pentru nevoi speciale
              </p>
            </div>
            
            <div className="bg-card border border-custom rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4 text-primary">Ce NU este inclus in pretul standard?</h3>
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
                  <strong>Nota:</strong> Pentru aceste servicii suplimentare, va rugam sa ne contactati 
                  pentru o oferta personalizata in functie de necesitatile dumneavoastra.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 hero-gradient text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Gata pentru o oferta personalizata?
            </h2>
            <p className="text-xl mb-8 text-light-aqua">
              Contacteaza-ne pentru un calcul exact sau comanda online direct!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/comanda" 
                className="bg-white text-navy font-semibold py-3 px-8 rounded-lg hover:bg-light-aqua transition-colors inline-block"
              >
                Comanda Online
              </a>
              <a 
                href="/contact" 
                className="border-2 border-white hover:bg-white hover:text-navy text-white font-semibold py-3 px-8 rounded-lg transition-colors inline-block"
              >
                Contacteaza-ne
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
