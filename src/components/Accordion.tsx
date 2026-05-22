"use client";

import { useState, type ReactNode } from "react";

export type AccordionItem = {
  q: string;
  a: ReactNode;
};

/**
 * Accordion — used on the homepage FAQ section and on the FAQ page.
 * Matches the live r2jc.ch FAQ accordion behavior with a single-open model.
 *
 * Tone variants:
 *   "dark"  — for use on bone/pearl backgrounds (default)
 *   "light" — for use on noir backgrounds
 */
export function Accordion({
  items,
  tone = "dark",
  initialOpen = -1,
}: {
  items: AccordionItem[];
  tone?: "dark" | "light";
  initialOpen?: number;
}) {
  const [open, setOpen] = useState<number>(initialOpen);

  const borderColor = tone === "light" ? "border-blanc/15" : "border-noir/15";
  const hoverColor = tone === "light" ? "hover:text-silver" : "hover:text-silver";
  const bodyColor = tone === "light" ? "text-mist/85" : "text-noir/80";

  return (
    <ul className={`border-t ${borderColor}`}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <li key={i} className={`border-b ${borderColor}`}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className={`w-full flex justify-between items-center text-left py-5 md:py-6 group transition-colors duration-300 ${hoverColor}`}
            >
              <span className="font-display font-medium text-base md:text-lg pr-6 leading-tight">
                {item.q}
              </span>
              <span
                className={`font-mono text-xl shrink-0 transition-transform duration-500 ease-editorial ${
                  isOpen ? "rotate-45" : "rotate-0"
                }`}
                aria-hidden
              >
                +
              </span>
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-500 ease-editorial ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div
                  className={`pb-6 font-sans text-sm md:text-base leading-relaxed max-w-prose ${bodyColor}`}
                >
                  {item.a}
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
