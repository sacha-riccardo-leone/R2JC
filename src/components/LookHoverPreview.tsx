"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

/**
 * LookHoverPreview — a runway-look thumbnail that summons a larger floating
 * "quicklook" preview while hovered.
 *
 * Sizing: 640 × 800 (4:5) — adaptive-clamped to the viewport so it never
 * overflows on shorter laptop screens.
 *
 * Robustness notes:
 *   - The parent Reveal on the editions cards is set to `motion="fade"` (no
 *     translate), so this thumbnail never moves under a stationary cursor.
 *     That preserves the browser's mouseenter behavior — first hover always
 *     registers cleanly.
 *   - Preview is portaled to <body> to escape any ancestor `transform`
 *     containing block.
 *   - Disabled on touch devices via `(pointer: fine)` media query.
 *   - Closes on mouseleave AND on page scroll (so the fixed-positioned
 *     preview never disconnects from its thumbnail).
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
  const [pos, setPos] = useState<{
    x: number;
    y: number;
    w: number;
    h: number;
  } | null>(null);
  const [mounted, setMounted] = useState(false);

  const PREVIEW_W = 640;
  const PREVIEW_H = 800;
  const MARGIN = 32;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!pos) return;
    const onScroll = () => setPos(null);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pos]);

  const open = () => {
    if (!wrapperRef.current) return;
    // No-op on touch
    if (
      typeof window !== "undefined" &&
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches
    ) {
      return;
    }

    const rect = wrapperRef.current.getBoundingClientRect();
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    // Clamp preview to viewport (keeps 4:5 aspect ratio)
    const h = Math.min(PREVIEW_H, vh - 48);
    const w = Math.min(PREVIEW_W, (h * 4) / 5);

    // Side detection — right by default, left if no room, centered as last resort
    let x: number;
    if (rect.right + MARGIN + w <= vw - 16) {
      x = rect.right + MARGIN;
    } else if (rect.left - MARGIN - w >= 16) {
      x = rect.left - MARGIN - w;
    } else {
      x = Math.max(
        16,
        Math.min(vw - w - 16, rect.left + rect.width / 2 - w / 2)
      );
    }

    // Vertical: center against thumbnail, clamp to viewport
    let y = rect.top + rect.height / 2 - h / 2;
    y = Math.max(16, Math.min(y, vh - h - 32));

    setPos({ x, y, w, h });
  };

  const close = () => setPos(null);

  return (
    <figure
      ref={wrapperRef}
      className="group"
      onMouseEnter={open}
      onMouseLeave={close}
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
            style={{ left: pos.x, top: pos.y, width: pos.w }}
            aria-hidden
          >
            <div className="border-[1.5px] border-noir bg-blanc shadow-[0_32px_80px_-16px_rgba(0,0,0,0.5)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt=""
                style={{ height: pos.h }}
                className="block w-full object-cover"
              />
            </div>
            <p className="mt-2 text-center font-mono text-[11px] uppercase tracking-wider-2 text-noir/70 tabular-nums">
              {label}
            </p>
          </div>,
          document.body
        )}
    </figure>
  );
}
