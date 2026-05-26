"use client";

import Link from "next/link";
import { useState } from "react";

/**
 * EditionMagazine — magazine-style card for an R2JC edition.
 *
 * The "cover" is an empty frame, a deliberate placeholder waiting for R2JC's
 * official cover artwork. Pass `coverSrc` once the image is supplied and the
 * frame fills with it.
 *
 * Behind the cover, a stack of "pages" is hidden flush. On hover, each page
 * translates outward and rotates by a small angle proportional to its
 * distance from the centre — like a hand of cards fanning out. On unhover,
 * they slide back behind the cover with the same easing.
 *
 *   ┌─────────┐       hover →       ╲┌─────────┐╱
 *   │  empty  │              ─────► │   ┌──╱──┐│
 *   │  frame  │                     │   │empty││
 *   │         │                     │   │frame││
 *   └─────────┘                     │   └────┘│╲
 *      ───                           ───────────
 *    caption                          caption
 *
 * The whole card is wrapped in a Link when `href` is set.
 */

export type MagazinePage = {
  /** Image src for a designer portrait, runway shot, etc. */
  src?: string;
  /** Fallback text when no image (e.g. "À venir") */
  placeholder?: string;
};

type EditionMagazineProps = {
  number: string;
  year: string;
  title: string;
  subtitle?: string;
  eyebrow?: string;
  pages: MagazinePage[];
  href?: string;
  /** Official cover artwork once R2JC supplies it. Until then, the frame
   *  renders empty. */
  coverSrc?: string;
  /** Visual tone — currently always dark cover but reserved for future variants. */
  tone?: "dark";
};

export function EditionMagazine({
  number,
  year,
  title,
  subtitle,
  eyebrow,
  pages,
  href,
  coverSrc,
}: EditionMagazineProps) {
  const [hovered, setHovered] = useState(false);

  // Distribute pages symmetrically around the centre. Pages further from the
  // centre fan out more (bigger translate + bigger rotation).
  const count = pages.length;
  const center = (count - 1) / 2;
  const pagePositions = pages.map((_, i) => {
    const offset = i - center; // negative = left of centre, positive = right
    return {
      x: offset * 56, // px horizontal translate
      y: Math.abs(offset) * 6, // small downward bow for outer pages
      rotate: offset * 7, // degrees
    };
  });

  const card = (
    <div className="group block w-full">
      {/* FRAME AREA — empty cover sitting in front, pages fanning out behind.
          `isolate` creates a local stacking context so the cover's z-index
          can't escape and punch through the fixed burger-menu overlay (which
          lives at z-30 on the document root). */}
      <div
        className="relative isolate w-full aspect-[3/4]"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* PAGES — absolutely positioned, fan out on hover */}
        {pages.map((page, i) => {
          const pos = pagePositions[i];
          return (
            <div
              key={i}
              className="absolute inset-0 bg-pearl border border-noir/30 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.45)] overflow-hidden transition-transform duration-700 ease-editorial"
              style={{
                transform: hovered
                  ? `translate3d(${pos.x}px, ${pos.y}px, 0) rotate(${pos.rotate}deg)`
                  : "translate3d(0, 0, 0) rotate(0deg)",
                // Stagger z-index so the outermost pages sit deeper in the stack —
                // gives a more sculpted "spread of cards" look.
                zIndex: i + 1,
                transitionDelay: hovered
                  ? `${Math.abs(i - center) * 40}ms`
                  : `${(center - Math.abs(i - center)) * 40}ms`,
                // Only hint at GPU promotion while the animation is actually in
                // flight — see comment in earlier revision.
                willChange: hovered ? "transform" : "auto",
              }}
              aria-hidden
            >
              {page.src ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={page.src}
                  alt=""
                  className="w-full h-full object-cover"
                  loading="lazy"
                  draggable={false}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center font-mono text-[10px] uppercase tracking-wider-2 text-noir/40">
                  {page.placeholder ?? "—"}
                </div>
              )}
            </div>
          );
        })}

        {/* COVER — empty frame waiting for the official artwork.
            Renders the image when `coverSrc` is supplied; otherwise an empty
            blanc panel with a thin noir border that reads as a placeholder.
            `z-10` only has to beat the fan pages (which top out at ~z-4);
            the parent's `isolate` keeps this from leaking up the stacking
            tree. */}
        <div className="absolute inset-0 z-10 bg-blanc border border-noir/40 shadow-[0_16px_48px_-16px_rgba(0,0,0,0.35)] overflow-hidden">
          {coverSrc ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={coverSrc}
              alt={`${title} — couverture`}
              className="w-full h-full object-cover"
              draggable={false}
            />
          ) : (
            // Truly empty inside. The corner markers below identify *which*
            // edition's cover is missing without dressing the placeholder up
            // as a finished design.
            <div className="w-full h-full flex flex-col justify-between p-4 pointer-events-none">
              <span className="font-mono text-[9px] uppercase tracking-wider-2 text-noir/25">
                R2JC · {year}
              </span>
              <span className="self-end font-mono text-[9px] uppercase tracking-wider-2 text-noir/25 tabular-nums">
                {number}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* CAPTION — museum-plaque style block below the frame.
          Carries the edition identity that used to live inside the cover. */}
      <div className="mt-5 text-center">
        {eyebrow && (
          <div className="font-mono text-[10px] uppercase tracking-wider-2 text-noir/60 mb-2">
            {eyebrow}
          </div>
        )}
        <div className="font-display text-lg md:text-xl font-medium text-noir leading-tight">
          {title}
        </div>
        {subtitle && (
          <div className="font-mono text-[10px] uppercase tracking-wider-2 text-noir/50 mt-1">
            {subtitle}
          </div>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {card}
      </Link>
    );
  }
  return card;
}
