"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * EditionBanner — unified black-strip header used across /editions for each edition.
 *
 *   • variant="link"     → behaves like the upcoming-edition banner: the whole
 *                          row is a Link to a full landing page.
 *   • variant="dropdown" → behaves like past-edition banners: the whole row is
 *                          a <button> that toggles inline-expanding content.
 *
 * Expander animation strategy (dropdown variant):
 *   The previous version used a CSS grid 0fr → 1fr transition. That works for
 *   lightweight content but choked badly on Édition 02's payload (16 designer
 *   cards × ~6 look thumbnails ≈ 130 images and ~96 client components), because
 *   the browser had to lay out the entire content tree on every frame of the
 *   transition to figure out the interpolated row height.
 *
 *   We now use a measured `height` transition instead: measure scrollHeight at
 *   click time, animate from 0 → measured (or measured → 0), then settle to
 *   `auto` once the transition ends so content can still grow if images load
 *   late or sub-content reflows. The transition runs on a concrete pixel value,
 *   which the browser optimises as a paint-only animation — no layout pass per
 *   frame. Stays smooth regardless of payload size.
 */

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
  const isInitial = useRef(true);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    // First mount: skip animation, just sync the inline height to the state.
    if (isInitial.current) {
      isInitial.current = false;
      el.style.height = open ? "auto" : "0px";
      return;
    }

    if (open) {
      // Measure target height, animate from current (0) to target px.
      const target = el.scrollHeight;
      el.style.height = `${target}px`;

      const onEnd = (e: TransitionEvent) => {
        if (e.propertyName !== "height") return;
        // After the open transition lands, switch to auto so the content can
        // grow/shrink freely (lazy images, etc.) without us re-measuring.
        el.style.height = "auto";
        el.removeEventListener("transitionend", onEnd);
      };
      el.addEventListener("transitionend", onEnd);
    } else {
      // Closing: snap from auto to the current measured pixel height,
      // force a reflow, then animate down to 0.
      el.style.height = `${el.offsetHeight}px`;
      // Force reflow so the browser registers the explicit pixel height
      // before we kick the transition to 0.
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      el.offsetHeight;
      el.style.height = "0px";
    }
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

      {/* Measured-height expander. Initial inline style is set for SSR; the
          useEffect above takes over after mount. */}
      <div
        ref={contentRef}
        className="overflow-hidden transition-[height] duration-500 ease-editorial"
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
