'use client';

import { useState } from 'react';
import Reveal from '@/components/Reveal';
import { FAQS, type QA } from '@/lib/faq';

function FaqItem({
  item,
  open,
  onToggle,
  index,
}: {
  item: QA;
  open: boolean;
  onToggle: () => void;
  index: number;
}) {
  const panelId = `faq-panel-${index}`;
  const btnId = `faq-button-${index}`;
  return (
    <div className="mb-3.5 border-2 border-navy bg-white">
      <h3 className="m-0">
        <button
          id={btnId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-body text-[17px] font-bold text-navy"
        >
          <span>{item.q}</span>
          <span
            aria-hidden="true"
            className={`shrink-0 text-[22px] text-red transition-transform duration-300 ${
              open ? 'rotate-45' : ''
            }`}
          >
            +
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={btnId}
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <p className="m-0 px-6 pb-[22px] font-body text-[15px] leading-[1.7] text-sepia">
            {item.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="flex min-h-[100dvh] flex-col justify-center bg-cream px-5 py-[90px] sm:px-10"
    >
      <div className="mx-auto max-w-[760px]">
        <Reveal className="mb-11 text-center">
          <p className="mb-3.5 font-mono text-[12px] uppercase tracking-[0.26em] text-red">
            // 04 — Gut zu wissen
          </p>
          <h2 className="m-0 font-display text-[clamp(34px,4.4vw,54px)] uppercase leading-none text-navy">
            Häufige Fragen
          </h2>
        </Reveal>

        {FAQS.map((item, i) => (
          <Reveal key={item.q} delay={i * 70}>
            <FaqItem
              item={item}
              index={i}
              open={openIndex === i}
              onToggle={() => setOpenIndex((cur) => (cur === i ? null : i))}
            />
          </Reveal>
        ))}

        <p className="mt-8 text-center font-body text-[15px] text-sepia">
          Noch eine Frage offen?{' '}
          <a
            href="#kontakt"
            className="font-bold text-red underline-offset-4 hover:underline"
          >
            Schreib uns →
          </a>
        </p>
      </div>
    </section>
  );
}
