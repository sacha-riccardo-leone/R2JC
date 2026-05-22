"use client";

import { useState } from "react";

/**
 * CopyButton — copies a string to the clipboard and shows a 2s "copied" state.
 * Falls back silently if the Clipboard API is unavailable.
 */
export function CopyButton({
  text,
  copyLabel,
  copiedLabel,
}: {
  text: string;
  copyLabel: string;
  copiedLabel: string;
}) {
  const [copied, setCopied] = useState(false);

  const onClick = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API not available — fail silently
    }
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className="font-mono text-[11px] uppercase tracking-wider-2 border-b border-noir hover:text-silver hover:border-silver transition-colors"
    >
      {copied ? `${copiedLabel} ✓` : `${copyLabel} →`}
    </button>
  );
}
