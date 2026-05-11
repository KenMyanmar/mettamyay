import { useReveal } from "@/hooks/useReveal";
import { useT } from "@/i18n/LangProvider";

const Stats = () => {
  const t = useT();
  const ref = useReveal();

  // Honest launch values (11 May 2026). Replaces decorative 4 / ∞ / 1 / 🌍.
  const stats = [
    { num: "1", labelKey: "stats.village" },
    { num: "3", labelKey: "stats.levels" },
    { num: "5", labelKey: "stats.pathways" },
    { num: "📅", labelKey: "stats.updates" },
  ] as const;

  return (
    <section className="py-28 px-6 md:px-12 bg-mm-sand">
      <div ref={ref} className="mm-reveal grid grid-cols-2 md:grid-cols-4 gap-12 max-w-[1000px] mx-auto text-center">
        {stats.map((s) => (
          <div key={s.labelKey}>
            <div className="font-display text-mm-clay-dark leading-none mb-3" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>{s.num}</div>
            <div className="text-[0.85rem] font-medium tracking-[0.08em] uppercase text-mm-earth leading-snug">{t(s.labelKey)}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
