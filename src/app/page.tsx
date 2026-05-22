import Link from "next/link";
import { MediaZone } from "@/components/MediaZone";
import { Reveal } from "@/components/Reveal";

/**
 * R2JC Homepage — six-act choreography.
 *
 * I.   Threshold      — Ambient hero, the room before the show begins
 * II.  Statement      — Manifesto unfolding phrase by phrase
 * III. Faces          — Horizontal portrait gallery
 * IV.  Next edition   — The announcement
 * V.   Archive        — Past editions as numbered chapters
 * VI.  Invitation     — The open door
 */
export default function Home() {
  return (
    <>
      {/* ──────────────────────────────────────────────────────────────
          ACT I — THRESHOLD
          ────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-between bg-ink text-bone overflow-hidden">
        {/* Ambient media zone — fills the back of the act */}
        <div className="absolute inset-0 z-0 opacity-40">
          <MediaZone
            id="HOME-V1"
            kind="video"
            ratio="16/9"
            priority="P0"
            brief="Silent ambient clip — fabric moving, a face turning, an empty venue, hands sewing. One quiet shot from Édition 02. 12–20s loop, no audio."
            className="w-full h-full"
            style={{ aspectRatio: "auto" }}
          />
        </div>

        {/* Vignette to keep type legible */}
        <div
          aria-hidden
          className="absolute inset-0 z-10 bg-gradient-to-b from-ink/40 via-ink/10 to-ink/80 pointer-events-none"
        />

        <div className="relative z-20 flex-1 flex flex-col justify-center px-6 md:px-10">
          <Reveal delay={200}>
            <p className="font-mono text-[11px] uppercase tracking-wider-3 opacity-70 mb-8">
              R2JC · Édition 03 · Suisse · Automne 2026
            </p>
          </Reveal>

          <Reveal delay={500}>
            <h1 className="font-display italic text-display-xl leading-none">
              Rencontre.
            </h1>
          </Reveal>

          <Reveal delay={1100}>
            <p className="mt-8 max-w-prose-edition font-sans text-base md:text-lg leading-relaxed opacity-85">
              Une plateforme suisse pour les créateurs émergents.
              <br />
              Mode, art, identité, culture — un seul mouvement.
            </p>
          </Reveal>
        </div>

        <div className="relative z-20 px-6 md:px-10 pb-8 md:pb-10">
          <div className="hairline mb-4 bg-bone" />
          <div className="flex justify-between font-mono text-[10px] md:text-[11px] uppercase tracking-wider-2 opacity-60">
            <span>Défiler</span>
            <span>14 — 16 Nov 2026 · Bienne</span>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────
          ACT II — STATEMENT
          ────────────────────────────────────────────────────────────── */}
      <section className="paper py-32 md:py-48">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-wider-3 opacity-60 mb-16">
              ※ Manifeste — extrait
            </p>
          </Reveal>

          <div className="space-y-20 md:space-y-32">
            {[
              "La mode n'est pas un vêtement.",
              "C'est une voix.",
              "C'est un visage.",
              "C'est une époque qui se regarde.",
            ].map((line, i) => (
              <Reveal key={i} delay={i * 120}>
                <p className="font-display italic text-display-md text-ink leading-[0.9]">
                  {line}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={400}>
            <div className="mt-24 md:mt-32 max-w-prose-edition text-ink/80 font-sans text-base leading-relaxed">
              <p>
                R2JC — Rencontre de Jeunes Créateurs — est un collectif suisse
                qui révèle les talents émergents avant qu'ils ne deviennent
                évidents. Mode, photographie, son, performance, direction
                artistique : un langage unique, écrit à plusieurs mains.
              </p>
              <Link
                href="/manifeste"
                className="inline-block mt-8 font-mono text-[11px] uppercase tracking-wider-2 border-b border-ink hover:text-cinabre hover:border-cinabre transition-colors duration-300"
              >
                Lire le manifeste →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────
          ACT III — FACES
          A horizontal gallery of designer portraits.
          On desktop this could be enhanced to scroll-jack horizontally;
          here we present an editorial grid that translates well to mobile.
          ────────────────────────────────────────────────────────────── */}
      <section className="bg-ink text-bone py-32 md:py-48">
        <div className="px-6 md:px-10 mb-16 md:mb-24 flex justify-between items-end">
          <Reveal>
            <h2 className="font-display italic text-display-md leading-none">
              Les visages.
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="font-mono text-[11px] uppercase tracking-wider-2 opacity-60 text-right max-w-[24ch]">
              12 créateurs<br />Édition 01 — 02
            </p>
          </Reveal>
        </div>

        <div className="px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { id: "HOME-G1-01", name: "@sapmi", discipline: "Mode" },
            { id: "HOME-G1-02", name: "—", discipline: "Photographie" },
            { id: "HOME-G1-03", name: "—", discipline: "Performance" },
            { id: "HOME-G1-04", name: "—", discipline: "Mode" },
            { id: "HOME-G1-05", name: "—", discipline: "Direction artistique" },
            { id: "HOME-G1-06", name: "—", discipline: "Mode" },
            { id: "HOME-G1-07", name: "—", discipline: "Son" },
            { id: "HOME-G1-08", name: "—", discipline: "Mode" },
          ].map((p, i) => (
            <Reveal key={p.id} delay={i * 60}>
              <figure className="space-y-3">
                <MediaZone
                  id={p.id}
                  kind="image"
                  ratio="4/5"
                  priority="P0"
                  brief={`Portrait, ${p.discipline}. Front-facing, eye contact, neutral background.`}
                />
                <figcaption className="font-mono text-[10px] uppercase tracking-wider-2 flex justify-between opacity-70">
                  <span>{p.name}</span>
                  <span>{p.discipline}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <div className="px-6 md:px-10 mt-16">
          <Link
            href="/createurs"
            className="inline-block font-mono text-[11px] uppercase tracking-wider-2 border-b border-bone/40 hover:text-cinabre hover:border-cinabre transition-colors duration-300"
          >
            Voir tous les créateurs →
          </Link>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────
          ACT IV — NEXT EDITION
          ────────────────────────────────────────────────────────────── */}
      <section className="relative bg-ink text-bone">
        <div className="absolute inset-0 z-0">
          <MediaZone
            id="HOME-I1"
            kind="image"
            ratio="16/9"
            priority="P0"
            brief="Édition 03 hero — venue empty and waiting, OR a teaser still. Lifted blacks, warm shadows. The typographic-only fallback below is also a real option."
            className="w-full h-full"
            style={{ aspectRatio: "auto" }}
          />
        </div>
        <div
          aria-hidden
          className="absolute inset-0 z-10 bg-gradient-to-t from-ink via-ink/60 to-ink/30 pointer-events-none"
        />

        <div className="relative z-20 min-h-screen flex flex-col justify-center px-6 md:px-10 py-32">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-wider-3 opacity-70 mb-6">
              ※ Prochaine édition
            </p>
          </Reveal>
          <Reveal delay={150}>
            <h2 className="font-display italic text-display-lg leading-[0.85]">
              Édition 03
            </h2>
          </Reveal>
          <Reveal delay={350}>
            <p className="mt-8 font-mono text-sm md:text-base uppercase tracking-wider-2 opacity-80">
              14 — 16 Novembre 2026
              <br />
              Bienne · Suisse
            </p>
          </Reveal>
          <Reveal delay={550}>
            <div className="mt-16">
              <Link
                href="/editions/03-bienne-2026"
                className="inline-block bg-cinabre text-bone px-8 py-4 font-mono text-[11px] uppercase tracking-wider-2 hover:bg-bone hover:text-ink transition-colors duration-300"
              >
                Réserver →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────
          ACT V — ARCHIVE
          ────────────────────────────────────────────────────────────── */}
      <section className="paper py-32 md:py-48">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <Reveal>
            <h2 className="font-display italic text-display-md text-ink leading-none mb-16 md:mb-24">
              L'archive.
            </h2>
          </Reveal>

          <ul className="border-t border-ink/20">
            {[
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
                title: "_______________",
                slug: "/editions/03-bienne-2026",
              },
            ].map((ed) => (
              <li
                key={ed.num}
                className="border-b border-ink/20 group transition-colors duration-300 hover:bg-ink hover:text-bone"
              >
                <Link
                  href={ed.slug}
                  className="grid grid-cols-12 gap-4 items-center px-2 md:px-4 py-8 md:py-12"
                >
                  <span className="col-span-2 font-mono text-[11px] uppercase tracking-wider-2 opacity-60">
                    ※ {ed.num}
                  </span>
                  <span className="col-span-2 font-mono text-[11px] uppercase tracking-wider-2 opacity-60">
                    {ed.year}
                  </span>
                  <span className="col-span-7 font-display italic text-3xl md:text-5xl">
                    {ed.title}
                  </span>
                  <span className="col-span-1 text-right font-mono text-[11px] opacity-60 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────
          ACT VI — INVITATION
          ────────────────────────────────────────────────────────────── */}
      <section className="bg-ink text-bone min-h-[80vh] flex flex-col justify-center px-6 md:px-10 py-32">
        <div className="max-w-5xl">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-wider-3 opacity-60 mb-8">
              ※ Participer
            </p>
          </Reveal>
          <Reveal delay={150}>
            <p className="font-display italic text-display-md leading-[0.9]">
              Vous créez&nbsp;? Nous écoutons.
            </p>
          </Reveal>
          <Reveal delay={400}>
            <div className="mt-12">
              <Link
                href="/participer"
                className="inline-block border border-bone px-8 py-4 font-mono text-[11px] uppercase tracking-wider-2 hover:bg-cinabre hover:border-cinabre transition-colors duration-300"
              >
                Poser sa candidature →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────
          FOOTER — Correspondance R2JC
          ────────────────────────────────────────────────────────────── */}
      <footer className="bg-ink text-bone border-t border-bone/15">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28 grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-7">
            <p className="font-mono text-[11px] uppercase tracking-wider-3 opacity-60 mb-6">
              ※ Correspondance R2JC
            </p>
            <p className="font-display italic text-3xl md:text-5xl leading-tight max-w-[20ch]">
              Recevoir une lettre, deux fois par an.
            </p>
            <form className="mt-10 flex border-b border-bone/40 max-w-md">
              <input
                type="email"
                required
                placeholder="votre.adresse@email"
                className="flex-1 bg-transparent py-3 font-mono text-sm placeholder:opacity-40 focus:outline-none"
              />
              <button
                type="submit"
                className="font-mono text-[11px] uppercase tracking-wider-2 px-4 hover:text-cinabre transition-colors duration-300"
              >
                S'inscrire →
              </button>
            </form>
          </div>

          <div className="md:col-span-5 grid grid-cols-2 gap-8 font-mono text-[11px] uppercase tracking-wider-2">
            <div className="space-y-3 opacity-80">
              <p className="opacity-50">Contact</p>
              <p>info@r2jc.ch</p>
              <p>+41 76 514 23 03</p>
            </div>
            <div className="space-y-3 opacity-80">
              <p className="opacity-50">Suivre</p>
              <p>Instagram</p>
              <p>TikTok</p>
              <p>YouTube</p>
            </div>
          </div>
        </div>

        <div className="border-t border-bone/15 px-6 md:px-10 py-6 flex flex-col md:flex-row md:justify-between gap-3 font-mono text-[10px] uppercase tracking-wider-2 opacity-50">
          <span>R2JC © 2023 — 2026 · Suisse</span>
          <span>Politique de confidentialité · Conditions générales</span>
        </div>
      </footer>
    </>
  );
}
