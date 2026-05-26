"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useT } from "@/i18n";
import { LanguageSwitcher } from "@/i18n/LanguageSwitcher";

export function Nav() {
  const { t } = useT();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Every route. Order matters — this is the museum-index order in the takeover
  // and the basis for the "XX / 08" wayfinding trigger.
  const menuItems = [
    { label: t.nav.home,     href: "/" },
    { label: t.nav.sponsors, href: "/sponsors" },
    { label: t.nav.editions, href: "/editions" },
    { label: t.ed03.title,   href: "/editions/03" },
    { label: t.nav.postuler, href: "/postuler" },
    { label: t.nav.presse,   href: "/presse" },
    { label: t.nav.contact,  href: "/contact" },
    { label: t.nav.faq,      href: "/faq" },
  ];

  // Find which item the visitor is currently viewing. Exact match wins; then
  // longest prefix wins (so /editions/03 maps to "Édition 03", not "Éditions").
  // Root "/" only matches exactly so it doesn't gobble every sub-route.
  const currentIndex = (() => {
    const exact = menuItems.findIndex((i) => i.href === pathname);
    if (exact !== -1) return exact;
    let best = -1;
    let bestLen = 0;
    menuItems.forEach((item, i) => {
      if (item.href === "/") return;
      if (
        pathname.startsWith(item.href + "/") &&
        item.href.length > bestLen
      ) {
        best = i;
        bestLen = item.href.length;
      }
    });
    return best;
  })();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while takeover is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
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
          {/* Logo */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 group shrink-0"
            aria-label="R2JC"
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

          {/* Right cluster: language switcher + wayfinding menu trigger */}
          <div className="flex items-center gap-5 md:gap-8">
            <div
              className={`hidden md:block transition-opacity duration-300 ${
                open ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
              aria-hidden={open}
            >
              <LanguageSwitcher variant="header" />
            </div>

            {/* Classic three-line burger that morphs into an X when open.
                Three absolutely-positioned bars on a square button; CSS
                transforms handle the open / closed states with a 500ms
                editorial ease. */}
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-label={open ? t.nav.close : t.nav.menu}
              className="relative w-8 h-8 flex items-center justify-center hover:text-silver transition-colors duration-300"
            >
              <span
                aria-hidden
                className="absolute block w-6 h-[1.5px] bg-current transition-transform duration-500 ease-editorial"
                style={{
                  transform: open
                    ? "translateY(0) rotate(45deg)"
                    : "translateY(-7px) rotate(0deg)",
                }}
              />
              <span
                aria-hidden
                className={`absolute block w-6 h-[1.5px] bg-current transition-opacity duration-300 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                aria-hidden
                className="absolute block w-6 h-[1.5px] bg-current transition-transform duration-500 ease-editorial"
                style={{
                  transform: open
                    ? "translateY(0) rotate(-45deg)"
                    : "translateY(7px) rotate(0deg)",
                }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* ── FULL-SCREEN TAKEOVER ────────────────────────────────────────
          Same museum-index treatment as before — but the visitor's current
          page is now highlighted: its index number flips from blanc/40 to
          blanc, and a small leading bullet marks the row. */}
      <div
        className={`fixed inset-0 z-30 bg-noir text-blanc transition-opacity duration-500 ease-editorial ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col justify-center h-full max-w-6xl mx-auto px-6 md:px-16 lg:px-24 gap-3 md:gap-4">
          {menuItems.map((item, i) => {
            const isActive = i === currentIndex;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="group flex items-baseline gap-6 md:gap-12"
                aria-current={isActive ? "page" : undefined}
              >
                <span
                  className={`font-mono text-[10px] md:text-[11px] uppercase tracking-wider-2 tabular-nums shrink-0 transition-colors ${
                    isActive ? "text-blanc" : "text-blanc/40"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display font-semibold text-3xl md:text-5xl lg:text-6xl uppercase tracking-nav transition-colors duration-300 leading-none flex items-baseline gap-3 md:gap-5 group-hover:text-silver">
                  {isActive && (
                    <span
                      aria-hidden
                      className="text-blanc/60 text-2xl md:text-4xl leading-none"
                    >
                      •
                    </span>
                  )}
                  {item.label}
                </span>
              </Link>
            );
          })}

          {/* Language switcher inside takeover — mobile only (desktop has it in the header) */}
          <div className="md:hidden mt-10 pt-6 border-t border-blanc/15">
            <LanguageSwitcher variant="mobile" />
          </div>
        </nav>
      </div>
    </>
  );
}
