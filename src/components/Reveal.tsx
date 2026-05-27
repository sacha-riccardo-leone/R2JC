"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

/**
 * Reveal — fade/rise/blur an element into view when it crosses the
 * intersection threshold.
 *
 *   motion="rise" (default)  →  opacity + translateY(40px → 0)
 *   motion="fade"            →  opacity only — use this when the element wraps
 *                               hover-interactive children. translateY would
 *                               move the element under a stationary cursor and
 *                               browsers don't fire mouseenter in that case, so
 *                               hover would appear broken until the user moved
 *                               their cursor off and back on.
 *   motion="blur"            →  opacity + filter blur(20px → 0). Matches the
 *                               mount-time `r-blur-in` aesthetic used on the
 *                               Reworked landing, so scroll-revealed content
 *                               there feels continuous with the cold open.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as: As = "div",
  motion = "rise",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: ElementType;
  motion?: "rise" | "fade" | "blur";
}) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  // Pick the visible/hidden classes based on motion mode.
  // For "fade" and "blur" we intentionally use ONLY opacity (no transform) so:
  //   1. The element never moves under a stationary cursor (mouseenter quirk).
  //   2. The Reveal stops creating a `transform` containing block, which had
  //      forced our hover-preview portal to escape it via createPortal.
  const hiddenClass =
    motion === "rise" ? "opacity-0 translate-y-10" : "opacity-0";
  const visibleClass =
    motion === "rise" ? "opacity-100 translate-y-0" : "opacity-100";

  // The blur variant drives `filter` via inline style. `transition-all` on
  // the className already covers filter transitions, so we just flip the
  // value when `visible` toggles.
  const blurStyle =
    motion === "blur"
      ? { filter: visible ? "blur(0px)" : "blur(20px)" }
      : undefined;

  // Longer duration for blur so the resolve feels considered rather than
  // snapped — matches the landing's 1.4s mount-time blur-in.
  const duration = motion === "blur" ? "1400ms" : "900ms";

  return (
    <As
      ref={ref as React.Ref<HTMLElement>}
      className={`ease-editorial ${
        visible ? visibleClass : hiddenClass
      } ${className}`}
      style={{
        transition: `opacity ${duration}, transform ${duration}, filter ${duration}`,
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        transitionDelay: `${delay}ms`,
        ...blurStyle,
      }}
    >
      {children}
    </As>
  );
}
