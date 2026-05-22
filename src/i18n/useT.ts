"use client";

import { useContext } from "react";
import { LangContext } from "./LangProvider";

/**
 * Client-side hook to access the current locale + dictionary.
 * Must be used inside a <LangProvider>.
 */
export function useT() {
  const ctx = useContext(LangContext);
  if (!ctx) {
    throw new Error(
      "useT() must be used inside <LangProvider>. Check src/app/layout.tsx."
    );
  }
  return ctx;
}
