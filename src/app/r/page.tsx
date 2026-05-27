import { existsSync } from "fs";
import { join } from "path";
import { Reveal } from "@/components/Reveal";
import { DESIGNERS_EDITION_02 } from "@/data/designers";

export const metadata = { title: "R2JC — Reworked" };

const PUBLIC_DIR = join(process.cwd(), "public");
const fileExists = (publicPath: string) =>
  existsSync(
    join(PUBLIC_DIR, decodeURIComponent(publicPath.replace(/^\//, "")))
  );

// Filter to portraits that actually exist on disk, so the marquee never
// renders a broken image. Order preserved (= editions order).
const PORTRAITS = DESIGNERS_EDITION_02
  .filter((d) => fileExists(d.portrait))
  .map((d) => ({ src: d.portrait, name: d.name, focus: d.portraitFocus }));

/**
 * /r — Reworked landing.
 *
 * augen.pro × minimalism × big square fonts.
 *
 *   §1. COLD OPEN — full-viewport "R2JC" wordmark + bobbing scroll arrow.
 *   §2. STATEMENT — declarative line with designer portraits running
 *       behind it as a non-stop left-to-right marquee.
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

      {/* ── §2 · STATEMENT WITH PORTRAIT MARQUEE ─────────────────
          The declarative line sits centered; behind it, a non-stop
          left-to-right band of designer portraits slides through. All
          portraits forced to the same size via fixed height + 3:4
          aspect-ratio. Section clips the marquee with overflow-hidden
          so it never widens the page. */}
      <section className="min-h-screen relative flex items-center justify-center overflow-hidden px-6 md:px-10">
        {/* Marquee band — behind the text, vertically centered, full
            section width. pointer-events-none so it never blocks taps
            (no hover state on the pictures at this stage). */}
        {PORTRAITS.length > 0 && (
          <Reveal
            motion="blur"
            className="absolute inset-0 flex items-center pointer-events-none"
          >
            <div className="r-marquee flex gap-4 md:gap-6">
              {/* Duplicate the list so the keyframe's translateX(-50%) →
                  translateX(0) wraps seamlessly. */}
              {[...PORTRAITS, ...PORTRAITS].map((p, i) => (
                <div
                  key={i}
                  className="relative h-[18rem] md:h-[22rem] aspect-[3/4] shrink-0 overflow-hidden"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.src}
                    alt=""
                    className="w-full h-full object-cover opacity-60"
                    style={{ objectPosition: p.focus ?? "center" }}
                    loading="lazy"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          </Reveal>
        )}

        {/* Statement on top. `relative z-10` puts it above the absolutely
            positioned marquee. Slightly lighter weight than the cold-open
            R2JC (semibold vs black) so it reads as a statement, not a
            second brand mark — but still big and square. */}
        <Reveal motion="blur" delay={150} className="relative z-10">
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
