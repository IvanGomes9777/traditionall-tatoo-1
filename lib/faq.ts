export type QA = { q: string; a: string };

// Shared FAQ data — rendered visibly in <Faq> AND emitted as FAQPage JSON-LD.
// Answers kept substantial (~40–80 words) for GEO citation, matching the visible text.
export const FAQS: QA[] = [
  {
    q: 'Wie buche ich einen Termin?',
    a: 'Schreib uns über das Kontaktformular, per DM auf Instagram oder komm direkt vorbei. Wir melden uns mit einem Vorschlag, einer sauberen Skizze und einem verbindlichen Preis zurück. Für größere Projekte planen wir die nötigen Sessions gemeinsam, damit dein Motiv genug Zeit bekommt.',
  },
  {
    q: 'Gibt es Walk-ins?',
    a: 'Ja — jeden Freitag und Samstag von 11 bis 16 Uhr. Such dir ein Motiv von der Flash-Wand aus, first come, first served. Für individuelle oder größere Arbeiten empfehlen wir vorher einen Termin, damit dein Wunschkünstler Zeit für Entwurf und Stechen einplanen kann.',
  },
  {
    q: 'Was kostet ein Tattoo?',
    a: 'Flash-Motive starten bei 90 €, größere Custom-Arbeiten rechnen wir nach Tagessatz ab. Den genauen Preis oder Kostenrahmen nennen wir immer vor Beginn der Arbeit — transparent und ohne Überraschungen. Eine Anzahlung sichert deinen Termin und wird mit dem Endpreis verrechnet.',
  },
  {
    q: 'Ab welchem Alter darf ich mich tätowieren lassen?',
    a: 'Ausschließlich ab 18 Jahren mit gültigem amtlichen Lichtbildausweis. Keine Ausnahmen, auch nicht mit Einwilligung der Eltern. Vor jeder Tätowierung führen wir zudem ein Aufklärungsgespräch und holen deine schriftliche Einwilligung ein.',
  },
  {
    q: 'Wie pflege ich mein frisches Tattoo?',
    a: 'Du bekommst von uns ein Merkblatt mit allen Schritten. Kurz: sauber halten, dünn mit der empfohlenen Salbe eincremen und für rund zwei Wochen Solarium, Sauna, Schwimmbad und direkte Sonne meiden. Bei Fragen während der Heilung sind wir jederzeit für dich erreichbar.',
  },
  {
    q: 'Kann ich mein eigenes Design mitbringen?',
    a: 'Unbedingt. Bring Referenzen oder eine Skizze mit — wir verfeinern deine Idee gemeinsam zu einem sauberen Traditional-Entwurf mit kräftigen Linien, der auch in 30 Jahren noch gut aussieht. Reine Kopien fremder Arbeiten stechen wir aus Respekt vor den Künstlern nicht.',
  },
];
