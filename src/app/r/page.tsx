import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export const metadata = { title: "R2JC — Reworked · Le film" };

/**
 * /r — Reworked home.
 *
 * "Le film": the home is the opening sequence, not a navigation grid. A
 * single uninterrupted scroll that builds like a movie:
 *
 *   Cold open → Acte I (le geste) → Acte II (la scène) → Acte III (le
 *   prochain plan) → Coda.
 *
 * This first cut sets the cold open + structural beats. The full reel is
 * filled in over subsequent turns — each act gets its own pacing, type
 * size, and motion grammar instead of repeating one section template.
 */
export default function ReworkedHome() {
  return (
    <>
      {/* ─────────────────────────────────────────────────────────────
          COLD OPEN — full-bleed title card. No nav, no preamble. Type
          rises out of nothing, holds the screen, then invites the scroll.
          ───────────────────────────────────────────────────────────── */}
      <section className="relative bg-noir text-blanc min-h-screen flex flex-col justify-between pt-32 pb-12 px-6 md:px-10">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-wider-2 text-mist/50">
            Cold open · 00:00
          </p>
        </Reveal>

        <div className="max-w-7xl mx-auto w-full">
          <Reveal delay={250}>
            <h1 className="font-display font-light text-[clamp(3rem,12vw,11rem)] leading-[0.88] tracking-[-0.02em]">
              <span className="font-semibold">Ceux que l&rsquo;on découvre</span>
              <br />
              <span className="text-mist/40">avant les autres.</span>
            </h1>
          </Reveal>
        </div>

        <Reveal delay={750}>
          <div className="grid grid-cols-3 items-end gap-4 border-t border-blanc/15 pt-6">
            <p className="font-mono text-[10px] md:text-[11px] uppercase tracking-wider-2 text-mist/50">
              R2JC · Reworked
            </p>
            <p className="font-mono text-[10px] md:text-[11px] uppercase tracking-wider-2 text-mist/50 text-center">
              Un film en trois actes
            </p>
            <p className="font-mono text-[10px] md:text-[11px] uppercase tracking-wider-2 text-mist/50 text-right">
              ↓ Scroll
            </p>
          </div>
        </Reveal>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          ACT TITLE CARD — Acte I. A held beat between scenes. The card
          is intentionally near-empty: in cinema this is where the title
          would burn in over black. The next section starts the act.
          ───────────────────────────────────────────────────────────── */}
      <section className="bg-noir text-blanc min-h-[60vh] flex items-center px-6 md:px-10 border-t border-blanc/10">
        <div className="max-w-7xl mx-auto w-full">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-wider-2 text-mist/40 mb-12 tabular-nums">
              Acte I — Le geste
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="font-display font-light text-[clamp(2rem,6vw,5rem)] leading-[1.05] max-w-5xl">
              On ne <span className="text-mist/40">présente</span> pas.
              <br />
              On <span className="font-semibold">accueille</span>.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          ACTE I — content beat. Single paragraph, generous whitespace,
          no images. Type is the protagonist.
          ───────────────────────────────────────────────────────────── */}
      <section className="bg-noir text-blanc py-32 md:py-48 px-6 md:px-10">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <p className="font-sans text-lg md:text-2xl leading-[1.55] text-mist/90">
              R2JC n&rsquo;est pas une plateforme. C&rsquo;est une
              rencontre. Un soir, dans une ville, devant cent personnes
              qui n&rsquo;auraient jamais croisé ces gestes autrement.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-10 font-sans text-lg md:text-2xl leading-[1.55] text-mist/60">
              Le site qui suit est la trace de ce soir-là. Et la promesse
              du prochain.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          ACT TITLE CARD — Acte II.
          ───────────────────────────────────────────────────────────── */}
      <section className="bg-noir text-blanc min-h-[60vh] flex items-center px-6 md:px-10 border-t border-blanc/10">
        <div className="max-w-7xl mx-auto w-full">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-wider-2 text-mist/40 mb-12 tabular-nums">
              Acte II — La scène
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="font-display font-light text-[clamp(2rem,6vw,5rem)] leading-[1.05] max-w-5xl">
              Trente créateurs.
              <br />
              <span className="font-semibold">Une nuit</span>.
              <span className="text-mist/40"> Aucun filtre.</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ACT II placeholder — the editions reel will live here in the next cut */}
      <section className="bg-noir text-blanc py-32 md:py-48 px-6 md:px-10 border-t border-blanc/5">
        <div className="max-w-5xl mx-auto text-center">
          <p className="font-mono text-[11px] uppercase tracking-wider-2 text-mist/40 mb-6">
            En cours de montage
          </p>
          <p className="font-display font-light text-3xl md:text-5xl leading-[1.1] text-mist/70">
            La séquence des éditions est en cours d&rsquo;assemblage.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          ACT TITLE CARD — Acte III.
          ───────────────────────────────────────────────────────────── */}
      <section className="bg-noir text-blanc min-h-[60vh] flex items-center px-6 md:px-10 border-t border-blanc/10">
        <div className="max-w-7xl mx-auto w-full">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-wider-2 text-mist/40 mb-12 tabular-nums">
              Acte III — Le prochain plan
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="font-display font-light text-[clamp(2rem,6vw,5rem)] leading-[1.05] max-w-5xl">
              <span className="font-semibold">12.09.2026</span>.
              <br />
              <span className="text-mist/40">Le reste se tournera là-bas.</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* CODA — bottom of the reel. CTA out to either the Upgraded site
          (for the team to compare) or the Edition 03 page. */}
      <section className="bg-noir text-blanc py-24 md:py-32 px-6 md:px-10 border-t border-blanc/10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-baseline justify-between gap-8">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-wider-2 text-mist/40 mb-3">
              Générique
            </p>
            <p className="font-display text-2xl md:text-3xl font-medium">
              Conception · Sacha Riccardo Leone
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 font-mono text-[11px] uppercase tracking-wider-2">
            <Link
              href="/r/editions"
              className="border-b border-blanc/60 hover:text-silver hover:border-silver transition-colors pb-1"
            >
              Voir les actes →
            </Link>
            <Link
              href="/"
              className="border-b border-blanc/60 hover:text-silver hover:border-silver transition-colors pb-1"
            >
              Version Upgraded →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
