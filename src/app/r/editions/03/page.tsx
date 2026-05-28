import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { getDict, getLocale } from "@/i18n/server";

export const metadata = { title: "Édition 03 — R2JC Reworked" };

/**
 * /r/editions/03 — Reworked landing for the upcoming edition.
 *
 * Same configurable constants as the Upgraded /editions/03 (start
 * datetime, venue-known toggle, lineup slot count). When R2JC edits
 * these for a future cycle they'll need to update both files.
 */
const START_ISO = "2026-09-12T18:00:00+02:00";
const LINEUP_SLOTS = 16;
const VENUE_KNOWN = false;

const SPONSOR_LOGOS = [
  { id: "SPONSOR-jura-ch",       label: "République et Canton du Jura", file: "/media/sponsors/Jura-Logo.svg.png" },
  { id: "SPONSOR-swisslos",      label: "Swisslos",                     file: "/media/sponsors/swisslos.png" },
  { id: "SPONSOR-raiffeisen",    label: "Raiffeisen",                   file: "/media/sponsors/raiffeisen.png" },
  { id: "SPONSOR-saint-imier",   label: "Saint-Imier",                  file: "/media/sponsors/saint-imier.webp" },
  { id: "SPONSOR-wankdorf-city", label: "Wankdorf City Eventhall",      file: "/media/sponsors/LOGO_WANKDORF-CITY-EVETHALL-noir.png" },
  { id: "SPONSOR-cjb",           label: "CJB",                          file: "/media/sponsors/LOGO_CJB-fond-transparent-2048x720.png" },
];

function daysUntil(targetIso: string): number {
  const target = new Date(targetIso).getTime();
  return Math.ceil((target - Date.now()) / 1000 / 86400);
}

export default async function ReworkedEdition03() {
  const [t, locale] = await Promise.all([getDict(), getLocale()]);
  const e = t.ed03;
  const days = daysUntil(START_ISO);
  const status: "upcoming" | "today" | "past" =
    days > 0 ? "upcoming" : days === 0 ? "today" : "past";

  const sbbHref = ({
    fr: "https://www.cff.ch/fr/horaire.html",
    en: "https://www.sbb.ch/en/timetable.html",
    de: "https://www.sbb.ch/de/fahrplan.html",
    it: "https://www.ffs.ch/it/orario.html",
  } as const)[locale];

  return (
    <main className="bg-noir text-blanc">
      {/* ── HERO ─ eyebrow + title + 3-data grid + dual CTA ─────── */}
      <section className="min-h-screen relative flex flex-col justify-center px-6 md:px-10 py-32 md:py-40">
        <div className="max-w-7xl mx-auto w-full">
          <Reveal motion="blur">
            <p className="font-mono text-[11px] uppercase tracking-wider-2 text-blanc/40 mb-10 md:mb-16">
              {e.eyebrow}
            </p>
          </Reveal>

          <Reveal motion="blur" delay={150}>
            <h1 className="font-display text-[clamp(3rem,12vw,11rem)] leading-[0.9] tracking-[-0.05em] mb-12 md:mb-20">
              <span className="font-black">{e.title}.</span>
            </h1>
          </Reveal>

          <Reveal motion="blur" delay={300}>
            <div className="grid md:grid-cols-3 gap-y-8 md:gap-y-0 md:gap-x-12 border-t border-blanc/15 pt-10">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider-2 text-blanc/40 mb-3">
                  Date
                </p>
                <p className="font-display text-2xl md:text-4xl font-medium tabular-nums">
                  {e.dateLine}
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider-2 text-blanc/40 mb-3">
                  {e.venueSection.eyebrow}
                </p>
                <p className="font-display text-2xl md:text-4xl font-medium">
                  {e.venue}
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider-2 text-blanc/40 mb-3">
                  {e.countdown.label}
                </p>
                <p className="font-display text-2xl md:text-4xl font-medium tabular-nums">
                  {status === "past"
                    ? e.countdown.past
                    : status === "today"
                    ? e.countdown.today
                    : `J − ${days} · ${days} ${e.countdown.days}`}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal motion="blur" delay={500}>
            <div className="mt-12 flex flex-col sm:flex-row gap-6">
              <a
                href="/api/edition-03.ics"
                download="r2jc-edition-03.ics"
                className="inline-block font-mono text-[11px] uppercase tracking-wider-2 border-b border-blanc pb-1 hover:text-silver hover:border-silver transition-colors"
              >
                {e.addToCalendar} ↓
              </a>
              <Link
                href="#rsvp"
                className="inline-block font-mono text-[11px] uppercase tracking-wider-2 border-b border-blanc/60 pb-1 hover:text-blanc hover:border-blanc transition-colors"
              >
                {e.rsvp.cta} →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── ABOUT ─ asymmetric 5/7 ───────────────────────────────── */}
      <section className="px-6 md:px-10 py-24 md:py-32 border-t border-blanc/15">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-12 gap-y-8 md:gap-x-12">
          <Reveal motion="blur" className="md:col-span-5">
            <p className="font-mono text-[11px] uppercase tracking-wider-2 text-blanc/40 mb-6">
              {e.about.eyebrow}
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold leading-[1.1] tracking-[-0.03em]">
              {e.about.title}
            </h2>
          </Reveal>
          <Reveal motion="blur" delay={150} className="md:col-span-6 md:col-start-7">
            <p className="font-sans text-base md:text-lg leading-relaxed text-blanc/75 max-w-prose">
              {e.about.body}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── LINEUP TEASER ─ 16 numbered slots, dark-themed ─────── */}
      <section className="px-6 md:px-10 py-24 md:py-32 border-t border-blanc/15">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-12 md:mb-16">
            <Reveal motion="blur">
              <p className="font-mono text-[11px] uppercase tracking-wider-2 text-blanc/40">
                {e.lineup.eyebrow}
              </p>
            </Reveal>
            <Reveal motion="blur" delay={120}>
              <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-[-0.03em] leading-tight">
                {e.lineup.title}
              </h2>
            </Reveal>
          </div>
          <Reveal motion="blur" delay={250}>
            <p className="max-w-prose font-sans text-base md:text-lg text-blanc/65 leading-relaxed mb-16">
              {e.lineup.intro}
            </p>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {Array.from({ length: LINEUP_SLOTS }, (_, i) => {
              const n = String(i + 1).padStart(2, "0");
              return (
                <Reveal key={n} motion="blur">
                  <figure className="bg-blanc/[0.03] border border-blanc/15 relative aspect-[4/5] flex flex-col">
                    <div className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-wider-2 text-blanc/40 tabular-nums">
                      {n} / {String(LINEUP_SLOTS).padStart(2, "0")}
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                      <span className="font-display text-3xl md:text-4xl font-light text-blanc/30">
                        ?
                      </span>
                    </div>
                    <figcaption className="px-3 pb-3 font-mono text-[10px] uppercase tracking-wider-2 text-blanc/40 text-center">
                      {e.lineup.tba}
                    </figcaption>
                  </figure>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── VENUE / TRAVEL ─ asymmetric 5/7 ──────────────────── */}
      <section className="px-6 md:px-10 py-24 md:py-32 border-t border-blanc/15">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-12 gap-y-8 md:gap-x-12 items-start">
          <Reveal motion="blur" className="md:col-span-5">
            <p className="font-mono text-[11px] uppercase tracking-wider-2 text-blanc/40 mb-6">
              {e.venueSection.eyebrow}
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold leading-[1.1] tracking-[-0.03em]">
              {e.venueSection.title}
            </h2>
            {VENUE_KNOWN && (
              <p className="mt-6 font-mono text-[11px] uppercase tracking-wider-2 text-blanc/40">
                47°08&apos;13&quot;N · 7°15&apos;00&quot;E
              </p>
            )}
          </Reveal>
          <Reveal motion="blur" delay={150} className="md:col-span-6 md:col-start-7">
            <p className="font-sans text-base md:text-lg leading-relaxed text-blanc/75 max-w-prose">
              {e.venueSection.body}
            </p>
            {VENUE_KNOWN && (
              <a
                href={sbbHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-8 font-mono text-[11px] uppercase tracking-wider-2 border-b border-blanc/60 hover:text-silver hover:border-silver transition-colors pb-1"
              >
                {e.venueSection.sbb} ↗
              </a>
            )}
          </Reveal>
        </div>
      </section>

      {/* ── RSVP ─ white banner, the active CTA ──────────────── */}
      <a
        id="rsvp"
        href="mailto:Info@r2jc.ch?subject=Réservation%20—%20Édition%2003%20—%2012%20septembre%202026"
        className="group block bg-blanc text-noir hover:bg-mist transition-colors duration-500 ease-editorial border-t border-blanc/15"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24 grid grid-cols-12 gap-x-4 md:gap-x-8 items-baseline relative">
          <div className="col-span-12 md:col-span-8 md:pr-44 lg:pr-56">
            <p className="font-mono text-[11px] uppercase tracking-wider-2 text-noir/40 mb-4">
              {e.rsvp.eyebrow}
            </p>
            <h2 className="font-display font-semibold text-3xl md:text-5xl leading-tight tracking-[-0.03em] mb-6">
              {e.rsvp.title}
            </h2>
            <p className="font-sans text-base md:text-lg text-noir/70 leading-relaxed max-w-prose">
              {e.rsvp.body}
            </p>
            <p className="mt-8 font-mono text-[12px] uppercase tracking-wider-2 text-noir/60">
              {e.rsvp.cta} → Info@r2jc.ch
            </p>
          </div>
          <div
            className="hidden md:block absolute right-6 md:right-10 top-1/2 -translate-y-1/2 pointer-events-none"
            aria-hidden
          >
            <div className="opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-editorial">
              <svg
                width="120"
                height="120"
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="10"
                strokeLinecap="square"
                strokeMiterlimit="10"
              >
                <polyline points="52 22 80 50 52 78" />
                <line x1="20" y1="50" x2="76" y2="50" />
              </svg>
            </div>
          </div>
        </div>
      </a>

      {/* ── PARTNERS PREVIEW ─ 6 logos + link to /r/sponsors ─── */}
      <section className="px-6 md:px-10 py-24 md:py-32 border-t border-blanc/15">
        <div className="max-w-7xl mx-auto w-full">
          <Reveal motion="blur">
            <p className="font-mono text-[11px] uppercase tracking-wider-2 text-blanc/40 mb-6">
              {e.partners.eyebrow}
            </p>
          </Reveal>
          <Reveal motion="blur" delay={120}>
            <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-[-0.03em] leading-tight mb-6">
              {e.partners.title}
            </h2>
          </Reveal>
          <Reveal motion="blur" delay={240}>
            <p className="max-w-prose font-sans text-base md:text-lg text-blanc/65 leading-relaxed mb-12">
              {e.partners.body}
            </p>
          </Reveal>

          <Reveal motion="blur" delay={350}>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-px bg-blanc/15">
              {SPONSOR_LOGOS.map((s) => (
                <div
                  key={s.id}
                  className="bg-blanc flex items-center justify-center p-6 md:p-8 aspect-[4/3]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.file}
                    alt={s.label}
                    className="max-h-full max-w-full object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          </Reveal>

          <div className="mt-10">
            <Link
              href="/r/sponsors"
              className="inline-block font-mono text-[11px] uppercase tracking-wider-2 border-b border-blanc/60 hover:text-silver hover:border-silver transition-colors pb-1"
            >
              {e.partners.link}
            </Link>
          </div>
        </div>
      </section>

      {/* ── BOTTOM DOORS ─ 3 banner links to postuler/presse/sponsor ── */}
      <section className="border-t border-blanc/15">
        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-blanc/15">
          {[
            { label: e.bottom.apply.label,   cta: e.bottom.apply.cta,   href: "/r/postuler" },
            { label: e.bottom.press.label,   cta: e.bottom.press.cta,   href: "/r/presse" },
            { label: e.bottom.sponsor.label, cta: e.bottom.sponsor.cta, href: "mailto:Info@r2jc.ch?subject=Partenariat%20R2JC%20—%20Édition%2003" },
          ].map((door, i) => (
            <Link
              key={i}
              href={door.href}
              className="group block px-8 py-16 md:py-24 hover:bg-blanc/[0.04] transition-colors duration-500"
            >
              <p className="font-mono text-[11px] uppercase tracking-wider-2 text-blanc/40 mb-6">
                {door.label}
              </p>
              <p className="font-display text-2xl md:text-3xl font-medium leading-tight tracking-[-0.02em] group-hover:text-silver transition-colors duration-500">
                {door.cta} →
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
