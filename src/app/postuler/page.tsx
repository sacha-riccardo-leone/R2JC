import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { PostulerForm } from "@/components/PostulerForm";
import { getDict, getLocale } from "@/i18n/server";

export const metadata = { title: "Postuler — R2JC" };

/**
 * /postuler — designer open-call portal.
 *
 * Deadline configuration is hardcoded here for the prototype. For production
 * R2JC will need to edit DEADLINE_ISO each cycle, or move it into a CMS / env.
 *
 * If the current date is past DEADLINE_ISO, the form is replaced by a "closed"
 * message announcing the next window.
 */
const DEADLINE_ISO = "2026-09-30T23:59:59+02:00";

const SECONDS_PER_DAY = 60 * 60 * 24;

function daysUntil(targetIso: string): number {
  const target = new Date(targetIso).getTime();
  const now = Date.now();
  return Math.ceil((target - now) / 1000 / SECONDS_PER_DAY);
}

function formatDeadline(iso: string, locale: string) {
  return new Date(iso).toLocaleDateString(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function Postuler() {
  const [t, locale] = await Promise.all([getDict(), getLocale()]);
  const p = t.postuler;
  const days = daysUntil(DEADLINE_ISO);
  const isOpen = days >= 0;

  // Map our app locale to a Swiss BCP-47 tag for Intl.DateTimeFormat
  const bcp = ({ fr: "fr-CH", en: "en-GB", de: "de-CH", it: "it-CH" } as const)[
    locale
  ];
  const deadlineLabel = formatDeadline(DEADLINE_ISO, bcp);

  return (
    <>
      {/* Hero */}
      <section className="bg-noir text-blanc pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-wider-2 opacity-70 mb-6">
              {p.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="font-display font-light text-display-md leading-[1.05]">
              <span className="font-semibold">{p.title}</span>
            </h1>
          </Reveal>
          <Reveal delay={250}>
            <p className="mt-10 max-w-prose mx-auto font-sans text-base md:text-lg leading-relaxed opacity-85">
              {p.intro}
            </p>
          </Reveal>

          {/* Deadline status strip */}
          {isOpen && (
            <Reveal delay={400}>
              <div className="mt-14 inline-flex flex-col sm:flex-row sm:items-baseline gap-x-6 gap-y-2 border border-blanc/30 px-6 py-4 font-mono text-[11px] uppercase tracking-wider-2">
                <span className="opacity-60">{p.status.deadline}</span>
                <span className="text-blanc font-medium">
                  {deadlineLabel}
                </span>
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

      {/* Form (or closed message) */}
      {isOpen ? (
        <section className="bg-pearl text-noir py-20 md:py-28">
          <div className="px-6 md:px-10">
            <PostulerForm />
          </div>
        </section>
      ) : (
        <section className="bg-pearl text-noir py-32 md:py-48">
          <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-wider-2 opacity-60 mb-6">
                ※
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="font-display font-light text-3xl md:text-5xl leading-tight mb-8">
                {p.closed.title}
              </h2>
            </Reveal>
            <Reveal delay={250}>
              <p className="font-sans text-base md:text-lg text-noir/80 leading-relaxed">
                {p.closed.next}
              </p>
            </Reveal>
          </div>
        </section>
      )}

      {/* Bottom — questions before applying */}
      <section className="bg-noir text-blanc py-20 md:py-24 text-center">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <p className="font-mono text-[11px] uppercase tracking-wider-2 opacity-60 mb-4">
            {p.bottom.eyebrow}
          </p>
          <p className="font-display font-light text-2xl md:text-3xl leading-tight mb-8">
            {p.bottom.line}
          </p>
          <Link
            href="/contact"
            className="inline-block border border-blanc/60 text-blanc px-8 py-3 rounded font-sans text-sm tracking-[0.02em] hover:bg-blanc hover:text-noir transition-colors duration-500"
          >
            Info@r2jc.ch
          </Link>
        </div>
      </section>
    </>
  );
}
