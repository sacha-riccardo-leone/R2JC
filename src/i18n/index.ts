/**
 * Client-safe i18n exports.
 * Server components import { getDict, getLocale } from "@/i18n/server" instead.
 */

import fr from "./dictionaries/fr";
import en from "./dictionaries/en";
import de from "./dictionaries/de";
import it from "./dictionaries/it";

export { LOCALES, LOCALE_LABELS, DEFAULT_LOCALE, isLocale } from "./locales";
export type { Locale } from "./locales";
export type { Dictionary } from "./dictionaries/fr";

export const DICTIONARIES = { fr, en, de, it } as const;

export const LOCALE_COOKIE = "locale";

export { useT } from "./useT";
