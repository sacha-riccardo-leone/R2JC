import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { getDict } from "@/i18n/server";

export const metadata = { title: "Éditions — R2JC Reworked" };

// Reusable Reworked wayfinding arrow — same chevron+shaft used on the
// /r §3 banners. currentColor inherits from the parent link's text.
function WayfindingArrow() {
  return (
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
  );
}

export default async function ReworkedEditions() {
  const t = await getDict();

  const editions = [
    {
      num: "01",
      year: "2023",
      title: t.editions.e01.bannerTitle,
      brief: t.editions.e01.caption,
      href: "/r/editions/01",
    },
    {
      num: "02",
      year: "2024",
      title: t.editions.e02.bannerTitle,
      brief: (() => {
        // First sentence only of e02.intro (rest contains a year typo
        // on the Upgraded dict — see prior commit).
        const s = t.editions.e02.intro;
        const stop = s.indexOf(". ");
        return stop === -1 ? s : s.slice(0, stop + 1);
      })(),
      href: "/r/editions/02",
    },
    {
      num: "03",
      year: "2026",
      title: t.ed03.title,
      brief: t.ed03.about.body,
      href: "/r/editions/03",
    },
  ];

  return (
    <main className="bg-noir text-blanc">
      {/* HERO — eyebrow + split-weight title */}
      <section className="min-h-screen relative flex flex-col justify-center px-6 md:px-10 py-32 md:py-40">
        <div className="max-w-7xl mx-auto w-full">
          <Reveal motion="blur">
            <p className="font-mono text-[11px] uppercase tracking-wider-2 text-blanc/40 mb-10 md:mb-16">
              {t.editions.eyebrow}
            </p>
          </Reveal>

          <Reveal motion="blur" delay={150}>
            <h1 className="font-display text-[clamp(2.5rem,9vw,8rem)] leading-[0.95] tracking-[-0.04em] mb-16 md:mb-24">
              <span className="font-light">Trois</span>
              <br />
              <span className="font-black">{t.editions.titleAccent}.</span>
            </h1>
          </Reveal>

          <Reveal motion="blur" delay={300}>
            <p className="max-w-3xl font-display text-xl md:text-3xl font-light text-blanc/65 leading-[1.3]">
              Trois rencontres documentées. Cliquez sur une édition pour
              entrer dans ses archives.
            </p>
          </Reveal>
        </div>
      </section>

      {/* EDITION BANNERS — same pattern as /r §3.
          Édition 03 is the white banner (active CTA for the upcoming
          event); 01 and 02 stay dark. */}
      <section className="border-t border-blanc/15">
        {editions.map((ed, i) => {
          const isWhite = ed.num === "03";
          const isLast = i === editions.length - 1;
          return (
            <Reveal key={ed.num} motion="blur">
              <Link
                href={ed.href}
                className={`group block relative transition-colors duration-500 ease-editorial ${
                  isWhite
                    ? "bg-blanc text-noir hover:bg-mist"
                    : "bg-noir text-blanc hover:bg-blanc/[0.04]"
                } ${!isLast ? "border-b border-blanc/15" : ""}`}
                aria-label={`${ed.title} · ${ed.year}`}
              >
                <article className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-12 gap-x-4 md:gap-x-8 items-baseline py-12 md:py-16 relative">
                  <div className="col-span-12 md:col-span-3 flex items-baseline gap-3 md:gap-4 mb-4 md:mb-0">
                    <span
                      className={`font-mono text-xs tabular-nums ${
                        isWhite ? "text-noir/40" : "text-blanc/40"
                      }`}
                    >
                      {ed.num}
                    </span>
                    <span className="font-display font-semibold text-4xl md:text-6xl tabular-nums tracking-[-0.03em] leading-none">
                      {ed.year}
                    </span>
                  </div>
                  <div className="col-span-12 md:col-span-9 md:pr-44 lg:pr-56">
                    <h2 className="font-display font-medium text-2xl md:text-4xl leading-tight tracking-[-0.02em] mb-3 md:mb-4">
                      {ed.title}
                    </h2>
                    <p
                      className={`font-sans text-base md:text-lg leading-relaxed max-w-2xl ${
                        isWhite ? "text-noir/70" : "text-blanc/65"
                      }`}
                    >
                      {ed.brief}
                    </p>
                  </div>
                  <WayfindingArrow />
                </article>
              </Link>
            </Reveal>
          );
        })}
      </section>
    </main>
  );
}
