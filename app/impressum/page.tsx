import type { Metadata } from 'next';
import LegalShell from '@/components/LegalShell';

export const metadata: Metadata = {
  title: 'Impressum',
  alternates: { canonical: '/impressum' },
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <LegalShell title="Impressum" updated="Juni 2026">
      <h2>Angaben gemäß § 5 TMG</h2>
      <p>
        Anker &amp; Dolch Tattoo
        <br />
        Inhaber: Magnus Reinhold
        <br />
        Hafenweg 14
        <br />
        48155 Münster
        <br />
        Deutschland
      </p>

      <h2>Kontakt</h2>
      <p>
        Telefon: 0251 / 22 14 88
        <br />
        E-Mail: <a href="mailto:hallo@anker-dolch.de">hallo@anker-dolch.de</a>
        <br />
        Instagram:{' '}
        <a href="https://instagram.com/anker.dolch" target="_blank" rel="noopener noreferrer">
          @anker.dolch
        </a>
      </p>

      <h2>Umsatzsteuer-ID</h2>
      <p>
        Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:
        <br />
        DE— (Platzhalter — bitte eintragen)
      </p>

      <h2>Aufsichtsbehörde / Gewerbe</h2>
      <p>
        Das Tätowieren ist ein anzeigepflichtiges Gewerbe. Anzeige beim
        Gesundheitsamt der Stadt Münster gemäß § 36 Infektionsschutzgesetz
        (IfSG). Es werden ausschließlich nach EU-Verordnung (REACH) zugelassene
        Tätowierfarben verwendet.
      </p>

      <h2>Redaktionell verantwortlich</h2>
      <p>
        Magnus Reinhold, Anschrift wie oben.
      </p>

      <h2>Haftung für Inhalte</h2>
      <p>
        Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf
        diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Trotz
        sorgfältiger Kontrolle übernehmen wir keine Haftung für die Inhalte
        externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich
        deren Betreiber verantwortlich.
      </p>

      <h2>Urheberrecht</h2>
      <p>
        Die auf dieser Website veröffentlichten Inhalte und Werke unterliegen dem
        deutschen Urheberrecht. Jede Vervielfältigung, Bearbeitung oder
        Verbreitung außerhalb der Grenzen des Urheberrechts bedarf der
        schriftlichen Zustimmung des jeweiligen Urhebers. Abgebildete Tattoo-
        und Flash-Motive sind Eigentum der jeweiligen Künstler:innen.
      </p>

      <h2>Streitschlichtung</h2>
      <p>
        Die Europäische Kommission stellt eine Plattform zur
        Online-Streitbeilegung (OS) bereit:{' '}
        <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
          ec.europa.eu/consumers/odr
        </a>
        . Wir sind nicht verpflichtet und nicht bereit, an einem
        Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
        teilzunehmen.
      </p>
    </LegalShell>
  );
}
