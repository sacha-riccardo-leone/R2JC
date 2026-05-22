"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

/**
 * LookHoverPreview — a runway-look thumbnail that summons a larger floating
 * "quicklook" preview while hovered.
 *
 * Sizing: 640 × 800 (4:5) — adaptive-clamped to viewport so it never overflows
 * shorter laptop screens.
 *
 * Robustness notes:
 *   - Editions cards use Reveal motion="fade" (no transform), so thumbnails
 *     stay still under the cursor and the browser fires mouseenter on first
 *     try every time. (Browsers don't fire mouseenter when an element moves
 *     under a stationary cursor.)
 *   - Scroll events DO NOT close the preview. Lenis smooth-scroll emits
 *     scroll events for several hundred ms after wheel input stops; closing
 *     on scroll caused the preview to disappear immediately after opening
 *     whenever you hovered shortly after scrolling. Instead, scroll events
 *     *recompute* the preview's position so it stays anchored to the
 *     thumbnail through any scrolling. mouseleave is the only thing that
 *     closes the preview.
 *   - Position recomputation on scroll is coalesced via requestAnimationFrame
 *     so we never run the math twice per frame regardless of scroll volume.
 *   - Portaled to <body> so the preview escapes any ancestor's transform
 *     containing block.
 *   - No-ops on touch devices via (pointer: fine) media query.
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

  const isHoveringRef = useRef(false);
  const scrollRafRef = useRef<number | null>(null);

  const PREVIEW_W = 640;
  const PREVIEW_H = 800;
  const MARGIN = 32;

  useEffect(() => {
    setMounted(true);
  }, []);

  const computePos = useCallback(() => {
    if (!wrapperRef.current) return null;
    const rect = wrapperRef.current.getBoundingClientRect();
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    // Clamp to viewport (keeps 4:5 aspect ratio)
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

    return { x, y, w, h };
  }, []);

  // Scroll → update position (do NOT close — Lenis smooth-scroll fires events
  // for hundreds of ms after wheel input stops, which would race the open).
  useEffect(() => {
    const onScroll = () => {
      if (!isHoveringRef.current) return;
      if (scrollRafRef.current !== null) return;
      scrollRafRef.current = requestAnimationFrame(() => {
        scrollRafRef.current = null;
        const next = computePos();
        if (next) {
          setPos((prev) => {
            if (
              prev &&
              Math.abs(prev.x - next.x) < 0.5 &&
              Math.abs(prev.y - next.y) < 0.5
            ) {
              return prev;
            }
            return next;
          });
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (scrollRafRef.current !== null) {
        cancelAnimationFrame(scrollRafRef.current);
        scrollRafRef.current = null;
      }
    };
  }, [computePos]);

  const open = () => {
    // No-op on touch
    if (
      typeof window !== "undefined" &&
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches
    ) {
      return;
    }
    isHoveringRef.current = true;
    const next = computePos();
    if (next) setPos(next);
  };

  const close = () => {
    isHoveringRef.current = false;
    setPos(null);
  };

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
