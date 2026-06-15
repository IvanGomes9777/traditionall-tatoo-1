import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FlashGallery from '@/components/FlashGallery';
import Crew from '@/components/Crew';
import Stimmen from '@/components/Stimmen';
import Faq from '@/components/Faq';

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <FlashGallery />
        <Crew />
        <Stimmen />
        <Faq />

        {/* Platzhalter — Kontakt kommt als nächste Sektion */}
        <section className="mx-auto flex min-h-[40vh] max-w-shell flex-col items-center justify-center bg-navy px-6 py-24 text-center text-cream">
          <p className="font-mono text-[12px] uppercase tracking-[0.26em] text-gold">
            // Sektion 07 folgt
          </p>
          <h2 className="mt-4 font-display text-3xl uppercase leading-none sm:text-5xl">
            Kontakt
          </h2>
        </section>
      </main>
    </>
  );
}
