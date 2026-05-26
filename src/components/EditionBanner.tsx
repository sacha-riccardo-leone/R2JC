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
 * Expander animation (dropdown variant):
 *   The content's height is animated from 0 → measured scrollHeight (open) and
 *   measured offsetHeight → 0 (close). Both directions follow the same three
 *   steps:
 *     1. Snap to current measured pixel height (resolves any "auto" or any
 *        in-progress transition).
 *     2. Force a reflow so the browser commits that intermediate state.
 *     3. Set the target pixel height — the CSS transition takes it from there.
 *   On open, when the transition lands, we settle to "auto" so the panel can
 *   still grow if a lazy image inside loads late.
 *
 *   Cleanup is critical: every effect run that attaches a transitionend
 *   listener also returns a cleanup that removes it. Without this, a leftover
 *   open-listener fired at the end of a *close* transition and reset
 *   height: auto — the panel snapped back open instantly. That's gone now.
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

    // First mount: just sync the inline height to the initial state, no animation.
    if (isInitial.current) {
      isInitial.current = false;
      el.style.height = open ? "auto" : "0px";
      return;
    }

    // Snap to current measured height — resolves "auto" and interrupts any
    // in-progress transition cleanly. Without this, switching directions
    // mid-animation produces glitches.
    const current = el.offsetHeight;
    el.style.height = `${current}px`;
    el.style.willChange = "height";

    // Force a reflow so the browser commits the snap-to-current-px state
    // before we set the target. Otherwise the browser may coalesce the two
    // style writes into a single change and skip the transition.
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    el.offsetHeight;

    // Tracks whether THIS effect run has been superseded (state changed again
    // before our transition finished). If true, our transitionend handler
    // becomes a no-op.
    let cancelled = false;

    const cleanup = () => {
      cancelled = true;
    };

    if (open) {
      const target = el.scrollHeight;
      el.style.height = `${target}px`;

      const onEnd = (e: TransitionEvent) => {
        if (e.target !== el || e.propertyName !== "height") return;
        if (cancelled) return;
        el.style.height = "auto";
        el.style.willChange = "";
        el.removeEventListener("transitionend", onEnd);
      };
      el.addEventListener("transitionend", onEnd);

      return () => {
        cleanup();
        el.removeEventListener("transitionend", onEnd);
      };
    } else {
      el.style.height = "0px";

      const onEnd = (e: TransitionEvent) => {
        if (e.target !== el || e.propertyName !== "height") return;
        if (cancelled) return;
        el.style.willChange = "";
        el.removeEventListener("transitionend", onEnd);
      };
      el.addEventListener("transitionend", onEnd);

      return () => {
        cleanup();
        el.removeEventListener("transitionend", onEnd);
      };
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
