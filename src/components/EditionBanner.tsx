"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * EditionBanner — unified black-strip header used across /editions for each edition.
 *
 *   • variant="link"     → the row is a Link to a full landing page.
 *   • variant="dropdown" → the row is a <button> that toggles inline-expanding
 *                          content.
 *
 * Why JS-driven animation (not CSS transition):
 *   CSS height transitions are unreliable for heavy content. The browser can:
 *     • coalesce two style writes in the same tick and skip the from-frame
 *     • drop the transition entirely if the next paint is too far off
 *     • interrupt itself if React re-renders mid-transition
 *   That's exactly what was making Édition 02 (130+ images, 96 client
 *   components) appear to "open in a blink" while Édition 01 worked.
 *
 *   So we drive the animation in JS. Every frame, we compute the correct
 *   height for the elapsed time + easing curve and write it to el.style.height
 *   directly. The browser has nothing to optimise — we're just setting a pixel
 *   value 60 times per second. Same code path for both editions, identical
 *   behaviour regardless of payload size.
 */

const DURATION = 500;
// ease-out cubic — same feel as cubic-bezier(0.22, 1, 0.36, 1)
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

type CommonProps = {
  eyebrow: string;
  title: string;
  ctaLabel: string;
};

type LinkProps = CommonProps & {
  variant: "link";
  href: string;
};

type DropdownProps = CommonProps & {
  variant: "dropdown";
  children: ReactNode;
  defaultOpen?: boolean;
};

export function EditionBanner(props: LinkProps | DropdownProps) {
  if (props.variant === "link") {
    return (
      <Link
        href={props.href}
        className="group block bg-noir text-blanc py-10 md:py-12 border-b border-blanc/15"
      >
        <BannerRow
          eyebrow={props.eyebrow}
          title={props.title}
          ctaLabel={props.ctaLabel}
          right={<span>→</span>}
        />
      </Link>
    );
  }
  return <DropdownBanner {...props} />;
}

function DropdownBanner({
  eyebrow,
  title,
  ctaLabel,
  children,
  defaultOpen = false,
}: Omit<DropdownProps, "variant">) {
  const [open, setOpen] = useState(defaultOpen);
  const contentRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const isInitial = useRef(true);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    // First mount: just set the resting state, no animation.
    if (isInitial.current) {
      isInitial.current = false;
      el.style.height = open ? "auto" : "0px";
      return;
    }

    // Cancel any in-progress animation so we can start a new one from the
    // current rendered height (cleanest interrupt behaviour).
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }

    const from = el.offsetHeight;
    // When opening, target is the natural content height. We can read it
    // safely because the children layout independently of the container's
    // clip — scrollHeight always reflects natural content size.
    const to = open ? el.scrollHeight : 0;

    // No-op shortcut: already at target.
    if (from === to) {
      el.style.height = open ? "auto" : "0px";
      return;
    }

    const startTime = performance.now();
    const delta = to - from;

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / DURATION, 1);
      const eased = easeOutCubic(progress);
      el.style.height = `${from + delta * eased}px`;

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        rafRef.current = null;
        // On open, settle to "auto" so the panel can still grow if late images
        // load or sub-content reflows. On close, leave at "0px".
        el.style.height = open ? "auto" : "0px";
      }
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [open]);

  return (
    <div className="bg-noir border-b border-blanc/15">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="group block w-full bg-noir text-blanc py-10 md:py-12 text-left"
      >
        <BannerRow
          eyebrow={eyebrow}
          title={title}
          ctaLabel={ctaLabel}
          right={
            <svg
              viewBox="0 0 10 6"
              className={`h-[7px] w-[11px] transition-transform duration-500 ease-editorial ${
                open ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden
            >
              <path
                d="M1 1l4 4 4-4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
        />
      </button>

      {/* No CSS transition on this div — height is driven entirely by the rAF
          loop above so the browser can't coalesce or skip frames. */}
      <div
        ref={contentRef}
        className="overflow-hidden"
        style={{ height: defaultOpen ? "auto" : "0px" }}
      >
        {children}
      </div>
    </div>
  );
}

function BannerRow({
  eyebrow,
  title,
  ctaLabel,
  right,
}: {
  eyebrow: string;
  title: string;
  ctaLabel: string;
  right: ReactNode;
}) {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6">
        <span className="font-mono text-[10px] uppercase tracking-wider-2 opacity-60">
          {eyebrow}
        </span>
        <span className="font-display text-xl md:text-2xl font-medium group-hover:text-silver transition-colors duration-300">
          {title}
        </span>
      </div>
      <span className="font-mono text-[11px] uppercase tracking-wider-2 group-hover:text-silver transition-colors flex items-center gap-3">
        {ctaLabel}
        {right}
      </span>
    </div>
  );
}
