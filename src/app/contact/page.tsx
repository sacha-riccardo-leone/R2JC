export const metadata = { title: "Contact — R2JC" };

export default function Contact() {
  return (
    <section className="bg-ink text-bone min-h-screen pt-32 md:pt-40 pb-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-7">
          <p className="font-mono text-[11px] uppercase tracking-wider-3 opacity-60 mb-12">
            ※ Contact
          </p>
          <h1 className="font-display italic text-display-md leading-[0.9] mb-12">
            Écrivez. Téléphonez. Passez.
          </h1>
          <p className="max-w-prose-edition font-sans text-lg leading-relaxed opacity-85">
            Pas de formulaire. Une vraie adresse, un vrai numéro. La porte
            est entrouverte.
          </p>
        </div>

        <div className="md:col-span-5 space-y-12 font-mono text-[11px] uppercase tracking-wider-2">
          <div className="space-y-2">
            <p className="opacity-50">Courriel</p>
            <a href="mailto:info@r2jc.ch" className="text-2xl normal-case tracking-normal font-sans hover:text-cinabre transition-colors">
              info@r2jc.ch
            </a>
          </div>
          <div className="space-y-2">
            <p className="opacity-50">Téléphone</p>
            <a href="tel:+41765142303" className="text-2xl normal-case tracking-normal font-sans hover:text-cinabre transition-colors">
              +41 76 514 23 03
            </a>
          </div>
          <div className="space-y-2">
            <p className="opacity-50">Suivre</p>
            <ul className="space-y-1">
              <li><a className="hover:text-cinabre transition-colors" href="https://instagram.com/r2jc.officiel">Instagram</a></li>
              <li><a className="hover:text-cinabre transition-colors" href="#">TikTok</a></li>
              <li><a className="hover:text-cinabre transition-colors" href="#">YouTube</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
