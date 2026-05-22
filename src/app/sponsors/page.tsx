import { MediaZone } from "@/components/MediaZone";

export const metadata = { title: "Sponsors — R2JC" };

/**
 * Sponsor roster — preserves the visual grouping of the live r2jc.ch page.
 * Each ID matches a filename in /public/media/sponsors/.
 */
const SPONSOR_ROWS: { row: string; sponsors: { id: string; label: string; file: string }[] }[] = [
  {
    row: "Partenaires principaux",
    sponsors: [
      { id: "SPONSOR-so-sushi",  label: "Sō Sushi",                          file: "/media/sponsors/so-sushi.svg" },
      { id: "SPONSOR-jura-ch",   label: "République et Canton du Jura",      file: "/media/sponsors/jura-ch.svg" },
      { id: "SPONSOR-swisslos",  label: "Swisslos — Culture Canton de Berne", file: "/media/sponsors/swisslos.svg" },
      { id: "SPONSOR-oak",       label: "OAK",                                file: "/media/sponsors/oak.svg" },
    ],
  },
  {
    row: "Partenaires locaux",
    sponsors: [
      { id: "SPONSOR-p-beuret",         label: "P. Beuret",         file: "/media/sponsors/p-beuret.svg" },
      { id: "SPONSOR-bati-deco",        label: "Bâti-Déco Sàrl",    file: "/media/sponsors/bati-deco.svg" },
      { id: "SPONSOR-qilomen",          label: "Qilomen",           file: "/media/sponsors/qilomen.svg" },
      { id: "SPONSOR-crystal-services", label: "Crystal Services",  file: "/media/sponsors/crystal-services.svg" },
      { id: "SPONSOR-nuance",           label: "Nuance",            file: "/media/sponsors/nuance.svg" },
      { id: "SPONSOR-leal-sarl",        label: "LEAL Sàrl",         file: "/media/sponsors/leal-sarl.svg" },
    ],
  },
  {
    row: "Soutiens culturels & institutionnels",
    sponsors: [
      { id: "SPONSOR-wankdorf-city",       label: "Wankdorf City Eventhall", file: "/media/sponsors/wankdorf-city.svg" },
      { id: "SPONSOR-cjb",                 label: "CJB — Conseil du Jura bernois", file: "/media/sponsors/cjb.svg" },
      { id: "SPONSOR-ne-ch",               label: "République et Canton de Neuchâtel", file: "/media/sponsors/ne-ch.svg" },
      { id: "SPONSOR-la-grenouille",       label: "La Grenouille", file: "/media/sponsors/la-grenouille.svg" },
      { id: "SPONSOR-raiffeisen",          label: "Raiffeisen",   file: "/media/sponsors/raiffeisen.svg" },
      { id: "SPONSOR-cabinet-de-la-forge", label: "Cabinet de la Forge", file: "/media/sponsors/cabinet-de-la-forge.svg" },
    ],
  },
  {
    row: "Soutiens régionaux",
    sponsors: [
      { id: "SPONSOR-babette",         label: "Babette Switzerland", file: "/media/sponsors/babette.svg" },
      { id: "SPONSOR-grand-chasseral", label: "Grand Chasseral",     file: "/media/sponsors/grand-chasseral.svg" },
      { id: "SPONSOR-saint-imier",     label: "Saint-Imier",         file: "/media/sponsors/saint-imier.svg" },
      { id: "SPONSOR-clientis",        label: "Clientis",            file: "/media/sponsors/clientis.svg" },
      { id: "SPONSOR-portabri",        label: "Portabri SA",         file: "/media/sponsors/portabri.svg" },
      { id: "SPONSOR-bh-immo",         label: "BH Immo SA",          file: "/media/sponsors/bh-immo.svg" },
    ],
  },
];

export default function Sponsors() {
  return (
    <section className="bg-pearl text-noir min-h-screen pt-32 md:pt-40 pb-24">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <p className="font-mono text-[11px] uppercase tracking-wider-2 opacity-60 mb-6 text-center">
          Sponsors
        </p>
        <h1 className="font-display font-light text-display-md text-center mb-6 leading-[1.05]">
          Ils nous font <span className="font-semibold">confiance</span>
        </h1>

        {/* Remerciements — exact copy from r2jc.ch/sponsors/ */}
        <div className="max-w-3xl mx-auto mt-16 md:mt-20 mb-20 md:mb-24">
          <p className="font-mono text-[11px] uppercase tracking-wider-2 opacity-60 mb-6 text-center">
            Remerciements
          </p>
          <div className="space-y-6 font-sans text-base md:text-lg leading-relaxed text-noir/85">
            <p>
              Nous tenons à exprimer notre profonde gratitude à nos sponsors,
              qui jouent un rôle essentiel dans la réussite de R2JC, un
              collectif dédié à la promotion des designers suisses à travers
              des défilés à la fois innovants et uniques.
            </p>
            <p>
              R2JC, c&rsquo;est bien plus qu&rsquo;un collectif&nbsp;: c&rsquo;est
              un espace où la créativité suisse s&rsquo;exprime pleinement, où
              les talents locaux sont célébrés, et où chaque défilé devient
              une expérience singulière, mêlant audace, originalité et
              passion. Grâce à votre soutien, nous avons pu transformer cette
              vision en réalité en offrant une plateforme exceptionnelle aux
              créateurs pour repousser les limites de la mode et valoriser
              leur savoir-faire.
            </p>
            <p>
              Votre engagement à nos côtés dépasse largement le simple appui
              financier. Vous êtes des partenaires, des alliés partageant
              notre mission&nbsp;: encourager l&rsquo;excellence, soutenir
              l&rsquo;artisanat local et promouvoir l&rsquo;innovation.
              Ensemble, nous redéfinissons les standards de la mode et
              contribuons à faire briller la scène suisse à l&rsquo;échelle
              nationale et internationale.
            </p>
            <p>
              Nous sommes fiers de collaborer avec vous et profondément
              reconnaissants de la confiance que vous nous accordez.
              Ensemble, nous continuons à construire un avenir où chaque
              designer trouve sa place et où chaque défilé raconte une
              histoire unique.
            </p>
          </div>
        </div>

        {/* Logo grids — one row per partner tier */}
        <div className="space-y-16 md:space-y-20">
          {SPONSOR_ROWS.map((row) => (
            <div key={row.row}>
              <p className="font-mono text-[11px] uppercase tracking-wider-2 opacity-60 mb-6 text-center">
                {row.row}
              </p>
              <div
                className="grid gap-px bg-noir/10"
                style={{
                  gridTemplateColumns: `repeat(${Math.min(
                    row.sponsors.length,
                    4
                  )}, minmax(0, 1fr))`,
                }}
              >
                {row.sponsors.map((s) => (
                  <div
                    key={s.id}
                    data-media-zone={s.id}
                    className="bg-blanc"
                  >
                    <MediaZone
                      id={s.id}
                      kind="image"
                      ratio="4/3"
                      priority="P1"
                      tone="dark"
                      label={s.label}
                      brief={`Drop logo at ${s.file}`}
                      className="hover:opacity-70 transition-opacity duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Devenir partenaire CTA */}
        <div className="bg-noir text-blanc p-10 md:p-16 text-center mt-20">
          <p className="font-mono text-[11px] uppercase tracking-wider-2 opacity-60 mb-4">
            Devenir partenaire
          </p>
          <h2 className="font-display font-light text-2xl md:text-4xl mb-6 max-w-2xl mx-auto leading-tight">
            Soutenir R2JC, c&rsquo;est associer son nom à la prochaine
            génération créative suisse.
          </h2>
          <a
            href="mailto:Info@r2jc.ch?subject=Partenariat%20R2JC"
            className="inline-block mt-4 bg-blanc text-noir px-8 py-3 rounded font-sans text-sm tracking-[0.02em] hover:bg-silver hover:text-blanc transition-colors duration-500"
          >
            Info@r2jc.ch
          </a>
        </div>
      </div>
    </section>
  );
}
