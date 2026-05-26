import { existsSync } from "fs";
import { join } from "path";
import { MediaZone } from "@/components/MediaZone";
import { LookHoverPreview } from "@/components/LookHoverPreview";
import { DESIGNERS_EDITION_02 } from "@/data/designers";
import { getDict, getLocale } from "@/i18n/server";

export const metadata = { title: "Édition 02 — 2024 — R2JC" };

const PUBLIC_DIR = join(process.cwd(), "public");
const fileExists = (publicPath: string) =>
  existsSync(
    join(PUBLIC_DIR, decodeURIComponent(publicPath.replace(/^\//, "")))
  );

/**
 * /editions/02 — dedicated landing page for the 2024 edition.
 *
 * Hosts the full content (intro + 16 designer specimen plates with runway
 * looks) that used to live inline on /editions. Moved here so the editions
 * index can stay a pure magazine-cover gallery and so every edition has a
 * symmetric `/editions/<n>` URL.
 */
export default async function Edition02() {
  const t = await getDict();
  const locale = await getLocale();

  return (
    <>
      {/* Intro — masthead block */}
      <section className="bg-pearl text-noir pt-32 md:pt-40 pb-20 md:pb-28 border-b border-noir/10">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <p className="font-mono text-[11px] uppercase tracking-wider-2 opacity-60 mb-6">
            {t.editions.e02.bannerEyebrow}
          </p>
          <h1 className="font-display font-light text-3xl md:text-5xl leading-tight mb-10">
            {t.editions.e02.titlePre}{" "}
            <span className="font-semibold">{t.editions.e02.titleAccent}</span>
          </h1>
          <p className="font-sans text-base md:text-lg leading-relaxed text-noir/85 max-w-prose mx-auto">
            {t.editions.e02.intro}
          </p>
        </div>
      </section>

      {/* Designer Specimen Plates */}
      <section className="bg-pearl text-noir py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-12 md:space-y-16">
          {DESIGNERS_EDITION_02.map((d, i) => {
            const indexNum = String(i + 1).padStart(2, "0");
            const total = String(DESIGNERS_EDITION_02.length).padStart(2, "0");

            return (
              <article
                key={d.slug}
                className="bg-blanc shadow-[0_2px_24px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_40px_-8px_rgba(0,0,0,0.18)] transition-shadow duration-700 ease-editorial overflow-hidden"
              >
                <div className="grid md:grid-cols-12 items-start">
                  {/* Specimen plate */}
                  <div className="md:col-span-5 p-8 md:p-10 lg:p-12 relative">
                    <div className="absolute top-4 left-4 md:top-6 md:left-6 z-10 pointer-events-none">
                      <div className="flex items-baseline gap-2 leading-none">
                        <span className="font-mono font-bold text-5xl md:text-6xl text-noir tabular-nums">
                          {indexNum}
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-wider-2 text-noir/40 tabular-nums">
                          / {total}
                        </span>
                      </div>
                    </div>

                    <div className="border-[1.5px] border-noir mt-12 md:mt-14 relative">
                      <MediaZone
                        id={`ED02-PORTRAIT-${d.slug}`}
                        kind="image"
                        ratio="4/5"
                        priority="P0"
                        tone="dark"
                        fit="cover"
                        focus={d.portraitFocus}
                        label={d.name}
                        brief={`Portrait — drop at ${d.portrait}`}
                        src={fileExists(d.portrait) ? d.portrait : undefined}
                        alt={`${d.name} — ${d.brand}`}
                      />
                    </div>

                    <div className="mt-4 pt-3 border-t border-noir/30">
                      <div className="flex justify-between items-baseline font-mono uppercase tracking-wider-2">
                        <span className="truncate pr-3 text-sm text-noir">
                          {d.brand}
                        </span>
                        <span className="shrink-0 text-[10px] text-noir/50">
                          {t.editions.e02.titleAccent} · 02
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Text column */}
                  <div className="md:col-span-7 p-8 md:p-12 lg:p-14 flex flex-col">
                    <p className="font-mono text-[11px] uppercase tracking-wider-2 opacity-60 mb-4">
                      {t.editions.cardLabel}
                    </p>
                    <h2 className="font-display font-light text-3xl md:text-5xl leading-tight">
                      <span className="font-semibold">{d.name}</span>
                    </h2>

                    {d.logo && fileExists(d.logo) && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={d.logo}
                        alt={`${d.name} — logo`}
                        className="h-20 md:h-28 w-auto max-w-[280px] mt-8 object-contain object-left"
                      />
                    )}

                    {d.bio[locale] && (
                      <p className="mt-8 font-sans text-base leading-relaxed text-noir/85 max-w-prose">
                        {d.bio[locale]}
                      </p>
                    )}

                    {(d.instagram || d.website || d.email) && (
                      <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 items-baseline">
                        {d.instagram && (
                          <a
                            href={`https://instagram.com/${d.instagram}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block font-mono text-[12px] tracking-[0.04em] border-b border-noir hover:text-silver hover:border-silver transition-colors"
                          >
                            @{d.instagram} ↗
                          </a>
                        )}
                        {d.website && (
                          <a
                            href={d.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block font-mono text-[12px] tracking-[0.04em] border-b border-noir hover:text-silver hover:border-silver transition-colors"
                          >
                            {d.website.replace(/^https?:\/\//, "")} ↗
                          </a>
                        )}
                        {d.email && (
                          <a
                            href={`mailto:${d.email}`}
                            className="inline-block font-mono text-[12px] tracking-[0.04em] border-b border-noir hover:text-silver hover:border-silver transition-colors"
                          >
                            {d.email} →
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Runway looks */}
                {d.looks.length > 0 && (
                  <div className="border-t border-noir/10 px-8 md:px-10 lg:px-12 py-8 md:py-10">
                    <div className="flex justify-between items-baseline mb-5 font-mono text-[10px] uppercase tracking-wider-2 text-noir/60">
                      <span>
                        Looks 01 — {String(d.looks.length).padStart(2, "0")}
                      </span>
                      <span className="text-noir/40">{d.brand}</span>
                    </div>
                    <div
                      className="grid gap-3 md:gap-4"
                      style={{
                        gridTemplateColumns: `repeat(auto-fill, minmax(140px, 1fr))`,
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
                )}
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
