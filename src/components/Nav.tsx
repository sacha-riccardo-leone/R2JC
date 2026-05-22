"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// Matches the live r2jc.ch primary navigation exactly.
const ITEMS: { label: string; href: string }[] = [
  { label: "Accueil", href: "/" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "Éditions", href: "/editions" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-editorial ${
          scrolled
            ? "bg-noir/85 backdrop-blur-md text-blanc"
            : "bg-noir text-blanc"
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-10 py-4 md:py-5">
          {/* R2JC logo mark — silver "2" on transparent */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 group"
            aria-label="R2JC — Accueil"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo/r2jcLogo.png"
              alt="R2JC"
              className="h-7 md:h-8 w-auto select-none group-hover:opacity-80 transition-opacity duration-300"
              draggable={false}
            />
            <span className="sr-only">R2JC — Rencontre de Jeunes Créateurs</span>
          </Link>

          {/* Desktop nav — Montserrat 600 uppercase, matches live site */}
          <nav className="hidden md:flex items-center gap-2 font-display text-[13px] font-semibold uppercase tracking-nav">
            {ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 hover:text-silver transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden font-display text-[13px] uppercase tracking-nav font-semibold"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label="Menu"
          >
            {open ? "Fermer" : "Menu"}
          </button>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <div
        className={`fixed inset-0 z-30 bg-noir text-blanc transition-opacity duration-500 ease-editorial md:hidden ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col justify-center h-full px-6 gap-4">
          {ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-display font-semibold text-4xl uppercase tracking-nav hover:text-silver transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
