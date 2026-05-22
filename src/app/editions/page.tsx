import { MediaZone } from "@/components/MediaZone";
import { Reveal } from "@/components/Reveal";
import { DESIGNERS_EDITION_02 } from "@/data/designers";

export const metadata = { title: "Éditions — R2JC" };

export default function Editions() {
  return (
    <>
      {/* Hero */}
      <section className="bg-pearl text-noir pt-32 md:pt-40 pb-20">
        <div className="max-w-6xl mx-auto px-6 md:px-10 text-center">
          <p className="font-mono text-[11px] uppercase tracking-wider-2 opacity-60 mb-6">
            Éditions
          </p>
          <h1 className="font-display font-light text-display-md leading-[1.05]">
            <span className="font-semibold">Editions</span>
          </h1>
        </div>
      </section>

      {/* 2ème édition — intro */}
      <section className="bg-pearl text-noir py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <Reveal>
            <h2 className="font-display font-light text-3xl md:text-5xl leading-tight mb-10 text-center">
              2ème édition de <span className="font-semibold">R2JC</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="font-sans text-base md:text-lg leading-relaxed text-noir/85 text-center max-w-prose mx-auto">
              Pour cette édition, nous avons choisi un espace bien plus
              grand, répondant à la demande croissante et permettant
              d&rsquo;accueillir un public encore plus vaste. L&rsquo;édition
              2025 s&rsquo;est démarquée par une diversité élargie, tant au
              niveau des créateurs que des collections présentées. Nous
              avons eu le plaisir de mettre en lumière une palette encore
              plus variée de talents. Redécouvrez dès maintenant les
              designers qui ont marqué cette édition&nbsp;!
            </p>
          </Reveal>
        </div>
      </section>

      {/* Designers — 16 profiles in alternating two-column layout */}
      <section className="bg-pearl text-noir pb-24">
        <div className="max-w-6xl mx-auto px-6 md:px-10 space-y-24 md:space-y-32">
          {DESIGNERS_EDITION_02.map((d, i) => {
            const reversed = i % 2 === 1;
            return (
              <article
                key={d.slug}
                className={`grid md:grid-cols-12 gap-10 md:gap-16 items-center ${
                  reversed ? "md:[direction:rtl]" : ""
                }`}
              >
                <div className="md:col-span-5 md:[direction:ltr]">
                  <Reveal>
                    <MediaZone
                      id={`ED02-PORTRAIT-${d.slug}`}
                      kind="image"
                      ratio="4/5"
                      priority="P0"
                      tone="dark"
                      label={d.name}
                      brief={`Portrait — drop at ${d.portrait}`}
                      src={undefined}
                    />
                  </Reveal>
                </div>
                <div className="md:col-span-7 md:[direction:ltr]">
                  <Reveal delay={150}>
                    <p className="font-mono text-[11px] uppercase tracking-wider-2 opacity-60 mb-3">
                      Édition 02 · Designer
                    </p>
                    <h3 className="font-display font-light text-3xl md:text-5xl leading-tight">
                      <span className="font-semibold">{d.name}</span>
                    </h3>
                    <p className="font-display italic text-xl md:text-2xl mt-2 text-noir/70">
                      {d.brand}
                    </p>
                    {d.bio && (
                      <p className="mt-6 font-sans text-base leading-relaxed text-noir/85 max-w-prose">
                        {d.bio}
                      </p>
                    )}
                    {d.email && (
                      <a
                        href={`mailto:${d.email}`}
                        className="inline-block mt-6 font-mono text-[12px] tracking-[0.04em] border-b border-noir hover:text-silver hover:border-silver transition-colors"
                      >
                        {d.email} →
                      </a>
                    )}
                  </Reveal>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* 1ère édition retrospective */}
      <section className="bg-noir text-blanc py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-wider-2 opacity-60 mb-6">
              Retour en arrière
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="font-display font-light text-3xl md:text-5xl leading-tight mb-10">
              Revenons sur notre{" "}
              <span className="font-semibold">1ère édition</span>
            </h2>
          </Reveal>
          <Reveal delay={250}>
            <div className="max-w-md mx-auto">
              <MediaZone
                id="ED01-COVER"
                kind="image"
                ratio="4/5"
                priority="P1"
                tone="light"
                label="Édition 01 — 2023"
                brief="Drop at /media/editions/edition-01-cover.jpg"
              />
            </div>
          </Reveal>
          <Reveal delay={400}>
            <p className="mt-10 font-sans text-base md:text-lg leading-relaxed text-mist/80 max-w-prose mx-auto">
              La première rencontre — où tout a commencé. @sapmi et les
              autres pionniers ont posé les bases d&rsquo;une scène à
              révéler.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
