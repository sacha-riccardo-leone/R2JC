import { MediaZone } from "@/components/MediaZone";

export const metadata = { title: "Créateurs — R2JC" };

const CREATORS = [
  { id: "sapmi", name: "@sapmi", discipline: "Mode", year: "2023" },
  { id: "tbd-02", name: "—", discipline: "Photographie", year: "2023" },
  { id: "tbd-03", name: "—", discipline: "Performance", year: "2024" },
  { id: "tbd-04", name: "—", discipline: "Direction artistique", year: "2024" },
  { id: "tbd-05", name: "—", discipline: "Mode", year: "2024" },
  { id: "tbd-06", name: "—", discipline: "Son", year: "2024" },
];

export default function Createurs() {
  return (
    <section className="paper min-h-screen pt-32 md:pt-40 pb-32 text-ink">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <p className="font-mono text-[11px] uppercase tracking-wider-3 opacity-60 mb-12">
          ※ Créateurs
        </p>
        <h1 className="font-display italic text-display-md leading-[0.9] mb-20">
          L'index.
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
          {CREATORS.map((c) => (
            <figure key={c.id} className="space-y-3">
              <MediaZone
                id={`CR-PORT-${c.id}`}
                kind="image"
                ratio="4/5"
                priority="P0"
                brief={`Portrait, ${c.discipline}, ${c.year}.`}
              />
              <figcaption className="font-mono text-[11px] uppercase tracking-wider-2 flex justify-between">
                <span>{c.name}</span>
                <span className="opacity-60">{c.discipline}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
