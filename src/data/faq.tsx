import type { AccordionItem } from "@/components/Accordion";

/**
 * FAQ entries — verbatim from the live r2jc.ch homepage and /faq/ pages.
 * Single source of truth so the homepage accordion and FAQ page stay in sync.
 */
export const FAQ_ITEMS: AccordionItem[] = [
  {
    q: "Qui sommes-nous ?",
    a: (
      <p>
        R2JC, est un collectif qui vise à développer et promouvoir le
        marché de la mode en Suisse en mettant en avant des designers qui
        méritent d&rsquo;être reconnus pour leur talents indéniables.
        Nos événements permettent également de rassembler les passionnés
        de mode autour d&rsquo;une même vision.
      </p>
    ),
  },
  {
    q: "Que veut dire R2JC ?",
    a: (
      <p>
        L&rsquo;abréviation de notre collectif signifie «&nbsp;rencontre
        de jeunes créateurs&nbsp;». Dans ce contexte, le terme «&nbsp;créateurs&nbsp;»
        ne se limite pas aux designers de mode qui présentent leurs
        tenues. Il englobe toute personne qui s&rsquo;engage dans une
        forme de création artistique.
      </p>
    ),
  },
  {
    q: "Comment puis-je participer à vos événements ?",
    a: (
      <p>
        Si vous désirez participer à notre événement, vous pouvez
        consulter nos offres de recrutement et y postuler si le délai
        est encore ouvert.
      </p>
    ),
  },
  {
    q: "Puis-je acheter des pièces uniques présenté par un designer ?",
    a: (
      <p>
        Oui, il est sans doute possible d&rsquo;acquérir des pièces
        présentées par un designer. Cependant, nous vous recommandons de
        contacter directement la personne concernée afin de discuter des
        possibilités et modalités d&rsquo;achat. Vous trouverez toutes
        les informations relatives aux designers sous l&rsquo;onglet
        «&nbsp;Éditions&nbsp;» de notre site internet.
      </p>
    ),
  },
  {
    q: "Comment puis-je rester à jour avec vos nouveautés ?",
    a: (
      <p>
        Suivez-nous sur Instagram{" "}
        <a
          href="https://instagram.com/r2jc.officiel"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-silver"
        >
          @r2jc.officiel
        </a>
        , inscrivez-vous à notre newsletter et consultez régulièrement
        notre site web pour les dernières mises à jour.
      </p>
    ),
  },
];
