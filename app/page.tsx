import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FlashGallery from '@/components/FlashGallery';
import Crew from '@/components/Crew';
import Stimmen from '@/components/Stimmen';
import Faq from '@/components/Faq';
import Kontakt from '@/components/Kontakt';
import Footer from '@/components/Footer';
import { FAQS } from '@/lib/faq';

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
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
