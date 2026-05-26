"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * EditionBanner — unified black-strip header used across /editions for each edition.
 *
 *   • variant="link"     → the whole row is a Link to a full landing page.
 *   • variant="dropdown" → the whole row is a <button> that toggles inline
 *                          expanding content with a height transition.
 *
 * Dropdown animation (works smoothly in BOTH directions, regardless of payload):
 *
 *   On every toggle:
 *     1. Read the element's current pixel height (offsetHeight) and write it back
 *        as an explicit inline `height: NNNpx`. This resolves "auto" and snaps
 *        out of any in-progress transition cleanly.
 *     2. requestAnimationFrame → the browser paints frame N with the snap
 *        committed (no coalescing possible).
 *     3. Inside the rAF callback, write the target height — `scrollHeight` for
 *        open, `0` for close. The CSS transition fires from snap → target on
 *        frame N+1 and runs at 60fps because the transition is pixel-to-pixel
 *        (paint-only, no per-frame layout pass).
 *     4. On `transitionend` (open direction), settle to `height: auto` so the
 *        panel can still grow if a lazy image inside loads late.
 *
 *   Why rAF instead of reading `offsetHeight` between style writes:
 *     `void el.offsetHeight` forces layout but the browser still treats both
 *     style writes (snap, then target) as a single style mutation cycle — the
 *     intermediate snap value never makes it onto a rendered frame, so the
 *     transition has nothing to interpolate FROM, and the change appears
 *     instant. rAF separates the two writes across two distinct frames, giving
 *     the transition a concrete starting point.
 *
 *   Cleanup: every effect run returns a cleanup that flips `cancelled` (so any
 *   pending rAF or transitionend callback becomes a no-op), cancels the rAF,
 *   and removes the transitionend listener. Without this, an old open-listener
 *   would fire on a subsequent close transition's transitionend event and
 *   reset height: auto — snapping the panel back open. That bug is gone.
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

    // First mount: sync the inline height to the initial state without animation.
    if (isInitial.current) {
      isInitial.current = false;
      el.style.height = open ? "auto" : "0px";
      return;
    }

    let cancelled = false;
    let rafId = 0;

    // Step 1: snap to the current measured pixel height. This resolves "auto"
    // and interrupts any in-progress transition. Even if the value is already
    // a pixel string, writing it again primes the browser to track a transition
    // from this exact value.
    el.style.height = `${el.offsetHeight}px`;

    // Step 2: defer the target write to the NEXT animation frame so the
    // browser paints the snap value first. Without this gap, both writes
    // happen in the same style-mutation cycle and the transition has no
    // distinct "from" frame to start from — the change appears abrupt.
    rafId = requestAnimationFrame(() => {
      if (cancelled) return;
      if (open) {
        el.style.height = `${el.scrollHeight}px`;
      } else {
        el.style.height = "0px";
      }
    });

    // Step 3: when the height transition lands, settle to `auto` so the
    // panel can grow/shrink with late-loading images or other content shifts.
    // Bail if our effect was cleaned up before we got here.
    const onEnd = (e: TransitionEvent) => {
      if (e.target !== el || e.propertyName !== "height" || cancelled) return;
      if (open) {
        el.style.height = "auto";
      }
      el.removeEventListener("transitionend", onEnd);
    };
    el.addEventListener("transitionend", onEnd);

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
      el.removeEventListener("transitionend", onEnd);
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

      {/* Inline transition so we can be 100% sure the spec lands (and to make
          the animation values visible at a glance right here). */}
      <div
        ref={contentRef}
        className="overflow-hidden"
        style={{
          height: defaultOpen ? "auto" : "0px",
          transition: "height 500ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
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
