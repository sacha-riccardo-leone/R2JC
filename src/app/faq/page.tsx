"use client";

import { useState } from "react";

export const dynamic = "force-static";

type QA = { q: string; a: React.ReactNode };

const QUESTIONS: QA[] = [
  {
    q: "Qui sommes-nous ?",
    a: (
      <p>
        R2JC est un collectif qui vise à développer et promouvoir le
        marché de la mode en Suisse en mettant en avant des designers qui
        méritent d&rsquo;être reconnus pour leurs talents indéniables.
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
    q: "Puis-je acheter des pièces uniques présentées par un designer ?",
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

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-pearl text-noir min-h-screen pt-32 md:pt-40 pb-24">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <p className="font-mono text-[11px] uppercase tracking-wider-2 opacity-60 mb-6 text-center">
          Questions fréquentes
        </p>
        <h1 className="font-display font-light text-display-md text-center mb-16 leading-[1.05]">
          <span className="font-semibold">FAQ</span>
        </h1>

        <ul className="border-t border-noir/15">
          {QUESTIONS.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={i} className="border-b border-noir/15">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex justify-between items-center text-left py-6 group hover:text-silver transition-colors duration-300"
                >
                  <span className="font-display font-medium text-lg md:text-xl pr-6">
                    {item.q}
                  </span>
                  <span
                    className={`font-mono text-xl shrink-0 transition-transform duration-500 ease-editorial ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-500 ease-editorial ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pb-8 font-sans text-base leading-relaxed text-noir/80 max-w-prose">
                      {item.a}
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="mt-16 text-center">
          <p className="font-mono text-[11px] uppercase tracking-wider-2 opacity-60 mb-3">
            Une autre question&nbsp;?
          </p>
          <a
            href="mailto:Info@r2jc.ch"
            className="inline-block bg-noir text-blanc px-8 py-3 rounded font-sans text-sm tracking-[0.02em] hover:bg-silver transition-colors duration-500"
          >
            Info@r2jc.ch
          </a>
        </div>
      </div>
    </section>
  );
}
