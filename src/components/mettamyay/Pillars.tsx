import { useReveal } from "@/hooks/useReveal";
import { useT } from "@/i18n/LangProvider";

const Pillars = () => {
  const t = useT();
  const ref = useReveal();

  const pillars = [
    { num: "01", icon: "☸", titleKey: "pillar.spirit.title",      bodyKey: "pillar.spirit.body",      cls: "pillar-spirit" },
    { num: "02", icon: "🏔", titleKey: "pillar.earth.title",       bodyKey: "pillar.earth.body",       cls: "pillar-earth" },
    { num: "03", icon: "⚒", titleKey: "pillar.opportunity.title", bodyKey: "pillar.opportunity.body", cls: "pillar-opportunity" },
    { num: "04", icon: "✦", titleKey: "pillar.joy.title",         bodyKey: "pillar.joy.body",         cls: "pillar-joy" },
  ] as const;

  return (
    <section id="pillars" className="py-28 px-6 md:px-12 bg-mm-warm-white">
      <div className="max-w-[1200px] mx-auto">
        <p className="font-display text-[0.65rem] tracking-[0.3em] uppercase text-mm-clay mb-6 flex items-center gap-3">
          <span className="w-8 h-px bg-mm-clay inline-block" />
          {t("pillars.eyebrow")}
        </p>

        <h2 className="font-serif-elegant text-mm-charcoal leading-[1.2] max-w-[500px] mb-16" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
          {t("pillars.title1")}
          <br />
          {t("pillars.title2")}
        </h2>

        <div ref={ref} className="mm-reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0.5 border-2 border-mm-charcoal">
          {pillars.map((p, i) => (
            <div key={p.num} className={`pillar-card ${p.cls} p-8 md:p-10 bg-mm-warm-white border border-mm-charcoal/[0.08] hover:bg-mm-mist transition-colors mm-reveal-delay-${i + 1}`}>
              <span className="font-display text-[0.65rem] tracking-[0.2em] text-mm-clay block mb-6">{p.num}</span>
              <span className="text-[2rem] block mb-5">{p.icon}</span>
              <h3 className="font-display text-[0.9rem] font-medium tracking-[0.12em] uppercase text-mm-charcoal mb-4">{t(p.titleKey)}</h3>
              <p className="text-[0.95rem] text-mm-earth leading-[1.75]">{t(p.bodyKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
