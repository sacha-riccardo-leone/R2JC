import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { getDict, getLocale } from "@/i18n/server";

export const metadata = { title: "Édition 03 — 12 septembre 2026 — R2JC" };

/**
 * /editions/03 — landing page for the upcoming edition.
 *
 * Configurable here (no CMS yet — R2JC edits these constants each cycle):
 *   START: doors-open datetime
 *   END:   final-night close datetime
 *   VENUE: city (full address kept private until 1 month before)
 *   LINEUP_SLOTS: number of designer slots (16 by default). Fill in
 *     `lineup` with announced slugs from DESIGNERS_EDITION_03 once they exist.
 */
const START_ISO = "2026-09-12T18:00:00+02:00";
const END_ISO = "2026-09-12T23:00:00+02:00";
const LINEUP_SLOTS = 16;
/** Toggle to `true` once the venue is announced — re-enables the GPS line and SBB link. */
const VENUE_KNOWN = false;

// Press logos reused as the sponsor wall on this page
const SPONSOR_LOGOS = [
  { id: "SPONSOR-jura-ch",       label: "République et Canton du Jura",       file: "/media/sponsors/Jura-Logo.svg.png" },
  { id: "SPONSOR-swisslos",      label: "Swisslos",                           file: "/media/sponsors/swisslos.png" },
  { id: "SPONSOR-raiffeisen",    label: "Raiffeisen",                         file: "/media/sponsors/raiffeisen.png" },
  { id: "SPONSOR-saint-imier",   label: "Saint-Imier",                        file: "/media/sponsors/saint-imier.webp" },
  { id: "SPONSOR-wankdorf-city", label: "Wankdorf City Eventhall",            file: "/media/sponsors/LOGO_WANKDORF-CITY-EVETHALL-noir.png" },
  { id: "SPONSOR-cjb",           label: "CJB",                                file: "/media/sponsors/LOGO_CJB-fond-transparent-2048x720.png" },
];

function daysUntil(targetIso: string): number {
  const target = new Date(targetIso).getTime();
  return Math.ceil((target - Date.now()) / 1000 / 86400);
}

export default async function Edition03() {
  const [t, locale] = await Promise.all([getDict(), getLocale()]);
  const e = t.ed03;
  const days = daysUntil(START_ISO);
  const status: "upcoming" | "today" | "past" =
    days > 0 ? "upcoming" : days === 0 ? "today" : "past";

  // SBB / CFF / FFS route planner — language-aware
  const sbbHref = ({
    fr: "https://www.cff.ch/fr/horaire.html",
    en: "https://www.sbb.ch/en/timetable.html",
    de: "https://www.sbb.ch/de/fahrplan.html",
    it: "https://www.ffs.ch/it/orario.html",
  } as const)[locale];

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative bg-noir text-blanc min-h-screen flex flex-col justify-center pt-32 md:pt-40 pb-20">
        <div className="max-w-6xl mx-auto px-6 md:px-10 w-full">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-wider-2 opacity-70 mb-8">
              {e.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={150}>
            <h1 className="font-display font-light text-display-xl leading-[0.95]">
              <span className="font-semibold">{e.title}</span>
            </h1>
          </Reveal>

          <Reveal delay={350}>
            <div className="mt-16 md:mt-20 grid md:grid-cols-3 gap-y-8 md:gap-y-0 md:gap-x-12 border-t border-blanc/20 pt-10">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider-2 opacity-50 mb-3">
                  Date
                </p>
                <p className="font-display text-2xl md:text-3xl font-medium">
                  {e.dateLine}
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider-2 opacity-50 mb-3">
                  {e.venueSection.eyebrow}
                </p>
                <p className="font-display text-2xl md:text-3xl font-medium">
                  {e.venue}
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider-2 opacity-50 mb-3">
                  {e.countdown.label}
                </p>
                <p className="font-display text-2xl md:text-3xl font-medium tabular-nums">
                  {status === "past"
                    ? e.countdown.past
                    : status === "today"
                    ? e.countdown.today
                    : `J − ${days} · ${days} ${e.countdown.days}`}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={550}>
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <a
                href="/api/edition-03.ics"
                download="r2jc-edition-03.ics"
                className="inline-block bg-blanc text-noir px-8 py-3 rounded font-sans text-sm tracking-[0.02em] hover:bg-silver hover:text-blanc transition-colors duration-500"
              >
                {e.addToCalendar} ↓
              </a>
              <Link
                href="#rsvp"
                className="inline-block border border-blanc/60 text-blanc px-8 py-3 rounded font-sans text-sm tracking-[0.02em] hover:bg-blanc hover:text-noir transition-colors duration-500"
              >
                {e.rsvp.cta} →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── ABOUT ─────────────────────────────────────────────── */}
      <section className="bg-pearl text-noir py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-wider-2 opacity-60 mb-6">
              {e.about.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="font-display font-light text-display-md leading-[1.05] mb-10">
              {e.about.title}
            </h2>
          </Reveal>
          <Reveal delay={250}>
            <p className="max-w-prose mx-auto font-sans text-base md:text-lg leading-relaxed text-noir/85">
              {e.about.body}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── LINEUP TEASER ─────────────────────────────────────── */}
      <section className="bg-blanc text-noir py-24 md:py-32 border-t border-noir/10">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-wider-2 opacity-60 mb-4 text-center">
              {e.lineup.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="font-display font-light text-3xl md:text-5xl text-center mb-6 leading-tight">
              <span className="font-semibold">{e.lineup.title}</span>
            </h2>
          </Reveal>
          <Reveal delay={250}>
            <p className="max-w-prose mx-auto text-center font-sans text-base text-noir/70 leading-relaxed mb-16">
              {e.lineup.intro}
            </p>
          </Reveal>

          {/* 16 numbered slots — each one a Specimen Plate placeholder */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {Array.from({ length: LINEUP_SLOTS }, (_, i) => {
              const n = String(i + 1).padStart(2, "0");
              return (
                <Reveal key={n} delay={(i % 4) * 60} motion="fade">
                  <figure className="bg-pearl/50 border border-noir/20 relative aspect-[4/5] flex flex-col">
                    <div className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-wider-2 text-noir/40 tabular-nums">
                      {n} / {String(LINEUP_SLOTS).padStart(2, "0")}
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                      <span className="font-display text-3xl md:text-4xl font-light text-noir/30">
                        ?
                      </span>
                    </div>
                    <figcaption className="px-3 pb-3 font-mono text-[10px] uppercase tracking-wider-2 text-noir/40 text-center">
                      {e.lineup.tba}
                    </figcaption>
                  </figure>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── VENUE / TRAVEL ────────────────────────────────────── */}
      <section className="bg-noir text-blanc py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-wider-2 opacity-60 mb-4">
                {e.venueSection.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="font-display font-light text-display-md leading-tight">
                <span className="font-semibold">{e.venueSection.title}</span>
              </h2>
            </Reveal>
            {VENUE_KNOWN && (
              <Reveal delay={250}>
                <p className="mt-6 font-mono text-[11px] uppercase tracking-wider-2 opacity-60">
                  47°08'13"N · 7°15'00"E
                </p>
              </Reveal>
            )}
          </div>
          <div className="md:col-span-7">
            <Reveal delay={150}>
              <p className="font-sans text-base md:text-lg leading-relaxed text-mist/85 max-w-prose">
                {e.venueSection.body}
              </p>
            </Reveal>
            {VENUE_KNOWN && (
              <Reveal delay={300}>
                <a
                  href={sbbHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-8 font-mono text-[11px] uppercase tracking-wider-2 border-b border-blanc hover:text-silver hover:border-silver transition-colors"
                >
                  {e.venueSection.sbb} ↗
                </a>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* ── RSVP ──────────────────────────────────────────────── */}
      <section id="rsvp" className="bg-pearl text-noir py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-wider-2 opacity-60 mb-4">
              {e.rsvp.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="font-display font-light text-3xl md:text-5xl leading-tight mb-6">
              <span className="font-semibold">{e.rsvp.title}</span>
            </h2>
          </Reveal>
          <Reveal delay={250}>
            <p className="max-w-prose mx-auto font-sans text-base md:text-lg text-noir/80 leading-relaxed mb-10">
              {e.rsvp.body}
            </p>
          </Reveal>
          <Reveal delay={400}>
            <a
              href="mailto:Info@r2jc.ch?subject=Réservation%20—%20Édition%2003%20—%2012%20septembre%202026"
              className="inline-block bg-noir text-blanc px-10 py-4 rounded font-sans text-sm tracking-[0.02em] hover:bg-silver transition-colors duration-500"
            >
              {e.rsvp.cta} →
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── PARTNERS / SPONSOR WALL ───────────────────────────── */}
      <section className="bg-blanc text-noir py-24 md:py-32 border-t border-noir/10">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-wider-2 opacity-60 mb-4 text-center">
              {e.partners.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="font-display font-light text-3xl md:text-5xl text-center mb-6 leading-tight">
              {e.partners.title}
            </h2>
          </Reveal>
          <Reveal delay={250}>
            <p className="max-w-prose mx-auto text-center font-sans text-base text-noir/70 leading-relaxed mb-12">
              {e.partners.body}
            </p>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-px bg-noir/10">
            {SPONSOR_LOGOS.map((s) => (
              <div
                key={s.id}
                data-media-zone={s.id}
                className="bg-blanc flex items-center justify-center p-6 md:p-8 aspect-[4/3]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.file}
                  alt={s.label}
                  className="max-h-full max-w-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/sponsors"
              className="inline-block font-mono text-[11px] uppercase tracking-wider-2 border-b border-noir hover:text-silver hover:border-silver transition-colors"
            >
              {e.partners.link}
            </Link>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTAs — three doors ─────────────────────────── */}
      <section className="bg-noir text-blanc py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-3 gap-px bg-blanc/15">
            {[
              { label: e.bottom.apply.label,   cta: e.bottom.apply.cta,   href: "/postuler" },
              { label: e.bottom.press.label,   cta: e.bottom.press.cta,   href: "/presse" },
              { label: e.bottom.sponsor.label, cta: e.bottom.sponsor.cta, href: "mailto:Info@r2jc.ch?subject=Partenariat%20R2JC%20—%20Édition%2003" },
            ].map((door, i) => (
              <Link
                key={i}
                href={door.href}
                className="group bg-noir px-8 py-12 md:py-16 text-center hover:bg-graphite transition-colors duration-500"
              >
                <p className="font-mono text-[10px] uppercase tracking-wider-2 opacity-50 mb-4">
                  {door.label}
                </p>
                <p className="font-display text-xl md:text-2xl font-medium group-hover:text-silver transition-colors duration-500">
                  {door.cta} →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
