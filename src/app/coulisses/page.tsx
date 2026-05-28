import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export const metadata = {
  title: "Coulisses — R2JC Demo · Notes de production",
};

/**
 * /coulisses — meta-page about the demo itself.
 *
 * Not a "third version" of the site (Upgraded/Reworked stay as the two
 * versions). This is project notes the R2JC team can read to see what
 * was done, what's still needed from them, and how the demo is built.
 *
 * Reached from the version-switcher dropdown via a dedicated entry
 * (visually separated from the version picks by a divider). Lives at
 * `/coulisses` rather than under a version prefix because the content
 * is the same regardless of which version the visitor is viewing.
 *
 * Styled in the Reworked aesthetic — black background, mono labels,
 * blur-on-scroll reveals, asymmetric grids — because it reads as
 * editorial behind-the-scenes more than institutional content.
 */

type Section = {
  num: string;
  eyebrow: string;
  title: string;
  bullets: string[];
};

const SECTIONS: Section[] = [
  {
    num: "01",
    eyebrow: "Le contenu",
    title: "Reprise fidèle de r2jc.ch",
    bullets: [
      "Tous les textes de votre site ont été repris mot pour mot — rien d'inventé, rien d'extrapolé.",
      "Site multilingue : Français, Anglais, Allemand, Italien. La langue est mémorisée via cookie, donc aucun « flash » de contenu non traduit au chargement.",
      "Hero @sapmi et reel Édition 02 hébergés en local : plus de bandeau YouTube qui clignote brièvement au chargement comme sur l'ancien embed.",
      "Polices Montserrat + Poppins + Roboto Mono auto-hébergées via Next.js — aucune dépendance externe, chargement rapide.",
    ],
  },
  {
    num: "02",
    eyebrow: "Designers — Édition 02",
    title: "Corrections sur les 16 fiches",
    bullets: [
      "Liens Instagram mis à jour pour les comptes dont les URLs étaient cassées (Lumea Tribe et plusieurs autres).",
      "Sites web ajoutés quand disponibles, par exemple denervaud.co pour Tim Dénervaud.",
      "Look manquant chez Tchango & Shotine — votre site en présente 5, la démo n'en montrait que 4. Le fichier IMG_5504 avait été oublié à l'import des looks du designer ; il a été ajouté en première position selon l'ordre original.",
      "Portraits et logos chargés pour tous les designers, avec un fallback typographique propre si un fichier manque.",
    ],
  },
  {
    num: "03",
    eyebrow: "Édition 03 (à venir)",
    title: "Page dédiée prête",
    bullets: [
      "Compte à rebours dynamique calculé jusqu'au 12 septembre 2026 (J−N).",
      "Téléchargement calendrier .ics — un clic ouvre Apple Calendar / Google Calendar / Outlook.",
      "16 emplacements designers prêts à recevoir les annonces du lineup au fur et à mesure.",
      "Section « Lieu à venir » prête à se déverrouiller dès que l'adresse est annoncée (lien CFF / SBB / FFS automatique selon la langue).",
      "Bouton RSVP par e-mail pré-rempli avec sujet « Réservation — Édition 03 — 12 septembre 2026 ».",
    ],
  },
  {
    num: "04",
    eyebrow: "Pages dédiées",
    title: "Postuler, Presse, Contact, FAQ, Sponsors",
    bullets: [
      "Postuler : formulaire en 4 sections (à propos / pratique / travail / vision), compte à rebours du délai, fermeture automatique passé l'échéance. Envoi par mailto pré-rempli — aucun serveur à maintenir.",
      "Presse : 3 boilerplates copiables en un clic (25, 50, 150 mots), téléchargement du logo officiel, communiqués prêts à recevoir vos PDFs, formulaire d'accréditation, 4 logos de couverture médiatique (TeleBielingue, Journal du Jura, À Jour, Le Quotidien).",
      "Contact : adresse, e-mail, téléphone, Instagram/TikTok/YouTube + formulaire.",
      "FAQ : vos 5 questions fréquentes en accordéon.",
      "Sponsors : mur des partenaires en 4 catégories + remerciements complets + bouton « Devenir partenaire ».",
    ],
  },
  {
    num: "05",
    eyebrow: "Galerie d'éditions",
    title: "Trois magazines en couverture",
    bullets: [
      "Trois cartes magazine sur /editions (01, 02, 03).",
      "Au survol d'une couverture, les pages se déploient en éventail derrière elle.",
      "Pour l'Édition 02, ce sont les vrais portraits designer qui apparaissent.",
      "Chaque emplacement de couverture est clairement marqué « Couverture 01 / 02 / 03 » — pour vous indiquer où votre image Instagram officielle s'insérera.",
    ],
  },
];

const REWORKED_HIGHLIGHTS = [
  "Cold open cinématique : « R2JC » en grand caractère, avec votre reel Instagram qui joue à l'intérieur de la lettre « 2 » (effet « clipping mask »).",
  "Bandeau des portraits designer qui défile en boucle derrière le slogan « Une scène aux designers qui méritent d'être découverts ».",
  "Section « L'histoire de R2JC » avec timeline cliquable des trois éditions.",
  "Bannière Édition 03 en blanc (les deux autres en noir) : la prochaine édition se distingue visuellement comme appel à l'action principal.",
  "Flèches style signalétique métro (Londres / Shanghai) réutilisées partout : bannières, indicateur de défilement, retour en haut.",
  "Toutes les 9 pages dédiées portées sur cette version avec le même langage visuel.",
];

const NAV_HIGHLIGHTS = [
  "Menu principal toujours visible en haut sur desktop : 7 routes accessibles en un clic.",
  "Burger menu plein écran sur mobile uniquement.",
  "Bouton « Retour en haut » qui apparaît automatiquement sur les pages longues.",
  "Sélecteur de version + de langue dans l'en-tête.",
  "L'URL préserve toujours la version : /editions ↔ /r/editions.",
];

const STILL_NEEDED = [
  "Les images officielles des couvertures pour Éditions 01, 02, 03 (celles publiées sur Instagram). Les emplacements sont déjà marqués « Couverture NN ».",
  "Le lineup de l'Édition 03 au fur et à mesure des annonces (16 créateurs).",
  "Le lieu de l'Édition 03 : un interrupteur est prêt, je l'active dès l'annonce.",
  "Les communiqués de presse en PDF pour les téléchargements dans /presse.",
  "Vos retours sur les deux versions : ce qui résonne, ce qui ne va pas.",
];

const TECHNICAL_NOTES = [
  "Next.js 15 / React 19 / TypeScript",
  "Tailwind CSS avec vos tokens de marque",
  "Lenis pour le défilement lisse, animations GPU-accélérées",
  "Accessibilité : navigation clavier, attributs ARIA, contraste vérifié",
  "Aucun coût récurrent : hébergement Vercel gratuit, aucun service tiers payant",
  "Déploiement automatique à chaque mise à jour : push GitHub → live sur Vercel en ~60 secondes",
  "Aucun backend : tous les formulaires utilisent mailto: — zéro infrastructure à maintenir",
];

export default function Coulisses() {
  return (
    <main className="bg-noir text-blanc">
      {/* HERO — eyebrow + split-weight title + lead paragraph */}
      <section className="min-h-screen relative flex flex-col justify-center px-6 md:px-10 py-32 md:py-40">
        <div className="max-w-7xl mx-auto w-full">
          <Reveal motion="blur">
            <p className="font-mono text-[11px] uppercase tracking-wider-2 text-blanc/40 mb-10 md:mb-16">
              Notes de production · pour l&rsquo;équipe R2JC
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
              Cette page récapitule tout ce qui a été fait sur la démo, ce
              qu&rsquo;il manque encore de votre côté, et la base technique.
              Vous pouvez basculer entre les versions{" "}
              <span className="text-blanc">Upgraded</span> et{" "}
              <span className="text-blanc">Reworked</span> via le bouton en
              haut à droite.
            </p>
          </Reveal>
        </div>
      </section>

      {/* TWO VERSIONS — short intro to the toggle */}
      <section className="px-6 md:px-10 py-24 md:py-32 border-t border-blanc/15">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-12 gap-y-8 md:gap-x-12">
          <Reveal motion="blur" className="md:col-span-5">
            <p className="font-mono text-[11px] uppercase tracking-wider-2 text-blanc/40 mb-6">
              00 · Le toggle
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
              <span className="text-blanc font-medium">Upgraded</span> — une
              évolution respectueuse de r2jc.ch actuel, avec toutes les
              améliorations techniques et d&rsquo;expérience listées plus bas.
            </p>
            <p className="font-sans text-base md:text-lg leading-relaxed text-blanc/75 max-w-prose">
              <span className="text-blanc font-medium">Reworked</span> — ma
              réinterprétation artistique. Même identité de marque (noir /
              blanc, Montserrat + Poppins, votre voix) mais avec une
              grammaire visuelle différente.
            </p>
          </Reveal>
        </div>
      </section>

      {/* UPGRADED — Section list */}
      <section className="px-6 md:px-10 py-24 md:py-32 border-t border-blanc/15">
        <div className="max-w-7xl mx-auto w-full">
          <Reveal motion="blur">
            <p className="font-mono text-[11px] uppercase tracking-wider-2 text-blanc/40 mb-6">
              Améliorations · version Upgraded
            </p>
          </Reveal>

          <Reveal motion="blur" delay={120}>
            <h2 className="font-display text-3xl md:text-5xl font-semibold leading-[1.1] tracking-[-0.03em] mb-16 md:mb-20">
              Ce qui a été refait sur r2jc.ch
            </h2>
          </Reveal>

          <div className="space-y-16 md:space-y-20">
            {SECTIONS.map((section) => (
              <Reveal motion="blur" key={section.num}>
                <article className="grid grid-cols-12 gap-x-4 md:gap-x-8 items-start">
                  <div className="col-span-12 md:col-span-3 mb-4 md:mb-0">
                    <p className="font-mono text-[10px] uppercase tracking-wider-2 text-blanc/40 mb-2 tabular-nums">
                      {section.num}
                    </p>
                    <p className="font-mono text-[11px] uppercase tracking-wider-2 text-blanc/60 mb-2">
                      {section.eyebrow}
                    </p>
                    <h3 className="font-display text-xl md:text-2xl font-medium leading-tight tracking-[-0.02em]">
                      {section.title}
                    </h3>
                  </div>
                  <ul className="col-span-12 md:col-span-9 space-y-3">
                    {section.bullets.map((b, i) => (
                      <li
                        key={i}
                        className="font-sans text-base md:text-lg leading-relaxed text-blanc/75 max-w-prose pl-6 relative"
                      >
                        <span
                          aria-hidden
                          className="absolute left-0 top-[0.55em] inline-block w-2 h-px bg-blanc/40"
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* REWORKED HIGHLIGHTS */}
      <section className="px-6 md:px-10 py-24 md:py-32 border-t border-blanc/15">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-12 gap-y-8 md:gap-x-12">
          <Reveal motion="blur" className="md:col-span-5">
            <p className="font-mono text-[11px] uppercase tracking-wider-2 text-blanc/40 mb-6">
              Réinterprétation · version Reworked
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

      {/* NAVIGATION */}
      <section className="px-6 md:px-10 py-24 md:py-32 border-t border-blanc/15">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-12 gap-y-8 md:gap-x-12">
          <Reveal motion="blur" className="md:col-span-5">
            <p className="font-mono text-[11px] uppercase tracking-wider-2 text-blanc/40 mb-6">
              Navigation
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold leading-[1.1] tracking-[-0.03em]">
              Plus rapide, partout.
            </h2>
          </Reveal>
          <Reveal
            motion="blur"
            delay={150}
            className="md:col-span-6 md:col-start-7"
          >
            <ul className="space-y-4">
              {NAV_HIGHLIGHTS.map((h, i) => (
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

      {/* STILL NEEDED — white banner to flag what R2JC owes */}
      <section className="border-t border-blanc/15">
        <div className="bg-blanc text-noir">
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 grid md:grid-cols-12 gap-y-8 md:gap-x-12">
            <Reveal motion="blur" className="md:col-span-5">
              <p className="font-mono text-[11px] uppercase tracking-wider-2 text-noir/40 mb-6">
                À fournir · de votre côté
              </p>
              <h2 className="font-display text-3xl md:text-5xl font-semibold leading-[1.1] tracking-[-0.03em]">
                Ce qu&rsquo;il manque pour finaliser.
              </h2>
            </Reveal>
            <Reveal
              motion="blur"
              delay={150}
              className="md:col-span-6 md:col-start-7"
            >
              <ul className="space-y-4">
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
            </Reveal>
          </div>
        </div>
      </section>

      {/* TECHNICAL — for the curious */}
      <section className="px-6 md:px-10 py-24 md:py-32 border-t border-blanc/15">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-12 gap-y-8 md:gap-x-12">
          <Reveal motion="blur" className="md:col-span-5">
            <p className="font-mono text-[11px] uppercase tracking-wider-2 text-blanc/40 mb-6">
              Pour les curieux
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold leading-[1.1] tracking-[-0.03em]">
              Côté technique.
            </h2>
          </Reveal>
          <Reveal
            motion="blur"
            delay={150}
            className="md:col-span-6 md:col-start-7"
          >
            <ul className="space-y-2 font-mono text-[12px] uppercase tracking-wider-2 text-blanc/65">
              {TECHNICAL_NOTES.map((n, i) => (
                <li key={i} className="border-b border-blanc/15 py-3">
                  · {n}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* CREDIT + CONTACT — closing strip */}
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
            <a
              href="https://github.com/sacha-riccardo-leone/R2JC"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-blanc/60 hover:text-silver hover:border-silver transition-colors pb-1"
            >
              Code source ↗
            </a>
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
