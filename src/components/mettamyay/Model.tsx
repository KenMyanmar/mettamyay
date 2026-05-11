import { useReveal } from "@/hooks/useReveal";
import { useT } from "@/i18n/LangProvider";

const Model = () => {
  const t = useT();
  const ref = useReveal();

  // Cycle order: Learn → Build → Earn → Teach → Replicate.
  // Earn is placed before Teach so trainees do not parse the sequence as
  // "you cannot earn until you teach" — the multiplier still works because
  // Teach remains in the loop.
  const steps = [
    { tag: "model.s1.tag", title: "model.s1.t", body: "model.s1.b" },
    { tag: "model.s2.tag", title: "model.s2.t", body: "model.s2.b" },
    { tag: "model.s3.tag", title: "model.s3.t", body: "model.s3.b" },
    { tag: "model.s4.tag", title: "model.s4.t", body: "model.s4.b" },
    { tag: "model.s5.tag", title: "model.s5.t", body: "model.s5.b" },
  ] as const;

  return (
    <section id="model" className="py-28 px-6 md:px-12 bg-mm-charcoal text-mm-cream">
      <div className="max-w-[1200px] mx-auto">
        <p className="font-display text-[0.65rem] tracking-[0.3em] uppercase text-mm-clay mb-6 flex items-center gap-3">
          <span className="w-8 h-px bg-mm-clay inline-block" />
          {t("model.eyebrow")}
        </p>

        <div className="flex items-baseline gap-3 mb-4 flex-wrap">
          <h2 className="font-serif-elegant font-light text-mm-cream" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
            {t("model.title")}
          </h2>
          <span className="text-mm-gold text-2xl" aria-hidden>↻</span>
        </div>
        <p className="text-mm-sand/[0.55] text-base max-w-[560px] mb-16">{t("model.sub")}</p>

        <div ref={ref} className="mm-reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-0 relative">
          {steps.map((s) => (
            <div key={s.tag} className="relative p-7 md:p-8 border border-mm-clay/20 hover:bg-mm-clay/[0.08] transition-colors">
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
