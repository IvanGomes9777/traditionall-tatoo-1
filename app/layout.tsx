import type { Metadata } from 'next';
import { Alfa_Slab_One, Rye, Bitter, Space_Mono } from 'next/font/google';
import './globals.css';
import CookieConsent from '@/components/CookieConsent';

const alfa = Alfa_Slab_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-alfa',
  display: 'swap',
});
const rye = Rye({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-rye',
  display: 'swap',
});
const bitter = Bitter({
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-bitter',
  display: 'swap',
});
const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const SITE_URL = 'https://anker-dolch.de';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Anker & Dolch Tattoo — Traditional Tattoos, Münster',
    template: '%s · Anker & Dolch Tattoo',
  },
  description:
    'Old-School & American Traditional Tattoos am Hafen von Münster. Kräftige Linien, satte Farben, Walk-ins jeden Freitag & Samstag. Est. 2012.',
  keywords: [
    'Tattoo Münster',
    'Traditional Tattoo',
    'Old School Tattoo',
    'Walk-in Tattoo Münster',
    'Flash Tattoo',
    'Anker & Dolch',
  ],
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: SITE_URL,
    siteName: 'Anker & Dolch Tattoo',
    title: 'Anker & Dolch Tattoo — Traditional Tattoos, Münster',
    description:
      'Old-School & American Traditional Tattoos am Hafen von Münster. Bold & true since 2012.',
  },
  robots: { index: true, follow: true },
};

// Schema.org markup (TattooParlor) per MAGIC-TEMPLATE.md pre-launch checklist
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TattooParlor',
  name: 'Anker & Dolch Tattoo',
  description:
    'Old-School & American Traditional Tattoo Studio am Hafen von Münster.',
  url: SITE_URL,
  telephone: '+49 251 221488',
  email: 'hallo@anker-dolch.de',
  foundingDate: '2012',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Hafenweg 14',
    postalCode: '48155',
    addressLocality: 'Münster',
    addressCountry: 'DE',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '11:00',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '11:00',
      closes: '16:00',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="de"
      className={`${alfa.variable} ${rye.variable} ${bitter.variable} ${spaceMono.variable}`}
    >
      <body className="font-body antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
