import { existsSync } from "fs";
import { join } from "path";
import { LookHoverPreview } from "@/components/LookHoverPreview";
import { Reveal } from "@/components/Reveal";
import { DESIGNERS_EDITION_02 } from "@/data/designers";
import { getDict, getLocale } from "@/i18n/server";

export const metadata = { title: "Édition 02 — R2JC Reworked" };

const PUBLIC_DIR = join(process.cwd(), "public");
const fileExists = (publicPath: string) =>
  existsSync(
    join(PUBLIC_DIR, decodeURIComponent(publicPath.replace(/^\//, "")))
  );

/**
 * /r/editions/02 — Reworked edition page for the 2024 cycle.
 *
 * Same source data as the Upgraded /editions/02 (DESIGNERS_EDITION_02
 * roster + dict copy) but rendered with the Reworked vocabulary: dark
 * theme, asymmetric grids, blur-reveal motion, mono section markers.
 */
export default async function ReworkedEdition02() {
  const t = await getDict();
  const locale = await getLocale();
  const total = String(DESIGNERS_EDITION_02.length).padStart(2, "0");

  return (
    <main className="bg-noir text-blanc">
      {/* HERO — eyebrow + split-weight title + intro */}
      <section className="min-h-screen relative flex flex-col justify-center px-6 md:px-10 py-32 md:py-40">
        <div className="max-w-7xl mx-auto w-full">
          <Reveal motion="blur">
            <p className="font-mono text-[11px] uppercase tracking-wider-2 text-blanc/40 mb-10 md:mb-16">
              {t.editions.e02.bannerEyebrow}
            </p>
          </Reveal>

          <Reveal motion="blur" delay={150}>
            <h1 className="font-display text-[clamp(2.5rem,9vw,8rem)] leading-[0.95] tracking-[-0.04em] mb-16 md:mb-24">
              <span className="font-light">{t.editions.e02.titlePre}</span>
              <br />
              <span className="font-black">{t.editions.e02.titleAccent}.</span>
            </h1>
          </Reveal>

          {/* Asymmetric 5/7: designer-count callout on the left, intro
              paragraph on the right. "Sélection" replaces an earlier
              English "Roster" so the eyebrow matches the rest of the
              page's French register. */}
          <div className="grid md:grid-cols-12 gap-y-8 md:gap-x-12 items-start">
            <Reveal motion="blur" delay={300} className="md:col-span-5">
              <p className="font-mono text-[11px] uppercase tracking-wider-2 text-blanc/40 mb-4">
                Sélection
              </p>
              <p className="font-display text-5xl md:text-7xl font-black tabular-nums tracking-[-0.04em] leading-none">
                {total}
              </p>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-wider-2 text-blanc/50">
                créateurs · édition 02
              </p>
            </Reveal>
            <Reveal motion="blur" delay={450} className="md:col-span-6 md:col-start-7">
              <p className="font-sans text-base md:text-lg leading-relaxed text-blanc/75 max-w-prose">
                {t.editions.e02.intro}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* DESIGNER SPECIMEN PLATES — vertical stack, each plate an
          asymmetric block. Alternating left/right column for the
          portrait so the page has rhythm instead of being all
          uniform rows. */}
      <section className="border-t border-blanc/15">
        {DESIGNERS_EDITION_02.map((d, i) => {
          const indexNum = String(i + 1).padStart(2, "0");
          const portraitOnLeft = i % 2 === 0;
          const hasPortrait = fileExists(d.portrait);
          const hasLogo = d.logo && fileExists(d.logo);

          return (
            <article
              key={d.slug}
              className="border-b border-blanc/15 px-6 md:px-10 py-20 md:py-28"
            >
              <div className="max-w-7xl mx-auto w-full">
                {/* Plate header — number + total tag */}
                <Reveal motion="blur">
                  <div className="flex items-baseline gap-4 mb-12 md:mb-16">
                    <span className="font-mono text-xs tabular-nums text-blanc/40">
                      {indexNum} / {total}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-wider-2 text-blanc/40">
                      {t.editions.cardLabel}
                    </span>
                  </div>
                </Reveal>

                {/* Two-column block: portrait + text */}
                <div className="grid md:grid-cols-12 gap-y-10 md:gap-x-12 items-start">
                  {/* Portrait */}
                  <Reveal
                    motion="blur"
                    delay={120}
                    className={`md:col-span-5 ${
                      portraitOnLeft ? "" : "md:col-start-8 md:row-start-1"
                    }`}
                  >
                    <div className="relative aspect-[4/5] bg-blanc/[0.04] border border-blanc/15 overflow-hidden">
                      {hasPortrait ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={d.portrait}
                          alt={`${d.name} — ${d.brand}`}
                          className="w-full h-full object-cover"
                          style={{ objectPosition: d.portraitFocus ?? "center" }}
                          loading="lazy"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="font-mono text-[10px] uppercase tracking-wider-2 text-blanc/30 text-center px-4">
                            {d.name}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="mt-4 pt-3 border-t border-blanc/30 flex justify-between items-baseline font-mono uppercase tracking-wider-2">
                      <span className="truncate pr-3 text-sm">{d.brand}</span>
                      <span className="shrink-0 text-[10px] text-blanc/50 tabular-nums">
                        Éd. 02
                      </span>
                    </div>
                  </Reveal>

                  {/* Text column */}
                  <Reveal
                    motion="blur"
                    delay={240}
                    className={`md:col-span-7 ${
                      portraitOnLeft ? "" : "md:col-start-1 md:row-start-1"
                    }`}
                  >
                    <h2 className="font-display text-3xl md:text-5xl font-semibold leading-[1.05] tracking-[-0.03em]">
                      {d.name}
                    </h2>

                    {hasLogo && (
                      // White specimen-card frame for each designer's
                      // brand logo. Previously every logo got an
                      // `invert brightness-200` CSS filter — that
                      // worked for pure black-on-transparent marks but
                      // mangled colored logos and washed out anything
                      // that was already light. Putting them on a
                      // white panel restores their natural environment
                      // regardless of original color or contrast.
                      //
                      // Small "Logo" corner marker (mono, noir/35)
                      // sits inside the card so the panel reads as an
                      // intentional editorial frame rather than a
                      // background patch.
                      <div className="mt-10 inline-block">
                        <div className="relative bg-blanc px-6 py-5 md:px-8 md:py-7 w-[260px] md:w-[300px] min-h-[110px] md:min-h-[130px] flex items-center">
                          <span className="absolute top-3 right-3 md:top-4 md:right-4 font-mono text-[9px] uppercase tracking-wider-2 text-noir/35">
                            Logo
                          </span>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={d.logo}
                            alt={`${d.name} — logo`}
                            className="h-12 md:h-14 w-auto max-w-[80%] object-contain object-left"
                          />
                        </div>
                      </div>
                    )}

                    {d.bio[locale] && (
                      <p className="mt-8 font-sans text-base md:text-lg leading-relaxed text-blanc/75 max-w-prose">
                        {d.bio[locale]}
                      </p>
                    )}

                    {(d.instagram || d.website || d.email) && (
                      <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 items-baseline">
                        {d.instagram && (
                          <a
                            href={`https://instagram.com/${d.instagram}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-[12px] tracking-[0.04em] border-b border-blanc/60 hover:text-silver hover:border-silver transition-colors pb-0.5"
                          >
                            @{d.instagram} ↗
                          </a>
                        )}
                        {d.website && (
                          <a
                            href={d.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-[12px] tracking-[0.04em] border-b border-blanc/60 hover:text-silver hover:border-silver transition-colors pb-0.5"
                          >
                            {d.website.replace(/^https?:\/\//, "")} ↗
                          </a>
                        )}
                        {d.email && (
                          <a
                            href={`mailto:${d.email}`}
                            className="font-mono text-[12px] tracking-[0.04em] border-b border-blanc/60 hover:text-silver hover:border-silver transition-colors pb-0.5"
                          >
                            {d.email} →
                          </a>
                        )}
                      </div>
                    )}
                  </Reveal>
                </div>

                {/* Runway looks — full-width grid below */}
                {d.looks.length > 0 && (
                  <Reveal motion="blur" delay={360}>
                    <div className="border-t border-blanc/15 mt-16 md:mt-20 pt-10">
                      <div className="flex justify-between items-baseline mb-6 font-mono text-[10px] uppercase tracking-wider-2 text-blanc/40">
                        <span>
                          Looks 01 — {String(d.looks.length).padStart(2, "0")}
                        </span>
                        <span>{d.brand}</span>
                      </div>
                      <div
                        className="grid gap-3 md:gap-4"
                        style={{
                          gridTemplateColumns:
                            "repeat(auto-fill, minmax(140px, 1fr))",
                        }}
                      >
                        {d.looks.map((look, idx) => (
                          <LookHoverPreview
                            key={look}
                            src={`/media/editions-archive/${look}`}
                            alt={`${d.name} — Look ${idx + 1}`}
                            label={`Look ${String(idx + 1).padStart(2, "0")}`}
                          />
                        ))}
                      </div>
                    </div>
                  </Reveal>
                )}
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}
