'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { BUSINESS, MIN_ORDER_LABEL } from '@/lib/business';
import { CheckIcon, ClockIcon, PhoneIcon, ShieldIcon, TruckIcon, WhatsAppIcon } from '@/components/Icons';

const inputCls = (hasError?: boolean) =>
  `w-full rounded-xl border bg-white px-4 py-3 text-base text-ink placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-aqua-200 focus:border-aqua-500 ${
    hasError ? 'border-red-600' : 'border-slate-300'
  }`;
const labelCls = 'block text-sm font-semibold text-navy-950 mb-1.5';
const errCls = 'text-red-700 text-sm mt-1';

export default function Comanda() {
  const [formData, setFormData] = useState({
    nume: '',
    telefon: '',
    oras: 'Brasov',
    strada: '',
    numar: '',
    bloc: '',
    scara: '',
    ap: '',
    dataPreferata: '',
    interval: '',
    nrCovoare: '',
    observatii: '',
    gdpr: false,
    website: '' // Honeypot field
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string>('');
  const [orderId, setOrderId] = useState<string>('');

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Anti-spam check
    if (formData.website) {
      return false; // Bot detected
    }

    if (!formData.nume.trim()) {
      newErrors.nume = 'Numele este obligatoriu';
    }

    if (!formData.telefon.trim()) {
      newErrors.telefon = 'Telefonul este obligatoriu';
    } else if (!/^07[0-9]{8}$/.test(formData.telefon.replace(/\s/g, ''))) {
      newErrors.telefon = 'Telefonul trebuie sa fie valid (format: 07xxxxxxxx)';
    }

    if (!formData.strada.trim()) {
      newErrors.strada = 'Strada este obligatorie';
    }

    if (!formData.numar.trim()) {
      newErrors.numar = 'Numărul este obligatoriu';
    }

    if (!formData.gdpr) {
      newErrors.gdpr = 'Trebuie sa fiti de acord cu prelucrarea datelor';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Clear previous errors
    setSubmitError('');
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const orderData = {
        nume: formData.nume,
        telefon: formData.telefon,
        oras: formData.oras,
        strada: formData.strada,
        numar: formData.numar,
        bloc: formData.bloc,
        scara: formData.scara,
        apartament: formData.ap,
        dataPreferata: formData.dataPreferata,
        interval: formData.interval,
        nrCovoare: formData.nrCovoare,
        observatii: formData.observatii,
        gdpr: formData.gdpr,
        website: formData.website // Honeypot
      };

      const response = await fetch('/api/submit-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderData)
      });

      const text = await response.text();
      let result;
      
      try {
        result = JSON.parse(text);
      } catch {
        setSubmitError('API a raspuns non-JSON. Verificati consola pentru detalii.');
        return;
      }

      if (response.ok && result.ok) {
        // Success
        setOrderId(result.orderId || '');
        setIsSubmitted(true);
      } else {
        // Error from API
        setSubmitError(result.error + (result.debug ? ` (${result.debug.message})` : ''));
      }
    } catch (error) {
      console.error('Submit error:', error);
      setSubmitError('Eroare de conexiune. Va rugam verificati conexiunea la internet si incercati din nou.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };


  if (isSubmitted) {
    return (
      <>
        <Header />
        <main className="bg-slate-50">
          <section className="mx-auto max-w-3xl px-4 py-16 md:py-24">
            <div className="rounded-3xl bg-white p-8 md:p-12 text-center shadow-xl shadow-navy-950/5 ring-1 ring-slate-200">
              <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-aqua-500 text-navy-950">
                <CheckIcon className="h-8 w-8" />
              </span>
              <h1 className="mt-6 text-3xl font-extrabold text-navy-950">Comanda ta a fost trimisă!</h1>
              <p className="mt-4 text-lg text-ink-soft">
                Mulțumim pentru comandă! Te contactăm în cel mai scurt timp pentru confirmarea detaliilor de ridicare.
              </p>
              {orderId && (
                <p className="mt-4 text-sm text-ink-soft">
                  Număr comandă: <span className="font-mono rounded bg-aqua-50 px-2 py-1 text-navy-950">{orderId}</span>
                </p>
              )}
              <div className="mt-8 rounded-2xl bg-aqua-50 p-6 text-left">
                <h2 className="font-bold text-navy-950">Ce se întâmplă acum?</h2>
                <ul className="mt-3 space-y-2 text-ink">
                  {[
                    'Te sunăm pentru confirmarea comenzii',
                    'Stabilim împreună data și ora potrivite pentru ridicare',
                    'Echipa noastră vine la adresa indicată',
                    'Covoarele sunt returnate curate în 24–48 de ore',
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <CheckIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-aqua-700" /> {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/" className="inline-flex h-12 items-center justify-center rounded-xl bg-navy-950 px-6 font-semibold text-white hover:bg-navy-800">
                  Pagina principală
                </Link>
                <Link href="/servicii" className="inline-flex h-12 items-center justify-center rounded-xl px-6 font-semibold text-navy-950 ring-2 ring-navy-950 hover:bg-slate-50">
                  Servicii
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <main className="bg-slate-50">
        <section className="relative overflow-hidden bg-bubbles text-white">
          <span className="bubble h-64 w-64 -right-16 -top-20 animate-float" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-28 md:pt-16 md:pb-36">
            <h1 className="max-w-3xl text-4xl md:text-5xl font-extrabold tracking-tight">
              Comandă online – spălare covoare Brașov
            </h1>
            <p className="mt-5 max-w-2xl text-lg md:text-xl text-white/90">
              Completează formularul în mai puțin de un minut. Te sunăm pentru confirmare, apoi venim să ridicăm covoarele –
              gratuit. Primești {BUSINESS.onlineDiscount} reducere la spălare pentru comanda online.
            </p>
          </div>
        </section>

        <section className="relative z-10 -mt-20 md:-mt-24 pb-16 md:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-8 lg:grid-cols-[1fr_340px] items-start">
            <div className="rounded-3xl bg-white p-6 md:p-10 shadow-xl shadow-navy-950/5 ring-1 ring-slate-200">
              <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                {/* Honeypot field - hidden from users */}
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                <fieldset>
                  <legend className="flex items-center gap-3 text-lg font-bold text-navy-950">
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-navy-950 text-sm text-white" aria-hidden="true">1</span>
                    Date de contact
                  </legend>
                  <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="f-nume" className={labelCls}>Nume complet *</label>
                      <input type="text" id="f-nume" name="nume" autoComplete="name" value={formData.nume} onChange={handleChange} className={inputCls(!!errors.nume)} placeholder="Ion Popescu" aria-invalid={!!errors.nume} />
                      {errors.nume && <p className={errCls}>{errors.nume}</p>}
                    </div>
                    <div>
                      <label htmlFor="f-telefon" className={labelCls}>Telefon *</label>
                      <input type="tel" id="f-telefon" name="telefon" autoComplete="tel" inputMode="tel" value={formData.telefon} onChange={handleChange} className={inputCls(!!errors.telefon)} placeholder="07xxxxxxxx" aria-invalid={!!errors.telefon} />
                      {errors.telefon && <p className={errCls}>{errors.telefon}</p>}
                    </div>
                  </div>
                </fieldset>

                <fieldset>
                  <legend className="flex items-center gap-3 text-lg font-bold text-navy-950">
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-navy-950 text-sm text-white" aria-hidden="true">2</span>
                    Adresa de ridicare
                  </legend>
                  <div className="mt-5 grid grid-cols-2 md:grid-cols-6 gap-4">
                    <div className="col-span-2">
                      <label htmlFor="f-oras" className={labelCls}>Oraș *</label>
                      <select id="f-oras" name="oras" value={formData.oras} onChange={handleChange} className={inputCls()}>
                        <option value="Brasov">Brașov</option>
                        <option value="Sacele">Săcele</option>
                        <option value="Predeal">Predeal</option>
                        <option value="Rasnov">Râșnov</option>
                        <option value="Altul">Altul</option>
                      </select>
                    </div>
                    <div className="col-span-2 md:col-span-3">
                      <label htmlFor="f-strada" className={labelCls}>Strada *</label>
                      <input type="text" id="f-strada" name="strada" autoComplete="address-line1" value={formData.strada} onChange={handleChange} className={inputCls(!!errors.strada)} placeholder="Strada Republicii" aria-invalid={!!errors.strada} />
                      {errors.strada && <p className={errCls}>{errors.strada}</p>}
                    </div>
                    <div className="col-span-2 md:col-span-1">
                      <label htmlFor="f-numar" className={labelCls}>Număr *</label>
                      <input type="text" id="f-numar" name="numar" value={formData.numar} onChange={handleChange} className={inputCls(!!errors.numar)} placeholder="1" aria-invalid={!!errors.numar} />
                      {errors.numar && <p className={errCls}>{errors.numar}</p>}
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="f-bloc" className={labelCls}>Bloc</label>
                      <input type="text" id="f-bloc" name="bloc" value={formData.bloc} onChange={handleChange} className={inputCls()} placeholder="A3" />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="f-scara" className={labelCls}>Scara</label>
                      <input type="text" id="f-scara" name="scara" value={formData.scara} onChange={handleChange} className={inputCls()} placeholder="2" />
                    </div>
                    <div className="col-span-2 md:col-span-2">
                      <label htmlFor="f-ap" className={labelCls}>Apartament</label>
                      <input type="text" id="f-ap" name="ap" value={formData.ap} onChange={handleChange} className={inputCls()} placeholder="14" />
                    </div>
                  </div>
                </fieldset>

                <fieldset>
                  <legend className="flex items-center gap-3 text-lg font-bold text-navy-950">
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-navy-950 text-sm text-white" aria-hidden="true">3</span>
                    Detalii comandă
                  </legend>
                  <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="f-dataPreferata" className={labelCls}>Data preferată</label>
                      <input type="date" id="f-dataPreferata" name="dataPreferata" value={formData.dataPreferata} onChange={handleChange} className={inputCls()} min={new Date().toISOString().split('T')[0]} />
                    </div>
                    <div>
                      <label htmlFor="f-interval" className={labelCls}>Interval orar preferat</label>
                      <select id="f-interval" name="interval" value={formData.interval} onChange={handleChange} className={inputCls()}>
                        <option value="">Alege interval</option>
                        <option value="09:00-12:00">09:00 - 12:00</option>
                        <option value="12:00-15:00">12:00 - 15:00</option>
                        <option value="15:00-18:00">15:00 - 18:00</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="f-nrCovoare" className={labelCls}>Număr covoare</label>
                      <input type="number" id="f-nrCovoare" name="nrCovoare" value={formData.nrCovoare} onChange={handleChange} className={inputCls()} placeholder="ex: 3" min="1" />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label htmlFor="f-observatii" className={labelCls}>Observații</label>
                    <textarea id="f-observatii" name="observatii" value={formData.observatii} onChange={handleChange} rows={4} className={inputCls()} placeholder="Detalii suplimentare despre covoare (pete dificile, materiale speciale etc.)" />
                  </div>
                </fieldset>

                <div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="gdpr"
                      checked={formData.gdpr}
                      onChange={handleChange}
                      className="mt-1 h-5 w-5 flex-shrink-0 accent-aqua-600"
                      aria-invalid={!!errors.gdpr}
                    />
                    <span className="text-sm text-ink-soft">
                      Sunt de acord cu prelucrarea datelor personale în conformitate cu GDPR. Datele mele vor fi folosite doar
                      pentru procesarea acestei comenzi. *
                    </span>
                  </label>
                  {errors.gdpr && <p className={errCls}>{errors.gdpr}</p>}
                </div>

                {submitError && (
                  <div className="rounded-xl border border-red-200 bg-red-50 p-4" role="alert">
                    <p className="text-sm text-red-700">{submitError}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex h-14 w-full items-center justify-center rounded-2xl bg-aqua-500 text-lg font-bold text-navy-950 shadow-lg shadow-aqua-500/30 transition hover:bg-aqua-400 disabled:bg-slate-300 disabled:shadow-none"
                >
                  {isSubmitting ? 'Se trimite…' : 'Trimite comanda'}
                </button>
                <p className="text-center text-sm text-ink-soft">{BUSINESS.pricePerSqm} RON/mp, comandă {MIN_ORDER_LABEL}. Ridicarea și livrarea sunt gratuite. Te sunăm pentru confirmare înainte de ridicare.</p>
              </form>
            </div>

            <aside className="space-y-5 lg:sticky lg:top-28">
              <div className="rounded-3xl bg-navy-950 p-6 text-white">
                <h2 className="text-lg font-bold">De ce AquaCarpet</h2>
                <ul className="mt-4 space-y-4">
                  {[
                    { icon: TruckIcon, t: 'Ridicare și livrare gratuite' },
                    { icon: ClockIcon, t: 'Gata în 24–48 de ore' },
                    { icon: ShieldIcon, t: 'Refacem gratuit dacă nu ești mulțumit' },
                    { icon: CheckIcon, t: `${BUSINESS.pricePerSqm} RON/mp, comandă ${MIN_ORDER_LABEL}` },
                  ].map(({ icon: Icon, t }) => (
                    <li key={t} className="flex items-start gap-3">
                      <Icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-aqua-300" /> <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl bg-white p-6 ring-1 ring-slate-200">
                <h2 className="text-lg font-bold text-navy-950">Preferi să vorbim?</h2>
                <div className="mt-4 grid gap-2">
                  <a href={BUSINESS.phoneHref} className="flex h-12 items-center justify-center gap-2 rounded-xl font-semibold text-navy-950 ring-2 ring-navy-950 hover:bg-slate-50">
                    <PhoneIcon className="h-5 w-5" /> {BUSINESS.phoneDisplay}
                  </a>
                  <a href={BUSINESS.whatsappOrderHref} target="_blank" rel="noopener noreferrer" className="flex h-12 items-center justify-center gap-2 rounded-xl bg-whatsapp font-semibold text-navy-950">
                    <WhatsAppIcon className="h-5 w-5" /> WhatsApp
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
