export const metadata = { title: "Sponsors — R2JC" };

export default function Sponsors() {
  return (
    <section className="bg-pearl text-noir min-h-screen pt-32 md:pt-40 pb-24">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <p className="font-mono text-[11px] uppercase tracking-wider-2 opacity-60 mb-6 text-center">
          Nos soutiens
        </p>
        <h1 className="font-display font-light text-display-md text-center mb-16 md:mb-20 leading-[1.05]">
          Ils nous <span className="font-semibold">soutiennent</span>
        </h1>

        <p className="max-w-prose mx-auto text-center font-sans text-base md:text-lg text-noir/80 mb-20">
          R2JC existe grâce à la confiance de partenaires qui croient au
          potentiel de la scène créative suisse. Leur engagement permet à
          chaque édition de voir le jour et à de nouveaux talents
          d&rsquo;être révélés.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-noir/10 mb-20">
          {[
            { id: "SPONSOR-01", name: "Sponsor à venir" },
            { id: "SPONSOR-02", name: "Sponsor à venir" },
            { id: "SPONSOR-03", name: "Sponsor à venir" },
            { id: "SPONSOR-04", name: "Sponsor à venir" },
            { id: "SPONSOR-05", name: "Sponsor à venir" },
            { id: "SPONSOR-06", name: "Sponsor à venir" },
          ].map((s) => (
            <div
              key={s.id}
              data-media-zone={s.id}
              className="bg-blanc aspect-[4/3] flex items-center justify-center p-6 text-center hover:bg-pearl/40 transition-colors duration-500"
            >
              <span className="font-mono text-[10px] uppercase tracking-wider-2 text-noir/40">
                {s.name}
              </span>
            </div>
          ))}
        </div>

        <div className="bg-noir text-blanc p-10 md:p-16 text-center">
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
