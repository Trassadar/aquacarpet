'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';

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
      newErrors.numar = 'Numarul este obligatoriu';
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

      const response = await fetch('/api/public/aquacarpet-order', {
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
      <div className="min-h-screen">
        <Header />
        <main>
          <section className="pt-24 pb-20 bg-card">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="bg-card border border-custom rounded-lg p-12">
                <div className="text-6xl mb-6 text-aqua">✅</div>
                <h1 className="text-3xl font-bold mb-4 text-primary">
                  Comanda ta a fost trimisa!
                </h1>
                <p className="text-lg text-secondary mb-4">
                  Multumim pentru comanda! Vei fi contactat in cel mai scurt timp 
                  pentru confirmarea detaliilor de ridicare.
                </p>
                {orderId && (
                  <p className="text-sm text-muted mb-6">
                    Numar comanda: <span className="font-mono bg-light-aqua/20 px-2 py-1 rounded">{orderId}</span>
                  </p>
                )}
                <div className="bg-light-aqua/10 rounded-lg p-6 mb-8">
                  <h3 className="font-semibold text-primary mb-2">Ce se intampla acum?</h3>
                  <ul className="text-left text-secondary space-y-2">
                    <li>• Vei primi un telefon de confirmare in maxim 2 ore</li>
                    <li>• Stabilim impreuna data si ora potrivita pentru ridicare</li>
                    <li>• Echipa noastra vine la adresa indicata</li>
                    <li>• Covoarele sunt returnate curate in 24-48 ore</li>
                  </ul>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/" 
                    className="bg-aqua hover:bg-light-aqua text-white font-semibold py-3 px-8 rounded-lg transition-colors inline-block"
                  >
                    Pagina Principala
                  </a>
                  <a 
                    href="/servicii" 
                    className="border-2 border-aqua hover:bg-aqua hover:text-white text-aqua font-semibold py-3 px-8 rounded-lg transition-colors inline-block"
                  >
                    Servicii
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="hero-gradient text-white pt-24 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Comanda Online
              </h1>
              <p className="text-xl mb-8 text-light-aqua max-w-3xl mx-auto">
                Completeaza formularul de mai jos si te vom contacta pentru 
                confirmarea programarii. Transport inclus! Dupa trimitere vei fi contactat pentru confirmare.
              </p>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-20 bg-card">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-card border border-custom rounded-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field - hidden from users */}
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Date Personale */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-primary">Date Personale</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-secondary mb-2">
                        Nume complet *
                      </label>
                      <input
                        type="text"
                        name="nume"
                        value={formData.nume}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-aqua ${
                          errors.nume ? 'border-red-500' : 'border-custom'
                        }`}
                        placeholder="Ion Popescu"
                      />
                      {errors.nume && (
                        <p className="text-red-500 text-sm mt-1">{errors.nume}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-secondary mb-2">
                        Telefon *
                      </label>
                      <input
                        type="tel"
                        name="telefon"
                        value={formData.telefon}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-aqua ${
                          errors.telefon ? 'border-red-500' : 'border-custom'
                        }`}
                        placeholder="07xxxxxxxx"
                      />
                      {errors.telefon && (
                        <p className="text-red-500 text-sm mt-1">{errors.telefon}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Adresa */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-primary">Adresa Ridicare</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-secondary mb-2">
                        Oras *
                      </label>
                      <select
                        name="oras"
                        value={formData.oras}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-custom rounded-lg focus:outline-none focus:ring-2 focus:ring-aqua"
                      >
                        <option value="Brasov">Brasov</option>
                        <option value="Sacele">Sacele</option>
                        <option value="Predeal">Predeal</option>
                        <option value="Rasnov">Rasnov</option>
                        <option value="Altul">Altul</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-secondary mb-2">
                        Strada *
                      </label>
                      <input
                        type="text"
                        name="strada"
                        value={formData.strada}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-aqua ${
                          errors.strada ? 'border-red-500' : 'border-custom'
                        }`}
                        placeholder="Strada Republicii"
                      />
                      {errors.strada && (
                        <p className="text-red-500 text-sm mt-1">{errors.strada}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-secondary mb-2">
                        Numar *
                      </label>
                      <input
                        type="text"
                        name="numar"
                        value={formData.numar}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-aqua ${
                          errors.numar ? 'border-red-500' : 'border-custom'
                        }`}
                        placeholder="1"
                      />
                      {errors.numar && (
                        <p className="text-red-500 text-sm mt-1">{errors.numar}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-secondary mb-2">
                        Bloc
                      </label>
                      <input
                        type="text"
                        name="bloc"
                        value={formData.bloc}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-custom rounded-lg focus:outline-none focus:ring-2 focus:ring-aqua"
                        placeholder="A3"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-secondary mb-2">
                        Scara
                      </label>
                      <input
                        type="text"
                        name="scara"
                        value={formData.scara}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-custom rounded-lg focus:outline-none focus:ring-2 focus:ring-aqua"
                        placeholder="2"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-secondary mb-2">
                        Apartament
                      </label>
                      <input
                        type="text"
                        name="ap"
                        value={formData.ap}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-custom rounded-lg focus:outline-none focus:ring-2 focus:ring-aqua"
                        placeholder="14"
                      />
                    </div>
                  </div>
                </div>

                {/* Detalii Comanda */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-primary">Detalii Comanda</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-secondary mb-2">
                        Data preferata
                      </label>
                      <input
                        type="date"
                        name="dataPreferata"
                        value={formData.dataPreferata}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-custom rounded-lg focus:outline-none focus:ring-2 focus:ring-aqua"
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-secondary mb-2">
                        Interval orar preferat
                      </label>
                      <select
                        name="interval"
                        value={formData.interval}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-custom rounded-lg focus:outline-none focus:ring-2 focus:ring-aqua"
                      >
                        <option value="">Alege interval</option>
                        <option value="09:00-12:00">09:00 - 12:00</option>
                        <option value="12:00-15:00">12:00 - 15:00</option>
                        <option value="15:00-18:00">15:00 - 18:00</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-secondary mb-2">
                        Numar covoare
                      </label>
                      <input
                        type="number"
                        name="nrCovoare"
                        value={formData.nrCovoare}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-custom rounded-lg focus:outline-none focus:ring-2 focus:ring-aqua"
                        placeholder="ex: 3"
                        min="1"
                      />
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-secondary mb-2">
                      Observatii
                    </label>
                    <textarea
                      name="observatii"
                      value={formData.observatii}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-custom rounded-lg focus:outline-none focus:ring-2 focus:ring-aqua"
                      placeholder="Detalii suplimentare despre covoare (pete dificile, materiale speciale, etc.)"
                    />
                  </div>
                </div>

                {/* GDPR */}
                <div>
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      name="gdpr"
                      checked={formData.gdpr}
                      onChange={handleChange}
                      className={`mt-1 mr-3 ${
                        errors.gdpr ? 'border-red-500' : ''
                      }`}
                    />
                    <span className="text-sm text-secondary">
                      Sunt de acord cu prelucrarea datelor personale in conformitate cu 
                      GDPR. Datele mele vor fi folosite doar pentru procesarea acestei comenzi. *
                    </span>
                  </label>
                  {errors.gdpr && (
                    <p className="text-red-500 text-sm mt-1">{errors.gdpr}</p>
                  )}
                </div>

                {/* Submit */}
                {submitError && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                    <p className="text-red-600 text-sm">{submitError}</p>
                  </div>
                )}
                
                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-aqua hover:bg-light-aqua disabled:bg-gray-400 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
                  >
                    {isSubmitting ? 'Se trimite...' : 'Trimite Comanda'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
