import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Spalatorie Covoare Brasov | AquaCarpet | 0759 158 914',
  description: 'Contacteaza AquaCarpet - spalatorie profesionala covoare in Brasov. Telefon 0759 158 914, program Luni-Sambata 09:00-18:00. Comanda online sau viziteaza-ne.',
};

export default function Contact() {
  const contactInfo = [
    {
      icon: '📞',
      titlu: 'Telefon',
      detalii: ['0759 158 914', 'Luni - Sambata: 09:00 - 18:00'],
      link: 'tel:0759158914'
    },
    {
      icon: '📧',
      titlu: 'Email',
      detalii: ['contact@aquacarpet.ro', 'Raspuns in 24 ore'],
      link: 'mailto:contact@aquacarpet.ro'
    },
    {
      icon: '📍',
      titlu: 'Adresa',
      detalii: ['Brasov, Romania', 'Zona centrala'],
      link: null
    },
    {
      icon: '🕐',
      titlu: 'Program',
      detalii: ['Luni - Vineri: 09:00 - 18:00', 'Sambata: 09:00 - 18:00', 'Duminica: Inchis'],
      link: null
    }
  ];

  const serviciiRapide = [
    'Spalare profesionala covoare',
    'Transport gratuit la domiciliu',
    'Uscare controlata profesional',
    'Tratamente ecologice',
    'Livrare in 24-48 ore',
    'Garantie satisfactie'
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
                Contacteaza-ne
              </h1>
              <p className="text-xl mb-8 text-light-aqua max-w-3xl mx-auto">
                Suntem aici sa te ajutam cu orice intrebare sau programare. 
                Alege cea mai convenabila metoda de contact.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Informatii Contact
              </h2>
              <p className="text-secondary text-lg">
                Mai multe modalitati de a ne contacta
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-4 text-aqua">{item.icon}</div>
                  <h3 className="text-lg font-semibold mb-2 text-primary">{item.titlu}</h3>
                  {item.detalii.map((detaliu, idx) => (
                    <div key={idx} className="text-secondary mb-1">
                      {item.link ? (
                        <a 
                          href={item.link} 
                          className="text-aqua hover:text-light-aqua transition-colors"
                        >
                          {detaliu}
                        </a>
                      ) : (
                        detaliu
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Harta si Formular */}
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Harta */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-primary">Locatie</h2>
                <div className="bg-card border border-custom rounded-lg p-8 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🗺️</div>
                    <p className="text-secondary mb-4">
                      Harta interactiva cu locatia noastra
                    </p>
                    <p className="text-muted text-sm">
                      Brasov, zona centrala
                    </p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-light-aqua/10 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">Cum ajungi la noi?</h4>
                  <ul className="text-sm text-secondary space-y-1">
                    <li>• Autobuz: Linii 1, 2, 5 - statia Centru</li>
                    <li>• Masina: Parcare disponibila in zona</li>
                    <li>• Pietonal: La 5 minute de centrul vechi</li>
                  </ul>
                </div>
              </div>

              {/* Servicii Rapide */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-primary">Servicii Rapide</h2>
                <div className="bg-card border border-custom rounded-lg p-8">
                  <h3 className="text-lg font-semibold mb-4 text-primary">De ce sa ne alegi?</h3>
                  <ul className="space-y-3 mb-6">
                    {serviciiRapide.map((serviciu, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-aqua mr-3 mt-1">✓</span>
                        <span className="text-secondary">{serviciu}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="bg-navy text-white rounded-lg p-6">
                    <h4 className="font-semibold mb-3">Comanda rapida</h4>
                    <p className="text-light-aqua mb-4">
                      Economiseste timp si comanda online. Primesti confirmare imediata!
                    </p>
                    <a 
                      href="/comanda" 
                      className="w-full bg-aqua hover:bg-light-aqua text-white font-semibold py-3 px-6 rounded-lg transition-colors inline-block text-center"
                    >
                      Comanda Online
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 hero-gradient text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ai nevoie de ajutor imediat?
            </h2>
            <p className="text-xl mb-8 text-light-aqua">
              Suna-ne acum pentru o consultatie gratuita sau pentru a programa o ridicare!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:0759158914" 
                className="bg-white text-navy font-semibold py-3 px-8 rounded-lg hover:bg-light-aqua transition-colors inline-block"
              >
                📞 Suna Acum
              </a>
              <a 
                href="/comanda" 
                className="border-2 border-white hover:bg-white hover:text-navy text-white font-semibold py-3 px-8 rounded-lg transition-colors inline-block"
              >
                Comanda Online
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
