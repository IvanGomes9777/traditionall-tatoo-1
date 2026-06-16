import Link from 'next/link';
import CookieSettingsButton from '@/components/CookieSettingsButton';
import Reveal from '@/components/Reveal';

const NAV = [
  { label: 'Flash', href: '/#flash' },
  { label: 'Crew', href: '/#crew' },
  { label: 'Stimmen', href: '/#stimmen' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Kontakt', href: '/#kontakt' },
];

export default function Footer() {
  return (
    <footer>
      {/* CTA band */}
      <div className="bg-red px-6 py-12 text-center text-cream sm:py-14">
        <Reveal>
          <h2 className="m-0 font-display text-[clamp(1.625rem,3.4vw,2.5rem)] uppercase leading-none">
            Bereit für echtes Handwerk?
          </h2>
          <p className="mx-auto mt-4 max-w-md font-body text-base text-cream/85">
            Schreib uns deine Idee — oder komm Freitag &amp; Samstag zum Walk-in
            vorbei.
          </p>
          <Link
            href="/#kontakt"
            className="mt-6 inline-block bg-cream px-9 py-4 font-body text-sm font-bold uppercase tracking-[0.1em] text-navy shadow-[4px_4px_0_#1B2A4A] transition-transform duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#1B2A4A]"
          >
            ★ Termin anfragen ★
          </Link>
        </Reveal>
      </div>

      {/* footer bar */}
      <div className="bg-navy-dark px-6 py-9 text-cream sm:px-10">
        <Reveal className="mx-auto max-w-shell">
          <div className="flex flex-wrap items-center justify-between gap-6 border-b border-cream/15 pb-7">
            <Link
              href="/#top"
              className="flex items-center gap-2.5 font-script text-[1.375rem]"
            >
              <span aria-hidden="true">⚓</span> Anker &amp; Dolch
            </Link>
            <nav
              aria-label="Footer-Navigation"
              className="flex flex-wrap gap-x-6 gap-y-2 font-body text-[0.8125rem] font-semibold uppercase tracking-[0.08em]"
            >
              {NAV.map((l) => (
                <Link key={l.href} href={l.href} className="transition-colors hover:text-gold">
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-6 font-mono text-[0.6875rem] tracking-[0.1em] text-cream/55">
            <span>
              © {new Date().getFullYear()} Anker &amp; Dolch Tattoo · Bold &amp;
              true since 2012 · Tätowiert ab 18
            </span>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/impressum" className="transition-colors hover:text-cream">
                Impressum
              </Link>
              <Link href="/datenschutz" className="transition-colors hover:text-cream">
                Datenschutz
              </Link>
              <Link href="/agb" className="transition-colors hover:text-cream">
                AGB
              </Link>
              <CookieSettingsButton className="font-mono uppercase tracking-[0.1em] transition-colors hover:text-cream" />
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
