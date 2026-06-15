import Link from 'next/link';
import Footer from '@/components/Footer';

export default function LegalShell({
  title,
  updated,
  children,
}: {
  title: string;
  updated?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      {/* minimal header (subpages have no in-page sections) */}
      <header className="sticky top-0 z-50 border-b-2 border-navy bg-cream/95 backdrop-blur">
        <div className="mx-auto flex max-w-shell items-center justify-between px-5 py-4 sm:px-8">
          <Link href="/" className="flex items-center gap-2 font-script text-[1.25rem] text-navy">
            <span aria-hidden="true">⚓</span> Anker &amp; Dolch
          </Link>
          <Link
            href="/"
            className="font-mono text-[0.75rem] uppercase tracking-[0.12em] text-navy transition-colors hover:text-red"
          >
            ← Startseite
          </Link>
        </div>
      </header>

      <main className="bg-cream px-5 py-16 sm:px-10">
        <div className="mx-auto max-w-[760px]">
          <p className="mb-3 font-mono text-[0.75rem] uppercase tracking-[0.26em] text-red">
            // Rechtliches
          </p>
          <h1 className="m-0 font-display text-[clamp(2rem,4.4vw,3.25rem)] uppercase leading-none text-navy">
            {title}
          </h1>
          {updated && (
            <p className="mt-3 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-sepia/70">
              Stand: {updated}
            </p>
          )}
          <div className="legal-prose mt-8">{children}</div>
        </div>
      </main>

      <Footer />
    </>
  );
}
