import Link from "next/link";
import { MediaZone } from "@/components/MediaZone";

export const metadata = { title: "Éditions — R2JC" };

const EDITIONS = [
  {
    num: "01",
    year: "2023",
    title: "La première rencontre",
    slug: "/editions/01",
  },
  {
    num: "02",
    year: "2024",
    title: "Les corps qui parlent",
    slug: "/editions/02",
  },
  {
    num: "03",
    year: "2026",
    title: "À venir",
    slug: "/editions/03",
  },
];

export default function Editions() {
  return (
    <section className="bg-pearl text-noir min-h-screen pt-32 md:pt-40 pb-24">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <p className="font-mono text-[11px] uppercase tracking-wider-2 opacity-60 mb-6 text-center">
          Toutes les éditions
        </p>
        <h1 className="font-display font-light text-display-md text-center mb-16 md:mb-20 leading-[1.05]">
          Éditions <span className="font-semibold">R2JC</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {EDITIONS.map((e) => (
            <Link
              key={e.num}
              href={e.slug}
              className="group block"
            >
              <MediaZone
                id={`ED-COVER-${e.num}`}
                kind="image"
                ratio="3/4"
                priority="P0"
                brief={`Édition ${e.num} cover — ${e.title}`}
              />
              <div className="mt-5 flex justify-between items-baseline font-mono text-[11px] uppercase tracking-wider-2 opacity-70">
                <span>{e.num} · {e.year}</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </span>
              </div>
              <p className="mt-2 font-display font-medium text-2xl group-hover:text-silver transition-colors duration-300">
                {e.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
