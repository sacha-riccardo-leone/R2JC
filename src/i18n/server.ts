/**
 * Server-only i18n helpers — use from Server Components and Route Handlers.
 * Client components must use `useT()` from "@/i18n" instead.
 */

import "server-only";
import { cookies } from "next/headers";
import { DICTIONARIES, LOCALE_COOKIE } from "./index";
import { DEFAULT_LOCALE, isLocale, type Locale } from "./locales";

/** Read the current locale from the request cookie. */
export async function getLocale(): Promise<Locale> {
  const store = await cookies();
  const value = store.get(LOCALE_COOKIE)?.value;
  return isLocale(value) ? value : DEFAULT_LOCALE;
}

/** Get the translation dictionary for the current request. */
export async function getDict() {
  const locale = await getLocale();
  return DICTIONARIES[locale];
}
