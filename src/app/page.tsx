import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="hero-gradient text-white pt-24 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Spalatorie Profesionala Covoare in Brasov
                </h1>
                <p className="text-xl mb-8 text-light-aqua">
                  Curatenie impecabila pentru covoarele tale. Serviciu rapid si profesional la preturi competitive.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="#comanda" 
                    className="bg-aqua hover:bg-light-aqua text-white font-semibold py-3 px-8 rounded-lg transition-colors text-center"
                  >
                    Comanda Ridicare
                  </a>
                  <a 
                    href="#preturi" 
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
                  <p className="text-light-aqua">Comanda minima 78 RON</p>
                </div>
              </div>
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

        {/* Cum Functioneaza */}
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Cum functioneaza?
              </h2>
              <p className="text-secondary text-lg">
                Proces simplu in 4 pasi
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-aqua text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold">
                  1
                </div>
                <h3 className="font-semibold mb-2 text-primary">Comanda Online</h3>
                <p className="text-secondary">Completezi formularul de comanda</p>
              </div>
              
              <div className="text-center">
                <div className="bg-aqua text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold">
                  2
                </div>
                <h3 className="font-semibold mb-2 text-primary">Ridicare Gratuita</h3>
                <p className="text-secondary">Venim sa ridicam covoarele</p>
              </div>
              
              <div className="text-center">
                <div className="bg-aqua text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold">
                  3
                </div>
                <h3 className="font-semibold mb-2 text-primary">Spalare Profesionala</h3>
                <p className="text-secondary">Curatam cu echipamente moderne</p>
              </div>
              
              <div className="text-center">
                <div className="bg-aqua text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold">
                  4
                </div>
                <h3 className="font-semibold mb-2 text-primary">Livrare la Domiciliu</h3>
                <p className="text-secondary">Returnam covoarele curate</p>
              </div>
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
