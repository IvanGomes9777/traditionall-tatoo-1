import type { Metadata } from 'next';
import LegalShell from '@/components/LegalShell';

export const metadata: Metadata = {
  title: 'AGB',
  alternates: { canonical: '/agb' },
  robots: { index: false, follow: true },
};

export default function AgbPage() {
  return (
    <LegalShell title="AGB" updated="Juni 2026">
      <h2>1. Geltungsbereich</h2>
      <p>
        Diese Allgemeinen Geschäftsbedingungen gelten für alle Tätowier- und
        Beratungsleistungen von Anker &amp; Dolch Tattoo, Hafenweg 14, 48155
        Münster.
      </p>

      <h2>2. Mindestalter &amp; Eignung</h2>
      <p>
        Wir tätowieren ausschließlich Personen <strong>ab 18 Jahren</strong> mit
        gültigem amtlichen Lichtbildausweis. Keine Ausnahmen, auch nicht mit
        Einwilligung der Eltern. Keine Tätowierungen unter Alkohol-/Drogeneinfluss,
        bei bestimmten Erkrankungen oder während der Schwangerschaft. Vor jeder
        Tätowierung erfolgt eine Aufklärung und schriftliche Einwilligung.
      </p>

      <h2>3. Terminvereinbarung &amp; Anzahlung</h2>
      <p>
        Termine werden per Anfrage, telefonisch, per DM oder vor Ort vereinbart.
        Zur verbindlichen Reservierung kann eine Anzahlung verlangt werden, die
        mit dem Endpreis verrechnet wird. Bei Walk-ins (Fr &amp; Sa) gilt: first
        come, first served.
      </p>

      <h2>4. Stornierung &amp; Verspätung</h2>
      <p>
        Termine können bis 48 Stunden vorher kostenfrei verschoben werden. Bei
        späterer Absage oder Nichterscheinen kann die Anzahlung einbehalten
        werden. Bei Verspätung von mehr als 20 Minuten kann der Termin verfallen.
      </p>

      <h2>5. Preise</h2>
      <p>
        Flash-Motive starten bei 90 €. Custom-Arbeiten werden nach Tagessatz
        abgerechnet. Den verbindlichen Preis bzw. Kostenrahmen nennen wir vor
        Beginn der Arbeit.
      </p>

      <h2>6. Kein Widerrufsrecht</h2>
      <p>
        Tätowierungen sind individuell nach Kundenwunsch angefertigte, auf die
        Person zugeschnittene Leistungen. Ein Widerrufsrecht ist gemäß § 312g
        Abs. 2 Nr. 1 BGB ausgeschlossen.
      </p>

      <h2>7. Pflege &amp; Gewährleistung</h2>
      <p>
        Du erhältst eine Aftercare-Anleitung. Das Heilergebnis hängt maßgeblich
        von der Einhaltung dieser Pflegehinweise ab. Kostenfreie Nachstechtermine
        bieten wir nach unserem Ermessen innerhalb einer angemessenen Frist an,
        sofern die Pflegehinweise befolgt wurden.
      </p>

      <h2>8. Hygiene</h2>
      <p>
        Wir arbeiten ausschließlich mit sterilen Einwegmaterialien und nach den
        Vorgaben des Infektionsschutzgesetzes (§ 36 IfSG). Es werden nur
        EU-konforme (REACH-zugelassene) Farben verwendet.
      </p>

      <h2>9. Haftung</h2>
      <p>
        Wir haften nach den gesetzlichen Bestimmungen für Vorsatz und grobe
        Fahrlässigkeit. Für leichte Fahrlässigkeit haften wir nur bei Verletzung
        wesentlicher Vertragspflichten, begrenzt auf den vorhersehbaren,
        typischen Schaden.
      </p>

      <h2>10. Schlussbestimmungen</h2>
      <p>
        Es gilt deutsches Recht. Erfüllungsort ist Münster. Sollte eine
        Bestimmung unwirksam sein, bleiben die übrigen Bestimmungen wirksam.
      </p>
    </LegalShell>
  );
}
