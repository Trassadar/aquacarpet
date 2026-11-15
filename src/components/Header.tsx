'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { BUSINESS } from '@/lib/business';

const navItems = [
  { href: '/servicii', label: 'Servicii' },
  { href: '/preturi', label: 'Prețuri' },
  { href: '/comanda', label: 'Comandă' },
  { href: '/contact', label: 'Contact' },
  { href: '/faq', label: 'Întrebări frecvente' },
];

function PhoneIcon({ className }: { className: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
    </svg>
  );
}

function WhatsAppIcon({ className }: { className: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-custom z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Navigare principală">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex-shrink-0" aria-label="AquaCarpet – pagina principală">
            <Image
              src="/logo.webp"
              alt="AquaCarpet – spălătorie covoare Brașov"
              width={68}
              height={32}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-secondary hover:text-aqua transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center space-x-2 border-l border-custom pl-6">
              <a
                href={BUSINESS.phoneHref}
                className="text-secondary hover:text-aqua p-1.5 rounded transition-colors"
                title="Sună acum"
                aria-label={`Sună acum la ${BUSINESS.phoneDisplay}`}
              >
                <PhoneIcon className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-aqua p-1.5 rounded transition-colors"
                title="WhatsApp"
                aria-label="Trimite mesaj pe WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-secondary hover:text-aqua p-2"
              aria-label={isMenuOpen ? 'Închide meniul' : 'Deschide meniul'}
              aria-expanded={isMenuOpen}
              aria-controls="meniu-mobil"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div id="meniu-mobil" className="md:hidden bg-card border-t border-custom">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-secondary hover:text-aqua font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="px-3 py-2 flex space-x-3">
                <a
                  href={BUSINESS.phoneHref}
                  className="bg-aqua-dark hover:bg-navy text-white p-2 rounded-lg transition-colors"
                  aria-label={`Sună acum la ${BUSINESS.phoneDisplay}`}
                >
                  <PhoneIcon className="w-5 h-5" />
                </a>
                <a
                  href={BUSINESS.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-700 hover:bg-green-800 text-white p-2 rounded-lg transition-colors"
                  aria-label="Trimite mesaj pe WhatsApp"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
