import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { BUSINESS, MAPS_EMBED_URL, MAPS_LINK_URL } from '@/lib/business';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Contact Spălătorie Covoare Brașov – 0757 219 695',
  description:
    'Contactează AquaCarpet, spălătorie de covoare în Brașov (Șoseaua Cristianului). Telefon 0757 219 695, program L–V 08:00–18:00, S 09:00–13:00. Comandă online sau pe WhatsApp.',
  path: '/contact',
});

const serviciiRapide = [
  'Spălare profesională covoare',
  'Transport gratuit la domiciliu',
  'Uscare controlată profesional',
  'Tratamente ecologice',
  'Livrare în 24–48 de ore',
  'Garanția satisfacției',
];

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <section className="hero-gradient text-white pt-24 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Breadcrumbs items={[{ name: 'Contact', path: '/contact' }]} />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact – spălătorie covoare Brașov</h1>
              <p className="text-xl mb-8 text-white max-w-3xl mx-auto">
                Suntem aici să te ajutăm cu orice întrebare sau programare. Alege cea mai convenabilă metodă de contact.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Informații de contact</h2>
              <p className="text-secondary text-lg">Mai multe modalități de a ne contacta</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl mb-4" aria-hidden="true">📞</div>
                <h3 className="text-lg font-semibold mb-2 text-primary">Telefon</h3>
                <p><a href={BUSINESS.phoneHref} className="text-aqua font-semibold underline">{BUSINESS.phoneDisplay}</a></p>
                <p className="text-secondary mt-1">
                  <a href={BUSINESS.whatsappOrderHref} target="_blank" rel="noopener noreferrer" className="text-aqua underline">
                    Scrie-ne pe WhatsApp
                  </a>
                </p>
              </div>
              <div>
                <div className="text-4xl mb-4" aria-hidden="true">📧</div>
                <h3 className="text-lg font-semibold mb-2 text-primary">Email</h3>
                <p><a href={`mailto:${BUSINESS.email}`} className="text-aqua underline">{BUSINESS.email}</a></p>
                <p className="text-secondary mt-1">Răspuns în 24 de ore</p>
              </div>
              <div>
                <div className="text-4xl mb-4" aria-hidden="true">📍</div>
                <h3 className="text-lg font-semibold mb-2 text-primary">Adresă</h3>
                <address className="not-italic text-secondary">
                  {BUSINESS.name}
                  <br />
                  {BUSINESS.addressLine}
                </address>
              </div>
              <div>
                <div className="text-4xl mb-4" aria-hidden="true">🕐</div>
                <h3 className="text-lg font-semibold mb-2 text-primary">Program</h3>
                <ul className="text-secondary space-y-1">
                  {BUSINESS.hours.map((h) => (
                    <li key={h.label}>{h.label}: {h.value}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-primary">Locație</h2>
                <div className="border border-custom rounded-lg overflow-hidden h-96">
                  <iframe
                    src={MAPS_EMBED_URL}
                    title={`Hartă: AquaCarpet, ${BUSINESS.addressLine}`}
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
                <p className="mt-4 text-secondary">
                  📍 {BUSINESS.addressLine} –{' '}
                  <a href={MAPS_LINK_URL} target="_blank" rel="noopener noreferrer" className="text-aqua underline">
                    deschide în Google Maps
                  </a>
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6 text-primary">De ce să ne alegi?</h2>
                <div className="bg-card border border-custom rounded-lg p-8">
                  <ul className="space-y-3 mb-6">
                    {serviciiRapide.map((s) => (
                      <li key={s} className="flex items-start">
                        <span className="text-aqua mr-3 mt-1" aria-hidden="true">✓</span>
                        <span className="text-secondary">{s}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-navy text-white rounded-lg p-6">
                    <h3 className="font-semibold mb-3">Cum dorești să comanzi?</h3>
                    <p className="text-white/90 mb-4">Alege metoda preferată pentru a comanda serviciile noastre.</p>
                    <div className="space-y-3">
                      <a href="/comanda" className="w-full bg-aqua-dark hover:bg-white hover:text-navy text-white font-semibold py-3 px-6 rounded-lg transition-colors inline-block text-center">
                        🖥️ Comandă online
                      </a>
                      <a href={BUSINESS.phoneHref} className="w-full bg-white text-navy hover:bg-light-aqua font-semibold py-3 px-6 rounded-lg transition-colors inline-block text-center">
                        📞 Comandă telefonic
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 hero-gradient text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ai nevoie de ajutor imediat?</h2>
            <p className="text-xl mb-8 text-white">Sună-ne acum pentru o consultație gratuită sau pentru a programa o ridicare!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={BUSINESS.phoneHref} className="bg-white text-navy font-semibold py-3 px-8 rounded-lg hover:bg-light-aqua transition-colors inline-block">
                📞 Comandă telefonic
              </a>
              <a href="/comanda" className="bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors inline-block">
                🖥️ Comandă online
              </a>
              <a href={BUSINESS.whatsappOrderHref} target="_blank" rel="noopener noreferrer" className="bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors inline-block">
                💬 WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
