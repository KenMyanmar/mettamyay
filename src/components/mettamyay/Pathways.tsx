import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { useT } from "@/i18n/LangProvider";
import ApplicationDialog, { type RoleValue } from "./ApplicationDialog";
import type { DictKey } from "@/i18n/dictionary";

type Card = { icon: string; role: RoleValue; labelKey: DictKey; titleKey: DictKey; bodyKey: DictKey; ctaKey: DictKey };

const cards: Card[] = [
  { icon: "🌱", role: "train",      labelKey: "role.train.label",      titleKey: "role.train.title",      bodyKey: "role.train.body",      ctaKey: "role.train.cta" },
  { icon: "🌟", role: "youth",      labelKey: "role.youth.label",      titleKey: "role.youth.title",      bodyKey: "role.youth.body",      ctaKey: "role.youth.cta" },
  { icon: "☸",  role: "partner",    labelKey: "role.partner.label",    titleKey: "role.partner.title",    bodyKey: "role.partner.body",    ctaKey: "role.partner.cta" },
  { icon: "🏡", role: "client",     labelKey: "role.client.label",     titleKey: "role.client.title",     bodyKey: "role.client.body",     ctaKey: "role.client.cta" },
  { icon: "💛", role: "support",    labelKey: "role.support.label",    titleKey: "role.support.title",    bodyKey: "role.support.body",    ctaKey: "role.support.cta" },
  { icon: "⚒", role: "contractor", labelKey: "role.contractor.label", titleKey: "role.contractor.title", bodyKey: "role.contractor.body", ctaKey: "role.contractor.cta" },
];

const Pathways = () => {
  const t = useT();
  const ref = useReveal();
  const [open, setOpen] = useState(false);
  const [role, setRole] = useState<RoleValue>("train");

  const openWith = (r: RoleValue) => {
    setRole(r);
    setOpen(true);
  };

  return (
    <section id="pathways" className="py-28 px-6 md:px-12 bg-mm-mist">
      <div className="max-w-[1200px] mx-auto">
        <p className="font-display text-[0.65rem] tracking-[0.3em] uppercase text-mm-clay mb-6 flex items-center gap-3">
          <span className="w-8 h-px bg-mm-clay inline-block" />
          {t("path.eyebrow")}
        </p>

        <h2 className="font-serif-elegant text-mm-charcoal mb-3" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
          {t("path.title")}
        </h2>
        <p className="text-mm-earth max-w-[480px] mb-14">{t("path.sub")}</p>

        <div ref={ref} className="mm-reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c) => (
            <button
              key={c.role}
              type="button"
              onClick={() => openWith(c.role)}
              className="text-left block bg-mm-warm-white border border-mm-clay/[0.15] p-8 rounded-sm text-mm-charcoal hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(181,100,58,0.12)] hover:border-mm-clay transition-all"
            >
              <span className="text-[1.8rem] block mb-4">{c.icon}</span>
              <span className="font-display text-[0.75rem] tracking-[0.15em] uppercase text-mm-clay block mb-2">{t(c.labelKey)}</span>
              <h3 className="font-serif-elegant text-[1.4rem] font-medium text-mm-charcoal mb-3">{t(c.titleKey)}</h3>
              <p className="text-[0.9rem] text-mm-earth leading-[1.65]">{t(c.bodyKey)}</p>
              <span className="inline-flex items-center gap-2 mt-5 text-[0.75rem] font-medium tracking-[0.1em] uppercase text-mm-clay">
                {t(c.ctaKey)} →
              </span>
            </button>
          ))}
        </div>
      </div>

      <ApplicationDialog open={open} onOpenChange={setOpen} defaultRole={role} />
    </section>
  );
};

export default Pathways;
