import { useEffect, useState } from "react";
import { useT } from "@/i18n/LangProvider";
import LangToggle from "./LangToggle";

const Nav = () => {
  const t = useT();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: t("nav.movement"),   href: "#manifesto" },
    { label: t("nav.howItWorks"), href: "#model" },
    { label: t("nav.pathways"),   href: "#pathways" },
    { label: t("nav.vision"),     href: "#vision" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] px-4 md:px-12 py-4 flex justify-between items-center gap-3 transition-all duration-300 ${
        scrolled ? "bg-mm-cream/[0.92] backdrop-blur-[12px] border-b border-mm-clay/[0.12]" : "bg-transparent"
      }`}
    >
      <a href="#" className="font-display text-[1rem] md:text-[1.1rem] font-medium tracking-[0.08em] text-mm-charcoal no-underline whitespace-nowrap">
        METTA<span className="text-mm-clay">MYAY</span>
      </a>

      <ul className="hidden md:flex gap-8 list-none">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="text-[0.78rem] font-medium tracking-[0.12em] uppercase text-mm-charcoal-mid no-underline hover:text-mm-clay transition-colors">
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-3">
        <LangToggle />
        <a
          href="#pathways"
          className="hidden sm:inline-block text-[0.72rem] md:text-[0.78rem] font-medium tracking-[0.1em] uppercase text-mm-warm-white bg-mm-clay px-4 py-2 rounded-sm no-underline hover:bg-mm-clay-dark transition-colors whitespace-nowrap"
        >
          {t("nav.join")}
        </a>
      </div>
    </nav>
  );
};

export default Nav;
