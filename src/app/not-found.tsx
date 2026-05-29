import Link from "next/link";

export const metadata = { title: "Page introuvable — R2JC" };

/**
 * Custom 404 — replaces Next's default "404 | This page could not be
 * found" with branded content. Reworked aesthetic (bg-noir + split-
 * weight title + mono eyebrow + return link) so any wrong URL still
 * lands the visitor in something cohesive with the rest of the site.
 *
 * Sits at the app root, so it serves for any unmatched path on
 * either Upgraded or Reworked. Always sends the visitor back to "/"
 * (Upgraded home) — clearest "you're somewhere known" anchor.
 */
export default function NotFound() {
  return (
    <main className="bg-noir text-blanc min-h-screen flex items-center justify-center px-6 pt-32 pb-24">
      <div className="max-w-3xl text-center">
        <p className="font-mono text-[11px] uppercase tracking-wider-2 text-blanc/40 mb-10">
          Erreur 404
        </p>

        <h1 className="font-display text-[clamp(2.5rem,11vw,9rem)] leading-[0.95] tracking-[-0.04em] mb-12">
          <span className="font-light">Page</span>
          <br />
          <span className="font-black">introuvable.</span>
        </h1>

        <p className="font-sans text-base md:text-lg leading-relaxed text-blanc/70 max-w-prose mx-auto mb-16">
          Cette page n&rsquo;existe pas — un lien obsolète ou une URL
          mal recopiée. Le reste du site est toujours là.
        </p>

        <Link
          href="/"
          className="inline-block font-mono text-[11px] uppercase tracking-wider-2 border-b border-blanc/60 hover:text-silver hover:border-silver transition-colors pb-1"
        >
          → Retour à l&rsquo;accueil
        </Link>
      </div>
    </main>
  );
}
