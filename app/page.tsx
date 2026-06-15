import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FlashGallery from '@/components/FlashGallery';
import Crew from '@/components/Crew';
import Stimmen from '@/components/Stimmen';

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <FlashGallery />
        <Crew />
        <Stimmen />

        {/* Platzhalter — FAQ kommt als nächste Sektion */}
        <section className="mx-auto flex min-h-[40vh] max-w-shell flex-col items-center justify-center px-6 py-24 text-center">
          <p className="font-mono text-[12px] uppercase tracking-[0.26em] text-red">
            // Sektion 06 folgt
          </p>
          <h2 className="mt-4 font-display text-3xl uppercase leading-none text-navy sm:text-5xl">
            FAQ
          </h2>
        </section>
      </main>
    </>
  );
}
