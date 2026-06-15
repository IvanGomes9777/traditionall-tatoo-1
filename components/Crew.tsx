'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { TATTOO_IMAGES } from '@/lib/images';

type Artist = {
  name: string;
  role: string;
  specialty: string;
  work: { src: string; alt: string };
};

const CREW: Artist[] = [
  {
    name: 'Magnus Reinhold',
    role: '„Mac" · Inhaber',
    specialty: 'Bold Traditional · Anker & Schiffe',
    work: TATTOO_IMAGES.forearmLighthouse,
  },
  {
    name: 'Greta Brügge',
    role: 'Künstlerin',
    specialty: 'Neo-Traditional · Rosen & Tiere',
    work: TATTOO_IMAGES.legTraditional,
  },
  {
    name: 'Henning Voss',
    role: 'Künstler',
    specialty: 'Black & Grey · Lettering',
    work: TATTOO_IMAGES.forearmSkull,
  },
  {
    name: 'Lotte Sandmann',
    role: 'Künstlerin',
    specialty: 'Old-School Flash · Walk-ins',
    work: TATTOO_IMAGES.flashSheet,
  },
];

function FlipCard({ artist, revealed, delay }: { artist: Artist; revealed: boolean; delay: number }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`aspect-[3/4] transition-all duration-700 ease-out ${
        revealed ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      }`}
      style={{ perspective: '1200px', transitionDelay: revealed ? `${delay}ms` : '0ms' }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <button
        type="button"
        aria-label={`${artist.name} — Arbeit ansehen`}
        aria-pressed={flipped}
        onClick={() => setFlipped((f) => !f)}
        onFocus={() => setFlipped(true)}
        onBlur={() => setFlipped(false)}
        className="relative block h-full w-full text-left [transform-style:preserve-3d]"
        style={{
          transition: 'transform .6s',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* front — portrait */}
        <span
          className="absolute inset-0 overflow-hidden border-2 border-gold bg-white p-[9px] [backface-visibility:hidden]"
        >
          <span
            className="flex h-full w-full items-center justify-center"
            style={{
              background:
                'repeating-linear-gradient(45deg, rgba(27,42,74,.07) 0 7px, transparent 7px 14px), #ece3cd',
            }}
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#9a8c6a]">
              Portrait
            </span>
          </span>
          <span className="absolute inset-x-0 bottom-0 block bg-navy/90 px-3 py-2.5 text-center">
            <span className="block font-display text-[15px] text-cream">{artist.name}</span>
            <span className="block font-script text-[12px] text-gold">{artist.role}</span>
          </span>
        </span>

        {/* back — real work */}
        <span
          className="absolute inset-0 overflow-hidden border-2 border-gold bg-navy-dark [backface-visibility:hidden]"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <Image
            src={artist.work.src}
            alt={artist.work.alt}
            fill
            sizes="(max-width: 640px) 50vw, 25vw"
            className="object-cover opacity-50"
          />
          <span className="absolute inset-0 flex flex-col items-center justify-center gap-2.5 bg-gradient-to-b from-navy/40 to-navy/85 p-4 text-center">
            <span className="font-display text-[16px] uppercase text-cream">{artist.name}</span>
            <span className="font-body text-[13px] text-cream">{artist.specialty}</span>
            <a
              href="#kontakt"
              onClick={(e) => e.stopPropagation()}
              className="mt-1.5 bg-gold px-4 py-2.5 font-body text-[11px] font-bold uppercase tracking-[0.1em] text-navy transition-transform duration-200 hover:scale-105"
            >
              Termin buchen →
            </a>
          </span>
        </span>
      </button>
    </div>
  );
}

export default function Crew() {
  const [revealed, setRevealed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setRevealed(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setRevealed(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="crew" className="bg-navy px-5 py-[90px] text-cream sm:px-10">
      <div className="mx-auto max-w-shell">
        <div className="mb-12 text-center">
          <p className="mb-3.5 font-mono text-[12px] uppercase tracking-[0.26em] text-gold">
            // 02 — Die Crew
          </p>
          <h2 className="m-0 font-display text-[clamp(36px,4.6vw,58px)] uppercase leading-none">
            Vier Hände, eine Linie
          </h2>
          <p className="mx-auto mt-[18px] max-w-[460px] font-body text-base text-gold">
            Jeder mit eigener Handschrift — aber alle stechen sauber, kräftig und
            für die Ewigkeit. Fahr über eine Karte (oder tippe sie an) und sieh
            die Arbeit.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {CREW.map((artist, i) => (
            <FlipCard key={artist.name} artist={artist} revealed={revealed} delay={i * 90} />
          ))}
        </div>
      </div>
    </section>
  );
}
