import { useReveal } from "@/hooks/useReveal";
import { useT } from "@/i18n/LangProvider";
import CouncilPortrait from "./CouncilPortrait";
import type { DictKey } from "@/i18n/dictionary";

type Member = { nameKey: DictKey; roleKey: DictKey; seed: string; lead?: boolean };

const members: Member[] = [
  { nameKey: "council.lead1.name", roleKey: "council.lead1.role", seed: "u-ngwe-tun", lead: true },
  { nameKey: "council.lead2.name", roleKey: "council.lead2.role", seed: "u-htay-team", lead: true },
  { nameKey: "council.m1.name",    roleKey: "council.m1.role",    seed: "razinda" },
  { nameKey: "council.m2.name",    roleKey: "council.m2.role",    seed: "nottara" },
  { nameKey: "council.m3.name",    roleKey: "council.m3.role",    seed: "pyi-htut" },
  { nameKey: "council.m4.name",    roleKey: "council.m4.role",    seed: "moe-myint" },
  { nameKey: "council.m5.name",    roleKey: "council.m5.role",    seed: "moe-shein" },
];

const Council = () => {
  const t = useT();
  const ref = useReveal();

  return (
    <section id="council" className="py-28 px-6 md:px-12 bg-mm-warm-white">
      <div className="max-w-[1200px] mx-auto">
        <p className="font-display text-[0.65rem] tracking-[0.3em] uppercase text-mm-clay mb-6 flex items-center gap-3">
          <span className="w-8 h-px bg-mm-clay inline-block" />
          {t("council.eyebrow")}
        </p>
        <h2 className="font-serif-elegant text-mm-charcoal mb-3" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
          {t("council.title")}
        </h2>
        <p className="text-mm-earth max-w-[520px] mb-14">{t("council.body")}</p>

        <div ref={ref} className="mm-reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((m) => (
            <article
              key={m.seed}
              className={`bg-mm-cream border ${m.lead ? "border-mm-clay/40" : "border-mm-clay/15"} rounded-sm p-6 flex gap-5 items-start`}
            >
              <div className="w-20 h-20 flex-shrink-0 rounded-sm overflow-hidden bg-mm-mist">
                <CouncilPortrait seed={m.seed} />
              </div>
              <div className="min-w-0">
                {m.lead && (
                  <span className="font-display text-[0.6rem] tracking-[0.2em] uppercase text-mm-gold block mb-1.5">
                    Lead
                  </span>
                )}
                <h3 className="font-serif-elegant text-[1.25rem] text-mm-charcoal leading-tight mb-1.5">
                  {t(m.nameKey)}
                </h3>
                <p className="text-[0.85rem] text-mm-earth leading-snug">{t(m.roleKey)}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Council;
