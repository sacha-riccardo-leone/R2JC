import Link from "next/link";
import { DESIGNERS_EDITION_02 } from "@/data/designers";

export const metadata = { title: "R2JC — Reworked" };

/**
 * /r — Reworked home, Swiss brutalist grammar.
 *
 * No narrative arc, no acts, no story. The page is a system:
 *
 *   1. METADATA BAR — exposed page metadata, like a build header.
 *   2. HERO — oversized "03" numeral + asymmetric 8/4 split with date/loc/CTA.
 *   3. SOMMAIRE — numbered index of routes (museum-style).
 *   4. MANIFESTE — 3/7 asymmetric block, headline + supporting copy.
 *   5. INDEX CRÉATEURS — dense alphabetical-style table of designers.
 *   6. FOOTER STRIP — exposed build metadata.
 *
 * Visual tools: bracket-numbered section labels [NN], horizontal rules as
 * structural elements, tabular numerals as graphic anchors, weight contrast
 * (font-light + font-semibold) doing the heavy lifting instead of color.
 */

const SECTIONS = [
  { num: "01", title: "Éditions",    subtitle: "Trois rencontres documentées",            href: "/r/editions" },
  { num: "02", title: "Postuler",    subtitle: "Ouvert · créateurs émergents en Suisse",  href: "/r/postuler" },
  { num: "03", title: "Presse",      subtitle: "Dossier · accréditation · couverture",    href: "/r/presse" },
  { num: "04", title: "Partenaires", subtitle: "Mur officiel",                            href: "/r/sponsors" },
  { num: "05", title: "Contact",     subtitle: "Newsletter · écrire",                     href: "/r/contact" },
  { num: "06", title: "FAQ",         subtitle: "Questions fréquentes",                    href: "/r/faq" },
];

export default function ReworkedHome() {
  const designerCount = String(DESIGNERS_EDITION_02.length).padStart(3, "0");

  return (
    <main className="bg-noir text-blanc">
      {/* ── METADATA BAR ─────────────────────────────────────────
          Exposed page metadata, sits flush under the fixed Nav (pt-32
          clears the header). Comma-separated tokens read like a build
          header — `R2JC · 2026 · V03 · 016 CRÉATEURS · …`. */}
      <div className="border-b border-blanc/15 pt-32 pb-3 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-wrap items-baseline gap-x-5 gap-y-1 font-mono text-[10px] uppercase tracking-wider-2 text-mist/50 tabular-nums">
          <span>R2JC</span>
          <Sep />
          <span>2026</span>
          <Sep />
          <span>V03</span>
          <Sep />
          <span>{designerCount} CRÉATEURS</span>
          <Sep />
          <span>FR / EN / DE / IT</span>
          <span className="ml-auto">Reworked · 00</span>
        </div>
      </div>

      {/* ── HERO ─────────────────────────────────────────────────
          Asymmetric 8/4 split. Left: section-label, giant "03", a
          declarative tagline. Right: stacked data points (date, lieu,
          inscription) aligned to the baseline. */}
      <section className="border-b border-blanc/15 px-6 md:px-10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-x-4 md:gap-x-8 items-end">
          <div className="col-span-12 md:col-span-8">
            <p className="font-mono text-[10px] uppercase tracking-wider-2 text-mist/50 mb-8">
              [00] La rencontre
            </p>
            <h1 className="font-display font-semibold text-[clamp(6rem,22vw,20rem)] leading-[0.82] tracking-[-0.045em] tabular-nums">
              03
            </h1>
            <p className="mt-8 font-display text-2xl md:text-4xl font-light leading-[1.1] max-w-xl">
              <span className="font-semibold">Rencontre</span> de jeunes{" "}
              <span className="font-semibold">créateurs</span>.
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 mt-12 md:mt-0 flex flex-col gap-8 md:gap-10">
            <DataCell label="Date" value="12.09.2026" tabular />
            <DataCell label="Lieu" value="Suisse · TBA" />
            <DataCell
              label="Inscription"
              value={
                <Link
                  href="/r/postuler"
                  className="border-b border-blanc/60 hover:text-silver hover:border-silver transition-colors pb-0.5"
                >
                  → Postuler
                </Link>
              }
            />
          </div>
        </div>
      </section>

      {/* ── SOMMAIRE ─────────────────────────────────────────────
          Numbered index of the rest of the site. Each row is a wide,
          tappable target with hover state. Reads like a museum room
          index, not a navigation menu. */}
      <section className="border-b border-blanc/15 px-6 md:px-10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeader index="[01]" title="Sommaire" right={`${SECTIONS.length} modules`} />
          <ol className="divide-y divide-blanc/15">
            {SECTIONS.map((item) => (
              <li key={item.num}>
                <Link
                  href={item.href}
                  className="group flex items-baseline gap-6 md:gap-10 py-6 md:py-8 -mx-6 md:-mx-10 px-6 md:px-10 hover:bg-blanc/[0.025] transition-colors duration-300"
                >
                  <span className="font-mono text-xs md:text-sm tabular-nums text-mist/50 shrink-0 w-10 md:w-14">
                    {item.num}
                  </span>
                  <span className="font-display text-3xl md:text-5xl font-light flex-1 group-hover:text-silver transition-colors duration-300 leading-none">
                    {item.title}
                  </span>
                  <span className="hidden md:block font-mono text-[10px] md:text-xs uppercase tracking-wider-2 text-mist/50 max-w-xs text-right">
                    {item.subtitle}
                  </span>
                  <span className="font-display text-2xl md:text-3xl text-mist/40 group-hover:text-blanc transition-colors duration-300 shrink-0 leading-none">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── MANIFESTE ────────────────────────────────────────────
          Asymmetric 3/7. Label runs in the narrow left column, body
          dominates the right. Two paragraphs only — weight contrast
          (semibold + light) does the heavy lifting. */}
      <section className="border-b border-blanc/15 px-6 md:px-10 py-24 md:py-40">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-x-4 md:gap-x-8">
          <p className="col-span-12 md:col-span-3 font-mono text-[10px] uppercase tracking-wider-2 text-mist/50 mb-8 md:mb-0">
            [02] Manifeste
          </p>
          <div className="col-span-12 md:col-span-8 space-y-10">
            <p className="font-display text-3xl md:text-5xl font-light leading-[1.12]">
              <span className="font-semibold">
                R2JC n&rsquo;est pas une plateforme.
              </span>{" "}
              C&rsquo;est une rencontre. Un soir, dans une ville, devant cent
              personnes qui n&rsquo;auraient jamais croisé ces gestes
              autrement.
            </p>
            <p className="font-sans text-base md:text-lg text-mist/70 leading-relaxed max-w-prose">
              Trois éditions. Trente créateurs. Un public qui sait qu&rsquo;il
              regarde quelque chose avant tout le monde.
            </p>
          </div>
        </div>
      </section>

      {/* ── INDEX · CRÉATEURS ────────────────────────────────────
          Dense table of all Edition 02 designers. Numerical index,
          name (semibold), brand (light), edition tag. Hover reveals
          a row of metadata indicators. */}
      <section className="border-b border-blanc/15 px-6 md:px-10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            index="[03]"
            title="Index · Créateurs"
            right={`${designerCount} · Édition 02`}
          />
          <div className="grid grid-cols-12 gap-x-4 pb-3 mb-1 border-b border-blanc/30 font-mono text-[10px] uppercase tracking-wider-2 text-mist/40">
            <span className="col-span-1 tabular-nums">No</span>
            <span className="col-span-5 md:col-span-4">Nom</span>
            <span className="col-span-5 md:col-span-4">Marque</span>
            <span className="hidden md:block md:col-span-2">Liens</span>
            <span className="col-span-1 text-right">Ed.</span>
          </div>
          <ol className="divide-y divide-blanc/10">
            {DESIGNERS_EDITION_02.map((d, i) => {
              const num = String(i + 1).padStart(2, "0");
              return (
                <li
                  key={d.slug}
                  className="grid grid-cols-12 gap-x-4 py-3 md:py-4 items-baseline group hover:bg-blanc/[0.025] transition-colors duration-300 -mx-6 md:-mx-10 px-6 md:px-10"
                >
                  <span className="col-span-1 font-mono text-[11px] tabular-nums text-mist/50">
                    {num}
                  </span>
                  <span className="col-span-5 md:col-span-4 font-display text-base md:text-lg font-semibold leading-tight">
                    {d.name}
                  </span>
                  <span className="col-span-5 md:col-span-4 font-display text-base md:text-lg font-light text-mist/70 leading-tight truncate">
                    {d.brand}
                  </span>
                  <span className="hidden md:flex md:col-span-2 gap-3 font-mono text-[10px] uppercase tracking-wider-2 text-mist/40">
                    {d.instagram && <span>IG</span>}
                    {d.website && <span>WEB</span>}
                    {d.email && <span>@</span>}
                  </span>
                  <span className="col-span-1 text-right font-mono text-[10px] uppercase tracking-wider-2 text-mist/40 tabular-nums">
                    02
                  </span>
                </li>
              );
            })}
          </ol>

          <div className="mt-10">
            <Link
              href="/r/editions"
              className="inline-block font-mono text-[11px] uppercase tracking-wider-2 border-b border-blanc/60 hover:text-silver hover:border-silver transition-colors pb-1"
            >
              → Voir l&rsquo;index complet
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOOTER STRIP ─────────────────────────────────────────
          Exposed metadata closing the page. Mirrors the top strip
          but with credit and build info instead of intro tokens. */}
      <section className="px-6 md:px-10 py-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-baseline justify-between gap-y-2 gap-x-6 font-mono text-[10px] uppercase tracking-wider-2 text-mist/40 tabular-nums">
          <span>R2JC · Reworked · V0.1</span>
          <span className="hidden md:inline">
            Conception · Sacha Riccardo Leone
          </span>
          <span>Build · 2026.05.26</span>
        </div>
      </section>
    </main>
  );
}

/* ── Local primitives ─────────────────────────────────────────── */

function Sep() {
  return (
    <span aria-hidden className="text-mist/30">
      ·
    </span>
  );
}

function DataCell({
  label,
  value,
  tabular = false,
}: {
  label: string;
  value: React.ReactNode;
  tabular?: boolean;
}) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-wider-2 text-mist/50 mb-2">
        {label}
      </p>
      <p
        className={`font-display text-xl md:text-2xl font-medium ${
          tabular ? "tabular-nums" : ""
        }`}
      >
        {value}
      </p>
    </div>
  );
}

function SectionHeader({
  index,
  title,
  right,
}: {
  index: string;
  title: string;
  right?: string;
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-10">
      <p className="font-mono text-[10px] uppercase tracking-wider-2 text-mist/50">
        {index} {title}
      </p>
      {right && (
        <p className="font-mono text-[10px] uppercase tracking-wider-2 text-mist/40 tabular-nums">
          {right}
        </p>
      )}
    </div>
  );
}
