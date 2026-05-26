"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useT } from "@/i18n";
import { LanguageSwitcher } from "@/i18n/LanguageSwitcher";

export function Nav() {
  const { t } = useT();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Every route. The header carries no inline items — visitors click + Menu
  // to reveal the full takeover. Keeps the brand frame quiet, lets typography
  // do the work.
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

          {/* Right cluster: language + menu trigger only */}
          <div className="flex items-center gap-5 md:gap-8">
            {/* Language switcher — desktop only (mobile finds it inside the takeover).
                Fades out when the takeover is open. */}
            <div
              className={`hidden md:block transition-opacity duration-300 ${
                open ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
              aria-hidden={open}
            >
              <LanguageSwitcher variant="header" />
            </div>

            {/* Menu trigger — visible on every viewport, every state */}
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-label={open ? t.nav.close : t.nav.menu}
              className="font-display text-[13px] uppercase tracking-nav font-semibold hover:text-silver transition-colors duration-300 inline-flex items-center gap-2 whitespace-nowrap"
            >
              <span className="opacity-60">{open ? "×" : "+"}</span>
              <span>{open ? t.nav.close : t.nav.menu}</span>
            </button>
          </div>
        </div>
      </header>

      {/* ── FULL-SCREEN TAKEOVER ────────────────────────────────────────
          Every route listed at editorial display scale, numbered like
          a museum index. Same fade-in / fade-out the mobile menu used
          before — now serves both desktop and mobile. */}
      <div
        className={`fixed inset-0 z-30 bg-noir text-blanc transition-opacity duration-500 ease-editorial ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col justify-center h-full max-w-6xl mx-auto px-6 md:px-16 lg:px-24 gap-3 md:gap-4">
          {menuItems.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="group flex items-baseline gap-6 md:gap-12"
            >
              <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-wider-2 text-blanc/40 tabular-nums shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-display font-semibold text-3xl md:text-5xl lg:text-6xl uppercase tracking-nav group-hover:text-silver transition-colors duration-300 leading-none">
                {item.label}
              </span>
            </Link>
          ))}

          {/* Language switcher inside takeover — mobile only (desktop has it in the header) */}
          <div className="md:hidden mt-10 pt-6 border-t border-blanc/15">
            <LanguageSwitcher variant="mobile" />
          </div>
        </nav>
      </div>
    </>
  );
}
