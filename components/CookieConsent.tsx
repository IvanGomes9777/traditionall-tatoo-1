'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { readConsent, writeConsent } from '@/lib/consent';

export default function CookieConsent() {
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState(false);
  const [maps, setMaps] = useState(true);

  useEffect(() => {
    // show on first visit (no stored choice)
    if (!readConsent()) setOpen(true);

    const reopen = () => {
      const c = readConsent();
      setMaps(c?.maps ?? true);
      setDetails(true);
      setOpen(true);
    };
    window.addEventListener('open-cookie-settings', reopen);
    return () => window.removeEventListener('open-cookie-settings', reopen);
  }, []);

  if (!open) return null;

  const decide = (mapsAllowed: boolean) => {
    writeConsent(mapsAllowed);
    setOpen(false);
    setDetails(false);
  };

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[90] border-t-[3px] border-gold bg-navy-dark px-5 py-5 text-cream sm:px-8 motion-safe:animate-drop"
      role="dialog"
      aria-modal="false"
      aria-label="Cookie-Einstellungen"
    >
      <div className="mx-auto max-w-shell">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="font-display text-[0.9375rem] uppercase tracking-wide text-gold">
              Cookies &amp; Datenschutz
            </p>
            <p className="mt-1.5 font-body text-[0.8125rem] leading-relaxed text-cream/80">
              Wir verwenden nur technisch notwendige Cookies (z. B. zum Schutz des
              Formulars). Externe Inhalte wie <strong className="text-cream">Google Maps</strong>{' '}
              laden wir erst mit deiner Einwilligung. Mehr in der{' '}
              <Link href="/datenschutz" className="font-semibold text-gold underline-offset-2 hover:underline">
                Datenschutzerklärung
              </Link>
              .
            </p>

            {details && (
              <div className="mt-3 space-y-2 border-t border-cream/15 pt-3 font-body text-[0.8125rem]">
                <div className="flex items-center justify-between gap-4">
                  <span>Notwendig (CSRF, Sicherheit)</span>
                  <span className="font-mono text-[0.6875rem] uppercase tracking-wide text-cream/50">
                    immer aktiv
                  </span>
                </div>
                <label className="flex cursor-pointer items-center justify-between gap-4">
                  <span>Google Maps (Standort-Karte)</span>
                  <input
                    type="checkbox"
                    checked={maps}
                    onChange={(e) => setMaps(e.target.checked)}
                    className="h-4 w-4"
                  />
                </label>
              </div>
            )}
          </div>

          <div className="flex shrink-0 flex-wrap items-center gap-3">
            {!details && (
              <button
                type="button"
                onClick={() => setDetails(true)}
                className="font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-cream/70 underline-offset-2 hover:text-cream hover:underline"
              >
                Einstellungen
              </button>
            )}
            <button
              type="button"
              onClick={() => decide(false)}
              className="border-2 border-cream/40 px-5 py-2.5 font-body text-[0.75rem] font-bold uppercase tracking-[0.1em] text-cream transition-colors hover:border-cream"
            >
              Nur notwendige
            </button>
            {details ? (
              <button
                type="button"
                onClick={() => decide(maps)}
                className="bg-gold px-5 py-2.5 font-body text-[0.75rem] font-bold uppercase tracking-[0.1em] text-navy shadow-[3px_3px_0_#C1272D] transition-transform hover:-translate-x-px hover:-translate-y-px"
              >
                Auswahl speichern
              </button>
            ) : (
              <button
                type="button"
                onClick={() => decide(true)}
                className="bg-gold px-5 py-2.5 font-body text-[0.75rem] font-bold uppercase tracking-[0.1em] text-navy shadow-[3px_3px_0_#C1272D] transition-transform hover:-translate-x-px hover:-translate-y-px"
              >
                Alle akzeptieren
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
