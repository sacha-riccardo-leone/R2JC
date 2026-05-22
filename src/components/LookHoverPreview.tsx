"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

/**
 * LookHoverPreview — a single runway-look thumbnail that summons a larger
 * floating "quicklook" preview while hovered.
 *
 * Behavior:
 *   - Hover (fine pointer only) → a framed enlarged version appears beside the
 *     thumbnail with a 220ms ease-in animation.
 *   - The preview side-detects: appears to the right of the thumbnail if there's
 *     room, otherwise to the left, otherwise centered horizontally.
 *   - The preview is portaled to <body> so it escapes any ancestor's `transform`
 *     containing block (otherwise the Reveal/scroll-progress transforms would
 *     clip it within the card).
 *   - Closes on mouseleave AND on scroll (otherwise it would stick to its
 *     viewport coordinates while the thumb scrolls away).
 *   - Disabled entirely on touch devices via the `(pointer: fine)` media query —
 *     touch users just see the thumbnail with the same hover-scale as before.
 */
export function LookHoverPreview({
  src,
  alt,
  label,
}: {
  src: string;
  alt: string;
  label: string;
}) {
  const wrapperRef = useRef<HTMLElement>(null);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const [mounted, setMounted] = useState(false);

  // Preview dimensions — 4:5 portrait, comfortably larger than the thumbnail
  const PREVIEW_W = 320;
  const PREVIEW_H = 400;
  const MARGIN = 24;

  useEffect(() => {
    setMounted(true);
    // Close the preview if the page scrolls — the thumbnail moves but the
    // fixed-positioned preview wouldn't, so they'd visually disconnect.
    const onScroll = () => setPos(null);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const open = () => {
    if (!wrapperRef.current) return;
    // No-op on touch devices
    if (
      typeof window !== "undefined" &&
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches
    ) {
      return;
    }

    const rect = wrapperRef.current.getBoundingClientRect();
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    // Pick a side with enough horizontal room
    let x: number;
    if (rect.right + MARGIN + PREVIEW_W <= vw - 16) {
      x = rect.right + MARGIN;
    } else if (rect.left - MARGIN - PREVIEW_W >= 16) {
      x = rect.left - MARGIN - PREVIEW_W;
    } else {
      // No side fits — center horizontally over the thumbnail
      x = Math.max(
        16,
        Math.min(vw - PREVIEW_W - 16, rect.left + rect.width / 2 - PREVIEW_W / 2)
      );
    }

    // Vertically: align centers, then clamp to viewport
    let y = rect.top + rect.height / 2 - PREVIEW_H / 2;
    y = Math.max(16, Math.min(y, vh - PREVIEW_H - 56));

    setPos({ x, y });
  };

  const close = () => setPos(null);

  return (
    <figure
      ref={wrapperRef}
      className="group"
      onMouseEnter={open}
      onMouseLeave={close}
      onFocus={open}
      onBlur={close}
    >
      <div className="border border-noir/80 overflow-hidden bg-pearl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="block w-full aspect-[4/5] object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.04]"
        />
      </div>
      <figcaption className="mt-2 font-mono text-[10px] uppercase tracking-wider-2 text-noir/50 tabular-nums">
        {label}
      </figcaption>

      {mounted &&
        pos &&
        createPortal(
          <div
            className="fixed z-[60] pointer-events-none animate-preview-in"
            style={{ left: pos.x, top: pos.y, width: PREVIEW_W }}
            aria-hidden
          >
            <div className="border-[1.5px] border-noir bg-blanc shadow-[0_24px_60px_-16px_rgba(0,0,0,0.45)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt=""
                className="block w-full aspect-[4/5] object-cover"
              />
            </div>
            <p className="mt-2 text-center font-mono text-[10px] uppercase tracking-wider-2 text-noir/70 tabular-nums">
              {label}
            </p>
          </div>,
          document.body
        )}
    </figure>
  );
}
