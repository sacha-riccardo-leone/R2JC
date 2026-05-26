export const metadata = { title: "R2JC — Reworked" };

/**
 * /r — Reworked landing.
 *
 * Step 1 of the new direction (augen.pro × minimalism × big square fonts):
 *
 *   • Full viewport, black background, white text.
 *   • "R2JC" centered, set in Montserrat Black at display scale with
 *     tight negative tracking — the squarest reading the family offers.
 *   • A thin vertical chevron toward the bottom, perpetually bobbing
 *     up-and-down to indicate scroll.
 *   • Everything blurs in from 20px on mount.
 *
 * The rest of the Reworked site gets built on top of this aesthetic in
 * subsequent turns. For now, scrolling intentionally reveals nothing —
 * the arrow is a *promise*, not a link to anywhere yet.
 */
export default function ReworkedHome() {
  return (
    <main className="bg-noir text-blanc min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* R2JC — text, not the logo. Centered both axes. Big square type:
          Montserrat 900 at display scale, very tight tracking, leading
          collapsed so the word reads as a single solid block. */}
      <h1
        className="r-blur-in font-display font-black text-[clamp(5rem,22vw,26rem)] leading-[0.9] tracking-[-0.05em] select-none"
        aria-label="R2JC"
      >
        R2JC
      </h1>

      {/* Vertically bobbing scroll arrow. Pure SVG — thin 1.5px strokes,
          rounded caps, no fill. Aria-hidden because it's a visual cue,
          not a target. */}
      <div
        className="r-scroll-arrow absolute bottom-[7vh] left-1/2 -translate-x-1/2 text-blanc/60"
        aria-hidden
      >
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
    </main>
  );
}
