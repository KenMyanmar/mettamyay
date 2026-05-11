import { useReveal } from "@/hooks/useReveal";
import { useT } from "@/i18n/LangProvider";

const WhatIsBaka = () => {
  const t = useT();
  const ref = useReveal();

  return (
    <section id="what-is-baka" className="py-24 px-6 md:px-12 bg-mm-cream border-t border-mm-clay/10">
      <div ref={ref} className="mm-reveal max-w-[760px] mx-auto">
        <p className="font-display text-[0.65rem] tracking-[0.3em] uppercase text-mm-clay mb-6 flex items-center gap-3">
          <span className="w-8 h-px bg-mm-clay inline-block" />
          {t("baka.eyebrow")}
        </p>
        <h2 className="font-serif-elegant text-mm-charcoal mb-6 leading-[1.25]" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
          {t("baka.title")}
        </h2>
        <div className="w-10 h-0.5 bg-mm-clay mb-8" />
        <p className="text-[1.02rem] text-mm-earth leading-[1.85]">{t("baka.body")}</p>
      </div>
    </section>
  );
};

export default WhatIsBaka;
