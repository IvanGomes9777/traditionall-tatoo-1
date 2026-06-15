'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { TATTOO_IMAGES } from '@/lib/images';
import Reveal from '@/components/Reveal';

type Category = 'maritime' | 'rosen' | 'tiere' | 'dark';

type Motif = {
  name: string;
  category: Category;
  style: string;
  duration: string;
  price: string;
  image: { src: string; alt: string } | null;
};

const MOTIFS: Motif[] = [
  {
    name: 'Flash-Sheet',
    category: 'rosen',
    style: 'American Traditional',
    duration: 'je Motiv ca. 1–3 Std',
    price: 'ab 90 €',
    image: TATTOO_IMAGES.flashSheet,
  },
  {
    name: 'Leuchtturm',
    category: 'maritime',
    style: 'Bold Traditional',
    duration: 'ca. 4–6 Std',
    price: 'ab 320 €',
    image: TATTOO_IMAGES.forearmLighthouse,
  },
  {
    name: 'Skull & Banner',
    category: 'dark',
    style: 'Traditional · Lettering',
    duration: 'ca. 3–4 Std',
    price: 'ab 240 €',
    image: TATTOO_IMAGES.forearmSkull,
  },
  {
    name: 'Banner-Sleeve',
    category: 'rosen',
    style: 'Color Traditional',
    duration: 'mehrere Sessions',
    price: 'nach Beratung',
    image: TATTOO_IMAGES.sleeveBanner,
  },
  {
    name: 'Schwalbe & Schlange',
    category: 'tiere',
    style: 'Neo-Traditional',
    duration: 'ca. 4–5 Std',
    price: 'ab 300 €',
    image: TATTOO_IMAGES.legTraditional,
  },
  {
    name: 'Full Sleeve',
    category: 'dark',
    style: 'Traditional Blackwork',
    duration: 'Projekt · mehrere Termine',
    price: 'nach Beratung',
    image: TATTOO_IMAGES.armsBlack,
  },
  {
    name: 'Anker',
    category: 'maritime',
    style: 'Old-School Flash',
    duration: 'ca. 2–3 Std',
    price: 'ab 150 €',
    image: null,
  },
  {
    name: 'Panther',
    category: 'tiere',
    style: 'Old-School Flash',
    duration: 'ca. 3–4 Std',
    price: 'ab 220 €',
    image: null,
  },
];

const FILTERS: { label: string; value: Category | 'all' }[] = [
  { label: 'Alle', value: 'all' },
  { label: 'Maritime ⚓', value: 'maritime' },
  { label: 'Rosen 🌹', value: 'rosen' },
  { label: 'Tiere', value: 'tiere' },
  { label: 'Dark 🗡️', value: 'dark' },
];

function Placeholder({ label }: { label: string }) {
  return (
    <div
      className="flex h-full w-full items-center justify-center"
      style={{
        background:
          'repeating-linear-gradient(45deg, rgba(27,42,74,.08) 0 7px, transparent 7px 14px), #ece3cd',
      }}
    >
      <span className="font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-[#9a8c6a]">
        {label}
      </span>
    </div>
  );
}

export default function FlashGallery() {
  const [filter, setFilter] = useState<Category | 'all'>('all');
  const [active, setActive] = useState<Motif | null>(null);
  const [shown, setShown] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  // scroll-triggered staggered reveal (reduced-motion safe)
  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // close lightbox on Escape
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [active]);

  const visible = MOTIFS.filter(
    (m) => filter === 'all' || m.category === filter,
  );

  return (
    <section
      id="flash"
      className="flex min-h-[100dvh] flex-col justify-center bg-navy px-5 py-[90px] text-cream sm:px-10"
      style={{
        backgroundImage:
          'repeating-linear-gradient(0deg, rgba(255,255,255,.018) 0 3px, transparent 3px 6px), radial-gradient(120% 90% at 50% 0%, rgba(225,161,0,.08), transparent 50%)',
      }}
    >
      <div className="mx-auto max-w-shell">
        {/* header */}
        <Reveal className="mb-9 text-center">
          <p className="mb-3.5 font-mono text-[0.75rem] uppercase tracking-[0.26em] text-gold">
            // 01 — Die Flash-Wand
          </p>
          <h2 className="m-0 font-display text-[clamp(2.25rem,4.6vw,3.625rem)] uppercase leading-none">
            Direkt von der Wand
          </h2>
          <p className="mx-auto mt-[18px] max-w-[460px] font-body text-base text-gold">
            Vorgezeichnete Klassiker, fertig zum Stechen. Such dir eins aus —
            oder bring deine eigene Idee mit.
          </p>
        </Reveal>

        {/* filters */}
        <div className="mb-8 flex flex-wrap justify-center gap-2.5">
          {FILTERS.map((f) => {
            const isActive = filter === f.value;
            return (
              <button
                key={f.value}
                type="button"
                onClick={() => setFilter(f.value)}
                aria-pressed={isActive}
                className={`inline-flex min-h-[44px] items-center border-2 border-gold px-4 font-body text-[0.75rem] font-semibold uppercase tracking-[0.08em] transition-colors duration-200 ${
                  isActive
                    ? 'bg-gold text-navy'
                    : 'bg-transparent text-cream hover:bg-gold hover:text-navy'
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-2 gap-[18px] sm:grid-cols-3 lg:grid-cols-4"
        >
          {visible.map((m, i) => (
            <button
              key={m.name}
              type="button"
              onClick={() => setActive(m)}
              className={`group block border-2 border-gold bg-cream p-[11px] text-left transition-all duration-700 ease-out hover:!translate-y-[-6px] ${
                shown ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
              style={{ transitionDelay: shown ? `${i * 60}ms` : '0ms' }}
            >
              <div className="relative h-[170px] overflow-hidden border border-red transition-shadow duration-200 group-hover:shadow-[6px_8px_0_rgba(0,0,0,.32)]">
                {m.image ? (
                  <Image
                    src={m.image.src}
                    alt={m.image.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.06]"
                  />
                ) : (
                  <Placeholder label={m.name} />
                )}
              </div>
              <span className="block pt-2 text-center font-script text-[1rem] text-red">
                {m.name}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#kontakt"
            className="inline-block bg-gold px-9 py-4 font-body text-sm font-bold uppercase tracking-[0.1em] text-navy shadow-[4px_4px_0_#C1272D] transition-transform duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#C1272D]"
          >
            Ganze Flash-Mappe ansehen
          </a>
        </div>
      </div>

      {/* lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-[rgba(10,16,30,0.92)] p-6 motion-safe:animate-fadeIn"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Motiv: ${active.name}`}
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            className="absolute right-6 top-5 font-mono text-[0.8125rem] uppercase tracking-[0.1em] text-gold"
            aria-label="Schließen"
          >
            ✕ Schließen
          </button>
          <div
            className="w-full max-w-[520px] border-[3px] border-gold bg-cream p-3.5 text-center text-navy"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[320px] overflow-hidden border border-red">
              {active.image ? (
                <Image
                  src={active.image.src}
                  alt={active.image.alt}
                  fill
                  sizes="520px"
                  className="object-cover"
                />
              ) : (
                <Placeholder label={active.name} />
              )}
            </div>
            <h3 className="mt-3 font-script text-[1.375rem] text-red">
              {active.name}
            </h3>
            <p className="mt-1 font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-sepia">
              {active.style} · {active.duration} · {active.price}
            </p>
            <a
              href="#kontakt"
              onClick={() => setActive(null)}
              className="mt-4 inline-block bg-navy px-6 py-3 font-body text-[0.8125rem] font-bold uppercase tracking-[0.1em] text-cream shadow-[3px_3px_0_#C1272D] transition-transform duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5"
            >
              ★ Ähnliches anfragen ★
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
