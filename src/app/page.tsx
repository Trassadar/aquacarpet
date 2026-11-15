import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BUSINESS } from '@/lib/business';
import { SERVICES } from '@/lib/services';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Spălătorie Covoare Brașov | AquaCarpet – 13 RON/mp, Ridicare Gratuită',
  description:
    'Spălătorie profesională de covoare în Brașov. Ridicăm covoarele de acasă gratuit și le aducem curate în 24–48 de ore. 13 RON/mp, comandă minimă 91 RON. Sună la 0757 219 695.',
  path: '/',
  absoluteTitle: true,
});

const pasiProces = [
  { titlu: 'Ridicare', text: 'Ridicăm covoarele direct de acasă, gratuit, în Brașov și zonele limitrofe.' },
  { titlu: 'Spălare profesională', text: 'Curățăm covoarele cu echipamente moderne și detergenți biodegradabili, potriviți pentru fiecare tip de covor.' },
  { titlu: 'Igienizare', text: 'Aplicăm tratamente de igienizare care ajută la eliminarea bacteriilor și a acarienilor.' },
  { titlu: 'Uscare controlată', text: 'Covoarele sunt uscate în spații special amenajate, la temperatură controlată, pentru a preveni mucegaiul și a păstra forma inițială.' },
  { titlu: 'Verificare finală', text: 'Facem o inspecție de calitate înainte de livrare, ca să fim siguri că totul este în ordine.' },
  { titlu: 'Livrare', text: 'Aducem covoarele curate înapoi acasă, în 24–48 de ore pentru spălarea standard.' },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero */}
        <section className="hero-gradient text-white pt-24 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Spălătorie Covoare Brașov – Spălare Profesională cu Ridicare și Livrare
                </h1>
                <p className="text-xl mb-8 text-white">
                  Oferim spălare profesională a covoarelor în Brașov: ridicăm covoarele direct de acasă, le spălăm și le uscăm în condiții controlate, apoi ți le livrăm înapoi curate, în cel mai scurt timp posibil.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={BUSINESS.phoneHref}
                    className="bg-white text-navy font-semibold py-3 px-8 rounded-lg hover:bg-light-aqua transition-colors text-center"
                  >
                    📞 Comandă telefonic
                  </a>
                  <a
                    href="/comanda"
                    className="bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors text-center"
                  >
                    🖥️ Comandă online
                  </a>
                  <a
                    href="/preturi"
                    className="border-2 border-white hover:bg-white hover:text-navy text-white font-semibold py-3 px-8 rounded-lg transition-colors text-center"
                  >
                    Vezi prețurile
                  </a>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg p-8 text-navy">
                  <Image
                    src="/logo.webp"
                    alt="Logo AquaCarpet"
                    width={135}
                    height={64}
                    className="h-16 w-auto mb-4 mx-auto"
                    priority
                  />
                  <p className="text-2xl font-bold mb-2">{BUSINESS.pricePerSqm} RON/mp</p>
                  <p className="text-secondary">Comandă minimă {BUSINESS.minOrder} RON</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Introducere */}
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
                Spălătorie profesională de covoare în Brașov
              </h2>
              <p className="text-secondary text-lg mb-4">
                AquaCarpet este o spălătorie profesională de covoare în Brașov, dedicată curățării temeinice a covoarelor din locuințe și spații comerciale. Fie că este vorba despre covoare de living, dormitor sau birou, spălarea se face cu echipamente și detergenți potriviți pentru fiecare tip de fibră, astfel încât culorile și textura să fie păstrate.
              </p>
              <p className="text-secondary text-lg">
                Pentru cei din Brașov care își doresc o spălătorie de covoare de încredere, oferim un serviciu clar: suni sau completezi formularul de <a href="/comanda" className="text-aqua underline hover:no-underline">comandă online</a>, iar noi ne ocupăm de restul, de la ridicare până la livrare. Vezi toate detaliile despre ce includem în <Link href="/servicii" className="text-aqua underline hover:no-underline">secțiunea de servicii</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Servicii */}
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Serviciile noastre</h2>
              <p className="text-secondary text-lg">Tot ce ai nevoie pentru covoare curate, fără să ieși din casă</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {SERVICES.map((s) => (
                <a
                  key={s.slug}
                  href={`/servicii/${s.slug}`}
                  className="block bg-card border border-custom rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="text-4xl mb-4" aria-hidden="true">{s.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">{s.name}</h3>
                  <p className="text-secondary mb-3">{s.summary}</p>
                  <span className="text-aqua font-semibold underline">Află mai multe</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* De ce noi */}
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">De ce să ne alegi?</h2>
              <p className="text-secondary text-lg">Servicii de calitate superioară pentru covoarele tale</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card border border-custom rounded-lg p-6 text-center">
                <div className="text-4xl mb-4" aria-hidden="true">🌿</div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Produse ecologice</h3>
                <p className="text-secondary">Folosim doar detergenți biodegradabili, siguri pentru copii și animale de companie.</p>
              </div>
              <div className="bg-card border border-custom rounded-lg p-6 text-center">
                <div className="text-4xl mb-4" aria-hidden="true">🚚</div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Transport gratuit</h3>
                <p className="text-secondary">Ridicare și livrare gratuită la domiciliu în Brașov și zonele limitrofe.</p>
              </div>
              <div className="bg-card border border-custom rounded-lg p-6 text-center">
                <div className="text-4xl mb-4" aria-hidden="true">⚡</div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Serviciu rapid</h3>
                <p className="text-secondary">Livrare în 24–48 de ore pentru spălarea standard, 72 de ore pentru tratamente speciale.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Proces */}
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Cum spălăm covoarele</h2>
              <p className="text-secondary text-lg max-w-3xl mx-auto">
                Procesul de spălare este simplu pentru tine, dar riguros din partea noastră. Fiecare etapă este gândită astfel încât covorul să ajungă înapoi acasă curat, uscat corespunzător și în aceeași stare bună în care a plecat.
              </p>
            </div>
            <ol className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pasiProces.map((p) => (
                <li key={p.titlu} className="bg-card border border-custom rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2 text-primary">{p.titlu}</h3>
                  <p className="text-secondary">{p.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Cum comanzi */}
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Comandă telefonic sau online</h2>
              <p className="text-secondary text-lg">Sună la <a href={BUSINESS.phoneHref} className="text-aqua underline">{BUSINESS.phoneDisplay}</a> sau completează formularul</p>
            </div>
            <ol className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                ['Comanzi', 'Telefonic, pe WhatsApp sau online'],
                ['Ridicare gratuită', 'Venim să ridicăm covoarele'],
                ['Spălare profesională', 'Curățăm cu echipamente moderne'],
                ['Livrare la domiciliu', 'Returnăm covoarele curate'],
              ].map(([t, d], i) => (
                <li key={t} className="text-center">
                  <div className="bg-aqua-dark text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold" aria-hidden="true">
                    {i + 1}
                  </div>
                  <h3 className="font-semibold mb-2 text-primary">{t}</h3>
                  <p className="text-secondary">{d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Ridicare și livrare */}
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
                Ridicare și livrare covoare în Brașov
              </h2>
              <p className="text-secondary text-lg mb-4">
                Unul dintre motivele pentru care clienții aleg AquaCarpet este simplitatea serviciului de ridicare și livrare a covoarelor la domiciliu în Brașov. Nu este nevoie să cari covoare grele până la mașină sau să îți faci timp special pentru transport.
              </p>
              <p className="text-secondary text-lg mb-4">
                Alegi telefonic sau prin formularul de comandă online o dată și un interval orar care ți se potrivesc, iar noi venim să ridicăm covoarele direct de acasă. După spălare și uscare, le aducem înapoi tot la tine acasă, gata de utilizare.
              </p>
              <p className="text-secondary text-lg">
                Serviciul economisește timp și este util mai ales pentru familiile ocupate sau pentru cei care nu au posibilitatea să transporte covoare mari. Detalii pe pagina <Link href="/servicii/ridicare-livrare-covoare-brasov" className="text-aqua underline hover:no-underline">ridicare și livrare covoare</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Preț */}
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Preț spălare covoare Brașov</h2>
              <p className="text-secondary text-lg mb-4">
                Prețul pentru spălarea covoarelor în Brașov este simplu și transparent: {BUSINESS.pricePerSqm} RON/mp, cu o comandă minimă de {BUSINESS.minOrder} RON. Pentru comenzile sub {BUSINESS.minOrderSqm} mp se aplică valoarea minimă a comenzii.
              </p>
              <p className="text-secondary text-lg">
                Exemple de calcul și ce este inclus în preț găsești pe <a href="/preturi" className="text-aqua underline hover:no-underline">pagina de prețuri</a>. Pentru alte întrebări, vezi și <a href="/faq" className="text-aqua underline hover:no-underline">întrebările frecvente</a>.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 hero-gradient text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Gata pentru covoare impecabile?</h2>
            <p className="text-xl mb-8 text-white">Comandă online pe site și primești 10% reducere la spălare!</p>
            <a
              href="/comanda"
              className="bg-white text-navy font-semibold py-4 px-8 rounded-lg hover:bg-light-aqua transition-colors inline-block"
            >
              Comandă acum
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
