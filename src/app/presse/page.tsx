export const metadata = { title: "Presse & Partenaires — R2JC" };

const PRESS = ["Télé Bilingue", "Le Journal du Jura", "À Jour", "Le Quotidien"];

export default function Presse() {
  return (
    <section className="paper min-h-screen pt-32 md:pt-40 pb-32 text-ink">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <p className="font-mono text-[11px] uppercase tracking-wider-3 opacity-60 mb-12">
          ※ Presse &amp; Partenaires
        </p>
        <h1 className="font-display italic text-display-md leading-[0.9] mb-20">
          Ils en ont parlé.
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-ink/20">
          {PRESS.map((p) => (
            <div
              key={p}
              data-media-zone={`PRESS-LOGO-${p}`}
              className="aspect-[4/3] border-r border-b border-ink/20 flex items-center justify-center p-6 text-center"
            >
              <span className="font-mono text-[11px] uppercase tracking-wider-2">
                {p}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-24 max-w-prose-edition">
          <p className="font-mono text-[11px] uppercase tracking-wider-3 opacity-60 mb-6">
            ※ Devenir partenaire
          </p>
          <p className="font-sans text-lg leading-relaxed opacity-85">
            Soutenir R2JC, c'est associer son nom à la prochaine génération
            créative suisse — avant qu'elle ne devienne évidente.
            <br />
            <a
              href="mailto:info@r2jc.ch"
              className="inline-block mt-6 font-mono text-[11px] uppercase tracking-wider-2 border-b border-ink hover:text-cinabre hover:border-cinabre transition-colors"
            >
              info@r2jc.ch →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
