import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FlashGallery from '@/components/FlashGallery';
import Crew from '@/components/Crew';
import Stimmen from '@/components/Stimmen';
import Faq from '@/components/Faq';
import Kontakt from '@/components/Kontakt';

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
        <Kontakt />

        {/* Platzhalter — Footer kommt als nächste Sektion */}
        <section className="mx-auto flex min-h-[30vh] max-w-shell flex-col items-center justify-center px-6 py-20 text-center">
          <p className="font-mono text-[12px] uppercase tracking-[0.26em] text-red">
            // Sektion 08 folgt
          </p>
          <h2 className="mt-4 font-display text-3xl uppercase leading-none text-navy sm:text-5xl">
            Footer
          </h2>
        </section>
      </main>
    </>
  );
}
