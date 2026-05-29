import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export const metadata = {
  title: "Coulisses — R2JC Demo · Notes de production",
};

/**
 * /coulisses — meta-page about the demo, written for R2JC's team
 * (non-technical readers). Kept intentionally short: hero, two-version
 * intro, a condensed Upgraded highlight list, a condensed Reworked
 * highlight list, the "pour la suite" white banner, and a closing
 * credit strip. Earlier draft had numbered sub-sections + a technical
 * block + a navigation block — pruned for readability.
 */

const UPGRADED_HIGHLIGHTS = [
  "Site multilingue : Français, Anglais, Allemand, Italien.",
  "Designers Édition 02 : liens Instagram cassés mis à jour, sites web ajoutés (par ex. denervaud.co pour Tim Dénervaud), un look manquant ajouté chez Tchango & Shotine.",
  "Page Édition 03 prête : compte à rebours dynamique jusqu'au 12 septembre 2026, téléchargement calendrier (.ics), bouton RSVP par e-mail.",
  "Pages dédiées créées : Postuler (formulaire), Presse (kit complet), Contact, FAQ, Sponsors.",
  "Galerie d'éditions avec trois couvertures de magazine, chaque emplacement clairement marqué « Couverture NN » pour vos images Instagram officielles.",
];

const REWORKED_HIGHLIGHTS = [
  "Page d'accueil cinématique : « R2JC » en grand caractère avec votre reel Instagram qui joue à l'intérieur de la lettre « 2 ».",
  "Bandeau des portraits designer qui défile en boucle derrière votre slogan.",
  "Bannière Édition 03 en blanc (les deux autres en noir) pour mettre la prochaine édition en avant.",
  "Toutes les pages portées dans cette grammaire visuelle alternative, même identité de marque (noir/blanc, vos polices, votre voix).",
];

const STILL_NEEDED = [
  "Les images officielles des couvertures pour Éditions 01, 02, 03 (celles publiées sur Instagram). Les emplacements sont déjà marqués « Couverture NN ».",
  "Le lineup de l'Édition 03 au fur et à mesure des annonces (16 créateurs).",
  "Le lieu de l'Édition 03 : un interrupteur est prêt, je l'active dès l'annonce.",
  "Les communiqués de presse en PDF pour les téléchargements dans /presse.",
  "Vos retours sur les deux versions : ce qui résonne, ce qui ne va pas.",
];

export default function Coulisses() {
  return (
    <main className="bg-noir text-blanc">
      {/* HERO */}
      <section className="min-h-screen relative flex flex-col justify-center px-6 md:px-10 py-32 md:py-40">
        <div className="max-w-7xl mx-auto w-full">
          <Reveal motion="blur">
            <p className="font-mono text-[11px] uppercase tracking-wider-2 text-blanc/40 mb-10 md:mb-16">
              Notes pour l&rsquo;équipe R2JC
            </p>
          </Reveal>

          <Reveal motion="blur" delay={150}>
            <h1 className="font-display text-[clamp(2.5rem,9vw,8rem)] leading-[0.95] tracking-[-0.04em] mb-16 md:mb-24">
              <span className="font-light">Coulisses</span>
              <br />
              <span className="font-black">de la démo.</span>
            </h1>
          </Reveal>

          <Reveal motion="blur" delay={300}>
            <p className="max-w-3xl font-display text-xl md:text-3xl font-light text-blanc/75 leading-[1.3]">
              Cette page résume rapidement ce qui a été fait, et ce qui
              pourrait advenir de cette démo. Vous pouvez basculer entre
              les deux versions{" "}
              <span className="text-blanc">Upgraded</span> et{" "}
              <span className="text-blanc">Reworked</span> via le bouton
              en haut à droite.
            </p>
          </Reveal>
        </div>
      </section>

      {/* TWO VERSIONS — short intro to the toggle */}
      <section className="px-6 md:px-10 py-24 md:py-32 border-t border-blanc/15">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-12 gap-y-8 md:gap-x-12">
          <Reveal motion="blur" className="md:col-span-5">
            <p className="font-mono text-[11px] uppercase tracking-wider-2 text-blanc/40 mb-6">
              Le toggle
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold leading-[1.1] tracking-[-0.03em]">
              Deux versions, un site.
            </h2>
          </Reveal>
          <Reveal
            motion="blur"
            delay={150}
            className="md:col-span-6 md:col-start-7 space-y-5"
          >
            <p className="font-sans text-base md:text-lg leading-relaxed text-blanc/75 max-w-prose">
              <span className="text-blanc font-medium">Upgraded</span> —
              une évolution respectueuse de r2jc.ch actuel.
            </p>
            <p className="font-sans text-base md:text-lg leading-relaxed text-blanc/75 max-w-prose">
              <span className="text-blanc font-medium">Reworked</span> —
              ma réinterprétation artistique, avec la même identité de
              marque (noir/blanc, vos polices, votre voix) mais une
              grammaire visuelle différente.
            </p>
          </Reveal>
        </div>
      </section>

      {/* UPGRADED HIGHLIGHTS */}
      <section className="px-6 md:px-10 py-24 md:py-32 border-t border-blanc/15">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-12 gap-y-8 md:gap-x-12">
          <Reveal motion="blur" className="md:col-span-5">
            <p className="font-mono text-[11px] uppercase tracking-wider-2 text-blanc/40 mb-6">
              Sur la version Upgraded
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold leading-[1.1] tracking-[-0.03em]">
              Ce qui a été refait.
            </h2>
          </Reveal>
          <Reveal
            motion="blur"
            delay={150}
            className="md:col-span-6 md:col-start-7"
          >
            <ul className="space-y-4">
              {UPGRADED_HIGHLIGHTS.map((h, i) => (
                <li
                  key={i}
                  className="font-sans text-base md:text-lg leading-relaxed text-blanc/75 max-w-prose pl-6 relative"
                >
                  <span
                    aria-hidden
                    className="absolute left-0 top-[0.55em] inline-block w-2 h-px bg-blanc/40"
                  />
                  {h}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* REWORKED HIGHLIGHTS */}
      <section className="px-6 md:px-10 py-24 md:py-32 border-t border-blanc/15">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-12 gap-y-8 md:gap-x-12">
          <Reveal motion="blur" className="md:col-span-5">
            <p className="font-mono text-[11px] uppercase tracking-wider-2 text-blanc/40 mb-6">
              Sur la version Reworked
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold leading-[1.1] tracking-[-0.03em]">
              Moments distinctifs.
            </h2>
          </Reveal>
          <Reveal
            motion="blur"
            delay={150}
            className="md:col-span-6 md:col-start-7"
          >
            <ul className="space-y-4">
              {REWORKED_HIGHLIGHTS.map((h, i) => (
                <li
                  key={i}
                  className="font-sans text-base md:text-lg leading-relaxed text-blanc/75 max-w-prose pl-6 relative"
                >
                  <span
                    aria-hidden
                    className="absolute left-0 top-[0.55em] inline-block w-2 h-px bg-blanc/40"
                  />
                  {h}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* POUR LA SUITE — white banner, the open-invitation message.
          Four beats threaded together:
            1. Three-day demo, offered freely.
            2. If R2JC wants to finalize THIS, here's what's needed.
            3. Starting fresh / other direction is just as ok.
            4. Author wants to stay in touch and meet whoever they
               pick for the final artistic direction. */}
      <section className="border-t border-blanc/15">
        <div className="bg-blanc text-noir">
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 grid md:grid-cols-12 gap-y-8 md:gap-x-12">
            <Reveal motion="blur" className="md:col-span-5">
              <p className="font-mono text-[11px] uppercase tracking-wider-2 text-noir/40 mb-6">
                Pour la suite
              </p>
              <h2 className="font-display text-3xl md:text-5xl leading-[1.1] tracking-[-0.03em]">
                <span className="font-light">La suite,</span>
                <br />
                <span className="font-black">à vous.</span>
              </h2>
            </Reveal>
            <Reveal
              motion="blur"
              delay={150}
              className="md:col-span-6 md:col-start-7"
            >
              <p className="font-sans text-base md:text-lg leading-relaxed text-noir/80 max-w-prose">
                Cette démo représente trois jours de travail. Elle vous
                est offerte, sans engagement de votre part.
              </p>

              <p className="mt-8 font-sans text-base md:text-lg leading-relaxed text-noir/80 max-w-prose">
                Si vous voulez la finaliser, voici ce qu&rsquo;il
                faudrait recevoir de votre côté :
              </p>
              <ul className="mt-5 space-y-4">
                {STILL_NEEDED.map((s, i) => (
                  <li
                    key={i}
                    className="font-sans text-base md:text-lg leading-relaxed text-noir/80 max-w-prose pl-6 relative"
                  >
                    <span
                      aria-hidden
                      className="absolute left-0 top-[0.55em] inline-block w-2 h-px bg-noir/40"
                    />
                    {s}
                  </li>
                ))}
              </ul>

              <p className="mt-10 font-sans text-base md:text-lg leading-relaxed text-noir/80 max-w-prose">
                Si vous préférez partir dans une autre direction —
                repartir de zéro, ajuster certaines choses, ou
                travailler avec une autre équipe — c&rsquo;est tout
                aussi ok. Quoi qu&rsquo;il en soit, je serais heureux
                de rester en contact, d&rsquo;échanger des idées, et
                de rencontrer la personne ou l&rsquo;équipe que vous
                choisirez pour la direction artistique du site final.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CLOSING — credit + return links */}
      <section className="px-6 md:px-10 py-16 md:py-20 border-t border-blanc/15">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-12 gap-y-6 md:gap-x-12 items-baseline">
          <div className="md:col-span-5">
            <p className="font-mono text-[10px] uppercase tracking-wider-2 text-blanc/40 mb-3">
              Conception
            </p>
            <p className="font-display text-xl md:text-2xl font-medium">
              Sacha Riccardo Leone
            </p>
          </div>
          <div className="md:col-span-7 flex flex-col md:flex-row gap-4 md:gap-8 font-mono text-[11px] uppercase tracking-wider-2">
            <Link
              href="/"
              className="border-b border-blanc/60 hover:text-silver hover:border-silver transition-colors pb-1"
            >
              Retour Upgraded →
            </Link>
            <Link
              href="/r"
              className="border-b border-blanc/60 hover:text-silver hover:border-silver transition-colors pb-1"
            >
              Retour Reworked →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
