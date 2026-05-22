/**
 * MediaZone — A reserved placement for a photo or video.
 *
 * Each zone has a stable ID (e.g. `SPONSOR-so-sushi`, `HOME-V1`, `ED-PORTRAIT-loric-bernard`).
 * Until R2JC delivers an asset, the zone shows an elegant typographic fallback
 * with the ID, priority, and brief.
 *
 * To fill a zone:
 *   1. Drop the file at `public/media/<folder>/<filename>` (see the per-folder README).
 *   2. Pass `src="/media/<folder>/<filename>"` to the component.
 *      OR set `auto` and let the page resolve it for you.
 */

import type { CSSProperties, ReactNode } from "react";

export type MediaZoneProps = {
  /** Stable ID, e.g. "HOME-V1", "SPONSOR-so-sushi", "ED-PORTRAIT-loric-bernard" */
  id: string;
  /** Asset kind expected to live here */
  kind: "video" | "image" | "gallery";
  /** Aspect ratio, e.g. "16/9", "4/5", "1/1" */
  ratio?: string;
  /** Description of what should live here */
  brief: string;
  /** Priority tier from the media map */
  priority?: "P0" | "P1" | "P2";
  /** Optional custom fallback content */
  children?: ReactNode;
  /** When the real asset is available, pass its URL — fallback then disappears. */
  src?: string;
  /** Optional alt text once src is provided */
  alt?: string;
  /** Visible label shown in the fallback (e.g. "Sō Sushi") */
  label?: string;
  /** Extra classes */
  className?: string;
  /** Inline style overrides */
  style?: CSSProperties;
  /** Visual tone of the placeholder ("light" on dark sections, "dark" on light) */
  tone?: "auto" | "light" | "dark";
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
  label,
  className = "",
  style,
  tone = "auto",
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
            preload="auto"
            disablePictureInPicture
            controlsList="nodownload noplaybackrate nofullscreen noremoteplayback"
            tabIndex={-1}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={alt ?? label ?? brief}
            className="absolute inset-0 w-full h-full object-contain"
          />
        )}
      </figure>
    );
  }

  // No asset yet — typographic fallback.
  const toneClass =
    tone === "light"
      ? "border-blanc/25 bg-blanc/[0.03] text-blanc"
      : tone === "dark"
      ? "border-noir/20 bg-noir/[0.03] text-noir"
      : "border-current/20 bg-current/[0.03]";

  return (
    <div
      data-media-zone={id}
      data-priority={priority}
      className={`relative overflow-hidden border ${toneClass} ${className}`}
      style={aspectStyle}
    >
      <div className="absolute inset-0 flex flex-col justify-between p-4 md:p-5 font-mono text-[10px] uppercase tracking-wider-2">
        <div className="flex justify-between opacity-50">
          <span>{id}</span>
          <span>{priority}</span>
        </div>

        <div className="self-center text-center max-w-[34ch]">
          {children ?? (
            <>
              {label && (
                <div className="font-display text-sm md:text-base font-medium tracking-normal normal-case opacity-90 mb-1">
                  {label}
                </div>
              )}
              <span className="opacity-60 leading-snug text-[10px] normal-case tracking-normal">
                {brief}
              </span>
            </>
          )}
        </div>

        <div className="flex justify-between opacity-50">
          <span>{kind.toUpperCase()}</span>
          <span>{ratio}</span>
        </div>
      </div>
    </div>
  );
}
