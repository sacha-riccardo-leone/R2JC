"use client";

import { useEffect, useRef } from "react";

/**
 * A single hairline at the top of the viewport that tracks scroll progress.
 * The metronome of the page. Cinabre red — one of two heat moments per page.
 */
export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? window.scrollY / max : 0;
      if (ref.current) {
        ref.current.style.transform = `scaleX(${ratio})`;
      }
      raf = 0;
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(onScroll);
    };
    window.addEventListener("scroll", schedule, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", schedule);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="fixed top-0 left-0 right-0 z-50 h-px bg-blanc/10 pointer-events-none"
    >
      <div
        ref={ref}
        className="h-full bg-blanc origin-left"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}
