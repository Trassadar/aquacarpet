import Header from '@/components/Header';
import Footer from '@/components/Footer';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'AquaCarpet',
  url: 'https://www.aquacarpet.ro',
  logo: 'https://www.aquacarpet.ro/logo.png',
  telephone: '0757 219 695',
  priceRange: '13 RON/mp',
  areaServed: 'Brasov',
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="hero-gradient text-white pt-24 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Spalatorie Covoare Brasov - Spalare Profesionala cu Ridicare si Livrare
                </h1>
                <p className="text-xl mb-8 text-light-aqua">
                  Oferim spalare profesionala a covoarelor in Brasov: ridicam covoarele direct de acasa, le spalam si le uscam in conditii controlate, apoi ti le livram inapoi curate, in cel mai scurt timp posibil.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="tel:0757219695" 
                    className="bg-white text-navy font-semibold py-3 px-8 rounded-lg hover:bg-light-aqua transition-colors text-center"
                  >
                    📞 Comandă Telefon
                  </a>
                  <a 
                    href="/comanda" 
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors text-center"
                  >
                    🖥️ Comandă Online
                  </a>
                  <a 
                    href="/preturi" 
                    className="border-2 border-white hover:bg-white hover:text-navy text-white font-semibold py-3 px-8 rounded-lg transition-colors text-center"
                  >
                    Vezi Preturi
                  </a>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                  <img 
                    src="/images/aquacarpet-logo.png" 
                    alt="AquaCarpet Logo" 
                    className="h-16 w-auto mb-4 mx-auto"
                  />
                  <h3 className="text-2xl font-bold mb-2">13 RON/mp</h3>
                  <p className="text-light-aqua">Comanda minima 91 RON</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sectiune SEO: Introducere serviciu */}
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
                Spalatorie profesionala de covoare in Brasov
              </h2>
              <p className="text-secondary text-lg mb-4">
                AquaCarpet este o spalatorie profesionala de covoare in Brasov, dedicata curatarii temeinice a covoarelor din locuinte si spatii comerciale. Fie ca este vorba despre covoare de living, dormitor sau birou, spalarea covoarelor se face cu echipamente si detergenti potriviti pentru fiecare tip de fibra, astfel incat culorile si textura sa fie pastrate.
              </p>
              <p className="text-secondary text-lg mb-4">
                Spre deosebire de curatarea facuta acasa, curatarea covoarelor la AquaCarpet inseamna spalare in profunzime, care indeparteaza praful, alergenii si murdaria acumulata in timp, nu doar petele vizibile de la suprafata. Rezultatul este un covor curat cu adevarat.
              </p>
              <p className="text-secondary text-lg">
                Pentru cei din Brasov care isi doresc o spalatorie profesionala covoare de incredere, oferim un serviciu clar: suni sau completezi formularul de <a href="/comanda" className="text-aqua underline hover:no-underline">comanda online</a>, iar noi ne ocupam de restul, de la ridicare pana la livrare. Poti vedea toate detaliile despre ce includem in <a href="/servicii" className="text-aqua underline hover:no-underline">sectiunea de servicii</a>.
              </p>
            </div>
          </div>
        </section>

        {/* Beneficii Section */}
        <section id="servicii" className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                De ce sa ne alegi?
              </h2>
              <p className="text-secondary text-lg">
                Servicii de calitate superioara pentru covoarele tale
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card border border-custom rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4 text-aqua">🌿</div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Produse Ecologice</h3>
                <p className="text-secondary">
                  Folosim doar detergenti biodegradabili, siguri pentru copii si animale de companie
                </p>
              </div>
              
              <div className="bg-card border border-custom rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4 text-aqua">🚚</div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Transport Gratuit</h3>
                <p className="text-secondary">
                  Ridicare si livrare gratuita la domiciliu in Brasov si zone limitrofe
                </p>
              </div>
              
              <div className="bg-card border border-custom rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4 text-aqua">⚡</div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Serviciu Rapid</h3>
                <p className="text-secondary">
                  Livrare in 24-48 ore pentru spalare standard, 72 ore pentru tratamente speciale
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sectiune SEO: Procesul de spalare */}
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Cum spalam covoarele
              </h2>
              <p className="text-secondary text-lg max-w-3xl mx-auto">
                Procesul de spalare a covoarelor este simplu pentru tine, dar riguros din partea noastra. Fiecare etapa este gandita astfel incat covorul sa ajunga inapoi acasa curat, uscat corespunzator si in aceeasi stare buna in care a plecat.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card border border-custom rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary">Ridicare</h3>
                <p className="text-secondary">
                  Ridicam covoarele direct de acasa, gratuit, in Brasov si zonele limitrofe.
                </p>
              </div>
              <div className="bg-card border border-custom rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary">Spalare profesionala</h3>
                <p className="text-secondary">
                  Curatam covoarele cu echipamente moderne si detergenti biodegradabili, potriviti pentru fiecare tip de covor.
                </p>
              </div>
              <div className="bg-card border border-custom rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary">Igienizare</h3>
                <p className="text-secondary">
                  Aplicam tratamente de igienizare care ajuta la eliminarea bacteriilor si a acarienilor.
                </p>
              </div>
              <div className="bg-card border border-custom rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary">Uscare controlata</h3>
                <p className="text-secondary">
                  Covoarele sunt uscate in spatii special amenajate, la temperatura controlata, pentru a preveni mucegaiul si a pastra forma initiala.
                </p>
              </div>
              <div className="bg-card border border-custom rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary">Verificare finala</h3>
                <p className="text-secondary">
                  Facem o inspectie de calitate inainte de livrare, ca sa fim siguri ca totul este in ordine.
                </p>
              </div>
              <div className="bg-card border border-custom rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary">Livrare</h3>
                <p className="text-secondary">
                  Aducem covoarele curate inapoi acasa, in 24-48 ore pentru spalarea standard.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cum Functioneaza */}
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Comandă Telefon sau Online
              </h2>
              <p className="text-secondary text-lg">
                Sună sau completează formularul
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-aqua text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold">
                  1
                </div>
                <h3 className="font-semibold mb-2 text-primary">Comandă Telefon sau Online</h3>
                <p className="text-secondary">Sună sau completează formularul</p>
              </div>
              
              <div className="text-center">
                <div className="bg-aqua text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold">
                  2
                </div>
                <h3 className="font-semibold mb-2 text-primary">Ridicare Gratuită</h3>
                <p className="text-secondary">Venim să ridicăm covoarele</p>
              </div>
              
              <div className="text-center">
                <div className="bg-aqua text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold">
                  3
                </div>
                <h3 className="font-semibold mb-2 text-primary">Spălare Profesională</h3>
                <p className="text-secondary">Curățăm cu echipamente moderne</p>
              </div>
              
              <div className="text-center">
                <div className="bg-aqua text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold">
                  4
                </div>
                <h3 className="font-semibold mb-2 text-primary">Livrare la Domiciliu</h3>
                <p className="text-secondary">Returnăm covoarele curate</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sectiune SEO: Ridicare si livrare */}
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
                Ridicare si livrare covoare in Brasov
              </h2>
              <p className="text-secondary text-lg mb-4">
                Unul dintre motivele pentru care clientii aleg AquaCarpet este simplitatea serviciului de ridicare si livrare covoare la domiciliu in Brasov. Nu este nevoie sa cari covoare grele pana la masina sau sa iti faci timp special pentru transport.
              </p>
              <p className="text-secondary text-lg mb-4">
                Alegi telefonic sau prin formularul de comanda online o data si un interval orar care ti se potrivesc, iar noi venim sa ridicam covoarele direct de acasa. Dupa spalare si uscare, le aducem inapoi tot la tine acasa, gata de utilizare.
              </p>
              <p className="text-secondary text-lg">
                Acest tip de serviciu economiseste timp si este util mai ales pentru familiile ocupate sau pentru cei care nu au posibilitatea sa transporte covoare mari. Poti programa o ridicare completand <a href="/comanda" className="text-aqua underline hover:no-underline">formularul de comanda</a>.
              </p>
            </div>
          </div>
        </section>

        {/* Sectiune SEO: Pret */}
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Pret spalare covoare Brasov
              </h2>
              <p className="text-secondary text-lg mb-4">
                Pretul pentru spalare covoare Brasov este simplu si transparent: 13 RON/mp, cu o comanda minima de 91 RON. Nu exista costuri ascunse - platesti doar pentru suprafata reala a covoarelor spalate.
              </p>
              <p className="text-secondary text-lg">
                Daca vrei sa vezi exemple de calcul si ce este inclus in pret, poti consulta <a href="/preturi" className="text-aqua underline hover:no-underline">pagina noastra de preturi</a>. Pentru alte intrebari despre servicii si preturi, poti consulta si <a href="/faq" className="text-aqua underline hover:no-underline">intrebarile frecvente</a>.
              </p>
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
              Comanda acum si primesti 10% reducere la prima spalare!
            </p>
            <a 
              href="#comanda" 
              className="bg-white text-navy font-semibold py-4 px-8 rounded-lg hover:bg-light-aqua transition-colors inline-block"
            >
              Comanda Acum
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
