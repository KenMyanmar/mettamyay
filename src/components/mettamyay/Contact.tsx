import { useReveal } from "@/hooks/useReveal";
import { useT } from "@/i18n/LangProvider";

const Contact = () => {
  const t = useT();
  const ref = useReveal();
  const phone = t("contact.phoneValue");
  const email = t("contact.emailValue");

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-mm-warm-white border-t border-mm-clay/10">
      <div ref={ref} className="mm-reveal max-w-[900px] mx-auto text-center">
        <p className="font-display text-[0.65rem] tracking-[0.3em] uppercase text-mm-clay mb-6 flex items-center justify-center gap-3">
          <span className="w-8 h-px bg-mm-clay inline-block" />
          {t("contact.eyebrow")}
        </p>
        <h2 className="font-serif-elegant text-mm-charcoal mb-10" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}>
          {t("contact.title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-[820px] mx-auto">
          <div className="border-l-2 border-mm-clay pl-5">
            <span className="font-display text-[0.65rem] tracking-[0.2em] uppercase text-mm-clay block mb-2">
              {t("contact.leadRole")}
            </span>
            <p className="font-serif-elegant text-[1.3rem] text-mm-charcoal leading-snug">{t("contact.leadName")}</p>
            <p className="text-[0.85rem] text-mm-earth mt-1 leading-snug">{t("contact.base")}</p>
          </div>

          <div className="border-l-2 border-mm-gold pl-5">
            <span className="font-display text-[0.65rem] tracking-[0.2em] uppercase text-mm-clay block mb-2">
              {t("contact.phoneLabel")}
            </span>
            <a href="tel:+959444013312" className="font-serif-elegant text-[1.3rem] text-mm-charcoal hover:text-mm-clay transition-colors">
              {phone}
            </a>
          </div>

          <div className="border-l-2 border-mm-moss pl-5">
            <span className="font-display text-[0.65rem] tracking-[0.2em] uppercase text-mm-clay block mb-2">
              {t("contact.emailLabel")}
            </span>
            <a href={`mailto:${email}`} className="font-serif-elegant text-[1.3rem] text-mm-charcoal hover:text-mm-clay transition-colors break-all">
              {email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
