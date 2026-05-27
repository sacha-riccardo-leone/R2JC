import { Reveal } from "@/components/Reveal";

export const metadata = { title: "R2JC — Reworked" };

/**
 * /r — Reworked landing.
 *
 * augen.pro × minimalism × big square fonts.
 *
 *   §1. COLD OPEN — full-viewport "R2JC" wordmark + bobbing scroll arrow.
 *       Mount-time blur-in via the `r-blur-in` / `r-scroll-arrow` CSS
 *       animations in globals.css.
 *
 *   §2. STATEMENT — "Une scène aux designers / qui méritent d'être
 *       découverts." Centered, blur-reveals on scroll-into-view via
 *       Reveal's new `motion="blur"` variant so the resolve grammar is
 *       continuous with the cold open.
 *
 * The rest of the Reworked site gets built on top of this aesthetic in
 * subsequent turns. Scrolling past §2 reveals nothing yet.
 */
export default function ReworkedHome() {
  return (
    <main className="bg-noir text-blanc">
      {/* ── §1 · COLD OPEN ───────────────────────────────────────
          Full viewport. "R2JC" text (not the logo) dead-center, set in
          Montserrat 900 — the squarest weight the family offers — at
          display scale with tight negative tracking and leading
          collapsed so the four letters read as one solid block. */}
      <section className="min-h-screen relative overflow-hidden flex items-center justify-center">
        <h1
          className="r-blur-in font-display font-black text-[clamp(5rem,22vw,26rem)] leading-[0.9] tracking-[-0.05em] select-none"
          aria-label="R2JC"
        >
          R2JC
        </h1>

        {/* Vertically bobbing scroll arrow.
            Positioning lives on the outer div, animation on the inner
            one — split intentionally so the scroll-hint keyframe's
            `transform: translateY(...)` doesn't clobber the
            `-translate-x-1/2` centering. */}
        <div
          className="absolute bottom-[7vh] left-1/2 -translate-x-1/2"
          aria-hidden
        >
          <div className="r-scroll-arrow text-blanc/60">
            <svg
              width="14"
              height="44"
              viewBox="0 0 14 44"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 2 L7 38" />
              <path d="M1 32 L7 38 L13 32" />
            </svg>
          </div>
        </div>
      </section>

      {/* ── §2 · STATEMENT ───────────────────────────────────────
          One sentence. Centered, full viewport so the reader lands on
          it cleanly. Slightly lighter weight than the cold-open R2JC
          (semibold vs black) so it reads as a STATEMENT, not a brand
          mark — but still big and square. Blur-reveals on scroll. */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-10">
        <Reveal motion="blur" delay={100}>
          <p className="text-center max-w-5xl font-display font-semibold text-[clamp(2rem,7vw,6rem)] leading-[1.08] tracking-[-0.03em] select-none">
            Une scène aux designers
            <br />
            qui méritent d&rsquo;être découverts.
          </p>
        </Reveal>
      </section>
    </main>
  );
}
