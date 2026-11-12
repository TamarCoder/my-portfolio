"use client";

import { createContext, useContext, useEffect, useMemo, useSyncExternalStore, type ReactNode } from "react";
import { defaultLocale, isLocale, type Locale } from "@/app/i18n/locales";
import { dictionaries } from "@/app/i18n/dictionaries";
import type { Dictionary } from "@/app/i18n/types";

const STORAGE_KEY = "locale";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dictionary;
}

let listeners: Array<() => void> = [];
let currentLocale: Locale | null = null;

function readStoredLocale(): Locale {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return isLocale(stored) ? stored : defaultLocale;
  } catch {
    return defaultLocale;
  }
}

function getSnapshot(): Locale {
  currentLocale ??= readStoredLocale();
  return currentLocale;
}

function subscribe(listener: () => void) {
  listeners.push(listener);
  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
}

function setLocale(locale: Locale) {
  currentLocale = locale;
  try {
    localStorage.setItem(STORAGE_KEY, locale);
  } catch {
    // Private mode: the choice simply lasts until reload.
  }
  listeners.forEach((l) => l());
}

const LanguageContext = createContext<LanguageContextValue>({
  locale: defaultLocale,
  setLocale,
  t: dictionaries[defaultLocale],
});

export function useLanguage() {
  return useContext(LanguageContext);
}

export default function LanguageProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(subscribe, getSnapshot, () => defaultLocale);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo(() => ({ locale, setLocale, t: dictionaries[locale] }), [locale]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
