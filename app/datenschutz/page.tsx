import type { Metadata } from 'next';
import LegalShell from '@/components/LegalShell';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <LegalShell title="Datenschutz" updated="Juni 2026">
      <p>
        Der Schutz deiner persönlichen Daten ist uns wichtig. Wir verarbeiten
        deine Daten ausschließlich auf Grundlage der gesetzlichen Bestimmungen
        (DSGVO, BDSG, TDDDG).
      </p>

      <h2>1. Verantwortlicher</h2>
      <p>
        Anker &amp; Dolch Tattoo, Inhaber Magnus Reinhold, Hafenweg 14, 48155
        Münster · <a href="mailto:hallo@anker-dolch.de">hallo@anker-dolch.de</a>{' '}
        · 0251 / 22 14 88
      </p>

      <h2>2. Welche Daten wir verarbeiten</h2>
      <h3>2.1 Anfrage-/Kontaktformular</h3>
      <p>
        Name, E-Mail-Adresse, ggf. Telefonnummer, Wunsch-Künstler:in, Stil,
        Körperstelle, Größe und deine freie Beschreibung sowie deine
        IP-Adresse (zur Spam-Abwehr).
      </p>
      <ul>
        <li>
          <strong>Zweck:</strong> Bearbeitung deiner Anfrage und Terminanbahnung
        </li>
        <li>
          <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO
          (vorvertragliche Maßnahmen) bzw. lit. f (Spam-Abwehr)
        </li>
        <li>
          <strong>Speicherdauer:</strong> bis zur Erledigung der Anfrage, danach
          Löschung; bei Terminvereinbarung nach steuerlichen Fristen
        </li>
      </ul>

      <h3>2.2 Gesundheitsdaten (Aufklärung &amp; Einwilligung)</h3>
      <p>
        Vor jedem Tattoo erheben wir im Studio – nicht über diese Website – im
        Aufklärungsbogen Gesundheitsangaben (z. B. Allergien, Vorerkrankungen,
        Medikamente). Diese besonderen Kategorien personenbezogener Daten (Art.
        9 DSGVO) verarbeiten wir ausschließlich auf Basis deiner ausdrücklichen
        Einwilligung, bewahren sie gesondert gesichert auf und löschen sie nach
        Ablauf der gesetzlichen Aufbewahrungsfristen.
      </p>

      <h3>2.3 Tattoo-Fotos</h3>
      <p>
        Fotos deines Tattoos veröffentlichen wir (z. B. auf der Website oder
        Instagram) nur mit deiner gesonderten, jederzeit widerruflichen
        schriftlichen Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
      </p>

      <h3>2.4 Server-Logfiles</h3>
      <p>
        Beim Aufruf der Website werden durch unseren Hoster automatisch
        IP-Adresse, Zeitpunkt und angeforderte Ressource verarbeitet
        (berechtigtes Interesse, Art. 6 Abs. 1 lit. f DSGVO; Sicherheit und
        Stabilität).
      </p>

      <h2>3. Cookies &amp; Einwilligung</h2>
      <p>
        Technisch notwendige Cookies (z. B. CSRF-Schutz des Formulars) setzen wir
        ohne Einwilligung auf Grundlage von § 25 Abs. 2 TDDDG. Nicht notwendige
        Dienste (siehe Google Maps) laden wir erst nach deiner Einwilligung über
        unser Cookie-Banner (§ 25 Abs. 1 TDDDG, Art. 6 Abs. 1 lit. a DSGVO). Du
        kannst deine Auswahl jederzeit über „Cookie-Einstellungen" im Footer
        ändern.
      </p>

      <h2>4. Google Maps</h2>
      <p>
        Zur Anzeige unseres Standorts binden wir – erst nach deiner Einwilligung –
        Google Maps ein (Anbieter: Google Ireland Ltd.). Dabei können Daten,
        u. a. deine IP-Adresse, an Google übertragen werden, ggf. in die USA.
        Ohne Einwilligung wird die Karte nicht geladen; stattdessen siehst du
        einen Platzhalter.
      </p>

      <h2>5. Hosting</h2>
      <p>
        Diese Website wird bei Vercel Inc. gehostet. Mit dem Anbieter besteht ein
        Auftragsverarbeitungsvertrag; Übermittlungen erfolgen auf Basis der
        EU-Standardvertragsklauseln.
      </p>

      <h2>6. Deine Rechte</h2>
      <p>Dir stehen jederzeit folgende Rechte zu:</p>
      <ul>
        <li>Auskunft (Art. 15 DSGVO)</li>
        <li>Berichtigung (Art. 16 DSGVO)</li>
        <li>Löschung (Art. 17 DSGVO)</li>
        <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
        <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
        <li>Widerspruch (Art. 21 DSGVO)</li>
        <li>Widerruf erteilter Einwilligungen mit Wirkung für die Zukunft</li>
      </ul>
      <p>
        Anfragen richtest du an{' '}
        <a href="mailto:hallo@anker-dolch.de">hallo@anker-dolch.de</a>. Zudem hast
        du ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde (für uns:
        LDI Nordrhein-Westfalen).
      </p>
    </LegalShell>
  );
}
