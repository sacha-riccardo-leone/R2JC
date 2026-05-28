"use client";

import { useEffect, useState } from "react";

/**
 * BackToTop — floating control that appears bottom-right once the
 * visitor has scrolled past ~1.5 viewport heights. One click smooth-
 * scrolls back to the top.
 *
 * Mounted globally from the root layout so it applies to every page on
 * both Upgraded and Reworked sides. Most useful on the heavy edition
 * pages (/editions/02 and /r/editions/02 each render 16 designer
 * specimen plates with runway look grids) where the previous return
 * path was 'scroll back manually'.
 *
 * Z-index sits below the burger takeover (z-30) so the button is
 * covered when the menu is open — we never want it competing with the
 * takeover for attention.
 *
 * window.scrollTo with smooth behaviour works fine alongside Lenis;
 * the smooth-scroll library only intercepts wheel/touch events, not
 * programmatic scrollTo calls.
 */
export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 1.5);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Retour en haut"
      className={`fixed bottom-6 right-6 md:bottom-10 md:right-10 z-20 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-noir/85 text-blanc border border-blanc/30 backdrop-blur-md transition-all duration-500 ease-editorial hover:bg-noir hover:border-blanc focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blanc ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      {/* Up-pointing wayfinding chevron — same anatomy as the §3 banner
          arrow, rotated 180° from the down-scroll-cue chevron under
          "R2JC". Square cap + miter join, no shaft. */}
      <svg
        width="22"
        height="14"
        viewBox="0 0 100 65"
        fill="none"
        stroke="currentColor"
        strokeWidth="10"
        strokeLinecap="square"
        strokeMiterlimit="10"
        aria-hidden
      >
        {/* Points-up: arms reach up-left and up-right from a bottom apex
            at y=15. Mirror of the down-scroll-cue (50,50 apex with 22,22
            arms) — here it's 50,15 apex with arms at 22,43 and 78,43. */}
        <polyline points="22 43 50 15 78 43" />
      </svg>
    </button>
  );
}
