import { useReveal } from "@/hooks/useReveal";
import { useT } from "@/i18n/LangProvider";

// NOTE: Awaiting precise Naung Wal share-link from Ken. For now we center on
// PyinOoLwin Township with an approximate marker; swap the `src` once the
// canonical pin arrives.
const MAP_SRC =
  "https://www.google.com/maps?q=Pyin+Oo+Lwin,+Mandalay+Region,+Myanmar&hl=en&z=11&output=embed";

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

        <div className="rounded-sm overflow-hidden border border-mm-clay/20 shadow-sm aspect-[4/3] bg-mm-mist">
          <iframe
            title="Mettamyay location"
            src={MAP_SRC}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full border-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Location;
