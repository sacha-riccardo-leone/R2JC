import { MediaZone } from "@/components/MediaZone";

export const metadata = { title: "Manifeste — R2JC" };

export default function Manifeste() {
  return (
    <article className="paper min-h-screen pt-32 md:pt-40 pb-32">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <p className="font-mono text-[11px] uppercase tracking-wider-3 opacity-60 mb-12">
          ※ Manifeste
        </p>
        <h1 className="font-display italic text-display-md text-ink leading-[0.9] mb-16">
          Ce que nous croyons.
        </h1>

        <div className="space-y-8 text-ink/85 font-sans text-lg leading-relaxed max-w-prose-edition">
          <p>
            R2JC croit que la mode n'est pas un vêtement. C'est une voix.
            C'est un visage. C'est une époque qui se regarde dans le miroir.
          </p>
          <p>
            Nous existons pour révéler les talents émergents — ceux qui
            construisent, en silence, le vocabulaire visuel de la Suisse
            de demain. Mode, photographie, son, performance, direction
            artistique : un langage unique, écrit à plusieurs mains.
          </p>
        </div>

        <div className="my-20">
          <MediaZone
            id="MAN-I1"
            kind="image"
            ratio="4/5"
            priority="P1"
            brief="Atmosphere — backstage hands, paper running orders, the half-empty venue."
          />
        </div>

        <div className="space-y-8 text-ink/85 font-sans text-lg leading-relaxed max-w-prose-edition">
          <p>
            Une rencontre est plus qu'un événement. C'est un seuil — l'instant
            où une œuvre cesse d'être privée pour devenir publique. R2JC
            organise ces seuils, deux fois par an, dans des lieux choisis
            pour leur silence.
          </p>
        </div>
      </div>
    </article>
  );
}
