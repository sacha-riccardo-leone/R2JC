"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

/**
 * LookHoverPreview — a single runway-look thumbnail that summons a larger
 * floating "quicklook" preview while hovered.
 *
 * Robustness:
 *   - Position is recomputed every animation frame while hovered (RAF loop),
 *     so the preview follows the thumbnail even if it's mid-Reveal-animation
 *     (translateY 40px → 0 over 900ms). Previously the first hover during the
 *     entrance animation read a stale rect and the preview appeared offset
 *     from the thumb — making it look like hover "didn't work."
 *   - Portal'd to <body> so it escapes the Reveal's `transform` containing block.
 *   - Disabled on touch devices via the `(pointer: fine)` media query.
 *   - Closes on mouseleave AND on page scroll (so the fixed-positioned preview
 *     never disconnects from its thumbnail).
 *
 * Sizing:
 *   - 640 x 800 (4:5) — 2× the original size, fashion-editorial scale.
 *   - Vertically clamps to viewport (no overflow on smaller screens).
 *   - Horizontally side-detects: right of thumbnail by default, left if no room,
 *     centered as last resort.
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
  const rafRef = useRef<number | null>(null);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const [mounted, setMounted] = useState(false);

  const PREVIEW_W = 640;
  const PREVIEW_H = 800; // 4:5
  const MARGIN = 32;

  useEffect(() => {
    setMounted(true);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      setPos(null);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const compute = () => {
    if (!wrapperRef.current) return;
    const rect = wrapperRef.current.getBoundingClientRect();
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    // Available height for the preview (clamped to viewport)
    const previewH = Math.min(PREVIEW_H, vh - 48);
    const previewW = Math.min(PREVIEW_W, previewH * 4 / 5);

    // Side detection
    let x: number;
    if (rect.right + MARGIN + previewW <= vw - 16) {
      x = rect.right + MARGIN;
    } else if (rect.left - MARGIN - previewW >= 16) {
      x = rect.left - MARGIN - previewW;
    } else {
      x = Math.max(
        16,
        Math.min(vw - previewW - 16, rect.left + rect.width / 2 - previewW / 2)
      );
    }

    // Vertical: center against thumbnail, clamp to viewport
    let y = rect.top + rect.height / 2 - previewH / 2;
    y = Math.max(16, Math.min(y, vh - previewH - 32));

    setPos((prev) => {
      // Avoid React re-renders if nothing actually changed (within 1px)
      if (
        prev &&
        Math.abs(prev.x - x) < 1 &&
        Math.abs(prev.y - y) < 1
      ) {
        return prev;
      }
      return { x, y };
    });
  };

  const open = () => {
    // No-op on touch
    if (
      typeof window !== "undefined" &&
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches
    ) {
      return;
    }
    // Cancel any in-flight loop and start fresh
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    const loop = () => {
      compute();
      rafRef.current = requestAnimationFrame(loop);
    };
    loop();
  };

  const close = () => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    setPos(null);
  };

  // Adaptive sizing — match what `compute` uses so the rendered box agrees with the math
  const viewportH = typeof window !== "undefined" ? window.innerHeight : 1080;
  const previewH = Math.min(PREVIEW_H, viewportH - 48);
  const previewW = Math.min(PREVIEW_W, (previewH * 4) / 5);

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
            style={{ left: pos.x, top: pos.y, width: previewW }}
            aria-hidden
          >
            <div className="border-[1.5px] border-noir bg-blanc shadow-[0_32px_80px_-16px_rgba(0,0,0,0.5)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt=""
                style={{ height: previewH }}
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
