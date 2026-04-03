'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Menu, X } from './Icons';

const links = [
  { href: '#services', label: 'שירותים' },
  { href: '#about', label: 'אודות' },
  { href: '#gallery', label: 'גלריה' },
  { href: '#testimonials', label: 'המלצות' },
  { href: '#contact', label: 'צור קשר' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-pearl/90 backdrop-blur-lg shadow-card' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20 md:h-24">
        {/* Logo image */}
        <a href="#" className="flex-shrink-0">
          <Image
            src="/annette-lashes/images/logo.jpg"
            alt="Annette Lashes"
            width={200}
            height={80}
            className="h-14 md:h-16 w-auto object-contain rounded-lg"
            priority
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-body text-sm transition-colors duration-300 relative after:absolute after:bottom-0 after:right-0 after:w-0 after:h-[1.5px] after:bg-pink hover:after:w-full after:transition-all after:duration-300 ${
                scrolled ? 'text-charcoal hover:text-pink' : 'text-white/90 hover:text-pink-light'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="font-body text-sm bg-pink text-white px-5 py-2 rounded-full hover:bg-pink-deep hover:text-white transition-colors duration-300 shadow-card hover:shadow-card-hover"
          >
            קבעו תור
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden p-2 ${scrolled ? 'text-charcoal' : 'text-white'}`}
          aria-label={mobileOpen ? 'סגירת תפריט' : 'פתיחת תפריט'}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="md:hidden bg-pearl/95 backdrop-blur-lg border-t border-pink-soft/50"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-body text-base text-charcoal hover:text-pink transition-colors py-2 border-b border-pearl-deep/50"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="font-body text-base bg-pink text-white px-6 py-3 rounded-full text-center hover:bg-pink-deep hover:text-white transition-colors mt-2"
              >
                קבעו תור
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
