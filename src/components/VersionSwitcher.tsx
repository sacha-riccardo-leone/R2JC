"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  getVersion,
  stripVersion,
  withVersion,
  type Version,
} from "@/lib/version";

/**
 * VersionSwitcher — dropdown that hops between the Upgraded and Reworked
 * sites while preserving the equivalent path.
 *
 * Visually mirrors `<LanguageSwitcher>` so both header controls feel like
 * siblings. Header variant is the dark-on-dark pill used in the top bar;
 * mobile variant is the oversized version that appears inside the burger
 * takeover.
 */

type Choice = {
  value: Version;
  short: string;
  full: string;
  hint: string;
};

const CHOICES: Choice[] = [
  {
    value: "upgraded",
    short: "Up",
    full: "Upgraded",
    hint: "R2JC's site, refreshed",
  },
  {
    value: "reworked",
    short: "Re",
    full: "Reworked",
    hint: "Carte blanche · Sacha",
  },
];

export function VersionSwitcher({
  variant = "header",
}: {
  variant?: "header" | "mobile";
}) {
  const pathname = usePathname();
  const router = useRouter();
  const current = getVersion(pathname);
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on outside click / Escape — same pattern as LanguageSwitcher.
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

  const pick = (next: Version) => {
    setOpen(false);
    if (next === current) return;
    // Hop to the equivalent path on the other side. e.g. /editions →
    // /r/editions, or /r/postuler → /postuler.
    router.push(withVersion(stripVersion(pathname), next));
  };

  const isMobile = variant === "mobile";
  const currentLabel = CHOICES.find((c) => c.value === current)!.full;

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Version : ${currentLabel}`}
        className={`inline-flex items-center gap-2 font-display font-semibold uppercase tracking-nav transition-colors duration-300 ${
          isMobile
            ? "text-2xl text-blanc hover:text-silver"
            : "text-[13px] text-blanc hover:text-silver px-3 py-2"
        }`}
      >
        <span>{currentLabel}</span>
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
          <path
            d="M1 1l4 4 4-4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          className={`absolute z-50 ${
            isMobile ? "left-0 mt-3 w-64" : "right-0 mt-2 w-64"
          } bg-noir border border-blanc/15 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.6)] py-1`}
        >
          {CHOICES.map((c) => {
            const active = c.value === current;
            return (
              <li key={c.value}>
                <button
                  type="button"
                  role="option"
                  aria-selected={active}
                  onClick={() => pick(c.value)}
                  className={`w-full text-left px-4 py-3 transition-colors duration-200 flex flex-col gap-0.5 ${
                    active
                      ? "text-blanc bg-blanc/[0.06]"
                      : "text-mist/80 hover:text-blanc hover:bg-blanc/[0.04]"
                  }`}
                >
                  <span className="font-display text-[13px] uppercase tracking-nav flex justify-between items-baseline">
                    <span>{c.full}</span>
                    <span className="font-mono text-[10px] opacity-50">
                      {c.short}
                    </span>
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wider-2 opacity-50">
                    {c.hint}
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
