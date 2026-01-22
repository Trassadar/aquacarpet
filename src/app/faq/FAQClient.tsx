'use client';

import { useState } from 'react';

export default function FAQClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      intrebare: 'Care este programul de functionare?',
      raspuns: 'Suntem deschisi de luni pana vineri, intre orele 08:00 - 18:00, iar sambata intre 09:00 - 13:00. Programarile se pot face si online in afara orelor de program, iar noi va vom contacta pentru confirmare.'
    },
    {
      intrebare: 'Cat timp dureaza spalarea covoarelor?',
      raspuns: 'Pentru serviciul standard, livrarea se face in 24-48 ore. Pentru tratamente speciale sau covoare delicate, timpul poate ajunge pana la 72 ore. Va vom anunta exact cand ridicam covoarele.'
    },
    {
      intrebare: 'Faceti transport la domiciliu?',
      raspuns: 'Da, oferim serviciu de transport gratuit la ridicare si livrare in Brasov si zonele limitrofe. Echipa noastra vine la adresa indicata, ambaleaza profesional covoarele si le returneaza curate.'
    },
    {
      intrebare: 'Cum se calculeaza pretul?',
      raspuns: 'Pretul este de 13 RON pe metru patrat, cu o comanda minima de 91 RON (echivalentul a 7 mp). Masuram suprafata reala a covorului si calculam pretul in consecinta.'
    },
    {
      intrebare: 'Ce fac cu covoarele foarte murdare sau cu pete dificile?',
      raspuns: 'Pentru pete dificile (cerneala, vopsea, sange, etc.) avem tratamente speciale la cost suplimentar. Va rugam sa mentionati acest aspect la programare pentru a putea pregati solutiile adecvate.'
    },
    {
      intrebare: 'Este sigur pentru copii si animale de companie?',
      raspuns: 'Da, folosim doar detergenti biodegradabili, ecologici, care sunt complet siguri pentru copii si animale de companie. Produsele noastre nu contin substante toxice sau alergene.'
    },
    {
      intrebare: 'Ce se intampla daca nu sunt multumit de rezultat?',
      raspuns: 'Oferim garantie de satisfactie. Daca nu sunteti multumit de rezultat, vom reface spalarea gratuit. Calitatea si satisfactia clientilor sunt prioritare pentru noi.'
    },
    {
      intrebare: 'Spalati si covoare de matase sau persane vechi?',
      raspuns: 'Da, insa acestea necesita tratamente speciale si atentie particulara. Va recomandam sa ne contactati pentru o evaluare personalizata si o oferta de pret adaptata.'
    },
    {
      intrebare: 'Cum se usuca covoarele dupa spalare?',
      raspuns: 'Folosim spatii specializate de uscare cu temperatura si umiditate controlata. Acest proces previne aparitia mucegaiului si mentine forma si culorile covoarelor.'
    },
    {
      intrebare: 'Ce metode de plata acceptati?',
      raspuns: 'Acceptam plata numerar la livrare, transfer bancar si card. Pentru clienti corporate, oferim si posibilitatea de plata la 30 de zile.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="hero-gradient text-white pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Intrebari Frecvente
            </h1>
            <p className="text-xl mb-8 text-light-aqua max-w-3xl mx-auto">
              Gaseste raspunsuri la cele mai comune intrebari despre serviciile noastre de spalatorie profesionala.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-card border border-custom rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-light-aqua/5 transition-colors focus:outline-none focus:ring-2 focus:ring-aqua"
                >
                  <span className="font-semibold text-primary">{faq.intrebare}</span>
                  <svg 
                    className={`w-5 h-5 text-aqua transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-6 py-4 bg-light-aqua/5 border-t border-custom">
                    <p className="text-secondary leading-relaxed">{faq.raspuns}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-navy text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">
              Nu ai gasit raspunsul cautat?
            </h3>
            <p className="text-light-aqua mb-6">
              Suntem aici sa te ajutam! Contacteaza-ne pentru orice intrebare sau nelamurire.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:0757219695" 
                className="bg-white text-navy font-semibold py-3 px-8 rounded-lg hover:bg-light-aqua transition-colors inline-block"
              >
                📞 Suna Acum
              </a>
              <a 
                href="/contact" 
                className="border-2 border-white hover:bg-white hover:text-navy text-white font-semibold py-3 px-8 rounded-lg transition-colors inline-block"
              >
                Trimite Mesaj
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
