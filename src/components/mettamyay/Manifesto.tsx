import { useReveal } from "@/hooks/useReveal";
import { useT } from "@/i18n/LangProvider";

const Manifesto = () => {
  const t = useT();
  const ref = useReveal();

  return (
    <section id="manifesto" className="py-28 px-6 md:px-12 bg-mm-cream border-t border-b border-mm-clay/[0.15]">
      <div ref={ref} className="mm-reveal max-w-[760px] mx-auto text-center">
        <p className="font-display text-[0.65rem] tracking-[0.3em] uppercase text-mm-clay mb-6 flex items-center justify-center gap-3">
          <span className="w-8 h-px bg-mm-clay inline-block" />
          {t("man.eyebrow")}
        </p>

        <h2 className="font-serif-elegant font-light leading-[1.3] text-mm-charcoal mb-8" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
          {t("man.title1")}
          <br />
          {t("man.title2a")} <em className="text-mm-clay italic">{t("man.title2b")}</em> {t("man.title2c")}
        </h2>

        <div className="w-10 h-0.5 bg-mm-clay mx-auto mb-8" />

        <p className="text-[1.05rem] text-mm-earth leading-[1.8] max-w-[600px] mx-auto">{t("man.body")}</p>

        <div className="bg-mm-cream border-l-[3px] border-mm-gold p-6 md:p-10 mt-16 max-w-[680px] text-left mx-auto">
          <blockquote className="font-serif-elegant text-[1.4rem] font-light italic text-mm-charcoal leading-[1.5] mb-4">
            "{t("man.quote")}"
          </blockquote>
          <cite className="text-[0.8rem] font-medium tracking-[0.1em] uppercase text-mm-clay not-italic">
            {t("man.quoteAuthor")}
          </cite>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
