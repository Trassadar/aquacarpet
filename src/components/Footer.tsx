'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Footer() {
  const [currentTheme, setCurrentTheme] = useState('');
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const updateTheme = () => {
      const theme = document.documentElement.getAttribute('data-theme') || '';
      setCurrentTheme(theme);
    };

    updateTheme();
    
    // Listen for theme changes
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    return () => observer.disconnect();
  }, []);

  // Determine logo based on theme
  const getLogoSrc = () => {
    const hasDarkTheme = currentTheme === 'dark-navy';
    return hasDarkTheme ? '/logo-white.png' : '/logo.png';
  };

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo si descriere */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Image 
                src={getLogoSrc()}
                alt="AquaCarpet Logo" 
                width={80}
                height={24}
                className="h-6 w-auto mr-3"
              />
              <span className="text-2xl font-bold text-aqua">AquaCarpet</span>
            </div>
            <p className="text-light-aqua mb-4">
              Spalatorie profesionala de covoare in Brasov. Servicii de calitate la preturi competitive.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-light-aqua hover:text-aqua transition-colors">
                Facebook
              </a>
              <a href="#" className="text-light-aqua hover:text-aqua transition-colors">
                Instagram
              </a>
              <a href="#" className="text-light-aqua hover:text-aqua transition-colors">
                Google
              </a>
            </div>
          </div>

          {/* Link-uri rapide */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-aqua">Link-uri Rapide</h4>
            <ul className="space-y-2">
              <li><a href="/servicii" className="text-light-aqua hover:text-aqua transition-colors">Servicii</a></li>
              <li><a href="/preturi" className="text-light-aqua hover:text-aqua transition-colors">Preturi</a></li>
              <li><a href="/comanda" className="text-light-aqua hover:text-aqua transition-colors">Comanda Online</a></li>
              <li><a href="/faq" className="text-light-aqua hover:text-aqua transition-colors">Intrebari Frecvente</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-aqua">Contact</h4>
            <ul className="space-y-2 text-light-aqua">
              <li>📞 0757 219 695</li>
              <li>📧 contact@aquacarpet.ro</li>
              <li>📍 Str. Soseaua Cristianului Nr.11, Brasov</li>
              <li>🕐 Luni - Vineri: 8:00 - 18:00</li>
              <li>🕐 Sambata: 9:00 - 13:00</li>
              <li>🕐 Duminica: Inchis</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-light-aqua/20 mt-8 pt-8 text-center text-light-aqua">
          <p>&copy; {currentYear} AquaCarpet. Toate drepturile rezervate.</p>
          <div className="mt-4 space-y-2 text-sm">
            <p>
              <a 
                href="https://anpc.ro/ce-este-sal/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-light-aqua hover:text-aqua transition-colors underline"
              >
                ANPC - Soluționarea Online a Litigiilor
              </a>
            </p>
            <p>
              <a 
                href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=ro" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-light-aqua hover:text-aqua transition-colors underline"
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
