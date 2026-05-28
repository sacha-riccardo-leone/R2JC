import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { getDict, getLocale } from "@/i18n/server";
import { ReworkedPostulerForm } from "./ReworkedPostulerForm";

export const metadata = { title: "Postuler — R2JC Reworked" };

// Same deadline knob as Upgraded /postuler. Edit both files when R2JC
// changes the cycle. Once Date.now() passes this, the form is replaced
// by a "closed" message announcing the next window.
const DEADLINE_ISO = "2026-09-30T23:59:59+02:00";
const SECONDS_PER_DAY = 60 * 60 * 24;

function daysUntil(targetIso: string): number {
  const target = new Date(targetIso).getTime();
  return Math.ceil((target - Date.now()) / 1000 / SECONDS_PER_DAY);
}

function formatDeadline(iso: string, locale: string) {
  return new Date(iso).toLocaleDateString(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function ReworkedPostuler() {
  const [t, locale] = await Promise.all([getDict(), getLocale()]);
  const p = t.postuler;
  const days = daysUntil(DEADLINE_ISO);
  const isOpen = days >= 0;

  const bcp = ({ fr: "fr-CH", en: "en-GB", de: "de-CH", it: "it-CH" } as const)[
    locale
  ];
  const deadlineLabel = formatDeadline(DEADLINE_ISO, bcp);

  return (
    <main className="bg-noir text-blanc">
      {/* HERO — eyebrow + title + intro + deadline strip */}
      <section className="min-h-screen relative flex flex-col justify-center px-6 md:px-10 py-32 md:py-40">
        <div className="max-w-7xl mx-auto w-full">
          <Reveal motion="blur">
            <p className="font-mono text-[11px] uppercase tracking-wider-2 text-blanc/40 mb-10 md:mb-16">
              {p.eyebrow}
            </p>
          </Reveal>

          <Reveal motion="blur" delay={150}>
            <h1 className="font-display text-[clamp(2.5rem,9vw,8rem)] leading-[0.95] tracking-[-0.04em] mb-16 md:mb-24">
              <span className="font-black">{p.title}.</span>
            </h1>
          </Reveal>

          <Reveal motion="blur" delay={300}>
            <p className="max-w-3xl font-display text-xl md:text-3xl font-light text-blanc/75 leading-[1.3]">
              {p.intro}
            </p>
          </Reveal>

          {isOpen && (
            <Reveal motion="blur" delay={450}>
              <div className="mt-12 md:mt-16 inline-flex flex-col sm:flex-row sm:items-baseline gap-x-6 gap-y-2 border border-blanc/30 px-6 py-4 font-mono text-[11px] uppercase tracking-wider-2">
                <span className="text-blanc/50">{p.status.deadline}</span>
                <span className="text-blanc font-medium">{deadlineLabel}</span>
                <span aria-hidden className="opacity-40 hidden sm:inline">
                  ·
                </span>
                <span className="text-blanc">
                  {days === 0
                    ? p.status.lastDay
                    : `J−${days} · ${days} ${p.status.daysLeft}`}
                </span>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* FORM (or closed message) */}
      {isOpen ? (
        <section className="px-6 md:px-10 py-20 md:py-32 border-t border-blanc/15">
          <div className="max-w-5xl mx-auto w-full">
            <ReworkedPostulerForm />
          </div>
        </section>
      ) : (
        <section className="px-6 md:px-10 py-32 md:py-48 border-t border-blanc/15 text-center">
          <div className="max-w-3xl mx-auto">
            <Reveal motion="blur">
              <p className="font-mono text-[11px] uppercase tracking-wider-2 text-blanc/40 mb-8">
                Clos
              </p>
            </Reveal>
            <Reveal motion="blur" delay={120}>
              <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight tracking-[-0.03em] mb-8">
                {p.closed.title}
              </h2>
            </Reveal>
            <Reveal motion="blur" delay={240}>
              <p className="font-sans text-base md:text-lg text-blanc/70 leading-relaxed">
                {p.closed.next}
              </p>
            </Reveal>
          </div>
        </section>
      )}

      {/* BOTTOM — questions before applying */}
      <section className="border-t border-blanc/15">
        <Link
          href="/r/contact"
          className="group block bg-blanc text-noir hover:bg-mist transition-colors duration-500 ease-editorial"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24 grid grid-cols-12 gap-x-4 md:gap-x-8 items-baseline relative">
            <div className="col-span-12 md:col-span-8 md:pr-44 lg:pr-56">
              <p className="font-mono text-[11px] uppercase tracking-wider-2 text-noir/40 mb-4">
                {p.bottom.eyebrow}
              </p>
              <h2 className="font-display font-medium text-2xl md:text-4xl leading-tight tracking-[-0.02em]">
                {p.bottom.line}
              </h2>
              <p className="mt-6 font-mono text-[12px] uppercase tracking-wider-2 text-noir/60">
                Info@r2jc.ch
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
        </Link>
      </section>
    </main>
  );
}
