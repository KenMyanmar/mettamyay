import { useT } from "@/i18n/LangProvider";

const Footer = () => {
  const t = useT();

  return (
    <footer className="bg-mm-charcoal text-mm-sand/50 pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-wrap justify-between items-start gap-12 border-b border-mm-clay/20 pb-12 mb-8">
          <div>
            <div className="font-display text-[1.2rem] text-mm-cream font-medium tracking-[0.08em] mb-4">
              METTA<span className="text-mm-clay">MYAY</span>
            </div>
            <p className="font-serif-elegant italic text-mm-sand/60 text-[0.85rem] leading-[1.7] max-w-[260px]">
              {t("footer.tagline")}
            </p>
          </div>

          <div>
            <h4 className="font-display text-[0.7rem] tracking-[0.2em] uppercase text-mm-clay mb-5">{t("footer.col1")}</h4>
            <ul className="list-none space-y-2.5">
              <li><a href="#pillars" className="text-mm-sand/50 no-underline text-[0.88rem] hover:text-mm-cream transition-colors">{t("footer.l.pillars")}</a></li>
              <li><a href="#model"   className="text-mm-sand/50 no-underline text-[0.88rem] hover:text-mm-cream transition-colors">{t("footer.l.how")}</a></li>
              <li><a href="#pathways" className="text-mm-sand/50 no-underline text-[0.88rem] hover:text-mm-cream transition-colors">{t("footer.l.paths")}</a></li>
              <li><a href="#vision"  className="text-mm-sand/50 no-underline text-[0.88rem] hover:text-mm-cream transition-colors">{t("footer.l.vision")}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-[0.7rem] tracking-[0.2em] uppercase text-mm-clay mb-5">{t("footer.col2")}</h4>
            <ul className="list-none space-y-2.5">
              <li><a href="#pathways" className="text-mm-sand/50 no-underline text-[0.88rem] hover:text-mm-cream transition-colors">{t("footer.l.learn")}</a></li>
              <li><a href="#pathways" className="text-mm-sand/50 no-underline text-[0.88rem] hover:text-mm-cream transition-colors">{t("footer.l.partner")}</a></li>
              <li><a href="#pathways" className="text-mm-sand/50 no-underline text-[0.88rem] hover:text-mm-cream transition-colors">{t("footer.l.hire")}</a></li>
              <li><a href="#pathways" className="text-mm-sand/50 no-underline text-[0.88rem] hover:text-mm-cream transition-colors">{t("footer.l.support")}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-[0.7rem] tracking-[0.2em] uppercase text-mm-clay mb-5">{t("footer.col3")}</h4>
            <ul className="list-none space-y-2.5">
              <li><a href="https://metabumi.org" className="text-mm-sand/50 no-underline text-[0.88rem] hover:text-mm-cream transition-colors">{t("footer.l.site")}</a></li>
              <li><a href="#location" className="text-mm-sand/50 no-underline text-[0.88rem] hover:text-mm-cream transition-colors">{t("footer.l.country")}</a></li>
              <li><a href="#council"  className="text-mm-sand/50 no-underline text-[0.88rem] hover:text-mm-cream transition-colors">{t("footer.l.team")}</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap justify-between items-center gap-4 text-[0.78rem]">
          <span>{t("footer.copyright")}</span>
          <span className="font-serif-elegant text-[1.1rem] italic text-mm-sand/[0.35]">{t("footer.motto")}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
