/**
 * MediaZone — A reserved placement for a photo or video that R2JC will
 * eventually deliver. Each zone has a stable ID matching the Media Zone Map
 * so we can reference it in conversation with the R2JC team.
 *
 * Until the asset arrives, an elegant typographic fallback fills the space
 * — never a "missing image" embarrassment.
 */

import type { CSSProperties, ReactNode } from "react";

export type MediaZoneProps = {
  /** Stable ID, e.g. "HOME-V1", "HOME-G1", "ED-VID-02" */
  id: string;
  /** Asset kind expected to live here */
  kind: "video" | "image" | "gallery";
  /** Aspect ratio, e.g. "16/9", "4/5", "1/1" */
  ratio?: string;
  /** Description of what should live here (for editor + reviewer context) */
  brief: string;
  /** Priority tier from the media map */
  priority?: "P0" | "P1" | "P2";
  /** Optional custom fallback content. If absent, a typographic placeholder is used. */
  children?: ReactNode;
  /** When the real asset is available, pass its URL — fallback then disappears. */
  src?: string;
  /** Optional alt text once src is provided */
  alt?: string;
  /** Extra classes */
  className?: string;
  /** Inline style overrides */
  style?: CSSProperties;
};

export function MediaZone({
  id,
  kind,
  ratio = "16/9",
  brief,
  priority = "P1",
  children,
  src,
  alt,
  className = "",
  style,
}: MediaZoneProps) {
  const aspectStyle: CSSProperties = { aspectRatio: ratio, ...style };

  // Asset present — render it.
  if (src) {
    return (
      <figure
        data-media-zone={id}
        className={`relative overflow-hidden ${className}`}
        style={aspectStyle}
      >
        {kind === "video" ? (
          <video
            src={src}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          // Plain <img> intentionally — keeps the prototype framework-agnostic.
          // Swap to next/image when assets land.
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={alt ?? brief}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
      </figure>
    );
  }

  // No asset yet — typographic fallback.
  return (
    <div
      data-media-zone={id}
      data-priority={priority}
      className={`relative overflow-hidden border border-current/20 bg-current/[0.03] ${className}`}
      style={aspectStyle}
    >
      <div className="absolute inset-0 flex flex-col justify-between p-5 md:p-8 font-mono text-[10px] md:text-[11px] uppercase tracking-wider-2">
        <div className="flex justify-between opacity-60">
          <span>{id}</span>
          <span>{priority}</span>
        </div>

        <div className="self-center text-center max-w-[40ch]">
          {children ?? (
            <span className="opacity-80 leading-relaxed">{brief}</span>
          )}
        </div>

        <div className="flex justify-between opacity-60">
          <span>{kind.toUpperCase()}</span>
          <span>{ratio}</span>
        </div>
      </div>

      {/* Diagonal hairline — quietly signals "reserved zone" */}
      <svg
        aria-hidden
        className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="0.15" />
      </svg>
    </div>
  );
}
