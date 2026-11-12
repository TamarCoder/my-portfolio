export const locales = ["en", "ka", "ru"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, { short: string; full: string }> = {
  en: { short: "EN", full: "English" },
  ka: { short: "ქა", full: "ქართული" },
  ru: { short: "RU", full: "Русский" },
};

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (locales as readonly string[]).includes(value);
}
