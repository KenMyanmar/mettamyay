import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { useT } from "@/i18n/LangProvider";
import ApplicationDialog, { type RoleValue } from "./ApplicationDialog";
import type { DictKey } from "@/i18n/dictionary";

type Card = {
  titleKey: DictKey;
  durationKey: DictKey;
  audienceKey: DictKey;
  depositKey: DictKey;
  intent: RoleValue;
  accent: string; // tailwind border color class
};

const cards: Card[] = [
  { titleKey: "tx.a.title", durationKey: "tx.a.duration", audienceKey: "tx.a.audience", depositKey: "tx.a.deposit", intent: "client",  accent: "border-t-mm-clay" },
  { titleKey: "tx.b.title", durationKey: "tx.b.duration", audienceKey: "tx.b.audience", depositKey: "tx.b.deposit", intent: "support", accent: "border-t-mm-gold" },
  { titleKey: "tx.c.title", durationKey: "tx.c.duration", audienceKey: "tx.c.audience", depositKey: "tx.c.deposit", intent: "youth",   accent: "border-t-mm-moss" },
];

const TransformativeExperiences = () => {
  const t = useT();
  const ref = useReveal();
  const [open, setOpen] = useState(false);
  const [intent, setIntent] = useState<RoleValue>("client");

  const openWith = (i: RoleValue) => {
    setIntent(i);
    setOpen(true);
  };

  return (
    <section id="experiences" className="py-28 px-6 md:px-12 bg-mm-sand/30">
      <div className="max-w-[1200px] mx-auto">
        <p className="font-display text-[0.65rem] tracking-[0.3em] uppercase text-mm-clay mb-6 flex items-center gap-3">
          <span className="w-8 h-px bg-mm-clay inline-block" />
          {t("tx.eyebrow")}
        </p>
        <h2 className="font-serif-elegant text-mm-charcoal mb-3" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
          {t("tx.title")}
        </h2>
        <p className="text-mm-earth max-w-[560px] mb-14">{t("tx.body")}</p>

        <div ref={ref} className="mm-reveal grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <article
              key={c.titleKey}
              className={`bg-mm-warm-white border-t-4 ${c.accent} border border-mm-clay/15 p-7 rounded-sm flex flex-col`}
            >
              <h3 className="font-serif-elegant text-[1.5rem] text-mm-charcoal leading-snug mb-3">{t(c.titleKey)}</h3>
              <p className="font-display text-[0.7rem] tracking-[0.15em] uppercase text-mm-clay mb-5">{t(c.durationKey)}</p>
              <p className="text-[0.92rem] text-mm-earth leading-[1.7] mb-5">{t(c.audienceKey)}</p>
              <p className="text-[0.85rem] text-mm-charcoal-mid italic mb-7">{t(c.depositKey)}</p>
              <button
                type="button"
                onClick={() => openWith(c.intent)}
                className="mt-auto self-start text-[0.75rem] font-medium tracking-[0.12em] uppercase text-mm-warm-white bg-mm-clay px-5 py-2.5 rounded-sm hover:bg-mm-clay-dark transition-colors"
              >
                {t("tx.cta")}
              </button>
            </article>
          ))}
        </div>
      </div>

      <ApplicationDialog open={open} onOpenChange={setOpen} defaultRole={intent} />
    </section>
  );
};

export default TransformativeExperiences;
