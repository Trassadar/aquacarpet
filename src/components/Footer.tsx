import Link from 'next/link';
import Image from 'next/image';
import { BUSINESS } from '@/lib/business';
import { SERVICES } from '@/lib/services';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo și descriere */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="bg-white rounded-md px-2 py-1 mr-3 inline-flex">
                <Image
                  src="/logo.webp"
                  alt="AquaCarpet"
                  width={68}
                  height={32}
                  className="h-8 w-auto"
                />
              </span>
              <span className="text-2xl font-bold text-light-aqua">AquaCarpet</span>
            </div>
            <p className="text-white/90 mb-4">
              Spălătorie profesională de covoare în Brașov, cu ridicare și livrare gratuită la
              domiciliu. {BUSINESS.pricePerSqm} RON/mp, comandă minimă {BUSINESS.minOrder} RON.
            </p>
            <h2 className="text-lg font-semibold mb-2 text-light-aqua">Servicii</h2>
            <ul className="space-y-1">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={`/servicii/${s.slug}`} className="text-white/90 hover:text-white underline-offset-2 hover:underline">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Linkuri rapide */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-light-aqua">Linkuri rapide</h2>
            <ul className="space-y-2">
              <li><Link href="/servicii" className="text-white/90 hover:text-white hover:underline">Servicii</Link></li>
              <li><Link href="/preturi" className="text-white/90 hover:text-white hover:underline">Prețuri</Link></li>
              <li><Link href="/comanda" className="text-white/90 hover:text-white hover:underline">Comandă online</Link></li>
              <li><Link href="/faq" className="text-white/90 hover:text-white hover:underline">Întrebări frecvente</Link></li>
              <li><Link href="/contact" className="text-white/90 hover:text-white hover:underline">Contact</Link></li>
            </ul>
          </div>

          {/* Contact (NAP) */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-light-aqua">Contact</h2>
            <address className="not-italic space-y-2 text-white/90">
              <p className="font-semibold text-white">{BUSINESS.name}</p>
              <p>
                📞{' '}
                <a href={BUSINESS.phoneHref} className="hover:text-white hover:underline">
                  {BUSINESS.phoneDisplay}
                </a>
              </p>
              <p>
                📧{' '}
                <a href={`mailto:${BUSINESS.email}`} className="hover:text-white hover:underline">
                  {BUSINESS.email}
                </a>
              </p>
              <p>📍 {BUSINESS.addressLine}</p>
            </address>
            <ul className="space-y-1 mt-3 text-white/90">
              {BUSINESS.hours.map((h) => (
                <li key={h.label}>
                  🕐 {h.label}: {h.value}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/90">
          <p>&copy; {currentYear} AquaCarpet. Toate drepturile rezervate.</p>
          <div className="mt-4 space-y-2 text-sm">
            <p>
              <a
                href="https://anpc.ro/ce-este-sal/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white underline"
              >
                ANPC – Soluționarea Alternativă a Litigiilor
              </a>
            </p>
            <p>
              <a
                href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=ro"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white underline"
              >
                Platforma Europeană pentru Soluționarea Online a Litigiilor
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
