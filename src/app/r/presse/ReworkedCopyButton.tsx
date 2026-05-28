"use client";

import { useState } from "react";

/**
 * ReworkedCopyButton — dark-theme variant of the CopyButton. Same
 * clipboard behaviour; just swaps the border-noir for border-blanc
 * styling so it reads on bg-noir.
 */
export function ReworkedCopyButton({
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
      // Clipboard API unavailable — fail silently
    }
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className="font-mono text-[11px] uppercase tracking-wider-2 border-b border-blanc hover:text-silver hover:border-silver transition-colors pb-0.5"
    >
      {copied ? `${copiedLabel} ✓` : `${copyLabel} →`}
    </button>
  );
}
