import Link from "next/link";

/**
 * ReworkPlaceholder — front for /r/* routes still being built. Matches
 * the minimalist black-on-white grammar of the Reworked landing:
 *
 *   • Full viewport, bg-noir text-blanc.
 *   • A small monospace eyebrow tagging which section this is.
 *   • A massive `À suivre.` headline in Montserrat Black.
 *   • A single quiet link back to the Upgraded equivalent.
 *   • Blur-in entrance on mount, same easing as the landing.
 *
 * Will be deleted route-by-route as Reworked pages get built.
 */
export function ReworkPlaceholder({
  section,
  upgradedHref,
}: {
  /** Section name (used as the small eyebrow above the headline). */
  section: string;
  /** Path to the equivalent Upgraded page so visitors aren't stranded. */
  upgradedHref: string;
}) {
  return (
    <main className="bg-noir text-blanc min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <p className="r-blur-in font-mono text-[11px] uppercase tracking-wider-2 text-blanc/40 mb-10">
        {section}
      </p>
      <h1
        className="r-blur-in font-display font-black text-[clamp(3.5rem,14vw,14rem)] leading-[0.9] tracking-[-0.05em] select-none uppercase"
      >
        À suivre.
      </h1>
      <Link
        href={upgradedHref}
        className="r-blur-in-late mt-16 font-mono text-[11px] uppercase tracking-wider-2 text-blanc/60 hover:text-blanc transition-colors border-b border-blanc/40 hover:border-blanc pb-1"
      >
        → Voir la version Upgraded
      </Link>
    </main>
  );
}
