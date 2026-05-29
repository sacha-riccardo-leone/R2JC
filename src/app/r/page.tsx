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
          Montserrat 900 at display scale with tight negative tracking.

          The "2" is a clipping mask over the Édition 02 recap video.
          Implementation note (after a Safari/iOS bug report): the
          previous version put the <video> inside an SVG <foreignObject>
          with a clip-path — that combination is broken on Safari, the
          clip-path doesn't apply and the video either renders
          unclipped or not at all.

          New architecture avoids foreignObject entirely:
            1. Container div sized to the wordmark area.
            2. HTML5 <video> positioned absolutely at the "2"'s glyph
               box (left 29.4%, width 28% of container = where the
               "2" lives in centered "R2JC"). Regular HTML element,
               Safari handles it natively.
            3. SVG overlay on top with a BLACK <rect> masked to have
               a "2"-shaped HOLE in it (via SVG <mask> — standard,
               well-supported in Safari). The video shows through the
               hole; everything else is covered.
            4. White R and JC text on top of the rect.

          Result: identical visual on Chrome/Firefox/Safari/iOS. */}
      <section className="min-h-screen relative overflow-hidden flex items-center justify-center px-6">
        <div
          className="r-blur-in relative select-none"
          style={{
            height: "clamp(5rem, 22vw, 26rem)",
            // 1000/360 viewBox aspect — matches the SVG below so
            // absolute % positioning lines up with SVG coordinates.
            aspectRatio: "1000 / 360",
            maxWidth: "100%",
          }}
          aria-label="R2JC"
          role="img"
        >
          {/* HTML5 video — base layer. Sized to where the "2" glyph
              actually sits inside "R2JC" centered at x=500:
                R advance ≈ 257, letter-spacing -18 → "2" starts at
                x ≈ 323, ends at x ≈ 544, centered at x ≈ 434.
                "2" vertically: y ≈ 28 → 280 (cap-height ≈ 252,
                center ≈ y=154).
              In percentages of the 1000×360 container:
                left = 294/1000 = 29.4%
                width = 280/1000 = 28%
                top = 0%
                height = 308/360 ≈ 85.56%
              Container aspect at this size is ≈ 0.909, video aspect
              is 0.5625 (portrait 9:16). object-fit: cover scales the
              video to fit the WIDTH and crops top/bottom symmetric-
              ally, showing the middle ~62% of the source reel.
              objectPosition vertical 30% lowers the visible window
              so the tall models' heads stay in frame. */}
          {/* Poster = first frame of the reel as a 28KB JPEG. Browsers
              paint the poster IMMEDIATELY into the <video> element
              while the actual video bytes (~3.7 MB) download in the
              background. Without this the video element was empty/
              black for ~2 s after page load, so the "2" hole showed
              black while R/JC were already visible — visually jarring.
              With the poster, the "2" hole fills the moment the page
              renders, and the transition poster → playing video is
              seamless because the poster IS the video's first frame. */}
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/media/editions/edition-02-reel-poster.jpg"
            className="absolute"
            style={{
              left: "29.4%",
              top: "0%",
              width: "28%",
              height: "85.56%",
              objectFit: "cover",
              objectPosition: "50% 30%",
              display: "block",
            }}
          >
            <source
              src="/media/editions/edition-02-reel.mp4"
              type="video/mp4"
            />
          </video>

          {/* SVG overlay — black rect with "2"-shaped hole + R/JC
              text. Sits on top of the video, fills the container. */}
          <svg
            viewBox="0 0 1000 360"
            preserveAspectRatio="xMidYMid meet"
            className="absolute inset-0 w-full h-full font-display"
          >
            <defs>
              {/* SVG mask: white pixels = rect is visible there,
                  black pixels = rect is transparent. Fill the mask
                  with white, then paint the "2" in BLACK to carve a
                  "2"-shaped hole. Same text element as the visible
                  layer below (text-anchor=middle at x=500, same font/
                  size/letter-spacing) — R and JC are
                  visibility:hidden so they still take their glyph
                  width but don't paint into the mask. */}
              <mask id="r-cold-open-cutout">
                <rect x="0" y="0" width="1000" height="360" fill="white" />
                <text
                  x="500"
                  y="280"
                  textAnchor="middle"
                  fontWeight="900"
                  fontSize="360"
                  fill="black"
                  style={{
                    fontFamily:
                      "var(--font-display), Montserrat, sans-serif",
                    letterSpacing: "-0.05em",
                  }}
                >
                  <tspan style={{ visibility: "hidden" }}>R</tspan>2
                  <tspan style={{ visibility: "hidden" }}>JC</tspan>
                </text>
              </mask>
            </defs>

            {/* Black overlay covering the video, with the "2"-shaped
                hole punched out by the mask. */}
            <rect
              x="0"
              y="0"
              width="1000"
              height="360"
              fill="#000"
              mask="url(#r-cold-open-cutout)"
            />

            {/* Visible white R___JC on top. */}
            <text
              x="500"
              y="280"
              textAnchor="middle"
              fontWeight="900"
              fontSize="360"
              fill="white"
              style={{
                fontFamily:
                  "var(--font-display), Montserrat, sans-serif",
                letterSpacing: "-0.05em",
              }}
            >
              R<tspan style={{ visibility: "hidden" }}>2</tspan>JC
            </text>
          </svg>
        </div>

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
            {/* Down-pointing chevron only — same wayfinding-style
                diagonal lines used on the §3 edition banners (sharp
                miter apex, square-capped ends, no horizontal shaft).
                Rotated 90° from the banner's right-pointing version:
                apex at (50, 50), arms going up-left and up-right.
                ViewBox is 100×65 (not 100×100) to crop the empty
                upper area — the chevron only occupies the lower
                portion of a square box. */}
            <svg
              width="60"
              height="39"
              viewBox="0 0 100 65"
              fill="none"
              stroke="currentColor"
              strokeWidth="10"
              strokeLinecap="square"
              strokeMiterlimit="10"
            >
              <polyline points="22 22 50 50 78 22" />
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
