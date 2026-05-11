import { useReveal } from "@/hooks/useReveal";
import { useT } from "@/i18n/LangProvider";
import type { DictKey } from "@/i18n/dictionary";

const areKeys: DictKey[] = ["wwa.are1", "wwa.are2", "wwa.are3", "wwa.are4", "wwa.are5"];
const notKeys: DictKey[] = ["wwa.not1", "wwa.not2", "wwa.not3", "wwa.not4", "wwa.not5"];

const WhatWeAre = () => {
  const t = useT();
  const ref = useReveal();

  return (
    <section id="what-we-are" className="py-24 px-6 md:px-12 bg-mm-warm-white border-t border-mm-clay/10">
      <div ref={ref} className="mm-reveal max-w-[1100px] mx-auto">
        <p className="font-display text-[0.65rem] tracking-[0.3em] uppercase text-mm-clay mb-5 flex items-center gap-3">
          <span className="w-8 h-px bg-mm-clay inline-block" />
          {t("wwa.eyebrow")}
        </p>
        <h2 className="font-serif-elegant text-mm-charcoal mb-12 leading-[1.2]" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
          {t("wwa.title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-mm-clay/15">
          <div className="bg-mm-cream p-8 md:p-10">
            <h3 className="font-display text-[0.75rem] tracking-[0.2em] uppercase text-mm-clay mb-6">
              {t("wwa.areHeading")}
            </h3>
            <ul className="space-y-4">
              {areKeys.map((k) => (
                <li key={k} className="flex gap-3 text-mm-charcoal text-[0.95rem] leading-[1.6]">
                  <span className="text-mm-clay font-bold mt-0.5" aria-hidden>+</span>
                  <span>{t(k)}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-mm-mist p-8 md:p-10">
            <h3 className="font-display text-[0.75rem] tracking-[0.2em] uppercase text-mm-earth/70 mb-6">
              {t("wwa.notHeading")}
            </h3>
            <ul className="space-y-4">
              {notKeys.map((k) => (
                <li key={k} className="flex gap-3 text-mm-earth/70 text-[0.95rem] leading-[1.6]">
                  <span className="text-mm-earth/50 font-bold mt-0.5" aria-hidden>−</span>
                  <span className="line-through decoration-mm-earth/25">{t(k)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeAre;
