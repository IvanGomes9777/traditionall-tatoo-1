import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FlashGallery from '@/components/FlashGallery';
import Crew from '@/components/Crew';
import Stimmen from '@/components/Stimmen';
import Faq from '@/components/Faq';
import Kontakt from '@/components/Kontakt';
import Footer from '@/components/Footer';

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
      </main>

      <Footer />
    </>
  );
}
