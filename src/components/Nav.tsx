"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useT } from "@/i18n";
import { LanguageSwitcher } from "@/i18n/LanguageSwitcher";
import { VersionSwitcher } from "@/components/VersionSwitcher";
import { getVersion, stripVersion, withVersion } from "@/lib/version";

export function Nav() {
  const { t } = useT();
  const pathname = usePathname();
  const version = getVersion(pathname);
  // Canonical (un-prefixed) path — used so menu-item matching works the same
  // way regardless of which version side the visitor is on.
  const canonicalPath = stripVersion(pathname);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Every route. Order matters — this is the museum-index order in the
  // takeover and the basis for the "XX / 08" wayfinding trigger. `href` is
  // version-aware: when the visitor is on the Reworked side, every menu link
  // keeps them on the Reworked side. Defined as canonical paths and prefixed
  // through `withVersion` so we only maintain the list in one place.
  const menuItems = (
    [
      { label: t.nav.home,     href: "/" },
      { label: t.nav.sponsors, href: "/sponsors" },
      { label: t.nav.editions, href: "/editions" },
      { label: t.nav.postuler, href: "/postuler" },
      { label: t.nav.presse,   href: "/presse" },
      { label: t.nav.contact,  href: "/contact" },
      { label: t.nav.faq,      href: "/faq" },
    ] as const
  ).map((item) => ({
    label: item.label,
    canonical: item.href,
    href: withVersion(item.href, version),
  }));

  // Find which item the visitor is currently viewing. Exact match wins; then
  // longest prefix wins (so /editions/03 maps to "Édition 03", not "Éditions").
  // Root "/" only matches exactly so it doesn't gobble every sub-route. Match
  // against `canonicalPath` so this works identically on both versions.
  const currentIndex = (() => {
    const exact = menuItems.findIndex((i) => i.canonical === canonicalPath);
    if (exact !== -1) return exact;
    let best = -1;
    let bestLen = 0;
    menuItems.forEach((item, i) => {
      if (item.canonical === "/") return;
      if (
        canonicalPath.startsWith(item.canonical + "/") &&
        item.canonical.length > bestLen
      ) {
        best = i;
        bestLen = item.canonical.length;
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
        <div className="flex items-center px-6 md:px-10 py-4 md:py-5">
          {/* Logo — version-aware variant.
                Upgraded: r2jcLogo.png (original, mixed-tone). Reads
                  fine on the dark header.
                Reworked: r2jcLogo_fullwhite.png — solid white, matches
                  the Reworked aesthetic (pure noir+blanc, no grey).
              Both link home (within the current version).
              Layout: `ml-auto` on the right cluster handles centering
              regardless of whether the logo is present. */}
          <Link
            href={withVersion("/", version)}
            className="inline-flex items-center gap-2 group shrink-0"
            aria-label="R2JC"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={
                version === "reworked"
                  ? "/logo/r2jcLogo_fullwhite.png"
                  : "/logo/r2jcLogo.png"
              }
              alt="R2JC"
              className="h-7 md:h-8 w-auto select-none group-hover:opacity-80 transition-opacity duration-300"
              draggable={false}
            />
            <span className="sr-only">R2JC — Rencontre de Jeunes Créateurs</span>
          </Link>

          {/* Right cluster: version switcher + language switcher + wayfinding
              menu trigger. Both dropdowns hide while the takeover is open so
              they don't fight the menu visually. */}
          <div className="ml-auto flex items-center gap-5 md:gap-8">
            <div
              className={`hidden md:flex items-center gap-2 transition-opacity duration-300 ${
                open ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
              aria-hidden={open}
            >
              <VersionSwitcher variant="header" />
              <span aria-hidden className="text-blanc/20">·</span>
              <LanguageSwitcher variant="header" />
            </div>

            {/* Classic three-line burger that morphs into an X when open.
                Mobile only — on desktop the persistent inline nav (the
                second header row) covers the same routes, so showing
                both would be redundant. Mobile keeps the burger as the
                primary nav since the inline row is hidden < md. */}
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-label={open ? t.nav.close : t.nav.menu}
              className="md:hidden relative w-8 h-8 flex items-center justify-center hover:text-silver transition-colors duration-300"
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

        {/* PERSISTENT DESKTOP NAV (md: and up)
            A second header row with all 7 routes as inline links. Saves
            visitors the burger-tap-and-wait for every navigation. The
            takeover stays mounted as the mobile primary nav AND as a
            secondary editorial "wide view" on desktop.

            Hides while the takeover is open so it doesn't compete with
            the museum-index in the overlay. */}
        <nav
          className={`hidden md:block border-t border-blanc/15 transition-opacity duration-300 ${
            open ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          aria-hidden={open}
          aria-label={t.nav.menu}
        >
          <ul className="flex items-center flex-wrap gap-x-7 lg:gap-x-10 gap-y-1 px-6 md:px-10 py-3">
            {menuItems.map((item, i) => {
              const isActive = i === currentIndex;
              return (
                <li key={item.canonical}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`inline-block font-mono text-[10px] lg:text-[11px] uppercase tracking-wider-2 transition-colors duration-300 border-b pb-1 ${
                      isActive
                        ? "text-blanc border-blanc"
                        : "text-blanc/55 border-transparent hover:text-blanc hover:border-blanc/40"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
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

          {/* Version + language switchers inside takeover — mobile only
              (desktop has them in the header). Stacked vertically since
              "Reworked" + "Français" together would crowd the row. */}
          <div className="md:hidden mt-10 pt-6 border-t border-blanc/15 flex flex-col gap-5">
            <VersionSwitcher variant="mobile" />
            <LanguageSwitcher variant="mobile" />
          </div>
        </nav>
      </div>
    </>
  );
}
