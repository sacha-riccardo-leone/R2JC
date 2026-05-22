import { MediaZone } from "@/components/MediaZone";

export const metadata = { title: "Participer — R2JC" };

export default function Participer() {
  return (
    <section className="bg-ink text-bone min-h-screen pt-32 md:pt-40 pb-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <MediaZone
            id="PART-V1"
            kind="video"
            ratio="3/4"
            priority="P2"
            brief="Ambient — a hand opening a door, a chair placed, paper laid down. 10s loop, no audio."
          />
        </div>

        <div className="md:col-span-7">
          <p className="font-mono text-[11px] uppercase tracking-wider-3 opacity-60 mb-8">
            ※ Participer
          </p>
          <h1 className="font-display italic text-display-md leading-[0.9] mb-12">
            Vous créez. Nous écoutons.
          </h1>
          <p className="max-w-prose-edition font-sans text-lg leading-relaxed opacity-85 mb-12">
            Trois questions. Aucun PDF. Aucun formulaire interminable.
            Si votre travail nous intéresse, nous vous écrivons sous dix jours.
          </p>

          <form className="space-y-10">
            {[
              { q: "01 — Qui êtes-vous ?", hint: "500 mots maximum." },
              { q: "02 — Que voulez-vous montrer ?", hint: "Texte libre · images · vidéos." },
              { q: "03 — Pourquoi maintenant ?", hint: "200 mots maximum." },
            ].map((f, i) => (
              <div key={i} className="border-b border-bone/30 pb-4">
                <label className="block font-mono text-[11px] uppercase tracking-wider-2 opacity-70 mb-3">
                  {f.q}
                </label>
                <textarea
                  rows={3}
                  placeholder={f.hint}
                  className="w-full bg-transparent font-sans text-base placeholder:opacity-30 focus:outline-none resize-none"
                />
              </div>
            ))}

            <button
              type="submit"
              className="bg-cinabre text-bone px-8 py-4 font-mono text-[11px] uppercase tracking-wider-2 hover:bg-bone hover:text-ink transition-colors duration-300"
            >
              Envoyer →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
