import { useT } from "@/i18n/LangProvider";

const Hero = () => {
  const t = useT();

  return (
    <section className="min-h-screen flex flex-col justify-center items-start px-6 md:px-12 pt-28 pb-20 relative overflow-hidden bg-mm-charcoal">
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(ellipse at 80% 50%, hsla(20,52%,46%,0.18) 0%, transparent 60%),
          radial-gradient(ellipse at 20% 80%, hsla(100,14%,25%,0.25) 0%, transparent 50%),
          linear-gradient(135deg, hsl(36,12%,11%) 0%, hsl(34,16%,13%) 50%, hsl(100,10%,9%) 100%)
        `
      }} />
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(hsla(20,52%,46%,0.06) 1px, transparent 1px),
          linear-gradient(90deg, hsla(20,52%,46%,0.06) 1px, transparent 1px)
        `,
        backgroundSize: "80px 80px"
      }} />

      <div className="relative z-[2] max-w-[900px]">
        <p className="font-display text-[0.7rem] tracking-[0.25em] uppercase text-mm-gold mb-8 mm-fade-up mm-fade-delay-1">
          {t("hero.eyebrow")}
        </p>

        <h1 className="font-serif-elegant font-light leading-[1.05] text-mm-cream mb-4 mm-fade-up mm-fade-delay-2" style={{ fontSize: "clamp(3rem, 8vw, 7.5rem)" }}>
          <span className="font-display font-medium text-mm-gold block mb-1 tracking-[0.1em]" style={{ fontSize: "clamp(1.8rem, 4.5vw, 4.5rem)" }}>
            {t("hero.brand")}
          </span>
          {t("hero.line1a")} <em className="italic text-mm-clay-light">{t("hero.line1b")}</em>
          <br />
          {t("hero.line2a")} <em className="italic text-mm-clay-light">{t("hero.line2b")}</em>
          <br />
          {t("hero.line3a")} <em className="italic text-mm-clay-light">{t("hero.line3b")}</em>
        </h1>

        <p className="font-serif-elegant font-light italic text-mm-sand/70 max-w-[560px] mb-12 mm-fade-up mm-fade-delay-3" style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)" }}>
          {t("hero.sub")}
        </p>

        <div className="flex gap-4 flex-wrap mm-fade-up mm-fade-delay-4">
          <a href="#manifesto" className="text-[0.78rem] font-medium tracking-[0.12em] uppercase text-mm-warm-white bg-mm-clay px-7 py-3.5 rounded-sm no-underline hover:bg-mm-clay-dark hover:-translate-y-0.5 transition-all inline-block">
            {t("hero.cta1")}
          </a>
          <a href="#pathways" className="text-[0.78rem] font-medium tracking-[0.12em] uppercase text-mm-sand bg-transparent px-7 py-3.5 rounded-sm no-underline border border-mm-sand/[0.35] hover:border-mm-gold hover:text-mm-gold transition-all inline-block">
            {t("hero.cta2")}
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-6 md:left-12 flex items-center gap-3 text-mm-sand/40 text-[0.7rem] tracking-[0.2em] uppercase mm-fade-up mm-fade-delay-5">
        <div className="w-10 h-px bg-mm-sand/30 relative overflow-hidden scroll-line-anim" />
        {t("hero.scroll")}
      </div>
    </section>
  );
};

export default Hero;
