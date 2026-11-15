import Link from 'next/link';
import { BUSINESS } from '@/lib/business';
import { PhoneIcon, WhatsAppIcon } from './Icons';

/** Bară de acțiuni fixă (mobil) + butoane flotante (desktop). */
export default function StickyCta() {
  return (
    <>
      <div className="md:hidden fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 backdrop-blur px-3 py-2.5 shadow-[0_-6px_20px_rgba(5,0,64,0.08)]">
        <div className="grid grid-cols-[auto_auto_1fr] gap-2">
          <a
            href={BUSINESS.phoneHref}
            className="flex h-12 items-center justify-center gap-2 rounded-xl border-2 border-navy-950 px-4 font-semibold text-navy-950"
            aria-label={`Sună la ${BUSINESS.phoneDisplay}`}
          >
            <PhoneIcon className="h-5 w-5" />
            Sună
          </a>
          <a
            href={BUSINESS.whatsappOrderHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 items-center justify-center gap-2 rounded-xl bg-whatsapp px-4 font-semibold text-navy-950"
            aria-label="Scrie-ne pe WhatsApp"
          >
            <WhatsAppIcon className="h-5 w-5" />
            WhatsApp
          </a>
          <Link
            href="/comanda"
            className="flex h-12 items-center justify-center rounded-xl bg-aqua-500 px-3 text-center font-bold text-navy-950"
          >
            Comandă
          </Link>
        </div>
      </div>

      <div className="hidden md:flex fixed bottom-6 right-6 z-50 flex-col gap-3">
        <a
          href={BUSINESS.whatsappOrderHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Scrie-ne pe WhatsApp"
          title="WhatsApp"
          className="grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-navy-950 shadow-lg transition hover:scale-110"
        >
          <WhatsAppIcon className="h-7 w-7" />
        </a>
        <a
          href={BUSINESS.phoneHref}
          aria-label={`Sună la ${BUSINESS.phoneDisplay}`}
          title="Sună acum"
          className="grid h-14 w-14 place-items-center rounded-full bg-navy-950 text-white shadow-lg ring-2 ring-white transition hover:scale-110"
        >
          <PhoneIcon className="h-6 w-6" />
        </a>
      </div>
    </>
  );
}
