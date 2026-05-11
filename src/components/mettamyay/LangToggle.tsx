import { useLang } from "@/i18n/LangProvider";

const LangToggle = ({ subtle = false }: { subtle?: boolean }) => {
  const { lang, setLang } = useLang();
  const base = "px-2.5 py-1 text-[0.7rem] font-medium tracking-[0.12em] uppercase transition-colors";
  const active = subtle ? "text-mm-cream" : "text-mm-clay";
  const idle = subtle ? "text-mm-sand/50 hover:text-mm-cream" : "text-mm-charcoal-mid/60 hover:text-mm-clay";

  return (
    <div className="inline-flex items-center gap-0 border border-current/20 rounded-sm overflow-hidden" role="group" aria-label="Language">
      <button
        type="button"
        onClick={() => setLang("en")}
        className={`${base} ${lang === "en" ? active : idle}`}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
      <span className="w-px h-4 bg-current opacity-20" aria-hidden />
      <button
        type="button"
        onClick={() => setLang("my")}
        className={`${base} ${lang === "my" ? active : idle}`}
        aria-pressed={lang === "my"}
        lang="my"
      >
        မြန်မာ
      </button>
    </div>
  );
};

export default LangToggle;
