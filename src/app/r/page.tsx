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

// Timeline rows for §3 · Histoire. Brief copy stays manifesto-cadenced —
// short, declarative, no marketing fluff.
const EDITIONS = [
  {
    num: "01",
    year: "2023",
    title: "La première rencontre.",
    brief:
      "L’année zéro. R2JC se construit autour d’une promesse — donner une scène à ceux qui méritent d’être découverts.",
  },
  {
    num: "02",
    year: "2024",
    title: "Seize créateurs en scène.",
    brief:
      "Deux nuits, seize jeunes créateurs émergents, un public devant des gestes qu’il n’aurait jamais croisé autrement.",
  },
  {
    num: "03",
    year: "2026",
    title: "Le prochain plan.",
    brief:
      "12 septembre 2026, en Suisse. Nouvelle ville, mêmes intentions, plus de monde. Inscriptions ouvertes.",
  },
] as const;

/**
 * /r — Reworked landing.
 *
 * augen.pro × minimalism × big square fonts.
 *
 *   §1. COLD OPEN — full-viewport "R2JC" wordmark + bobbing scroll arrow.
 *   §2. STATEMENT — declarative line with designer-portrait marquee
 *       sliding behind it left-to-right, non-stop.
 *   §3. HISTOIRE — eyebrow → split-weight title → asymmetric intro
 *       (manifesto + paragraph) → vertical timeline of the three
 *       editions.
 *
 * The rest of the Reworked site gets built on top of this aesthetic in
 * subsequent turns.
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

      {/* ── §3 · HISTOIRE ────────────────────────────────────────
          Section architecture: eyebrow → big split-weight title →
          asymmetric intro (5/7 grid: manifesto line on the left,
          supporting paragraph on the right) → vertical timeline of the
          three editions, each row a 3/9 grid (year cluster + body). */}
      <section className="min-h-screen relative flex flex-col justify-center px-6 md:px-10 py-32 md:py-40">
        <div className="max-w-7xl mx-auto w-full">
          <Reveal motion="blur">
            <p className="font-mono text-[11px] uppercase tracking-wider-2 text-blanc/40 mb-10 md:mb-16">
              03 · Histoire
            </p>
          </Reveal>

          {/* Split-weight title — light + black contrast. */}
          <Reveal motion="blur" delay={150}>
            <h2 className="font-display text-[clamp(2.5rem,9vw,8rem)] leading-[0.95] tracking-[-0.04em] mb-16 md:mb-24">
              <span className="font-light">L&rsquo;histoire</span>
              <br />
              <span className="font-black">de R2JC.</span>
            </h2>
          </Reveal>

          {/* Asymmetric intro — 5/7 split. Manifesto stanza on the left,
              supporting paragraph on the right. */}
          <div className="grid md:grid-cols-12 gap-y-8 md:gap-x-12 items-start mb-20 md:mb-28">
            <Reveal motion="blur" delay={300} className="md:col-span-5">
              <p className="font-display font-semibold text-2xl md:text-4xl leading-[1.2] tracking-[-0.02em]">
                Trois rencontres.
                <br />
                Trente créateurs.
                <br />
                <span className="text-blanc/45">Une histoire en cours.</span>
              </p>
            </Reveal>
            <Reveal
              motion="blur"
              delay={450}
              className="md:col-span-6 md:col-start-7"
            >
              <p className="font-sans text-base md:text-lg leading-relaxed text-blanc/65 max-w-prose">
                R2JC est un collectif suisse qui organise chaque année une
                rencontre entre créateurs émergents et public. Une scène,
                une nuit, des gestes qu&rsquo;on ne croiserait jamais
                autrement.
              </p>
            </Reveal>
          </div>

          {/* Timeline. Each edition is a 3/9 row: number+year on the
              left, title and brief on the right. Hairline rules between
              rows give the editorial rhythm. */}
          <div className="border-t border-blanc/15">
            {EDITIONS.map((ed, i) => (
              <Reveal key={ed.num} motion="blur" delay={550 + i * 120}>
                <article className="grid grid-cols-12 gap-x-4 md:gap-x-8 items-baseline py-10 md:py-14 border-b border-blanc/15">
                  <div className="col-span-12 md:col-span-3 flex items-baseline gap-3 md:gap-4 mb-4 md:mb-0">
                    <span className="font-mono text-xs tabular-nums text-blanc/40">
                      {ed.num}
                    </span>
                    <span className="font-display font-semibold text-4xl md:text-6xl tabular-nums tracking-[-0.03em] leading-none">
                      {ed.year}
                    </span>
                  </div>
                  <div className="col-span-12 md:col-span-9">
                    <h3 className="font-display font-medium text-2xl md:text-4xl leading-tight tracking-[-0.02em] mb-3 md:mb-4">
                      {ed.title}
                    </h3>
                    <p className="font-sans text-base md:text-lg text-blanc/65 leading-relaxed max-w-2xl">
                      {ed.brief}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
