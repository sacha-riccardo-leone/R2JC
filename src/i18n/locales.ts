/**
 * R2JC supported locales.
 * French is the canonical / fallback locale (R2JC is a Swiss French collective).
 */

export const LOCALES = ["fr", "en", "de", "it"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "fr";

export const LOCALE_LABELS: Record<Locale, { short: string; full: string }> = {
  fr: { short: "FR", full: "Français" },
  en: { short: "EN", full: "English" },
  de: { short: "DE", full: "Deutsch" },
  it: { short: "IT", full: "Italiano" },
};

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (LOCALES as readonly string[]).includes(value);
}
