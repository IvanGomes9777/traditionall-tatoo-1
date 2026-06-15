'use client';

import { useEffect, useState } from 'react';

const LEFT_LINKS = [
  { label: 'Flash', href: '#flash' },
  { label: 'Crew', href: '#crew' },
  { label: 'Stimmen', href: '#stimmen' },
];
const RIGHT_LINKS = [
  { label: 'FAQ', href: '#faq' },
  { label: 'Kontakt', href: '#kontakt' },
];
const ALL_LINKS = [...LEFT_LINKS, ...RIGHT_LINKS];

const TICKER_ITEMS = [
  'Bold Lines',
  'Solid Color',
  'Walk-Ins Willkommen',
  'Since 2012',
  'Hafen Münster',
];

function Star({ className = '' }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block text-red text-[11px] motion-safe:animate-spinStar ${className}`}
    >
      ★
    </span>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // lock body scroll while the mobile overlay is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 motion-safe:animate-drop">
      {/* Utility bar */}
      <div className="bg-navy text-gold font-mono text-[11px] tracking-[0.14em] uppercase">
        <div className="mx-auto flex max-w-shell items-center justify-between gap-3 px-5 py-[7px] sm:px-8">
          <span>Di–Sa · 11–19 Uhr</span>
          <span className="hidden sm:inline">
            0251 / 22 14 88 · @anker.dolch
          </span>
          <a href="#kontakt" className="sm:hidden hover:text-cream">
            Termin&nbsp;★
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={`border-b-2 border-navy bg-cream/95 backdrop-blur transition-shadow duration-300 ${
          scrolled ? 'shadow-[0_4px_0_rgba(27,42,74,0.12)]' : ''
        }`}
      >
        <nav
          className="mx-auto flex max-w-shell items-center justify-between gap-4 px-5 py-3.5 sm:px-8 md:justify-center md:gap-7"
          aria-label="Hauptnavigation"
        >
          {/* left link group (desktop) */}
          <div className="hidden items-center md:flex">
            {LEFT_LINKS.map((l, i) => (
              <span key={l.href} className="flex items-center">
                {i > 0 && <Star className="px-1" />}
                <a
                  href={l.href}
                  className="px-3 font-body text-[13px] font-semibold uppercase tracking-[0.08em] text-navy transition-colors hover:text-red"
                >
                  {l.label}
                </a>
              </span>
            ))}
          </div>

          {/* logo */}
          <a
            href="#top"
            className="flex shrink-0 items-center gap-2 font-display text-[20px] uppercase text-navy"
          >
            <span aria-hidden="true">⚓</span> Anker &amp; Dolch
          </a>

          {/* right link group (desktop) */}
          <div className="hidden items-center md:flex">
            {RIGHT_LINKS.map((l, i) => (
              <span key={l.href} className="flex items-center">
                {i > 0 && <Star className="px-1" />}
                <a
                  href={l.href}
                  className="px-3 font-body text-[13px] font-semibold uppercase tracking-[0.08em] text-navy transition-colors hover:text-red"
                >
                  {l.label}
                </a>
              </span>
            ))}
            <a
              href="#kontakt"
              className="ml-3 bg-red px-4 py-2.5 font-body text-[12px] font-bold uppercase tracking-[0.12em] text-cream shadow-[3px_3px_0_#1B2A4A] transition-transform duration-200 hover:-translate-x-px hover:-translate-y-px hover:shadow-[5px_5px_0_#1B2A4A]"
            >
              Termin&nbsp;★
            </a>
          </div>

          {/* mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.14em] text-navy md:hidden"
            aria-label="Menü öffnen"
            aria-expanded={menuOpen}
          >
            <span className="flex flex-col gap-[3px]">
              <span className="block h-0.5 w-[22px] bg-navy" />
              <span className="block h-0.5 w-[22px] bg-navy" />
              <span className="block h-0.5 w-[22px] bg-navy" />
            </span>
            Menü
          </button>
        </nav>
      </div>

      {/* Ticker marquee */}
      <div className="overflow-hidden border-y-2 border-navy bg-red">
        <div className="flex w-max motion-safe:animate-marquee">
          {[0, 1].map((dup) => (
            <div
              key={dup}
              className="flex items-center py-2.5"
              aria-hidden={dup === 1}
            >
              {TICKER_ITEMS.map((item) => (
                <span key={item} className="flex items-center">
                  <span className="px-6 font-script text-[16px] text-cream">
                    {item}
                  </span>
                  <span className="text-[16px] text-navy">★</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile full-screen overlay menu */}
      <div
        className={`fixed inset-0 z-[60] flex flex-col items-center justify-center gap-6 bg-navy transition-opacity duration-300 md:hidden ${
          menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          onClick={() => setMenuOpen(false)}
          className="absolute right-6 top-6 font-mono text-[12px] uppercase tracking-[0.14em] text-gold"
          aria-label="Menü schließen"
        >
          ✕ Schließen
        </button>
        {ALL_LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setMenuOpen(false)}
            className="font-display text-[26px] uppercase text-cream transition-colors hover:text-gold"
          >
            {l.label}
          </a>
        ))}
        <a
          href="#kontakt"
          onClick={() => setMenuOpen(false)}
          className="mt-2 bg-red px-7 py-3.5 font-body text-[14px] font-bold uppercase tracking-[0.12em] text-cream shadow-[4px_4px_0_#C9A86A]"
        >
          ★ Termin buchen ★
        </a>
      </div>
    </header>
  );
}
