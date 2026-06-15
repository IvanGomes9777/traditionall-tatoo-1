'use client';

import { useEffect, useRef, useState } from 'react';
import Reveal from '@/components/Reveal';

type Voice = { quote: string; name: string };

const VOICES: Voice[] = [
  {
    quote:
      'Genau die kräftigen Linien, die ich wollte. Sieht nach vier Jahren aus wie frisch gestochen.',
    name: 'Jonas K. · Münster',
  },
  {
    quote:
      'Ehrliches Handwerk, kein Schnickschnack. Mac hat sich richtig Zeit für den Entwurf genommen.',
    name: 'Sina M. · Telgte',
  },
  {
    quote:
      'Bestes Old-School-Studio in Münster. Die Flash-Wand ist der Wahnsinn, da findet jeder was.',
    name: 'Tobias R. · Greven',
  },
  {
    quote:
      'Saubere Arbeit, faire Preise, super Beratung. Komm definitiv für mein nächstes wieder.',
    name: 'Mareike P. · Münster',
  },
  {
    quote:
      'Vom Walk-in zum Lieblingsstudio. Greta hat meine Idee perfekt umgesetzt.',
    name: 'Dennis L. · Osnabrück',
  },
];

const ROTATIONS = ['-2.4deg', '1.8deg', '-1deg', '2deg', '-1.6deg'];

// TODO(production): sobald das Google-Business-Profil steht, durch die echte
// "Bewertung schreiben"-URL ersetzen:
// https://search.google.com/local/writereview?placeid=<PLACE_ID>
// Vorerst öffnet der Button eine Google-Maps-Suche nach dem Studio.
const GOOGLE_REVIEW_URL =
  'https://www.google.com/maps/search/?api=1&query=Anker%20%26%20Dolch%20Tattoo%20M%C3%BCnster';

export default function Stimmen() {
  const [revealed, setRevealed] = useState(false);
  const ref = useRef<HTMLUListElement>(null);

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
      { threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="stimmen"
      className="flex min-h-[100dvh] flex-col justify-center bg-cream2 px-5 py-[90px] sm:px-10"
      style={{
        backgroundImage:
          'radial-gradient(circle at 20% 10%, rgba(92,64,51,.06), transparent 40%)',
      }}
    >
      <div className="mx-auto max-w-shell">
        <Reveal className="mb-12 text-center">
          <p className="mb-3.5 font-mono text-[12px] uppercase tracking-[0.26em] text-red">
            // 03 — Stimmen
          </p>
          <h2 className="m-0 font-display text-[clamp(34px,4.4vw,54px)] uppercase leading-none text-navy">
            Von der Wand
          </h2>
          <p className="mx-auto mt-[18px] max-w-[460px] font-body text-base text-sepia">
            Echte Worte von echten Kund:innen — angepinnt wie im Studio.
          </p>
        </Reveal>

        <ul
          ref={ref}
          className="m-0 flex list-none flex-wrap justify-center gap-7 p-0"
        >
          {VOICES.map((v, i) => (
            <li
              key={v.name}
              className={`transition-all duration-700 ease-out ${
                revealed ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
              style={{ transitionDelay: revealed ? `${i * 90}ms` : '0ms' }}
            >
              <figure
                className="relative w-[280px] bg-white px-[22px] pb-[26px] pt-[22px] shadow-[3px_5px_12px_rgba(0,0,0,0.2)] transition-transform duration-200 [transform:rotate(var(--rot))] hover:z-10 hover:[transform:rotate(0deg)_scale(1.03)]"
                style={{ ['--rot' as string]: ROTATIONS[i % ROTATIONS.length] }}
              >
                {/* pin */}
                <span
                  aria-hidden="true"
                  className="absolute -top-[9px] left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-red shadow-[0_1px_3px_rgba(0,0,0,0.4)]"
                />
                <span aria-hidden="true" className="text-[15px] tracking-[3px] text-gold">
                  ★★★★★
                </span>
                <blockquote className="m-0 mt-2.5 font-script text-[17px] leading-[1.5] text-navy">
                  „{v.quote}"
                </blockquote>
                <figcaption className="mt-3.5 font-body text-[13px] font-bold uppercase tracking-[0.06em] text-red">
                  — {v.name}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        {/* leave a review CTA */}
        <div className="mt-14 flex flex-col items-center gap-3">
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-navy px-8 py-4 font-body text-sm font-bold uppercase tracking-[0.1em] text-cream shadow-[4px_4px_0_#C1272D] transition-transform duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#C1272D]"
          >
            <span aria-hidden="true" className="text-gold">
              ★
            </span>
            Bewertung auf Google schreiben
            <span aria-hidden="true" className="text-gold">
              ★
            </span>
          </a>
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-sepia/70">
            Warst du schon bei uns? Wir freuen uns über dein Feedback.
          </p>
        </div>
      </div>
    </section>
  );
}
