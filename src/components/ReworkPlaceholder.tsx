import Link from "next/link";

/**
 * ReworkPlaceholder — temporary front for /r/* routes still being built.
 * Matches the Swiss brutalist grammar of the Reworked home: exposed
 * metadata bar, bracket-numbered section index, asymmetric 3/7 split
 * with oversized type. No cinema metaphors, no apologies — reads as a
 * deliberate "module not yet assembled" rather than a coming-soon page.
 *
 * Will be deleted route-by-route as each Reworked page is built.
 */
export function ReworkPlaceholder({
  index,
  section,
  upgradedHref,
}: {
  /** Bracket-numbered slot, e.g. "[02]". Matches the sommaire on /r. */
  index: string;
  /** Section name, used in the metadata bar and section label. */
  section: string;
  /** Path to the equivalent Upgraded page so visitors aren't stranded. */
  upgradedHref: string;
}) {
  return (
    <main className="bg-noir text-blanc min-h-screen">
      {/* Metadata bar — flush under the fixed Nav. Same chrome as /r. */}
      <div className="border-b border-blanc/15 pt-32 pb-3 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-wrap items-baseline gap-x-5 gap-y-1 font-mono text-[10px] uppercase tracking-wider-2 text-mist/50">
          <span>R2JC · Reworked</span>
          <span aria-hidden className="text-mist/30">·</span>
          <span>{index}</span>
          <span aria-hidden className="text-mist/30">·</span>
          <span>{section}</span>
          <span className="ml-auto">Module · en attente</span>
        </div>
      </div>

      {/* Asymmetric 3/7 — label in the narrow column, statement in the wide one */}
      <section className="px-6 md:px-10 py-24 md:py-40">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-x-4 md:gap-x-8">
          <p className="col-span-12 md:col-span-3 font-mono text-[10px] uppercase tracking-wider-2 text-mist/50 mb-8 md:mb-0">
            {index} {section}
          </p>
          <div className="col-span-12 md:col-span-8 space-y-10">
            <h1 className="font-display font-semibold text-[clamp(3rem,10vw,9rem)] leading-[0.9] tracking-[-0.035em]">
              Non assemblé.
            </h1>
            <p className="font-sans text-base md:text-lg text-mist/70 leading-relaxed max-w-prose">
              Ce module sera fabriqué à partir des mêmes données que la
              version Upgraded, avec une grammaire différente. Pas une
              variante — une autre lecture.
            </p>
            <Link
              href={upgradedHref}
              className="inline-block font-mono text-[11px] uppercase tracking-wider-2 border-b border-blanc/60 hover:text-silver hover:border-silver transition-colors pb-1"
            >
              → Voir la version Upgraded
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
