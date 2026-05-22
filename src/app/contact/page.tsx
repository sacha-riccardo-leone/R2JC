export const metadata = { title: "Contact — R2JC" };

export default function Contact() {
  return (
    <section className="bg-pearl text-noir min-h-screen pt-32 md:pt-40 pb-24">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <p className="font-mono text-[11px] uppercase tracking-wider-2 opacity-60 mb-6 text-center">
          Contact
        </p>
        <h1 className="font-display font-light text-display-md text-center mb-10 leading-[1.05]">
          <span className="font-semibold">Contactez-nous</span>
        </h1>

        {/* Intro copy — verbatim from r2jc.ch/contact-2/ */}
        <p className="max-w-2xl mx-auto text-center font-sans text-base md:text-lg text-noir/80 leading-relaxed mb-20">
          Besoin d&rsquo;aide ou d&rsquo;informations supplémentaires&nbsp;?
          Nous sommes là pour répondre à vos questions. N&rsquo;hésitez pas
          à nous écrire en remplissant le formulaire ou en utilisant nos
          coordonnées ci-dessous. Nous vous répondrons dans les plus brefs
          délais.
        </p>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          {/* Coordonnées — real address from r2jc.ch */}
          <div className="space-y-10">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider-2 opacity-60 mb-3">
                Adresse
              </p>
              <p className="font-display text-xl md:text-2xl font-medium leading-tight">
                Rue Agassiz 10
                <br />
                2610 Saint-Imier
                <br />
                Suisse
              </p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider-2 opacity-60 mb-2">
                Courriel
              </p>
              <a
                href="mailto:Info@r2jc.ch"
                className="font-display text-xl md:text-2xl font-medium hover:text-silver transition-colors"
              >
                Info@r2jc.ch
              </a>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider-2 opacity-60 mb-2">
                Téléphone
              </p>
              <a
                href="tel:+41765142303"
                className="font-display text-xl md:text-2xl font-medium hover:text-silver transition-colors"
              >
                076 514 23 03
              </a>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider-2 opacity-60 mb-3">
                Suivre
              </p>
              <ul className="space-y-1 font-sans text-base">
                <li>
                  <a
                    href="https://www.instagram.com/r2jc.officiel/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-silver transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.tiktok.com/@r2jc.officiel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-silver transition-colors"
                  >
                    TikTok
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@r2jc.officiel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-silver transition-colors"
                  >
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block font-mono text-[11px] uppercase tracking-wider-2 opacity-60 mb-2">
                Votre nom
              </label>
              <input
                type="text"
                required
                className="w-full bg-transparent border-b border-noir/30 py-2 font-sans text-base focus:outline-none focus:border-noir transition-colors"
              />
            </div>
            <div>
              <label className="block font-mono text-[11px] uppercase tracking-wider-2 opacity-60 mb-2">
                Votre adresse courriel
              </label>
              <input
                type="email"
                required
                className="w-full bg-transparent border-b border-noir/30 py-2 font-sans text-base focus:outline-none focus:border-noir transition-colors"
              />
            </div>
            <div>
              <label className="block font-mono text-[11px] uppercase tracking-wider-2 opacity-60 mb-2">
                Objet
              </label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-noir/30 py-2 font-sans text-base focus:outline-none focus:border-noir transition-colors"
              />
            </div>
            <div>
              <label className="block font-mono text-[11px] uppercase tracking-wider-2 opacity-60 mb-2">
                Votre message
              </label>
              <textarea
                required
                rows={5}
                className="w-full bg-transparent border-b border-noir/30 py-2 font-sans text-base focus:outline-none focus:border-noir transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="bg-noir text-blanc px-8 py-3 rounded font-sans text-sm tracking-[0.02em] hover:bg-silver transition-colors duration-500"
            >
              Envoyer →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
