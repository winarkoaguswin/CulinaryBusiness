import React, { useState } from 'react';
import { IconForkKnife } from './Icons';

const navLinks = [
  { name: 'Layanan', href: '#services' },
  { name: 'Tim Kami', href: '#team' },
  { name: 'Testimoni', href: '#testimonials' },
  { name: 'Kontak', href: '#contact' },
];

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-brand-dark/80 backdrop-blur-sm sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <IconForkKnife className="h-8 w-8 text-brand-primary" />
              <span className="ml-2 text-2xl font-extrabold text-white tracking-tight">
                GastroPreneur
              </span>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-brand-primary font-medium transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-brand-primary text-white font-bold px-5 py-2.5 rounded-full text-sm hover:bg-amber-600 transition-all duration-300 shadow-md hover:shadow-amber-500/50"
            >
              Konsultasi Gratis
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
             <div className="flex items-center px-5">
                <a
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full text-center bg-brand-primary text-white font-bold px-5 py-2.5 rounded-full text-sm hover:bg-amber-600 transition-all duration-300"
                >
                  Konsultasi Gratis
                </a>
             </div>
          </div>
        </div>
      )}
    </header>
  );
};
