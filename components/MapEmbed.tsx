'use client';

import { useEffect, useState } from 'react';
import { readConsent, writeConsent, CONSENT_EVENT } from '@/lib/consent';

export default function MapEmbed() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const sync = () => setAllowed(readConsent()?.maps ?? false);
    sync();
    window.addEventListener(CONSENT_EVENT, sync);
    return () => window.removeEventListener(CONSENT_EVENT, sync);
  }, []);

  if (allowed) {
    return (
      <iframe
        title="Karte — Hafenweg, Münster"
        src="https://www.google.com/maps?q=Hafenweg%2014%2C%2048155%20M%C3%BCnster&output=embed"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full min-h-[300px] w-full border-0 grayscale-[0.3]"
      />
    );
  }

  return (
    <div
      className="flex h-full min-h-[300px] flex-col items-center justify-center gap-3 p-6 text-center"
      style={{
        background:
          'repeating-linear-gradient(45deg, rgba(27,42,74,.08) 0 9px, transparent 9px 18px), #ece3cd',
      }}
    >
      <span className="text-3xl" aria-hidden="true">
        ⚓
      </span>
      <p className="max-w-xs font-body text-sm text-navy">
        Die Karte lädt Google Maps. Dabei werden Daten an Google übertragen —
        nur mit deiner Einwilligung.
      </p>
      <button
        type="button"
        onClick={() => writeConsent(true)}
        className="bg-navy px-5 py-3 font-body text-[0.75rem] font-bold uppercase tracking-[0.1em] text-cream shadow-[3px_3px_0_#C1272D] transition-transform hover:-translate-x-px hover:-translate-y-px"
      >
        Karte laden
      </button>
      <span className="font-mono text-[0.625rem] uppercase tracking-[0.1em] text-sepia/70">
        Hafenweg 14 · 48155 Münster
      </span>
    </div>
  );
}
