import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />

      <main id="top">
        {/* Placeholder — Hero kommt als nächste Sektion */}
        <section className="mx-auto flex min-h-[60vh] max-w-shell flex-col items-center justify-center px-6 py-24 text-center">
          <p className="font-mono text-[12px] uppercase tracking-[0.26em] text-red">
            // Sektion 02 folgt
          </p>
          <h1 className="mt-4 font-display text-4xl uppercase leading-none text-navy sm:text-6xl">
            Hero-Bereich
          </h1>
          <p className="mt-5 max-w-md font-body text-base leading-relaxed text-sepia">
            Die Navbar (Option 04 — Ticker Header) steht. Scrolle, teste das
            mobile Menü, hover über die Links. Als Nächstes bauen wir die
            Hero-Section.
          </p>
        </section>
      </main>
    </>
  );
}
