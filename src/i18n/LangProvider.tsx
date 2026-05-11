import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { dict, type DictKey, type Lang } from "./dictionary";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: DictKey) => string;
};

const LangContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "mm.lang";

const detectInitial = (): Lang => {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
  if (stored === "en" || stored === "my") return stored;
  if (typeof navigator !== "undefined" && navigator.language?.toLowerCase().startsWith("my")) return "my";
  return "en";
};

export const LangProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLangState] = useState<Lang>("en");

  // Initialise after mount to avoid SSR/hydration mismatch
  useEffect(() => {
    setLangState(detectInitial());
  }, []);

  // Sync <html lang> so :lang(my) CSS rules fire when toggling.
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, l);
    }
  }, []);

  const t = useCallback(
    (key: DictKey) => {
      const entry = dict[key];
      if (!entry) {
        console.warn(`[i18n] missing key: ${String(key)}`);
        return String(key);
      }
      return entry[lang];
    },
    [lang],
  );

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
};

export const useLang = (): Ctx => {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside <LangProvider>");
  return ctx;
};

export const useT = () => useLang().t;
