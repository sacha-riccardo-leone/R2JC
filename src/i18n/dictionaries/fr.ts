/**
 * French — canonical source of truth.
 * All other languages translate from this dictionary.
 */

export type Dictionary = {
  nav: { home: string; sponsors: string; editions: string; contact: string; faq: string; menu: string; close: string; postuler: string; presse: string };
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
    expand: string;
    e02: { titlePre: string; titleAccent: string; intro: string; bannerEyebrow: string };
    cardLabel: string;
    e01: { eyebrow: string; titlePre: string; titleAccent: string; coverLabel: string; caption: string; bannerEyebrow: string };
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
  ed03: {
    eyebrow: string;
    title: string;
    dateLine: string;
    venue: string;
    countdown: { label: string; days: string; today: string; past: string };
    addToCalendar: string;
    about: { eyebrow: string; title: string; body: string };
    lineup: { eyebrow: string; title: string; intro: string; tba: string };
    venueSection: { eyebrow: string; title: string; body: string; sbb: string };
    rsvp: { eyebrow: string; title: string; body: string; cta: string };
    partners: { eyebrow: string; title: string; body: string; link: string };
    bottom: {
      apply: { label: string; cta: string };
      press: { label: string; cta: string };
      sponsor: { label: string; cta: string };
    };
  };
  presse: {
    eyebrow: string;
    title: string;
    intro: string;
    statements: {
      eyebrow: string;
      title: string;
      intro: string;
      label25: string;
      label50: string;
      label150: string;
      s25: string;
      s50: string;
      s150: string;
      copy: string;
      copied: string;
    };
    assets: {
      eyebrow: string;
      title: string;
      intro: string;
      logo: string;
      download: string;
    };
    releases: {
      eyebrow: string;
      title: string;
      soon: string;
      download: string;
      edition03: string;
      edition02: string;
      edition01: string;
    };
    accreditation: {
      eyebrow: string;
      title: string;
      intro: string;
      labels: { name: string; outlet: string; role: string; email: string; message: string };
      submit: string;
      success: { title: string; body: string; again: string };
    };
    coverage: { eyebrow: string; title: string };
    contact: { eyebrow: string; line: string };
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
    presse: "Presse",
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
    expand: "Voir",
    e02: {
      titlePre: "2ème édition de",
      titleAccent: "R2JC",
      bannerEyebrow: "Édition 02 · 2024",
      intro:
        "Pour cette édition, nous avons choisi un espace bien plus grand, répondant à la demande croissante et permettant d'accueillir un public encore plus vaste. L'édition 2025 s'est démarquée par une diversité élargie, tant au niveau des créateurs que des collections présentées. Nous avons eu le plaisir de mettre en lumière une palette encore plus variée de talents. Redécouvrez dès maintenant les designers qui ont marqué cette édition !",
    },
    cardLabel: "Édition 02 · Designer",
    e01: {
      eyebrow: "Retour en arrière",
      bannerEyebrow: "Édition 01 · 2023",
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

  ed03: {
    eyebrow: "Prochaine édition · Suisse · 12.09.2026",
    title: "Édition 03",
    dateLine: "12 septembre 2026",
    venue: "Lieu à venir",
    countdown: {
      label: "Avant l'ouverture",
      days: "jours",
      today: "Aujourd'hui",
      past: "L'édition a eu lieu.",
    },
    addToCalendar: "Ajouter au calendrier",
    about: {
      eyebrow: "À venir",
      title: "Seize créateurs. Trois disciplines. Un seuil.",
      body: "Pour sa troisième rencontre, R2JC réunit seize créateurs émergents le 12 septembre 2026. Mode, photographie, performance, son, direction artistique. Un lieu choisi pour son silence et son écoute.",
    },
    lineup: {
      eyebrow: "Les créateurs",
      title: "Lineup",
      intro:
        "Les seize créateurs seront annoncés progressivement à partir du printemps 2026. Suivez @r2jc.officiel pour ne rien manquer.",
      tba: "À venir",
    },
    venueSection: {
      eyebrow: "Le lieu",
      title: "À venir",
      body: "Le lieu de l'Édition 03 sera annoncé prochainement. Suivez @r2jc.officiel pour être les premiers informés — l'adresse exacte sera communiquée aux participants peu avant l'événement.",
      sbb: "Voir l'itinéraire sur CFF",
    },
    rsvp: {
      eyebrow: "Réservation",
      title: "Soirée d'ouverture",
      body: "L'entrée à la soirée du 12 septembre se fait sur réservation. Les places sont limitées.",
      cta: "Réserver une place",
    },
    partners: {
      eyebrow: "Partenaires",
      title: "Avec le soutien de",
      body: "L'Édition 03 est rendue possible grâce à nos partenaires institutionnels, culturels et locaux.",
      link: "Voir tous les sponsors →",
    },
    bottom: {
      apply: { label: "Designers", cta: "Postuler à l'édition" },
      press: { label: "Presse", cta: "Demander une accréditation" },
      sponsor: { label: "Partenaires", cta: "Devenir partenaire" },
    },
  },

  presse: {
    eyebrow: "Presse & médias",
    title: "Presse",
    intro:
      "Tout ce dont les journalistes ont besoin pour parler de R2JC : présentations prêtes à l'emploi, identité visuelle, communiqués et formulaire d'accréditation pour assister aux éditions.",
    statements: {
      eyebrow: "Présentations",
      title: "Trois longueurs, prêtes à copier",
      intro:
        "Choisissez la version qui correspond à votre format. Cliquez pour copier.",
      label25: "Courte — environ 25 mots",
      label50: "Moyenne — environ 50 mots",
      label150: "Longue — environ 150 mots",
      s25: "R2JC — Rencontre de Jeunes Créateurs — révèle deux fois par an seize créateurs émergents en Suisse. Mode, photographie, performance, son. Édition 03 : 12 septembre 2026.",
      s50: "R2JC est un collectif suisse qui développe la scène mode et arts visuels du pays en mettant en lumière, deux fois par an, seize créateurs émergents. Chaque rencontre transcende le simple défilé : c'est un seuil où des talents cachés deviennent publics, dans un lieu choisi pour son silence et son écoute.",
      s150: "Fondé en 2023 et basé à Saint-Imier, R2JC — Rencontre de Jeunes Créateurs — est un collectif suisse qui développe la scène mode et arts visuels du pays. Deux fois par an, l'organisation rassemble seize créateurs émergents dans des disciplines variées — mode, photographie, performance, son, direction artistique — pour une rencontre qui transcende le simple défilé. R2JC ne s'intéresse pas aux designers consacrés ou aux maisons établies. Le collectif cherche les talents cachés : ceux qui s'expriment avec cœur et authenticité, qui méritent d'être valorisés et reconnus, et dont les premières opportunités peuvent déboucher sur de vraies carrières. Soutenu par une vingtaine de partenaires institutionnels, culturels et locaux, R2JC prépare son Édition 03, prévue en Suisse le 12 septembre 2026.",
      copy: "Copier",
      copied: "Copié",
    },
    assets: {
      eyebrow: "Identité visuelle",
      title: "Logo & fichiers officiels",
      intro:
        "Téléchargez le logo R2JC officiel pour vos publications, encarts ou articles.",
      logo: "Logo R2JC",
      download: "Télécharger",
    },
    releases: {
      eyebrow: "Communiqués de presse",
      title: "Téléchargements",
      soon: "À venir",
      download: "Télécharger PDF",
      edition03: "Édition 03 — 12 septembre 2026",
      edition02: "Édition 02 — Bilan 2024",
      edition01: "Édition 01 — Lancement 2023",
    },
    accreditation: {
      eyebrow: "Accréditation presse",
      title: "Demande d'accès",
      intro:
        "Pour assister à la prochaine édition, interviewer un créateur ou demander des visuels haute définition.",
      labels: {
        name: "Votre nom",
        outlet: "Média / publication",
        role: "Fonction",
        email: "Adresse e-mail",
        message: "Votre demande",
      },
      submit: "Envoyer la demande →",
      success: {
        title: "Reçu.",
        body: "Votre demande s'est ouverte dans votre client e-mail. Envoyez-la — nous vous répondons sous cinq jours.",
        again: "Envoyer une autre demande",
      },
    },
    coverage: {
      eyebrow: "Ils parlent de nous",
      title: "Couverture médiatique",
    },
    contact: {
      eyebrow: "Contact presse direct",
      line: "Pour toute autre question, écrivez-nous.",
    },
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
