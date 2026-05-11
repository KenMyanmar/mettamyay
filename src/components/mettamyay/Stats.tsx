import { useReveal } from "@/hooks/useReveal";
import { useT } from "@/i18n/LangProvider";

const Stats = () => {
  const t = useT();
  const ref = useReveal();

  const stats = [
    { num: "4", labelKey: "stats.pillars" },
    { num: "∞", labelKey: "stats.pathways" },
    { num: "1", labelKey: "stats.mission" },
    { num: "🌍", labelKey: "stats.global" },
  ] as const;

  return (
    <section className="py-28 px-6 md:px-12 bg-mm-sand">
      <div ref={ref} className="mm-reveal grid grid-cols-2 md:grid-cols-4 gap-12 max-w-[900px] mx-auto text-center">
        {stats.map((s) => (
          <div key={s.labelKey}>
            <div className="font-display text-mm-clay-dark leading-none mb-2" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>{s.num}</div>
            <div className="text-[0.85rem] font-medium tracking-[0.08em] uppercase text-mm-earth">{t(s.labelKey)}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
