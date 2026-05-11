import { useReveal } from "@/hooks/useReveal";
import { useT } from "@/i18n/LangProvider";

// Iframe map removed pending canonical Naung Wal coordinates from Ken.
// An approximate pin reduces trust — text-only block until the real pin lands.
const Location = () => {
  const t = useT();
  const ref = useReveal();

  return (
    <section id="location" className="py-24 px-6 md:px-12 bg-mm-cream border-t border-mm-clay/10">
      <div ref={ref} className="mm-reveal max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="font-display text-[0.65rem] tracking-[0.3em] uppercase text-mm-clay mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-mm-clay inline-block" />
            {t("loc.eyebrow")}
          </p>
          <h2 className="font-serif-elegant text-mm-charcoal mb-6" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}>
            {t("loc.title")}
          </h2>
          <p className="text-mm-earth text-[1rem] leading-[1.85] max-w-[460px]">{t("loc.address")}</p>
        </div>

        <div className="rounded-sm border border-mm-clay/20 bg-mm-warm-white p-10 md:p-12 flex flex-col items-start gap-4">
          <span className="font-display text-[0.6rem] tracking-[0.25em] uppercase text-mm-clay">{t("loc.regionLabel")}</span>
          <p className="font-serif-elegant text-mm-charcoal text-[1.4rem] md:text-[1.6rem] leading-snug">
            {t("loc.regionShort")}
          </p>
          <p className="text-[0.85rem] text-mm-earth/75 italic leading-[1.6]">{t("loc.regionNote")}</p>
        </div>
      </div>
    </section>
  );
};

export default Location;
