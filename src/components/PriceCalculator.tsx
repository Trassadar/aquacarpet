'use client';

import { useId, useMemo, useState } from 'react';
import Link from 'next/link';
import { BUSINESS, MIN_ORDER_SQM_LABEL, estimatePrice } from '@/lib/business';
import { CalculatorIcon, CloseIcon, WhatsAppIcon } from './Icons';

type Row = { id: number; l: string; w: string };

const fmt = (n: number) =>
  n.toLocaleString('ro-RO', { minimumFractionDigits: 0, maximumFractionDigits: 2 });

const parse = (v: string) => {
  const n = parseFloat(v.replace(',', '.'));
  return Number.isFinite(n) && n > 0 ? n : 0;
};

export default function PriceCalculator({ compact = false }: { compact?: boolean }) {
  const uid = useId();
  const [rows, setRows] = useState<Row[]>([{ id: 1, l: '2', w: '3' }]);
  const [nextId, setNextId] = useState(2);

  const { sqm, est } = useMemo(() => {
    const total = rows.reduce((acc, r) => acc + parse(r.l) * parse(r.w), 0);
    const rounded = Math.round(total * 100) / 100;
    return { sqm: rounded, est: estimatePrice(rounded) };
  }, [rows]);

  const update = (id: number, key: 'l' | 'w', value: string) =>
    setRows((rs) => rs.map((r) => (r.id === id ? { ...r, [key]: value } : r)));

  const addRow = () => {
    setRows((rs) => [...rs, { id: nextId, l: '', w: '' }]);
    setNextId((n) => n + 1);
  };

  const removeRow = (id: number) => setRows((rs) => (rs.length > 1 ? rs.filter((r) => r.id !== id) : rs));

  const waText = encodeURIComponent(
    `Salut AquaCarpet, vreau să comand spălarea a ${rows.length} ${rows.length === 1 ? 'covor' : 'covoare'} (aprox. ${fmt(sqm)} mp).`,
  );

  return (
    <div className="rounded-3xl bg-white p-5 sm:p-7 text-ink shadow-2xl shadow-navy-950/20 ring-1 ring-slate-200">
      <div className="flex items-center gap-3 mb-5">
        <span className="grid h-11 w-11 place-items-center rounded-2xl bg-aqua-50 text-aqua-700">
          <CalculatorIcon className="h-6 w-6" />
        </span>
        <div>
          <h2 className="text-lg font-bold text-navy-950 leading-tight">Calculează prețul</h2>
          <p className="text-sm text-ink-soft">{BUSINESS.pricePerSqm} RON/mp · ridicare și livrare gratuite</p>
        </div>
      </div>

      <ul className="space-y-3">
        {rows.map((r, i) => (
          <li key={r.id} className="grid grid-cols-[1fr_auto_1fr_auto] items-end gap-2">
            <div>
              <label htmlFor={`${uid}-l-${r.id}`} className="block text-xs font-medium text-ink-soft mb-1">
                Covor {i + 1} – lungime (m)
              </label>
              <input
                id={`${uid}-l-${r.id}`}
                inputMode="decimal"
                value={r.l}
                onChange={(e) => update(r.id, 'l', e.target.value)}
                placeholder="ex: 2"
                className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-base focus:border-aqua-500 focus:outline-none focus:ring-2 focus:ring-aqua-200"
              />
            </div>
            <span className="pb-3 text-ink-soft" aria-hidden="true">×</span>
            <div>
              <label htmlFor={`${uid}-w-${r.id}`} className="block text-xs font-medium text-ink-soft mb-1">
                lățime (m)
              </label>
              <input
                id={`${uid}-w-${r.id}`}
                inputMode="decimal"
                value={r.w}
                onChange={(e) => update(r.id, 'w', e.target.value)}
                placeholder="ex: 3"
                className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-base focus:border-aqua-500 focus:outline-none focus:ring-2 focus:ring-aqua-200"
              />
            </div>
            <button
              type="button"
              onClick={() => removeRow(r.id)}
              disabled={rows.length === 1}
              className="mb-1 grid h-10 w-10 place-items-center rounded-full text-ink-soft hover:bg-slate-100 disabled:opacity-30"
              aria-label={`Elimină covorul ${i + 1}`}
            >
              <CloseIcon className="h-4 w-4" />
            </button>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={addRow}
        className="mt-3 text-sm font-semibold text-aqua-700 hover:text-aqua-800 underline underline-offset-4"
      >
        + Adaugă încă un covor
      </button>

      <div className="mt-5 rounded-2xl bg-navy-950 p-4 text-white" aria-live="polite">
        <div className="flex items-baseline justify-between">
          <span className="text-sm text-white/80">Suprafață totală</span>
          <span className="font-semibold">{fmt(sqm)} mp</span>
        </div>
        <div className="mt-1 flex items-baseline justify-between">
          <span className="text-sm text-white/80">Preț estimat</span>
          <span className="text-3xl font-extrabold text-aqua-300">{fmt(est.total)} RON</span>
        </div>
        {est.minApplied && (
          <p className="mt-2 text-xs text-white/80">
            {fmt(sqm)} mp × {BUSINESS.pricePerSqm} RON = {fmt(est.raw)} RON. Sub {MIN_ORDER_SQM_LABEL} se aplică comanda minimă de{' '}
            {BUSINESS.minOrder} RON.
          </p>
        )}
        {!compact && (
          <p className="mt-2 text-xs text-white/80">
            Estimare orientativă. Prețul final se calculează după măsurarea suprafeței reale a covoarelor.
          </p>
        )}
      </div>

      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        <Link
          href="/comanda"
          className="flex h-12 items-center justify-center rounded-xl bg-aqua-500 font-bold text-navy-950 transition hover:bg-aqua-400"
        >
          Comandă ridicare gratuită
        </Link>
        <a
          href={`${BUSINESS.whatsappHref}?text=${waText}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 items-center justify-center gap-2 rounded-xl bg-whatsapp font-semibold text-navy-950 transition hover:brightness-95"
        >
          <WhatsAppIcon className="h-5 w-5" /> Trimite pe WhatsApp
        </a>
      </div>
    </div>
  );
}
