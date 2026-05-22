export const metadata = { title: "Contact — R2JC" };

export default function Contact() {
  return (
    <section className="bg-pearl text-noir min-h-screen pt-32 md:pt-40 pb-24">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <p className="font-mono text-[11px] uppercase tracking-wider-2 opacity-60 mb-6 text-center">
          Nous contacter
        </p>
        <h1 className="font-display font-light text-display-md text-center mb-16 leading-[1.05]">
          <span className="font-semibold">Contact</span>
        </h1>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 mt-10">
          <div className="space-y-10">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider-2 opacity-60 mb-2">
                Courriel
              </p>
              <a
                href="mailto:Info@r2jc.ch"
                className="font-display text-2xl md:text-3xl font-medium hover:text-silver transition-colors"
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
                className="font-display text-2xl md:text-3xl font-medium hover:text-silver transition-colors"
              >
                +41 76 514 23 03
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
                className="w-full bg-transparent border-b border-noir/30 py-2 font-sans text-base focus:outline-none focus:border-noir transition-colors"
              />
            </div>
            <div>
              <label className="block font-mono text-[11px] uppercase tracking-wider-2 opacity-60 mb-2">
                Votre adresse courriel
              </label>
              <input
                type="email"
                className="w-full bg-transparent border-b border-noir/30 py-2 font-sans text-base focus:outline-none focus:border-noir transition-colors"
              />
            </div>
            <div>
              <label className="block font-mono text-[11px] uppercase tracking-wider-2 opacity-60 mb-2">
                Votre message
              </label>
              <textarea
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
