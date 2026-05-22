"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const ITEMS: { label: string; href: string }[] = [
  { label: "Manifeste", href: "/manifeste" },
  { label: "Éditions", href: "/editions" },
  { label: "Créateurs", href: "/createurs" },
  { label: "Participer", href: "/participer" },
  { label: "Presse", href: "/presse" },
  { label: "Contact", href: "/contact" },
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
        className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-500 ease-editorial ${
          scrolled ? "bg-ink/70 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-10 py-5 md:py-6">
          <Link
            href="/"
            className="font-mono text-xs tracking-wider-2 uppercase"
            aria-label="R2JC — Accueil"
          >
            R2JC <span className="opacity-50">— Rencontre de Jeunes Créateurs</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 font-mono text-[11px] uppercase tracking-wider-2">
            {ITEMS.map((item, i) => (
              <span key={item.href} className="flex items-center gap-6">
                <Link
                  href={item.href}
                  className="hover:text-cinabre transition-colors duration-300"
                >
                  {item.label}
                </Link>
                {i < ITEMS.length - 1 && <span className="opacity-40">·</span>}
              </span>
            ))}
          </nav>

          <button
            type="button"
            className="md:hidden font-mono text-xs uppercase tracking-wider-2"
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
        className={`fixed inset-0 z-30 bg-ink transition-opacity duration-500 ease-editorial md:hidden ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col justify-center h-full px-6 gap-6">
          {ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-display text-6xl text-bone hover:text-cinabre transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
