import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import { useState } from 'react';

export const metadata: Metadata = {
  title: 'Intrebari Frecvente | Spalatorie Covoare Brasov | AquaCarpet',
  description: 'Raspunsuri la cele mai frecvente intrebari despre serviciile noastre de spalatorie covoare in Brasov. Program, preturi, transport, timp de livrare si multe altele.',
};

function FAQClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      intrebare: 'Care este programul de functionare?',
      raspuns: 'Suntem deschisi de luni pana sambata, intre orele 09:00 - 18:00. Programarile se pot face si online in afara orelor de program, iar noi va vom contacta pentru confirmare.'
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
      raspuns: 'Pretul este de 13 RON pe metru patrat, cu o comanda minima de 78 RON (echivalentul a 6 mp). Masuram suprafata reala a covorului si calculam pretul in consecinta.'
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
      rspuns: 'Oferim garantie de satisfactie. Daca nu sunteti multumit de rezultat, vom reface spalarea gratuit. Calitatea si satisfactia clientilor sunt prioritare pentru noi.'
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
      intrebare: 'Trebuie sa pregatesc ceva inainte de venirea echipei?',
      raspuns: 'Nu este necesar sa pregatiti nimic special. Doar asigurati acces la covoare si, daca este posibil, indepartati obiectele de deasupra lor. Echipa noastra se ocupa de restul.'
    },
    {
      intrebare: 'Ce fac daca am o urgenta sau am nevoie de serviciu expres?',
      raspuns: 'Oferim si serviciu expres cu livrare in aceeasi zi sau in 24 ore, la cost suplimentar. Va rugam sa ne contactati telefonic pentru disponibilitate si pret.'
    },
    {
      intrebare: 'Acceptati si plata cu cardul?',
      raspuns: 'Da, acceptam plata numerar la livrare sau plata online prin transfer bancar. Pentru clientii corporate, putem emite si factura cu plata la termen.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="hero-gradient text-white pt-24 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Intrebari Frecvente
              </h1>
              <p className="text-xl mb-8 text-light-aqua max-w-3xl mx-auto">
                Ai intrebari despre serviciile noastre? Am adunat aici raspunsurile 
                la cele mai frecvente intrebari primite de la clientii nostri.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Items */}
        <section className="py-20 bg-card">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-card border border-custom rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-light-aqua/5 transition-colors"
                  >
                    <h3 className="font-semibold text-primary pr-4">{faq.intrebare}</h3>
                    <svg
                      className={`w-5 h-5 text-aqua transition-transform ${
                        openIndex === index ? 'transform rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openIndex === index && (
                    <div className="px-6 pb-4">
                      <p className="text-secondary leading-relaxed">{faq.raspuns}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-card">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-card border border-custom rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4 text-primary">
                Nu ai gasit raspunsul cautat?
              </h2>
              <p className="text-secondary mb-6">
                Suntem aici sa te ajutam! Contacteaza-ne direct si iti vom oferi 
                toate informatiile de care ai nevoie.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="bg-aqua hover:bg-light-aqua text-white font-semibold py-3 px-8 rounded-lg transition-colors inline-block"
                >
                  Contacteaza-ne
                </a>
                <a 
                  href="/comanda" 
                  className="border-2 border-aqua hover:bg-aqua hover:text-white text-aqua font-semibold py-3 px-8 rounded-lg transition-colors inline-block"
                >
                  Comanda Online
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

export default function FAQPage() {
  return <FAQClient />;
}
