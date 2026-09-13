import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { dictionaries, type TranslationKey } from "@/data/translations";

export const locales = ["pt", "en", "es", "fr"] as const;
export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, { label: string; short: string; flag: string }> = {
  pt: { label: "Português", short: "PT", flag: "🇵🇹" },
  en: { label: "English", short: "EN", flag: "🇬🇧" },
  es: { label: "Español", short: "ES", flag: "🇪🇸" },
  fr: { label: "Français", short: "FR", flag: "🇫🇷" },
};

const STORAGE_KEY = "paraxut-locale";

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: TranslationKey) => string;
};

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("pt");

  // Deteção de idioma apenas no cliente (evita hydration mismatch)
  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored && locales.includes(stored)) {
      setLocaleState(stored);
      return;
    }
    const browser = window.navigator.language.slice(0, 2).toLowerCase() as Locale;
    if (locales.includes(browser)) setLocaleState(browser);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  }, []);

  const t = useCallback((key: TranslationKey) => dictionaries[locale][key] ?? dictionaries.pt[key], [locale]);

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useI18n must be used inside LanguageProvider");
  return ctx;
}
