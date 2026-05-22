/**
 * French — canonical source of truth.
 * All other languages translate from this dictionary.
 */

export type Dictionary = {
  nav: { home: string; sponsors: string; editions: string; contact: string; faq: string; menu: string; close: string; postuler: string };
  common: { language: string; edition: string; designer: string; scroll: string; edition03: string };
  home: {
    eyebrow: string;
    taglineLine1: string;
    taglineLine2pre: string;
    taglineZoom: string;
    ctaEditions: string;
    ctaDiscover: string;
    histoire: { eyebrow: string; titlePre: string; titleAccent: string; p1: string; p2: string };
    presse: { titlePre: string; titleAccent: string };
    ed02: { eyebrow: string; headingPre: string; headingAccent: string; headingPost: string; ctaYoutube: string; ctaAll: string };
    faq: { eyebrow: string; titlePre: string; titleAccent: string; ctaAll: string };
  };
  footer: { rules: string; privacy: string; terms: string; social: string; contact: string; rights: string; siteBy: string };
  sponsors: {
    eyebrow: string;
    titlePre: string;
    titleAccent: string;
    remerciementsEyebrow: string;
    remerciementsP1: string;
    remerciementsP2: string;
    remerciementsP3: string;
    remerciementsP4: string;
    rows: { principaux: string; locaux: string; culturels: string; regionaux: string };
    ctaEyebrow: string;
    ctaTitle: string;
  };
  editions: {
    eyebrow: string;
    titleAccent: string;
    e02: { titlePre: string; titleAccent: string; intro: string };
    cardLabel: string;
    e01: { eyebrow: string; titlePre: string; titleAccent: string; coverLabel: string; caption: string };
  };
  contact: {
    eyebrow: string;
    title: string;
    intro: string;
    labels: { address: string; email: string; phone: string; follow: string };
    form: { name: string; email: string; subject: string; message: string; submit: string };
  };
  faq: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctaEyebrow: string;
    items: Array<{ q: string; a: string }>;
  };
  postuler: {
    eyebrow: string;
    title: string;
    intro: string;
    status: {
      deadline: string;
      daysLeft: string;
      lastDay: string;
      promise: string;
    };
    closed: { title: string; next: string };
    sections: { about: string; practice: string; work: string; vision: string };
    labels: {
      fullName: string;
      email: string;
      phone: string;
      link: string;
      discipline: string;
      q1: string;
      q1Hint: string;
      q2: string;
      q2Hint: string;
      portfolio: string;
      portfolioHint: string;
      q3: string;
      q3Hint: string;
    };
    disciplines: { mode: string; photography: string; performance: string; artDirection: string; sound: string; other: string };
    submit: string;
    success: { title: string; body: string; again: string };
    bottom: { eyebrow: string; line: string };
  };
};

const fr: Dictionary = {
  nav: {
    home: "Accueil",
    sponsors: "Sponsors",
    editions: "Éditions",
    contact: "Contact",
    faq: "FAQ",
    menu: "Menu",
    close: "Fermer",
    postuler: "Postuler",
  },

  common: {
    language: "Langue",
    edition: "Édition",
    designer: "Designer",
    scroll: "Défiler",
    edition03: "Édition 03 · 2026",
  },

  home: {
    eyebrow: "R2JC · Rencontre de Jeunes Créateurs · Suisse",
    taglineLine1: "Une scène aux designers",
    taglineLine2pre: "qui méritent d'être",
    taglineZoom: "découverts",
    ctaEditions: "Voir les éditions",
    ctaDiscover: "Découvrir le collectif",

    histoire: {
      eyebrow: "Notre histoire",
      titlePre: "L'histoire de",
      titleAccent: "R2JC",
      p1: "Tout débute avec la volonté de créer des défilés qui transcendent la simple présentation de vêtements. Notre collectif a été formé pour développer le marché de la mode en Suisse. Nous estimons qu'il existe énormément de talents cachés qui méritent d'être valorisés et reconnus. C'est pourquoi nous avons l'ambition d'ouvrir des opportunités et de faire déboucher des carrières.",
      p2: "La mode dépasse largement le simple choix de vêtements. C'est une manière artistique de refléter notre vie, notre identité et le monde qui nous entoure. Ici, nous ne parlons pas de designers renommés ou de collections Haute couture, mais de passionnés qui s'expriment avec cœur et authenticité.",
    },

    presse: {
      titlePre: "Ils parlent de",
      titleAccent: "nous",
    },

    ed02: {
      eyebrow: "Édition 02 · 2024",
      headingPre: "La vidéo complète de la",
      headingAccent: "2ᵉ édition",
      headingPost: "est désormais disponible sur notre chaîne YouTube !",
      ctaYoutube: "Regarder sur YouTube →",
      ctaAll: "Toutes les éditions",
    },

    faq: {
      eyebrow: "Questions fréquentes",
      titlePre: "Pour mieux nous",
      titleAccent: "connaître",
      ctaAll: "Toutes les questions",
    },
  },

  footer: {
    rules: "Règles et Politiques",
    privacy: "Politique de confidentialité",
    terms: "Conditions générales de ventes",
    social: "Réseaux sociaux",
    contact: "Contact",
    rights: "© R2JC · Tous droits réservés",
    siteBy: "Site par",
  },

  sponsors: {
    eyebrow: "Sponsors",
    titlePre: "Ils nous font",
    titleAccent: "confiance",
    remerciementsEyebrow: "Remerciements",
    remerciementsP1:
      "Nous tenons à exprimer notre profonde gratitude à nos sponsors, qui jouent un rôle essentiel dans la réussite de R2JC, un collectif dédié à la promotion des designers suisses à travers des défilés à la fois innovants et uniques.",
    remerciementsP2:
      "R2JC, c'est bien plus qu'un collectif : c'est un espace où la créativité suisse s'exprime pleinement, où les talents locaux sont célébrés, et où chaque défilé devient une expérience singulière, mêlant audace, originalité et passion. Grâce à votre soutien, nous avons pu transformer cette vision en réalité en offrant une plateforme exceptionnelle aux créateurs pour repousser les limites de la mode et valoriser leur savoir-faire.",
    remerciementsP3:
      "Votre engagement à nos côtés dépasse largement le simple appui financier. Vous êtes des partenaires, des alliés partageant notre mission : encourager l'excellence, soutenir l'artisanat local et promouvoir l'innovation. Ensemble, nous redéfinissons les standards de la mode et contribuons à faire briller la scène suisse à l'échelle nationale et internationale.",
    remerciementsP4:
      "Nous sommes fiers de collaborer avec vous et profondément reconnaissants de la confiance que vous nous accordez. Ensemble, nous continuons à construire un avenir où chaque designer trouve sa place et où chaque défilé raconte une histoire unique.",
    rows: {
      principaux: "Partenaires principaux",
      locaux: "Partenaires locaux",
      culturels: "Soutiens culturels & institutionnels",
      regionaux: "Soutiens régionaux",
    },
    ctaEyebrow: "Devenir partenaire",
    ctaTitle:
      "Soutenir R2JC, c'est associer son nom à la prochaine génération créative suisse.",
  },

  editions: {
    eyebrow: "Toutes les éditions",
    titleAccent: "Editions",
    e02: {
      titlePre: "2ème édition de",
      titleAccent: "R2JC",
      intro:
        "Pour cette édition, nous avons choisi un espace bien plus grand, répondant à la demande croissante et permettant d'accueillir un public encore plus vaste. L'édition 2025 s'est démarquée par une diversité élargie, tant au niveau des créateurs que des collections présentées. Nous avons eu le plaisir de mettre en lumière une palette encore plus variée de talents. Redécouvrez dès maintenant les designers qui ont marqué cette édition !",
    },
    cardLabel: "Édition 02 · Designer",
    e01: {
      eyebrow: "Retour en arrière",
      titlePre: "Revenons sur notre",
      titleAccent: "1ère édition",
      coverLabel: "Édition 01 — 2023",
      caption:
        "La première rencontre — où tout a commencé. @sapmi et les autres pionniers ont posé les bases d'une scène à révéler.",
    },
  },

  contact: {
    eyebrow: "Contact",
    title: "Contactez-nous",
    intro:
      "Besoin d'aide ou d'informations supplémentaires ? Nous sommes là pour répondre à vos questions. N'hésitez pas à nous écrire en remplissant le formulaire ou en utilisant nos coordonnées ci-dessous. Nous vous répondrons dans les plus brefs délais.",
    labels: {
      address: "Adresse",
      email: "Courriel",
      phone: "Téléphone",
      follow: "Suivre",
    },
    form: {
      name: "Votre nom",
      email: "Votre adresse courriel",
      subject: "Objet",
      message: "Votre message",
      submit: "Envoyer →",
    },
  },

  faq: {
    eyebrow: "Questions fréquentes",
    title: "FAQ",
    subtitle: "Toutes les réponses à vos questions",
    ctaEyebrow: "Une autre question ?",
    items: [
      {
        q: "Qui sommes-nous ?",
        a: "R2JC, est un collectif qui vise à développer et promouvoir le marché de la mode en Suisse en mettant en avant des designers qui méritent d'être reconnus pour leur talents indéniables. Nos événements permettent également de rassembler les passionnés de mode autour d'une même vision.",
      },
      {
        q: "Que veut dire R2JC ?",
        a: "L'abréviation de notre collectif signifie « rencontre de jeunes créateurs ». Dans ce contexte, le terme « créateurs » ne se limite pas aux designers de mode qui présentent leurs tenues. Il englobe toute personne qui s'engage dans une forme de création artistique.",
      },
      {
        q: "Comment puis-je participer à vos événements ?",
        a: "Si vous désirez participer à notre événement, vous pouvez consulter nos offres de recrutement et y postuler si le délai est encore ouvert.",
      },
      {
        q: "Puis-je acheter des pièces uniques présenté par un designer ?",
        a: "Oui, il est sans doute possible d'acquérir des pièces présentées par un designer. Cependant, nous vous recommandons de contacter directement la personne concernée afin de discuter des possibilités et modalités d'achat. Vous trouverez toutes les informations relatives aux designers sous l'onglet « Éditions » de notre site internet.",
      },
      {
        q: "Comment puis-je rester à jour avec vos nouveautés ?",
        // The link to @r2jc.officiel is rendered by the component as a templated insert.
        a: "Suivez-nous sur Instagram {instagram}, inscrivez-vous à notre newsletter et consultez régulièrement notre site web pour les dernières mises à jour.",
      },
    ],
  },

  postuler: {
    eyebrow: "Édition 03 · Appel à candidatures",
    title: "Postuler",
    intro:
      "Pour la prochaine rencontre, nous cherchons seize créateurs. Trois questions, aucun PDF, aucun formulaire interminable. Si votre travail nous touche, nous vous écrivons sous dix jours.",
    status: {
      deadline: "Délai jusqu'au",
      daysLeft: "jours restants",
      lastDay: "Dernier jour",
      promise: "Réponse sous dix jours.",
    },
    closed: {
      title: "L'appel à candidatures pour l'Édition 03 est clos.",
      next: "La prochaine fenêtre ouvre au printemps 2026.",
    },
    sections: {
      about: "À propos de vous",
      practice: "Votre pratique",
      work: "Votre travail",
      vision: "Votre vision",
    },
    labels: {
      fullName: "Nom complet",
      email: "Adresse e-mail",
      phone: "Téléphone (optionnel)",
      link: "Site ou Instagram (optionnel)",
      discipline: "Discipline",
      q1: "Qui êtes-vous ?",
      q1Hint: "Cinq cents mots maximum.",
      q2: "Que voulez-vous montrer ?",
      q2Hint: "Décrivez la pièce, la collection ou la performance.",
      portfolio: "Lien vers votre portfolio",
      portfolioHint: "Site web, Instagram, Drive — peu importe.",
      q3: "Pourquoi maintenant ?",
      q3Hint: "Deux cents mots maximum.",
    },
    disciplines: {
      mode: "Mode",
      photography: "Photographie",
      performance: "Performance",
      artDirection: "Direction artistique",
      sound: "Son",
      other: "Autre",
    },
    submit: "Envoyer ma candidature →",
    success: {
      title: "Reçu.",
      body: "Votre candidature s'est ouverte dans votre client e-mail. Envoyez-la — nous vous écrivons sous dix jours.",
      again: "Envoyer une autre candidature",
    },
    bottom: {
      eyebrow: "Une question avant de postuler ?",
      line: "Écrivez-nous directement.",
    },
  },
};

export default fr;
