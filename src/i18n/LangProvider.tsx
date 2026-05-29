"use client";

import { createContext, useCallback, useMemo, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { DICTIONARIES, LOCALE_COOKIE } from "./index";
import type { Locale, Dictionary } from "./index";

export type LangContextValue = {
  locale: Locale;
  t: Dictionary;
  setLocale: (next: Locale) => void;
};

export const LangContext = createContext<LangContextValue | null>(null);

/**
 * LangProvider — client-side context that exposes the current locale + dictionary
 * + a setter that writes the cookie and refreshes the route to pick up new
 * translations on server components.
 *
 * Always wraps the app once in the root layout, with `initialLocale` derived
 * from the cookie on the server so SSR matches client without flashing.
 */
export function LangProvider({
  initialLocale,
  children,
}: {
  initialLocale: Locale;
  children: ReactNode;
}) {
  const router = useRouter();

  const setLocale = useCallback(
    (next: Locale) => {
      if (next === initialLocale) return;
      // Set cookie for 1 year, site-wide.
      // Append `Secure` when we're on HTTPS so the cookie is only
      // sent on secure connections. Runtime check (rather than
      // build-time NODE_ENV) so localhost (http://) keeps working in
      // dev — Secure cookies aren't set on plain http: in some
      // browsers, which would silently break locale switching.
      const oneYear = 60 * 60 * 24 * 365;
      const isSecure =
        typeof window !== "undefined" && window.location.protocol === "https:";
      document.cookie =
        `${LOCALE_COOKIE}=${next}; path=/; max-age=${oneYear}; samesite=lax` +
        (isSecure ? "; secure" : "");
      // Re-render server components with the new cookie value
      router.refresh();
    },
    [initialLocale, router]
  );

  const value = useMemo<LangContextValue>(
    () => ({
      locale: initialLocale,
      t: DICTIONARIES[initialLocale],
      setLocale,
    }),
    [initialLocale, setLocale]
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}
