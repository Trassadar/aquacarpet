'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const themes = [
  { name: 'clean', label: 'Clean Premium', value: '' },
  { name: 'dark', label: 'Dark Navy', value: 'dark-navy' },
  { name: 'fresh', label: 'Fresh Aqua', value: 'fresh-aqua' }
];

export default function Header() {
  const [currentTheme, setCurrentTheme] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || '';
    setCurrentTheme(savedTheme);
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []);

  const handleThemeChange = (themeValue: string) => {
    setCurrentTheme(themeValue);
    localStorage.setItem('theme', themeValue);
    
    if (themeValue) {
      document.documentElement.setAttribute('data-theme', themeValue);
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  };

  const navItems = [
    { href: '#servicii', label: 'Servicii' },
    { href: '#preturi', label: 'Preturi' },
    { href: '#comanda', label: 'Comanda' },
    { href: '#contact', label: 'Contact' },
    { href: '#faq', label: 'FAQ' }
  ];

  // Determine logo based on theme
  const getLogoSrc = () => {
    const hasDarkTheme = currentTheme === 'dark-navy';
    return hasDarkTheme ? '/logo-white.png' : '/logo.png';
  };

  return (
    <header className="fixed top-0 w-full bg-card/95 backdrop-blur-sm border-b border-custom z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image 
              src={getLogoSrc()}
              alt="AquaCarpet Logo" 
              width={120}
              height={32}
              className="h-8 w-auto"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-secondary hover:text-aqua transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Theme Switcher */}
          <div className="hidden md:flex items-center space-x-4">
            <select
              value={currentTheme}
              onChange={(e) => handleThemeChange(e.target.value)}
              className="bg-card border border-custom rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-aqua"
            >
              {themes.map((theme) => (
                <option key={theme.name} value={theme.value}>
                  {theme.label}
                </option>
              ))}
            </select>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-secondary hover:text-aqua p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div className="md:hidden bg-card border-t border-custom">
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
              <div className="px-3 py-2">
                <select
                  value={currentTheme}
                  onChange={(e) => handleThemeChange(e.target.value)}
                  className="w-full bg-card border border-custom rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-aqua"
                >
                  {themes.map((theme) => (
                    <option key={theme.name} value={theme.value}>
                      {theme.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
