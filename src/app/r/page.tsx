import { existsSync } from "fs";
import { join } from "path";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { DESIGNERS_EDITION_02 } from "@/data/designers";
import { getDict } from "@/i18n/server";

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
 *   §2. STATEMENT — declarative line (from the i18n dict, identical to
 *       the Upgraded home tagline) with designer-portrait marquee
 *       sliding behind it left-to-right, non-stop.
 *   §3. HISTOIRE — every line pulled verbatim from `home.histoire.*` and
 *       the per-edition dict keys. Nothing fabricated.
 *
 * All copy reads from `getDict()` so the Reworked side honours the
 * current locale (FR / EN / DE / IT) the same way the Upgraded side does.
 */
export default async function ReworkedHome() {
  const t = await getDict();

  // Pull the first sentence of the history paragraph as a pull-quote, and
  // the rest as supporting body. Splitting on the first ". " keeps the
  // separation honest — no rewriting, just a verbatim split. If the
  // sentence boundary ever disappears from the dict, both halves still
  // collapse to safe values.
  const histoireParts = (() => {
    const p = t.home.histoire.p1;
    const firstStop = p.indexOf(". ");
    if (firstStop === -1) return { lead: p, rest: "" };
    return {
      lead: p.slice(0, firstStop + 1),
      rest: p.slice(firstStop + 2),
    };
  })();

  // Per-edition timeline rows. Year + bannerTitle come straight from the
  // dict; the brief is a verbatim string from the matching edition's
  // descriptive copy. Edition 02 brief uses the first sentence of intro
  // (the rest of intro talks about expanded space + variety — too long
  // for a timeline row, and the second sentence has a year typo "2025"
  // we shouldn't propagate).
  const e02FirstSentence = (() => {
    const s = t.editions.e02.intro;
    const firstStop = s.indexOf(". ");
    return firstStop === -1 ? s : s.slice(0, firstStop + 1);
  })();

  const EDITIONS = [
    {
      num: "01",
      year: "2023",
      title: t.editions.e01.bannerTitle,
      brief: t.editions.e01.caption,
    },
    {
      num: "02",
      year: "2024",
      title: t.editions.e02.bannerTitle,
      brief: e02FirstSentence,
    },
    {
      num: "03",
      year: "2026",
      title: t.ed03.title,
      brief: t.ed03.about.body,
    },
  ];

  return (
    <main className="bg-noir text-blanc">
      {/* ── §1 · COLD OPEN ───────────────────────────────────────
          Full viewport. "R2JC" text (not the logo) dead-center, set in
          Montserrat 900 — the squarest weight the family offers — at
          display scale with tight negative tracking.

          The "2" is a clipping mask over the Édition 02 recap video:
          one SVG renders all four letters, but the "2" position is a
          <foreignObject> holding the <video>, clip-pathed to the shape
          of the "2" glyph drawn into a <clipPath>. The R/JC are normal
          white text. */}
      <section className="min-h-screen relative overflow-hidden flex items-center justify-center px-6">
        <svg
          viewBox="0 0 1000 360"
          preserveAspectRatio="xMidYMid meet"
          className="r-blur-in font-display select-none"
          style={{
            height: "clamp(5rem, 22vw, 26rem)",
            width: "auto",
            maxWidth: "100%",
          }}
          aria-label="R2JC"
          role="img"
        >
          <defs>
            {/* Clip-path = the "2" glyph as the reveal window.
                Rendered as ITS OWN text element, anchored "middle" at
                x=500 — so the "2" is *deterministically* centered at
                the SVG horizontal center, independent of any other
                glyphs' widths. */}
            <clipPath id="r-cold-open-2">
              <text
                x="500"
                y="280"
                textAnchor="middle"
                fontWeight="900"
                fontSize="360"
                style={{
                  fontFamily:
                    "var(--font-display), Montserrat, sans-serif",
                }}
              >
                2
              </text>
            </clipPath>
          </defs>

          {/*
            Visible white letters around the "2".

            Why split into three text elements instead of one
            "R<hidden>2</hidden>JC":
              With a single text-anchor=middle text element, the whole
              STRING centers at x=500 — but the "2" glyph itself lands
              at ~x=434 because R, 2, J, C all have different advance
              widths and R pushes 2 leftward. The foreignObject (at
              x=500) was then 66 px off from the actual "2" center.
              Rendering the "2" by itself with text-anchor=middle at
              x=500 makes its center deterministic. R and JC are then
              positioned by their own anchors around that fixed center
              to mimic the appearance of "R2JC" with letter-spacing
              -0.05em (R right edge at x≈405, JC left edge at x≈595 —
              numbers derived from Montserrat 900 advance widths).
          */}
          <text
            x="405"
            y="280"
            textAnchor="end"
            fontWeight="900"
            fontSize="360"
            fill="white"
            style={{
              fontFamily:
                "var(--font-display), Montserrat, sans-serif",
            }}
          >
            R
          </text>
          <text
            x="595"
            y="280"
            textAnchor="start"
            fontWeight="900"
            fontSize="360"
            fill="white"
            style={{
              fontFamily:
                "var(--font-display), Montserrat, sans-serif",
              letterSpacing: "-0.05em",
            }}
          >
            JC
          </text>

          {/* The video, clipped to the "2" glyph.

              The reel sourced from Instagram is portrait (540×960,
              9:16). The foreignObject is sized to roughly bracket the
              "2" glyph (~230×258 estimated) with a buffer, so the
              video doesn't get scaled up to a huge canvas and then
              cropped down to a horizontal sliver.

              Geometry:
                x=360, y=0, width=280, height=308
                ⇒ box center at (500, 154) which matches the "2"'s
                  visual center (baseline y=280 minus cap-height/2 ≈ 154).
                ⇒ box aspect 0.909 vs video aspect 0.5625 — container
                  is wider than the (portrait) video, so object-fit:
                  cover scales the video to fit the WIDTH (280) and
                  crops the top/bottom of the over-tall scaled height
                  (498) symmetrically. Middle ~62% of the source video
                  shows through.

              The clip-path still emits the full "2" outline in SVG
              user space, so every "2"-shaped pixel inside the
              foreignObject is filled with video.

              Autoplay needs muted + playsInline everywhere
              (especially iOS). */}
          <foreignObject
            x="360"
            y="0"
            width="280"
            height="308"
            clipPath="url(#r-cold-open-2)"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            >
              <source
                src="/media/editions/edition-02-reel.mp4"
                type="video/mp4"
              />
            </video>
          </foreignObject>
        </svg>

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
          Statement is built from the same tagline keys the Upgraded home
          uses (home.taglineLine1, taglineLine2pre, taglineZoom). Behind
          it, a non-stop left-to-right band of designer portraits slides
          through. Section clips the marquee with overflow-hidden so it
          never widens the page. */}
      <section className="min-h-screen relative flex items-center justify-center overflow-hidden px-6 md:px-10">
        {PORTRAITS.length > 0 && (
          <Reveal
            motion="blur"
            className="absolute inset-0 flex items-center pointer-events-none"
          >
            <div className="r-marquee flex gap-4 md:gap-6">
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

        <Reveal motion="blur" delay={150} className="relative z-10">
          <p className="text-center max-w-5xl font-display font-semibold text-[clamp(2rem,7vw,6rem)] leading-[1.08] tracking-[-0.03em] select-none">
            {t.home.taglineLine1}
            <br />
            {t.home.taglineLine2pre} {t.home.taglineZoom}.
          </p>
        </Reveal>
      </section>

      {/* ── §3 · L'HISTOIRE DE R2JC ──────────────────────────────
          Eyebrow + title + a single founding paragraph (p1) split into
          a pull-quote (first sentence) on the left and supporting body
          (the rest) on the right. Followed by three clickable edition
          banners — Édition 03 inverted (white on black). Every string
          here comes from the dict; nothing fabricated. */}
      <section className="min-h-screen relative flex flex-col justify-center py-32 md:py-40">
        {/* Intro block stays width-constrained */}
        <div className="max-w-7xl mx-auto w-full px-6 md:px-10">
          <Reveal motion="blur">
            <p className="font-mono text-[11px] uppercase tracking-wider-2 text-blanc/40 mb-10 md:mb-16">
              {t.home.histoire.eyebrow}
            </p>
          </Reveal>

          {/* Title — split-weight contrast.
              `titlePre` from the dict is "L'histoire de" (ends in "de"),
              `titleAccent` is "R2JC". We render them on two lines:
              top line is the pre + light weight, bottom line is the
              accent at heavy weight. */}
          <Reveal motion="blur" delay={150}>
            <h2 className="font-display text-[clamp(2.5rem,9vw,8rem)] leading-[0.95] tracking-[-0.04em] mb-16 md:mb-24">
              <span className="font-light">{t.home.histoire.titlePre}</span>
              <br />
              <span className="font-black">{t.home.histoire.titleAccent}.</span>
            </h2>
          </Reveal>

          {/* Asymmetric intro — 5/7 split.
              LEFT: first sentence of p1 set as a pull-quote.
              RIGHT: the rest of p1 as supporting paragraph. */}
          <div className="grid md:grid-cols-12 gap-y-8 md:gap-x-12 items-start mb-20 md:mb-28">
            <Reveal motion="blur" delay={300} className="md:col-span-5">
              <p className="font-display font-semibold text-2xl md:text-4xl leading-[1.2] tracking-[-0.02em]">
                {histoireParts.lead}
              </p>
            </Reveal>
            {histoireParts.rest && (
              <Reveal
                motion="blur"
                delay={450}
                className="md:col-span-6 md:col-start-7"
              >
                <p className="font-sans text-base md:text-lg leading-relaxed text-blanc/65 max-w-prose">
                  {histoireParts.rest}
                </p>
              </Reveal>
            )}
          </div>
        </div>

        {/* Edition banners — full-bleed, each Link to its /r/editions/NN
            page. Édition 03 inverted (white banner / black text) so it
            reads as the active call-to-action; 01 and 02 stay dark. On
            hover, a big thick right-arrow slides in from the right edge
            (its color follows the banner's text color via currentColor). */}
        <div className="border-t border-blanc/15">
          {EDITIONS.map((ed, i) => {
            const isWhite = ed.num === "03";
            const isLast = i === EDITIONS.length - 1;
            return (
              <Reveal key={ed.num} motion="blur" delay={550 + i * 120}>
                <Link
                  href={`/r/editions/${ed.num}`}
                  className={`group block relative transition-colors duration-500 ease-editorial ${
                    isWhite
                      ? "bg-blanc text-noir hover:bg-mist"
                      : "bg-noir text-blanc hover:bg-blanc/[0.04]"
                  } ${!isLast ? "border-b border-blanc/15" : ""}`}
                  aria-label={`${ed.title} · ${ed.year}`}
                >
                  <article className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-12 gap-x-4 md:gap-x-8 items-baseline py-12 md:py-16 relative">
                    <div className="col-span-12 md:col-span-3 flex items-baseline gap-3 md:gap-4 mb-4 md:mb-0">
                      <span
                        className={`font-mono text-xs tabular-nums ${
                          isWhite ? "text-noir/40" : "text-blanc/40"
                        }`}
                      >
                        {ed.num}
                      </span>
                      <span className="font-display font-semibold text-4xl md:text-6xl tabular-nums tracking-[-0.03em] leading-none">
                        {ed.year}
                      </span>
                    </div>
                    <div className="col-span-12 md:col-span-9 md:pr-44 lg:pr-56">
                      <h3 className="font-display font-medium text-2xl md:text-4xl leading-tight tracking-[-0.02em] mb-3 md:mb-4">
                        {ed.title}
                      </h3>
                      <p
                        className={`font-sans text-base md:text-lg leading-relaxed max-w-2xl ${
                          isWhite ? "text-noir/70" : "text-blanc/65"
                        }`}
                      >
                        {ed.brief}
                      </p>
                    </div>

                    {/* Hover arrow — wayfinding style (Ionicons "arrow-
                        back-sharp", reflected to point right).

                        The reference SVG the user supplied uses:
                          • TWO separate strokes (polyline + line), not a
                            filled polygon — wings have constant thickness
                          • strokeLinecap="square" — caps extend past the
                            endpoint by stroke-width/2, giving the
                            characteristic "extended end" look (NOT butt
                            caps, which I had wrong twice)
                          • 45° arms — the chevron's vertical extent
                            equals its horizontal extent, so the arrow
                            is fundamentally a square-proportioned shape
                          • Default miter join at the apex with
                            miterlimit 10 = sharp point

                        Proportions copied from the reference (viewBox
                        512, stroke 48, apex at 80.5% of width, shaft
                        57% of width) and scaled to a 100×100 viewBox
                        for clean integers.

                        `currentColor` so the stroke follows the banner's
                        text color. Positioning split onto outer/inner
                        wrappers, same pattern as the §1 scroll arrow,
                        for the same reason. */}
                    <div
                      className="hidden md:block absolute right-6 md:right-10 top-1/2 -translate-y-1/2 pointer-events-none"
                      aria-hidden
                    >
                      <div className="opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-editorial">
                        <svg
                          width="120"
                          height="120"
                          viewBox="0 0 100 100"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="10"
                          strokeLinecap="square"
                          strokeMiterlimit="10"
                        >
                          {/* Chevron: upper-back → apex → lower-back.
                              45° arms, miter at the apex = sharp tip. */}
                          <polyline points="52 22 80 50 52 78" />
                          {/* Shaft: horizontal, ends 4px short of apex
                              so the square cap on the right blends into
                              the chevron's interior cleanly. */}
                          <line x1="20" y1="50" x2="76" y2="50" />
                        </svg>
                      </div>
                    </div>
                  </article>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>
    </main>
  );
}
