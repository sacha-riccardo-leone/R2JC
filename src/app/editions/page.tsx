import { existsSync } from "fs";
import { join } from "path";
import { MediaZone } from "@/components/MediaZone";
import { Reveal } from "@/components/Reveal";
import { DESIGNERS_EDITION_02 } from "@/data/designers";
import { getDict, getLocale } from "@/i18n/server";

export const metadata = { title: "Éditions — R2JC" };

const PUBLIC_DIR = join(process.cwd(), "public");
const fileExists = (publicPath: string) =>
  existsSync(
    join(PUBLIC_DIR, decodeURIComponent(publicPath.replace(/^\//, "")))
  );

export default async function Editions() {
  const t = await getDict();
  const locale = await getLocale();

  return (
    <>
      {/* Hero */}
      <section className="bg-pearl text-noir pt-32 md:pt-40 pb-20">
        <div className="max-w-6xl mx-auto px-6 md:px-10 text-center">
          <p className="font-mono text-[11px] uppercase tracking-wider-2 opacity-60 mb-6">
            {t.editions.eyebrow}
          </p>
          <h1 className="font-display font-light text-display-md leading-[1.05]">
            <span className="font-semibold">{t.editions.titleAccent}</span>
          </h1>
        </div>
      </section>

      {/* Ed 02 intro */}
      <section className="bg-pearl text-noir py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <Reveal>
            <h2 className="font-display font-light text-3xl md:text-5xl leading-tight mb-10 text-center">
              {t.editions.e02.titlePre}{" "}
              <span className="font-semibold">{t.editions.e02.titleAccent}</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="font-sans text-base md:text-lg leading-relaxed text-noir/85 text-center max-w-prose mx-auto">
              {t.editions.e02.intro}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Designer cards */}
      <section className="bg-pearl text-noir pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-12 md:space-y-16">
          {DESIGNERS_EDITION_02.map((d, i) => {
            const reversed = i % 2 === 1;
            return (
              <Reveal key={d.slug}>
                <article className="bg-blanc shadow-[0_2px_24px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_40px_-8px_rgba(0,0,0,0.18)] transition-shadow duration-700 ease-editorial">
                  <div
                    className={`grid md:grid-cols-12 items-start ${
                      reversed ? "md:[direction:rtl]" : ""
                    }`}
                  >
                    <div className="md:col-span-4 md:[direction:ltr]">
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

                    <div className="md:col-span-8 md:[direction:ltr] p-8 md:p-12 lg:p-14 flex flex-col">
                      <p className="font-mono text-[11px] uppercase tracking-wider-2 opacity-60 mb-4">
                        {t.editions.cardLabel}
                      </p>
                      <h3 className="font-display font-light text-3xl md:text-5xl leading-tight">
                        <span className="font-semibold">{d.name}</span>
                      </h3>
                      <p className="font-display italic text-xl md:text-2xl mt-2 text-noir/70">
                        {d.brand}
                      </p>

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
                      {d.email && (
                        <a
                          href={`mailto:${d.email}`}
                          className="inline-block self-start mt-8 font-mono text-[12px] tracking-[0.04em] border-b border-noir hover:text-silver hover:border-silver transition-colors"
                        >
                          {d.email} →
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Ed 01 retrospective */}
      <section className="bg-noir text-blanc py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-wider-2 opacity-60 mb-6">
              {t.editions.e01.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="font-display font-light text-3xl md:text-5xl leading-tight mb-10">
              {t.editions.e01.titlePre}{" "}
              <span className="font-semibold">{t.editions.e01.titleAccent}</span>
            </h2>
          </Reveal>
          <Reveal delay={250}>
            <div className="max-w-md mx-auto">
              <MediaZone
                id="ED01-COVER"
                kind="image"
                ratio="4/5"
                priority="P1"
                tone="light"
                label={t.editions.e01.coverLabel}
                brief="Drop at /media/editions/edition-01-cover.jpg"
              />
            </div>
          </Reveal>
          <Reveal delay={400}>
            <p className="mt-10 font-sans text-base md:text-lg leading-relaxed text-mist/80 max-w-prose mx-auto">
              {t.editions.e01.caption}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
