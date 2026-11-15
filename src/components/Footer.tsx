import Image from 'next/image';
import Link from 'next/link';
import { BUSINESS, CONSUMER_LINKS, LEGAL_PAGES } from '@/lib/business';
import { SERVICES } from '@/lib/services';
import { MailIcon, MapPinIcon, PhoneIcon } from './Icons';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="inline-flex rounded-2xl bg-white px-4 py-3">
              <Image src="/logo.webp" alt="AquaCarpet" width={110} height={52} className="h-12 w-auto" />
            </span>
            <p className="mt-5 text-white/80">
              Spălătorie profesională de covoare în Brașov. Ridicare și livrare gratuite, {BUSINESS.pricePerSqm} RON/mp, gata
              în 24–48 de ore.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-aqua-300">Servicii</h2>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={`/servicii/${s.slug}`} className="text-white/85 hover:text-white">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-aqua-300">Informații</h2>
            <ul className="mt-4 space-y-2.5">
              <li><Link href="/preturi" className="text-white/85 hover:text-white">Prețuri și calculator</Link></li>
              <li><Link href="/comanda" className="text-white/85 hover:text-white">Comandă online</Link></li>
              <li><Link href="/faq" className="text-white/85 hover:text-white">Întrebări frecvente</Link></li>
              <li><Link href="/contact" className="text-white/85 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-aqua-300">Contact</h2>
            <address className="mt-4 not-italic space-y-3 text-white/85">
              <p className="font-semibold text-white">{BUSINESS.name}</p>
              <p className="flex items-center gap-2">
                <PhoneIcon className="h-4 w-4 text-aqua-300" />
                <a href={BUSINESS.phoneHref} className="hover:text-white">{BUSINESS.phoneDisplay}</a>
              </p>
              <p className="flex items-center gap-2">
                <MailIcon className="h-4 w-4 text-aqua-300" />
                <a href={`mailto:${BUSINESS.email}`} className="hover:text-white">{BUSINESS.email}</a>
              </p>
              <p className="flex items-center gap-2">
                <MapPinIcon className="h-4 w-4 text-aqua-300" />
                {BUSINESS.addressLine}
              </p>
            </address>
            <ul className="mt-4 space-y-1 text-sm text-white/80">
              {BUSINESS.hours.map((h) => (
                <li key={h.label}>{h.label}: {h.value}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/15 pt-6 text-sm text-white/75 md:flex-row md:items-center md:justify-between">
          <p>&copy; {year} {BUSINESS.name}. Toate drepturile rezervate.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {LEGAL_PAGES.map((page) => (
              <Link key={page.path} href={page.path} className="underline hover:text-white">
                {page.label}
              </Link>
            ))}
            <a href={CONSUMER_LINKS.anpcSal} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
              ANPC – SAL
            </a>
            <a href={CONSUMER_LINKS.sol} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
              Platforma SOL (UE)
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
