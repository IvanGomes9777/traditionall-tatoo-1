import Image from 'next/image';
import { TATTOO_IMAGES } from '@/lib/images';

const CORNERS = [
  'left-4 top-4',
  'right-4 top-4',
  'bottom-4 left-4',
  'bottom-4 right-4',
];

function FlashFrame({
  image,
  rotate,
  shadow,
  delay,
  className = '',
}: {
  image: { src: string; alt: string };
  rotate: string;
  shadow: string;
  delay: string;
  className?: string;
}) {
  return (
    <div
      className={`border-2 border-navy bg-white p-2 motion-safe:animate-floatUp ${rotate} ${shadow} ${className}`}
      style={{ animationDelay: delay }}
    >
      <div className="relative h-full w-full border border-red/45">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 768px) 220px, 150px"
          className="object-cover"
        />
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] items-center px-5 py-10 sm:px-10"
    >
      <div className="relative mx-auto w-full max-w-shell bg-cream px-6 py-14 sm:px-12 sm:py-16">
        {/* decorative double border */}
        <div className="pointer-events-none absolute inset-0 border-2 border-navy" />
        <div className="pointer-events-none absolute inset-[7px] border border-red/50" />
        {/* twinkling corner stars */}
        {CORNERS.map((pos, i) => (
          <span
            key={pos}
            aria-hidden="true"
            className={`pointer-events-none absolute text-[19px] text-red motion-safe:animate-twinkle ${pos}`}
            style={{ animationDelay: `${i * 0.6}s` }}
          >
            ★
          </span>
        ))}

        <div className="relative flex flex-col items-center justify-center gap-9 md:flex-row md:gap-10">
          {/* left flash frame */}
          <FlashFrame
            image={TATTOO_IMAGES.forearmLighthouse}
            rotate="-rotate-3"
            shadow="shadow-[5px_6px_0_rgba(27,42,74,0.18)]"
            delay=".2s"
            className="order-2 h-[300px] w-[210px] shrink-0 md:order-1 md:h-[360px] md:w-[150px]"
          />

          {/* center text */}
          <div className="order-1 max-w-[600px] flex-1 text-center motion-safe:animate-floatUp md:order-2">
            <p className="mb-2.5 font-script text-[17px] text-red">
              ~ Münster · Old-School seit 2012 ~
            </p>
            <h1 className="m-0 font-display text-[clamp(46px,6.4vw,78px)] uppercase leading-[0.95] text-navy [text-wrap:balance]">
              Traditional
              <br />
              Tattoos
            </h1>
            <p className="mt-[18px] inline-block bg-red px-7 py-[7px] font-script text-[clamp(20px,2.6vw,30px)] text-cream shadow-[4px_4px_0_#1B2A4A] motion-safe:animate-swayBanner">
              — Done Right —
            </p>
            <p className="mx-auto mb-[30px] mt-[26px] max-w-[430px] font-body text-base leading-[1.7] text-sepia">
              Kräftige Linien. Satte Farben. Motive, die in 30 Jahren noch
              genauso sitzen. Echtes Handwerk am Hafen von Münster.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#kontakt"
                className="bg-navy px-8 py-4 font-body text-sm font-bold uppercase tracking-[0.1em] text-cream shadow-[4px_4px_0_#C1272D] transition-transform duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#C1272D]"
              >
                ★ Termin buchen ★
              </a>
              <a
                href="#flash"
                className="border-2 border-navy px-6 py-[15px] font-body text-sm font-semibold uppercase tracking-[0.08em] text-navy transition-colors duration-200 hover:bg-navy hover:text-cream"
              >
                Flash ansehen ↓
              </a>
            </div>
          </div>

          {/* right flash frame */}
          <FlashFrame
            image={TATTOO_IMAGES.forearmSkull}
            rotate="rotate-3"
            shadow="shadow-[-5px_6px_0_rgba(27,42,74,0.18)]"
            delay=".3s"
            className="order-3 h-[300px] w-[210px] shrink-0 md:h-[360px] md:w-[150px]"
          />
        </div>

        <div className="relative mt-10 text-right font-mono text-[11px] tracking-[0.12em] text-navy/45 sm:absolute sm:bottom-6 sm:right-6 sm:mt-0">
          // 4 künstler · walk-ins · bold &amp; true
        </div>
      </div>
    </section>
  );
}
