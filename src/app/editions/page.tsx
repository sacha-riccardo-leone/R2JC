import { existsSync } from "fs";
import { join } from "path";
import { EditionMagazine, type MagazinePage } from "@/components/EditionMagazine";
import { DESIGNERS_EDITION_02 } from "@/data/designers";
import { getDict } from "@/i18n/server";

export const metadata = { title: "Éditions — R2JC" };

const PUBLIC_DIR = join(process.cwd(), "public");
const fileExists = (publicPath: string) =>
  existsSync(
    join(PUBLIC_DIR, decodeURIComponent(publicPath.replace(/^\//, "")))
  );

/**
 * Magazine "pages" that fan out behind each cover on hover.
 *
 * Édition 02 fans out designer portraits (first 4 designers with portraits
 * actually present on disk). Éditions 01 and 03 use typographic placeholders
 * until R2JC supplies designer rosters/archive assets for them.
 *
 * Each magazine cover links to its dedicated `/editions/<n>` route — the
 * full edition content lives there, not inline on this index.
 */
const ED01_PAGES: MagazinePage[] = [
  { placeholder: "Archives" },
  { placeholder: "Archives" },
  { placeholder: "Archives" },
];

// Build Édition 02's fan from designer portraits. Filter to only designers
// whose portrait files actually exist on disk so we never render a broken
// image. Cap at 4 so the fan stays balanced (count > ~5 makes the rotation
// math look crowded).
const ED02_PORTRAIT_PAGES: MagazinePage[] = DESIGNERS_EDITION_02
  .filter((d) => fileExists(d.portrait))
  .slice(0, 4)
  .map((d) => ({ src: d.portrait }));

const ED02_PAGES: MagazinePage[] =
  ED02_PORTRAIT_PAGES.length > 0
    ? ED02_PORTRAIT_PAGES
    : [
        { placeholder: "Portraits" },
        { placeholder: "Portraits" },
        { placeholder: "Portraits" },
        { placeholder: "Portraits" },
      ];

const ED03_PAGES: MagazinePage[] = [
  { placeholder: "À venir" },
  { placeholder: "À venir" },
  { placeholder: "À venir" },
  { placeholder: "À venir" },
];

export default async function Editions() {
  const t = await getDict();

  return (
    <>
      {/* Hero */}
      <section className="bg-pearl text-noir pt-32 md:pt-40 pb-16 md:pb-20">
        <div className="max-w-6xl mx-auto px-6 md:px-10 text-center">
          <p className="font-mono text-[11px] uppercase tracking-wider-2 opacity-60 mb-6">
            {t.editions.eyebrow}
          </p>
          <h1 className="font-display font-light text-display-md leading-[1.05]">
            <span className="font-semibold">{t.editions.titleAccent}</span>
          </h1>
        </div>
      </section>

      {/* Three magazines — hover any cover to fan out its pages.
          Chronological order: 01 → 02 → 03. */}
      <section className="bg-pearl text-noir pb-28 md:pb-40">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          {/* Generous horizontal padding inside the grid so the fanned-out
              pages have room to extend past the cover without clipping into
              the neighbouring magazine. */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-14 sm:gap-20 md:gap-24 lg:gap-28 px-4 md:px-12">
            <EditionMagazine
              number="01"
              year="2023"
              title={t.editions.e01.bannerTitle}
              subtitle={t.editions.e01.titleAccent}
              pages={ED01_PAGES}
              href="/editions/01"
            />
            <EditionMagazine
              number="02"
              year="2024"
              title={t.editions.e02.bannerTitle}
              subtitle={`${DESIGNERS_EDITION_02.length} ${t.common.designer.toLowerCase()}s`}
              pages={ED02_PAGES}
              href="/editions/02"
            />
            <EditionMagazine
              number="03"
              year="2026"
              title={t.ed03.title}
              subtitle={t.ed03.dateLine}
              eyebrow={t.ed03.eyebrow}
              pages={ED03_PAGES}
              href="/editions/03"
            />
          </div>
        </div>
      </section>
    </>
  );
}
