"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";

/**
 * EditionBanner — unified black-strip header used across /editions for each edition.
 *
 * Two variants share the same visual treatment:
 *   • variant="link"     → behaves like /editions/03 (upcoming): the entire row is
 *                          a Link that navigates to a full landing page. Right side
 *                          shows ctaLabel followed by →.
 *   • variant="dropdown" → behaves like /editions/02 + /editions/01 (past editions):
 *                          the entire row is a <button> that toggles inline-expanding
 *                          content. Right side shows ctaLabel followed by a rotating
 *                          chevron. Content lives in `children` and animates via the
 *                          grid-template-rows 0fr / 1fr trick (no JS measurement).
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

  return (
    <div className="border-b border-blanc/15">
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
              <path d="M1 1l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          }
        />
      </button>

      {/*
        Inline expander — the classic 0fr → 1fr grid-row trick gives a smooth
        height transition without measuring the content. The inner div needs
        overflow-hidden so content is clipped during the animation.
      */}
      <div
        className={`grid transition-[grid-template-rows] duration-700 ease-editorial ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">{children}</div>
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
