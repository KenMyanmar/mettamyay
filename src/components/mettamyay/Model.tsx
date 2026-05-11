import { useReveal } from "@/hooks/useReveal";
import { useT } from "@/i18n/LangProvider";

const Model = () => {
  const t = useT();
  const ref = useReveal();

  const steps = [
    { tag: "model.s1.tag", title: "model.s1.t", body: "model.s1.b" },
    { tag: "model.s2.tag", title: "model.s2.t", body: "model.s2.b" },
    { tag: "model.s3.tag", title: "model.s3.t", body: "model.s3.b" },
    { tag: "model.s4.tag", title: "model.s4.t", body: "model.s4.b" },
  ] as const;

  return (
    <section id="model" className="py-28 px-6 md:px-12 bg-mm-charcoal text-mm-cream">
      <div className="max-w-[1200px] mx-auto">
        <p className="font-display text-[0.65rem] tracking-[0.3em] uppercase text-mm-clay mb-6 flex items-center gap-3">
          <span className="w-8 h-px bg-mm-clay inline-block" />
          {t("model.eyebrow")}
        </p>

        <h2 className="font-serif-elegant font-light text-mm-cream mb-4" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
          {t("model.title")}
        </h2>
        <p className="text-mm-sand/[0.55] text-base max-w-[500px] mb-16">{t("model.sub")}</p>

        <div ref={ref} className="mm-reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 relative">
          {steps.map((s, i) => (
            <div key={s.tag} className="relative p-8 md:p-10 border border-mm-clay/20 hover:bg-mm-clay/[0.08] transition-colors">
              {i < steps.length - 1 && <div className="model-arrow hidden lg:block" />}
              <span className="font-display text-[0.6rem] tracking-[0.2em] text-mm-clay block mb-4">{t(s.tag)}</span>
              <h3 className="font-display text-base font-medium tracking-[0.1em] text-mm-gold mb-3">{t(s.title)}</h3>
              <p className="text-[0.88rem] text-mm-sand/[0.65] leading-[1.7]">{t(s.body)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Model;
