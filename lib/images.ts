// Verified Unsplash images — each visually confirmed to show genuine
// American Traditional / Old-School tattoo work. Free for commercial use.
const u = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80`;

export const TATTOO_IMAGES = {
  // portrait forearm — lighthouse, swallows, roses, flames (bold traditional)
  forearmLighthouse: {
    src: u('1585303390830-874c989ce8f1'),
    alt: 'Old-School-Unterarm-Tattoo mit Leuchtturm, Schwalben und Rosen',
  },
  // portrait forearm — "HARD WORK" banner + skull (traditional)
  forearmSkull: {
    src: u('1543244128-30d70d41e2a9'),
    alt: 'Traditional-Unterarm-Tattoo mit Totenkopf und „Hard Work"-Banner',
  },
  // real traditional flash sheet — roses, skull, banners
  flashSheet: {
    src: u('1521308452854-e037c0062a1e'),
    alt: 'Traditionelles Tattoo-Flash-Blatt mit Rosen, Totenkopf und Spruchbändern',
  },
  // sleeve with banner lettering
  sleeveBanner: {
    src: u('1479767574301-a01c78234a0c'),
    alt: 'Farbiges Traditional-Sleeve-Tattoo mit Spruchband',
  },
  // leg — lady head, swallow, snake, roses
  legTraditional: {
    src: u('1601848714157-d845bb5c11ff'),
    alt: 'Bein mit klassischen Traditional-Motiven: Lady Head, Schwalbe, Schlange, Rosen',
  },
  // fully tattooed arms on black background
  armsBlack: {
    src: u('1759247943688-5d47a84dd615'),
    alt: 'Vollständig tätowierte Arme mit Traditional-Motiven vor schwarzem Hintergrund',
  },
} as const;
