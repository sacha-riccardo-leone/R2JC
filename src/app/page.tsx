import Link from "next/link";
import { MediaZone } from "@/components/MediaZone";
import { Reveal } from "@/components/Reveal";
import { HeroVideo } from "@/components/HeroVideo";

/**
 * R2JC Homepage — structured around the live r2jc.ch flow, elevated.
 *
 * I.   Hero          — YouTube ambient + signature animated "découverts" zoom
 * II.  L'histoire    — Their actual brand story, in their voice
 * III. Ils parlent   — Press logos (Télé Bilingue, Le Journal du Jura, À Jour, Le Quotidien)
 * IV.  Édition 02    — Featured video + heading + designer credit
 * V.   FAQ teaser    — Five real questions, accordion-styled
 * Footer             — Three-column: Règles · Réseaux · Contact
 */
export default function Home() {
  return (
    <>
      {/* ──────────────────────────────────────────────────────────────
          I — HERO
          ────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen bg-noir text-blanc overflow-hidden flex items-center">
        <HeroVideo />
        <div
          aria-hidden
          className="absolute inset-0 bg-noir/55 pointer-events-none"
        />

        <div className="relative z-10 w-full px-6 md:px-10 text-center">
          <Reveal delay={150}>
            <p className="font-mono text-[11px] uppercase tracking-wider-2 opacity-70 mb-8">
              R2JC · Rencontre de Jeunes Créateurs · Suisse
            </p>
          </Reveal>

          {/* The signature R2JC headline — "découverts" animates with a zoom loop */}
          <Reveal delay={350}>
            <h1 className="font-display font-light text-display-md max-w-5xl mx-auto leading-[1.1]">
              <span className="block">Une scène aux designers</span>
              <span className="block">
                qui méritent d&rsquo;être{" "}
                <span className="zoom-word font-bold italic">découverts</span>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={900}>
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/editions"
                className="inline-block bg-blanc text-noir px-8 py-3 rounded font-sans text-sm tracking-[0.02em] hover:bg-silver hover:text-blanc transition-colors duration-500"
              >
                Voir les éditions
              </Link>
              <Link
                href="#histoire"
                className="inline-block border border-blanc/60 text-blanc px-8 py-3 rounded font-sans text-sm tracking-[0.02em] hover:bg-blanc hover:text-noir transition-colors duration-500"
              >
                Découvrir le collectif
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Hairline divider at the bottom of the hero — their visual signature */}
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-10 pb-6 z-10">
          <div className="hairline bg-blanc mb-3" />
          <div className="flex justify-between font-mono text-[10px] uppercase tracking-wider-2 opacity-60">
            <span>Défiler</span>
            <span>Édition 03 · 2026</span>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────
          II — L'HISTOIRE DE R2JC
          Their actual copy, set in a refined editorial grid.
          ────────────────────────────────────────────────────────────── */}
      <section
        id="histoire"
        className="bg-pearl text-noir py-28 md:py-40"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-wider-2 opacity-60 mb-6 text-center">
              Notre histoire
            </p>
          </Reveal>

          <Reveal delay={120}>
            <h2 className="font-display font-light text-display-md text-center mb-20 leading-[1.05]">
              L&rsquo;histoire de <span className="font-semibold">R2JC</span>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-7 space-y-6 font-sans text-base md:text-lg leading-relaxed text-noir/85">
              <Reveal>
                <p>
                  Tout débute avec la volonté de créer des défilés qui
                  transcendent la simple présentation de vêtements. Notre
                  collectif a été formé pour développer le marché de la mode
                  en Suisse. Nous estimons qu&rsquo;il existe énormément de
                  talents cachés qui méritent d&rsquo;être valorisés et reconnus.
                  C&rsquo;est pourquoi nous avons l&rsquo;ambition d&rsquo;ouvrir
                  des opportunités et de faire déboucher des carrières.
                </p>
              </Reveal>
              <Reveal delay={120}>
                <p>
                  La mode dépasse largement le simple choix de vêtements.
                  C&rsquo;est une manière artistique de refléter notre vie,
                  notre identité et le monde qui nous entoure. Ici, nous ne
                  parlons pas de designers renommés ou de collections
                  Haute couture, mais de passionnés qui s&rsquo;expriment
                  avec cœur et authenticité.
                </p>
              </Reveal>
            </div>

            <div className="md:col-span-5">
              <Reveal delay={200}>
                <MediaZone
                  id="HOME-I1"
                  kind="image"
                  ratio="4/5"
                  priority="P1"
                  brief="Editorial portrait — moment from Édition 01 or 02. Available on the live site at /wp-content/uploads/2024/12/IMG_3001.jpg"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────
          III — ILS PARLENT DE NOUS
          Press logos: Télé Bilingue · Le Journal du Jura · À Jour · Le Quotidien
          ────────────────────────────────────────────────────────────── */}
      <section className="bg-blanc text-noir py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <Reveal>
            <h2 className="font-display font-light text-3xl md:text-5xl text-center mb-16 md:mb-20">
              Ils parlent de <span className="font-semibold">nous</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-noir/10">
            {[
              { id: "PRESS-LOGO-telebilingue", name: "Télé Bilingue" },
              { id: "PRESS-LOGO-journaldujura", name: "Le Journal du Jura" },
              { id: "PRESS-LOGO-ajour",        name: "À Jour" },
              { id: "PRESS-LOGO-lequotidien",  name: "Le Quotidien" },
            ].map((p, i) => (
              <Reveal key={p.id} delay={i * 80}>
                <div
                  data-media-zone={p.id}
                  className="bg-blanc aspect-[4/3] flex items-center justify-center p-8 hover:bg-pearl/40 transition-colors duration-500"
                >
                  <span className="font-display font-medium text-sm md:text-base text-center text-noir/70">
                    {p.name}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────
          IV — ÉDITION 02 — FEATURED VIDEO
          Mirrors the live site's video-on-left, copy-on-right composition.
          ────────────────────────────────────────────────────────────── */}
      <section className="bg-noir text-blanc py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <Reveal>
            <MediaZone
              id="ED-VID-02"
              kind="video"
              ratio="4/5"
              priority="P0"
              brief="Édition 02 recap video — already published on YouTube (@r2jc.officiel). Self-host MP4 or embed for the final build."
            />
          </Reveal>

          <div>
            <Reveal delay={150}>
              <p className="font-mono text-[11px] uppercase tracking-wider-2 opacity-60 mb-6">
                Édition 02 · 2024
              </p>
            </Reveal>
            <Reveal delay={250}>
              <h2 className="font-display font-light text-3xl md:text-5xl leading-[1.15] mb-8">
                La vidéo complète de la{" "}
                <span className="font-semibold">2ᵉ édition</span> est
                désormais disponible sur notre chaîne YouTube&nbsp;!
              </h2>
            </Reveal>
            <Reveal delay={400}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.youtube.com/@r2jc.officiel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-silver text-blanc px-6 py-3 rounded font-sans text-sm tracking-[0.02em] hover:bg-blanc hover:text-noir transition-colors duration-500"
                >
                  Regarder sur YouTube →
                </a>
                <Link
                  href="/editions"
                  className="inline-block border border-blanc/40 text-blanc px-6 py-3 rounded font-sans text-sm tracking-[0.02em] hover:bg-blanc hover:text-noir transition-colors duration-500"
                >
                  Toutes les éditions
                </Link>
              </div>
            </Reveal>
            <Reveal delay={550}>
              <p className="mt-12 font-sans text-sm text-mist/70">
                <span className="font-semibold text-blanc">@sapmi</span>
                <br />
                Designer 1ʳᵉ édition
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────
          V — FAQ TEASER
          ────────────────────────────────────────────────────────────── */}
      <section className="bg-pearl text-noir py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-wider-2 opacity-60 mb-4 text-center">
              Questions fréquentes
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="font-display font-light text-3xl md:text-5xl text-center mb-16">
              Pour mieux nous{" "}
              <span className="font-semibold">connaître</span>
            </h2>
          </Reveal>

          <ul className="border-t border-noir/15">
            {[
              "Qui sommes-nous ?",
              "Que veut dire R2JC ?",
              "Comment puis-je participer à vos événements ?",
              "Puis-je acheter des pièces uniques présentées par un designer ?",
              "Comment puis-je rester à jour avec vos nouveautés ?",
            ].map((q, i) => (
              <li key={i} className="border-b border-noir/15">
                <Link
                  href="/faq"
                  className="flex justify-between items-center py-6 group hover:text-silver transition-colors duration-300"
                >
                  <span className="font-display font-medium text-lg md:text-xl pr-4">
                    {q}
                  </span>
                  <span className="font-mono text-xs opacity-50 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-12 text-center">
            <Link
              href="/faq"
              className="inline-block bg-noir text-blanc px-8 py-3 rounded font-sans text-sm tracking-[0.02em] hover:bg-silver transition-colors duration-500"
            >
              Voir toutes les questions
            </Link>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────
          FOOTER — three columns, matching the live r2jc.ch footer
          ────────────────────────────────────────────────────────────── */}
      <footer className="bg-noir text-mist">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-20 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h4 className="font-display text-blanc font-medium text-[15px] mb-4">
              Règles et Politiques
            </h4>
            <ul className="space-y-2 font-sans text-sm text-mist/80">
              <li>
                <Link
                  href="/politique-de-confidentialite"
                  className="hover:text-blanc transition-colors"
                >
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link
                  href="/conditions-generales-de-ventes"
                  className="hover:text-blanc transition-colors"
                >
                  Conditions générales de ventes
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-blanc font-medium text-[15px] mb-4">
              Réseaux sociaux
            </h4>
            <ul className="space-y-2 font-sans text-sm text-mist/80">
              <li>
                <a
                  href="https://www.instagram.com/r2jc.officiel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blanc transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@r2jc.officiel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blanc transition-colors"
                >
                  TikTok
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@r2jc.officiel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blanc transition-colors"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-blanc font-medium text-[15px] mb-4">
              Contact
            </h4>
            <ul className="space-y-2 font-sans text-sm text-mist/80">
              <li>
                <a
                  href="mailto:Info@r2jc.ch"
                  className="hover:text-blanc transition-colors"
                >
                  Info@r2jc.ch
                </a>
              </li>
              <li>+41 76 514 23 03</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-graphite px-6 md:px-10 py-5 text-center font-sans text-[12px] text-mist/50">
          © R2JC · Tous droits réservés
        </div>
      </footer>
    </>
  );
}
