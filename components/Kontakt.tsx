'use client';

import { useActionState, useEffect, useState } from 'react';
import { submitInquiry, issueCsrfToken, type InquiryState } from '@/app/actions/contact';
import MapEmbed from '@/components/MapEmbed';

const initialState: InquiryState = { status: 'idle' };

const HOURS = [
  ['Di – Fr', '11 – 19 Uhr', false],
  ['Samstag', '11 – 16 Uhr · Walk-ins', false],
  ['So + Mo', 'Ruhetag', true],
] as const;

const labelCls =
  'mb-1.5 block font-mono text-[10px] uppercase tracking-[0.12em] text-sepia';
const inputCls =
  'w-full border-2 border-navy bg-white px-3.5 py-2.5 font-body text-sm text-navy outline-none transition-shadow focus:shadow-[3px_3px_0_#C1272D]';

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return <p className="mt-1 font-body text-[12px] font-semibold text-red">{msg}</p>;
}

export default function Kontakt() {
  const [state, formAction, pending] = useActionState(submitInquiry, initialState);
  const [csrf, setCsrf] = useState('');

  useEffect(() => {
    issueCsrfToken().then(setCsrf);
  }, []);

  const err = state.fieldErrors ?? {};

  return (
    <section
      id="kontakt"
      className="bg-navy px-5 py-[90px] text-cream sm:px-10"
      style={{
        backgroundImage:
          'repeating-linear-gradient(0deg, rgba(255,255,255,.018) 0 3px, transparent 3px 6px), radial-gradient(120% 90% at 50% 100%, rgba(225,161,0,.08), transparent 50%)',
      }}
    >
      <div className="mx-auto max-w-shell">
        <div className="mb-12 text-center">
          <p className="mb-3.5 font-mono text-[12px] uppercase tracking-[0.26em] text-gold">
            // 05 — Komm vorbei
          </p>
          <h2 className="m-0 font-display text-[clamp(36px,4.6vw,58px)] uppercase leading-none">
            Am Hafen, Münster
          </h2>
        </div>

        <div className="grid gap-7 md:grid-cols-2">
          {/* info card */}
          <div className="border-2 border-gold bg-cream p-8 text-navy">
            <div className="mb-5 font-script text-[22px] text-red">
              Anker &amp; Dolch Tattoo
            </div>

            <p className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-[#9a8c6a]">
              Adresse
            </p>
            <p className="mb-5 font-body text-base leading-[1.6]">
              Hafenweg 14
              <br />
              48155 Münster
            </p>

            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#9a8c6a]">
              Öffnungszeiten
            </p>
            <div className="mb-5">
              {HOURS.map(([day, time, closed]) => (
                <div
                  key={day}
                  className="flex justify-between border-b border-navy/15 py-2 font-body text-sm last:border-b-0"
                >
                  <span>{day}</span>
                  <span className={closed ? 'text-red' : 'font-bold'}>{time}</span>
                </div>
              ))}
            </div>

            <p className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-[#9a8c6a]">
              Kontakt
            </p>
            <p className="font-body text-base leading-[1.7]">
              <a href="tel:+4925122148" className="hover:text-red">
                0251 / 22 14 88
              </a>
              <br />
              <a
                href="https://instagram.com/anker.dolch"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red"
              >
                @anker.dolch
              </a>{' '}
              ·{' '}
              <a href="mailto:hallo@anker-dolch.de" className="hover:text-red">
                hallo@anker-dolch.de
              </a>
            </p>
          </div>

          {/* map (loads only after consent) */}
          <div className="border-2 border-gold bg-cream p-[11px]">
            <MapEmbed />
          </div>
        </div>

        {/* inquiry form */}
        <div className="mt-7 border-2 border-gold bg-cream p-8 text-navy">
          <div className="mb-5 font-script text-[22px] text-red">
            Schick uns deine Idee
          </div>

          {state.status === 'success' ? (
            <div className="flex flex-col items-center gap-3 py-10 text-center">
              <span className="text-4xl text-red" aria-hidden="true">
                ★
              </span>
              <p className="max-w-md font-body text-lg text-navy">{state.message}</p>
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-sepia/70">
                Bis bald am Hafen.
              </p>
            </div>
          ) : (
            <form action={formAction} noValidate>
              {/* csrf + honeypot */}
              <input type="hidden" name="csrf-token" value={csrf} />
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute -left-[9999px]"
              />

              {state.status === 'error' && state.message && (
                <p
                  role="alert"
                  className="mb-4 border-2 border-red bg-red/10 px-4 py-3 font-body text-sm font-semibold text-red"
                >
                  {state.message}
                </p>
              )}

              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelCls}>Name</label>
                  <input id="name" name="name" required className={inputCls} placeholder="Dein Name" />
                  <FieldError msg={err.name} />
                </div>
                <div>
                  <label htmlFor="email" className={labelCls}>E-Mail</label>
                  <input id="email" name="email" type="email" required className={inputCls} placeholder="du@mail.de" />
                  <FieldError msg={err.email} />
                </div>
              </div>

              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone" className={labelCls}>Telefon (optional)</label>
                  <input id="phone" name="phone" className={inputCls} placeholder="0151 …" />
                  <FieldError msg={err.phone} />
                </div>
                <div>
                  <label htmlFor="artist" className={labelCls}>Wunsch-Künstler:in</label>
                  <select id="artist" name="artist" className={inputCls} defaultValue="Egal / Vorschlag">
                    <option>Egal / Vorschlag</option>
                    <option>Mac</option>
                    <option>Greta</option>
                    <option>Henning</option>
                    <option>Lotte</option>
                  </select>
                </div>
              </div>

              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                <div>
                  <label htmlFor="style" className={labelCls}>Stil / Motiv</label>
                  <input id="style" name="style" className={inputCls} placeholder="z. B. Anker, Rose …" />
                </div>
                <div>
                  <label htmlFor="placement" className={labelCls}>Körperstelle</label>
                  <input id="placement" name="placement" className={inputCls} placeholder="z. B. Unterarm" />
                </div>
                <div>
                  <label htmlFor="size" className={labelCls}>Größe ca. (cm)</label>
                  <input id="size" name="size" className={inputCls} placeholder="10" />
                </div>
              </div>

              <div className="mt-3">
                <label htmlFor="idea" className={labelCls}>Deine Idee</label>
                <textarea
                  id="idea"
                  name="idea"
                  required
                  className={`${inputCls} min-h-[110px] resize-y`}
                  placeholder="Beschreib kurz dein Wunsch-Tattoo …"
                />
                <FieldError msg={err.idea} />
              </div>

              <label className="mt-4 flex items-start gap-2.5 font-body text-[12px] leading-[1.5] text-sepia">
                <input type="checkbox" name="consent" className="mt-0.5 shrink-0" />
                <span>
                  Ich habe die{' '}
                  <a href="/datenschutz" className="font-semibold text-red underline-offset-2 hover:underline">
                    Datenschutzerklärung
                  </a>{' '}
                  gelesen und bin mit der Verarbeitung meiner Daten zur Bearbeitung
                  der Anfrage einverstanden (Art. 6 Abs. 1 b DSGVO).
                </span>
              </label>
              <FieldError msg={err.consent} />

              <button
                type="submit"
                disabled={pending || !csrf}
                className="mt-5 bg-red px-8 py-4 font-body text-sm font-bold uppercase tracking-[0.1em] text-cream shadow-[4px_4px_0_#1B2A4A] transition-transform duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#1B2A4A] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {pending ? 'Wird gesendet …' : '★ Anfrage senden ★'}
              </button>

              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.1em] text-sepia/70">
                🔒 Sichere Übertragung · CSRF-Schutz · Spam-Filter · tätowiert ab 18 Jahren
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
