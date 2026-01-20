import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Servicii Spalatorie Covoare Brasov | AquaCarpet',
  description: 'Servicii profesionale de spalare covoare in Brasov. Spalare, igienizare, uscare, transport gratuit. Calitate garantata la preturi competitive.',
};

export default function Servicii() {
  const servicii = [
    {
      icon: '/images/aquacarpet-logo.png',
      titlu: 'Spalare Profesionala',
      descriere: 'Spalare profunda cu echipamente moderne si detergenti profesionali pentru a elimina complet murdaria, petele si alergenii.',
      detalii: ['Eliminare pete dificile', 'Curatare profunda a fibrelor', 'Reinnoirea culorilor', 'Eliminare mirosuri neplacute']
    },
    {
      icon: '🦠',
      titlu: 'Igienizare si Dezinfectie',
      descriere: 'Tratamente speciale pentru eliminarea bacteriilor, acarienilor si a altor microorganisme daunatoare.',
      detalii: ['Eliminare acarieni', 'Dezinfectare bacteriologica', 'Tratament anti-alergic', 'Sigur pentru copii si animale']
    },
    {
      icon: '💨',
      titlu: 'Uscare Profesionala',
      descriere: 'Uscare controlata in spatii specializate pentru a preveni mucegaiul si a mentine forma covoarelor.',
      detalii: ['Uscare la temperatura controlata', 'Prevenire mucegai', 'Mentinere forma si dimensiuni', 'Timp de uscare optim']
    },
    {
      icon: '🚚',
      titlu: 'Ridicare si Returnare',
      descriere: 'Serviciu de transport gratuit la domiciliu in Brasov si zone limitrofe pentru confort maxim.',
      detalii: ['Transport gratuit', 'Program flexibil', 'Ambalare profesionala', 'Asigurare transport']
    }
  ];

  const beneficii = [
    {
      icon: '✨',
      titlu: 'Calitate Premium',
      descriere: 'Folosim doar echipamente si produse de calitate superioara pentru rezultate exceptionale.'
    },
    {
      icon: '⏱️',
      titlu: 'Timp Rapid',
      descriere: 'Livrare in 24-48 ore pentru serviciul standard, 72 ore pentru tratamente speciale.'
    },
    {
      icon: '🌿',
      titlu: 'Ecologic',
      descriere: 'Produse biodegradabile, sigure pentru mediu, copii si animale de companie.'
    },
    {
      icon: '💰',
      titlu: 'Pret Corect',
      descriere: 'Transparenta totala in preturi, fara costuri ascunse. Calitate la pret corect.'
    },
    {
      icon: '🔧',
      titlu: 'Echipamente Moderne',
      descriere: 'Tehnologie de ultima generatie pentru spalare si uscare profesionala.'
    },
    {
      icon: '🏆',
      titlu: 'Garantie',
      descriere: 'Satisfactie garantata. Daca nu esti multumit, refacem serviciul gratuit.'
    }
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
                Servicii Profesionale Spalatorie Covoare
              </h1>
              <p className="text-xl mb-8 text-light-aqua max-w-3xl mx-auto">
                Oferim servicii complete de curatare si intretinere pentru covoarele tale, 
                folosind echipamente moderne si produse de calitate superioara.
              </p>
              <a 
                href="/comanda" 
                className="bg-aqua hover:bg-light-aqua text-white font-semibold py-3 px-8 rounded-lg transition-colors inline-block"
              >
                Comanda Serviciu
              </a>
            </div>
          </div>
        </section>

        {/* Servicii Principale */}
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Serviciile Noastre
              </h2>
              <p className="text-secondary text-lg">
                Solutii complete pentru curatarea covoarelor tale
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {servicii.map((serviciu, index) => (
                <div key={index} className="bg-card border border-custom rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    {serviciu.icon.includes('images') ? (
                      <img 
                        src={serviciu.icon} 
                        alt={serviciu.titlu}
                        className="w-12 h-12 object-contain"
                      />
                    ) : (
                      <div className="text-4xl">{serviciu.icon}</div>
                    )}
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 text-primary">{serviciu.titlu}</h3>
                      <p className="text-secondary mb-4">{serviciu.descriere}</p>
                      <ul className="space-y-1">
                        {serviciu.detalii.map((detaliu, idx) => (
                          <li key={idx} className="text-sm text-muted flex items-center">
                            <span className="text-aqua mr-2">✓</span>
                            {detaliu}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* De Ce Noi */}
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                De ce sa ne alegi?
              </h2>
              <p className="text-secondary text-lg">
                Motivele pentru care clientii ne aleg in mod constant
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {beneficii.map((beneficiu, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-4 text-aqua">{beneficiu.icon}</div>
                  <h3 className="text-lg font-semibold mb-2 text-primary">{beneficiu.titlu}</h3>
                  <p className="text-secondary">{beneficiu.descriere}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 hero-gradient text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Gata pentru covoare impecabile?
            </h2>
            <p className="text-xl mb-8 text-light-aqua">
              Comanda acum serviciul nostru profesional si beneficiaza de transport gratuit!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/comanda" 
                className="bg-white text-navy font-semibold py-3 px-8 rounded-lg hover:bg-light-aqua transition-colors inline-block"
              >
                Comanda Acum
              </a>
              <a 
                href="/preturi" 
                className="border-2 border-white hover:bg-white hover:text-navy text-white font-semibold py-3 px-8 rounded-lg transition-colors inline-block"
              >
                Vezi Preturi
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
