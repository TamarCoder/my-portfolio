import type { Locale } from "@/app/i18n/locales";
import type { Dictionary } from "@/app/i18n/types";
import { ui as enUi } from "@/app/i18n/dictionaries/en/ui";
import { work as enWork } from "@/app/i18n/dictionaries/en/work";
import { ui as kaUi } from "@/app/i18n/dictionaries/ka/ui";
import { work as kaWork } from "@/app/i18n/dictionaries/ka/work";
import { ui as ruUi } from "@/app/i18n/dictionaries/ru/ui";
import { work as ruWork } from "@/app/i18n/dictionaries/ru/work";

export const dictionaries: Record<Locale, Dictionary> = {
  en: { ...enUi, ...enWork },
  ka: { ...kaUi, ...kaWork },
  ru: { ...ruUi, ...ruWork },
};
