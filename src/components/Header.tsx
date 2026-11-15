'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BUSINESS } from '@/lib/business';
import { CloseIcon, MenuIcon, PhoneIcon } from './Icons';

const navItems = [
  { href: '/servicii', label: 'Servicii' },
  { href: '/preturi', label: 'Prețuri' },
  { href: '/faq', label: 'Întrebări frecvente' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Navigare principală">
        <div className="flex h-16 md:h-20 items-center justify-between gap-4">
          <Link href="/" className="flex-shrink-0" aria-label="AquaCarpet – pagina principală">
            <Image
              src="/logo.webp"
              alt="AquaCarpet – spălătorie covoare Brașov"
              width={110}
              height={52}
              className="h-11 md:h-13 w-auto"
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={`rounded-full px-4 py-2 text-[15px] font-medium transition-colors ${
                  isActive(item.href) ? 'bg-aqua-50 text-aqua-800' : 'text-ink-soft hover:text-navy-950 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-2 font-semibold text-navy-950 hover:text-aqua-700 transition-colors"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full bg-aqua-50 text-aqua-700">
                <PhoneIcon className="h-4 w-4" />
              </span>
              {BUSINESS.phoneDisplay}
            </a>
            <Link
              href="/comanda"
              className="tap rounded-full bg-aqua-500 px-5 py-2.5 font-semibold text-navy-950 shadow-sm shadow-aqua-500/30 hover:bg-aqua-400"
            >
              Comandă ridicare
            </Link>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <a
              href={BUSINESS.phoneHref}
              className="tap grid h-11 w-11 place-items-center rounded-full bg-aqua-50 text-aqua-700"
              aria-label={`Sună la ${BUSINESS.phoneDisplay}`}
            >
              <PhoneIcon className="icon-tick h-5 w-5" />
            </a>
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="tap grid h-11 w-11 place-items-center rounded-full text-navy-950 hover:bg-slate-100"
              aria-label={open ? 'Închide meniul' : 'Deschide meniul'}
              aria-expanded={open}
              aria-controls="meniu-mobil"
            >
              {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
          {/* Tabletă: meniul complet apare doar de la lg; între md și lg folosim butonul de meniu */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="tap hidden md:grid lg:hidden h-11 w-11 place-items-center rounded-full text-navy-950 hover:bg-slate-100"
            aria-label={open ? 'Închide meniul' : 'Deschide meniul'}
            aria-expanded={open}
            aria-controls="meniu-mobil"
          >
            {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div id="meniu-mobil" className="lg:hidden border-t border-slate-200 py-3 animate-fade-up">
            <ul className="space-y-1">
              {[{ href: '/', label: 'Acasă' }, ...navItems, { href: '/comanda', label: 'Comandă online' }].map((item, i) => (
                <li key={item.href} className="animate-fade-up" style={{ animationDelay: `${i * 50}ms` }}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={pathname === item.href ? 'page' : undefined}
                    className="tap block rounded-xl px-4 py-3 text-base font-medium text-navy-950 hover:bg-aqua-50 active:bg-aqua-50"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
