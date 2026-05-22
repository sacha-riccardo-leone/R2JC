"use client";

import { useEffect, useRef, useState } from "react";
import { LOCALES, LOCALE_LABELS, type Locale } from "./locales";
import { useT } from "./useT";

/**
 * LanguageSwitcher — small dropdown for the header.
 * Shows the current locale short code (FR/EN/DE/IT), opens a list on click.
 *
 * Layout-tonal: meant to sit in the dark header. The `variant` prop lets it
 * adapt to the mobile-menu (light-on-dark already).
 */
export function LanguageSwitcher({
  variant = "header",
}: {
  variant?: "header" | "mobile";
}) {
  const { locale, setLocale } = useT();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on click outside
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const pick = (next: Locale) => {
    setOpen(false);
    setLocale(next);
  };

  const isMobile = variant === "mobile";

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={LOCALE_LABELS[locale].full}
        className={`inline-flex items-center gap-2 font-display font-semibold uppercase tracking-nav transition-colors duration-300 ${
          isMobile
            ? "text-2xl text-blanc hover:text-silver"
            : "text-[13px] text-blanc hover:text-silver px-3 py-2"
        }`}
      >
        <span>{LOCALE_LABELS[locale].short}</span>
        <svg
          aria-hidden
          viewBox="0 0 10 6"
          className={`h-[6px] w-[10px] transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M1 1l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          className={`absolute z-50 ${
            isMobile
              ? "left-0 mt-3 w-44"
              : "right-0 mt-2 w-44"
          } bg-noir border border-blanc/15 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.6)] py-1`}
        >
          {LOCALES.map((l) => {
            const active = l === locale;
            return (
              <li key={l}>
                <button
                  type="button"
                  role="option"
                  aria-selected={active}
                  onClick={() => pick(l)}
                  className={`w-full text-left px-4 py-2.5 font-display text-[13px] uppercase tracking-nav transition-colors duration-200 flex justify-between items-center ${
                    active
                      ? "text-blanc bg-blanc/[0.06]"
                      : "text-mist/80 hover:text-blanc hover:bg-blanc/[0.04]"
                  }`}
                >
                  <span>{LOCALE_LABELS[l].full}</span>
                  <span className="font-mono text-[10px] opacity-50">
                    {LOCALE_LABELS[l].short}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
