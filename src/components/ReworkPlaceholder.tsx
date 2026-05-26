import Link from "next/link";

/**
 * ReworkPlaceholder — temporary front for /r/* routes that haven't been
 * reimagined yet. Communicates intent without trying to look like finished
 * work, and points the visitor at the Upgraded version while we build.
 *
 * Will be deleted route-by-route as Reworked pages get filmed.
 */
export function ReworkPlaceholder({
  act,
  section,
  upgradedHref,
}: {
  /** Roman numeral for which "act" of the film this section belongs to. */
  act: string;
  /** Section name, shown as the eyebrow. */
  section: string;
  /** Path to the equivalent Upgraded page so visitors aren't stranded. */
  upgradedHref: string;
}) {
  return (
    <section className="bg-noir text-blanc min-h-screen flex items-center justify-center px-6 md:px-10 pt-32 pb-32">
      <div className="max-w-3xl text-center">
        <p className="font-mono text-[11px] uppercase tracking-wider-2 text-mist/50 mb-10">
          Reworked · Acte {act} · {section}
        </p>
        <h1 className="font-display font-light text-display-md leading-[0.95] mb-12">
          <span className="font-semibold">Hors champ.</span>
        </h1>
        <p className="font-sans text-base md:text-lg text-mist/70 max-w-prose mx-auto leading-relaxed mb-14">
          Cette scène est en cours de tournage. Le résultat ne sera pas une
          variante de la version actuelle — c&rsquo;est une autre lecture du
          site, structure et rythme compris.
        </p>
        <Link
          href={upgradedHref}
          className="inline-block font-mono text-[11px] uppercase tracking-wider-2 border-b border-blanc/60 hover:text-silver hover:border-silver transition-colors"
        >
          Voir la version Upgraded →
        </Link>
      </div>
    </section>
  );
}
