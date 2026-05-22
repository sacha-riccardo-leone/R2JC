"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

/**
 * Reveal — fade/rise an element into view when it crosses the intersection
 * threshold.
 *
 *   motion="rise" (default)  →  opacity + translateY(40px → 0)
 *   motion="fade"            →  opacity only — use this when the element wraps
 *                               hover-interactive children. translateY would
 *                               move the element under a stationary cursor and
 *                               browsers don't fire mouseenter in that case, so
 *                               hover would appear broken until the user moved
 *                               their cursor off and back on.
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
  motion?: "rise" | "fade";
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
  // For "fade" we intentionally use ONLY opacity — no transform — so:
  //   1. The element never moves under a stationary cursor (mouseenter quirk).
  //   2. The Reveal stops creating a `transform` containing block, which had
  //      forced our hover-preview portal to escape it via createPortal.
  const hiddenClass =
    motion === "fade" ? "opacity-0" : "opacity-0 translate-y-10";
  const visibleClass =
    motion === "fade" ? "opacity-100" : "opacity-100 translate-y-0";

  return (
    <As
      ref={ref as React.Ref<HTMLElement>}
      className={`transition-all duration-[900ms] ease-editorial ${
        visible ? visibleClass : hiddenClass
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </As>
  );
}
