import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        {/* Platzhalter — Flash-Galerie kommt als nächste Sektion */}
        <section className="mx-auto flex min-h-[40vh] max-w-shell flex-col items-center justify-center px-6 py-24 text-center">
          <p className="font-mono text-[12px] uppercase tracking-[0.26em] text-red">
            // Sektion 03 folgt
          </p>
          <h2 className="mt-4 font-display text-3xl uppercase leading-none text-navy sm:text-5xl">
            Flash-Galerie
          </h2>
        </section>
      </main>
    </>
  );
}
