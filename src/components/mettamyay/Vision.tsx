import { useReveal } from "@/hooks/useReveal";
import { useT } from "@/i18n/LangProvider";

const Vision = () => {
  const t = useT();
  const ref = useReveal();

  return (
    <section id="vision" className="py-28 px-6 md:px-12 bg-mm-moss text-center relative overflow-hidden vision-watermark">
      <div ref={ref} className="mm-reveal relative z-[1] max-w-[760px] mx-auto">
        <p className="font-serif-elegant italic text-mm-gold-light/80 text-[0.95rem] md:text-[1.05rem] tracking-wide mb-3">
          {t("refrain.line1a")} <em>{t("refrain.line1b")}</em> · {t("refrain.line2a")} <em>{t("refrain.line2b")}</em> · {t("refrain.line3a")} <em>{t("refrain.line3b")}</em>
        </p>
        <p className="font-display text-[0.65rem] tracking-[0.3em] uppercase text-mm-clay mb-6 flex items-center justify-center gap-3">
          <span className="w-8 h-px bg-mm-clay inline-block" />
          {t("vision.eyebrow")}
        </p>

        <h2 className="font-serif-elegant font-light text-mm-cream leading-[1.25] mb-8" style={{ fontSize: "clamp(2rem, 4.5vw, 3.8rem)" }}>
          {t("vision.t1")} <em className="italic text-mm-gold-light">{t("vision.t2")}</em> {t("vision.t3")} {t("vision.t4")} <em className="italic text-mm-gold-light">{t("vision.t5")}</em>
        </h2>

        <div className="w-10 h-0.5 bg-mm-clay mx-auto mb-8" />

        <p className="text-[1.05rem] text-mm-cream/[0.7] leading-[1.85] max-w-[560px] mx-auto mb-8">
          {t("vision.body")}
        </p>

        <p className="font-serif-elegant italic text-mm-sand/80 text-[1rem] leading-[1.7] max-w-[600px] mx-auto mb-12 border-t border-mm-sand/20 pt-6">
          {t("vision.wellbeing")}
        </p>

        <a href="#pathways" className="text-[0.78rem] font-medium tracking-[0.12em] uppercase text-mm-warm-white bg-mm-clay px-8 py-3.5 rounded-sm no-underline hover:bg-mm-clay-dark hover:-translate-y-0.5 transition-all inline-block">
          {t("vision.cta")}
        </a>
      </div>
    </section>
  );
};

export default Vision;
