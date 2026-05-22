/**
 * Designers featured at R2JC.
 * Names, brand and email are taken verbatim from r2jc.ch/editions/.
 * Bios are stored per-locale ({ fr, en, de, it }) so the editions page renders
 * the brand presentation in the visitor's chosen language.
 * Portrait and logo paths point to files under /public/media/designers/.
 *
 * For designers whose bio is not yet supplied, all four locales are empty strings —
 * the page just skips rendering the bio paragraph for them.
 */

import type { Locale } from "@/i18n/locales";

export type LocalizedBio = Record<Locale, string>;

const EMPTY_BIO: LocalizedBio = { fr: "", en: "", de: "", it: "" };

export type Designer = {
  slug: string;
  name: string;
  brand: string;
  bio: LocalizedBio;
  email?: string;
  /** Portrait of the designer, under /public */
  portrait: string;
  /** Optional object-position for the portrait crop (e.g. "top", "50% 20%"). Default: center. */
  portraitFocus?: string;
  /** Brand logo (optional), under /public */
  logo?: string;
  edition: "01" | "02";
};

export const DESIGNERS_EDITION_02: Designer[] = [
  {
    slug: "corinne-soalca",
    name: "Corinne Soalca",
    brand: "šamán",
    bio: {
      fr: "Lumea Tribe puise son essence dans la spiritualité, le chamanisme et la connexion avec la nature qui infusent chaque aspect de ses collections. Fabriqués de façon artisanale à partir de matériaux de seconde main, ses textiles et bijoux incarnent un savoir-faire authentique. La marque préserve l'héritage du passé tout en réinventant le présent avec des créations uniques et audacieuses.",
      en: "Lumea Tribe draws its essence from spirituality, shamanism, and the connection with nature that infuses every aspect of its collections. Handcrafted from second-hand materials, its textiles and jewelry embody authentic craftsmanship. The brand preserves the heritage of the past while reinventing the present with unique and bold creations.",
      de: "Lumea Tribe schöpft seine Essenz aus Spiritualität, Schamanismus und der Verbindung mit der Natur, die jeden Aspekt seiner Kollektionen durchdringt. Handwerklich aus gebrauchten Materialien gefertigt, verkörpern seine Textilien und Schmuckstücke ein authentisches Können. Die Marke bewahrt das Erbe der Vergangenheit und erfindet zugleich die Gegenwart mit einzigartigen und mutigen Kreationen neu.",
      it: "Lumea Tribe trae la sua essenza dalla spiritualità, dallo sciamanesimo e dalla connessione con la natura che permea ogni aspetto delle sue collezioni. Realizzati artigianalmente con materiali di seconda mano, i suoi tessili e gioielli incarnano un savoir-faire autentico. Il brand preserva l'eredità del passato reinventando al contempo il presente con creazioni uniche e audaci.",
    },
    email: "soalca.c@gmail.com",
    portrait: "/media/designers/corinne-soalca.jpg",
    logo: "/media/designers/lumeatribelogo.jpg",
    edition: "02",
  },
  {
    slug: "tim-denervaud",
    name: "Tim Dénervaud",
    brand: "altitude",
    bio: {
      fr: "Ma marque incarne ma personnalité et reflète ma vision du monde. Mon objectif est de partager mon univers unique et ma manière singulière de percevoir la réalité. En quête constante de singularité et d'innovation, Denervaud est le fruit d'une passion profonde et d'un travail acharné, symbolisant une créativité audacieuse et sans compromis.",
      en: "My brand embodies my personality and reflects my vision of the world. My goal is to share my unique universe and singular way of perceiving reality. In constant pursuit of singularity and innovation, Denervaud is the fruit of deep passion and relentless work, symbolizing a bold and uncompromising creativity.",
      de: "Meine Marke verkörpert meine Persönlichkeit und spiegelt meine Sicht auf die Welt. Mein Ziel ist es, meine einzigartige Welt und meine besondere Art, die Realität wahrzunehmen, zu teilen. Auf der ständigen Suche nach Eigenständigkeit und Innovation ist Denervaud das Ergebnis einer tiefen Leidenschaft und harter Arbeit — Symbol einer mutigen und kompromisslosen Kreativität.",
      it: "Il mio marchio incarna la mia personalità e riflette la mia visione del mondo. Il mio obiettivo è condividere il mio universo unico e il mio modo singolare di percepire la realtà. In costante ricerca di singolarità e innovazione, Denervaud è il frutto di una passione profonda e di un lavoro instancabile, simbolo di una creatività audace e senza compromessi.",
    },
    email: "tim.denervaud@icloud.com",
    portrait: "/media/designers/tim-denervaud.jpg",
    logo: "/media/designers/denervaudlogo.png",
    edition: "02",
  },
  {
    slug: "pauline-perrin",
    name: "Pauline Perrin",
    brand: "see me",
    bio: {
      fr: "Biche, c'est moi. Biche ce sont toutes les filles comme moi. Je suis Pauline et je suis totalement autodidacte. J'ai créé cette marque à l'instinct ; je l'ai d'abord rêvée, puis je l'ai osée. L'idée a germé il y a 3 ans et ne m'a plus quittée, mais le parcours est long et non sans épreuves. Mon but est de donner l'opportunité aux Biches comme moi de se sentir puissantes et confiantes dans leurs vêtements, tout en consommant mieux. Je souhaite également montrer qu'en partant de rien on peut arriver à quelque chose.",
      en: "Biche is me. Biche is every girl like me. I'm Pauline and I'm entirely self-taught. I built this brand on instinct — first I dreamed it, then I dared. The idea took root three years ago and has never left me, but the journey is long and not without its trials. My goal is to give Biches like me the chance to feel powerful and confident in their clothes, while consuming better. I also want to show that starting from nothing, you can build something.",
      de: "Biche, das bin ich. Biche, das sind alle Mädchen wie ich. Ich bin Pauline und vollständig Autodidaktin. Ich habe diese Marke aus dem Bauch heraus erschaffen — zuerst habe ich sie geträumt, dann habe ich sie gewagt. Die Idee ist vor drei Jahren entstanden und hat mich nicht mehr losgelassen, doch der Weg ist lang und nicht ohne Prüfungen. Mein Ziel ist es, Biches wie mir die Möglichkeit zu geben, sich in ihrer Kleidung stark und selbstbewusst zu fühlen und gleichzeitig bewusster zu konsumieren. Ich möchte auch zeigen, dass man aus dem Nichts etwas aufbauen kann.",
      it: "Biche sono io. Biche sono tutte le ragazze come me. Sono Pauline e sono completamente autodidatta. Ho creato questo marchio d'istinto: prima l'ho sognato, poi ho avuto il coraggio di farlo. L'idea è nata tre anni fa e non mi ha più abbandonata, ma il percorso è lungo e non privo di prove. Il mio obiettivo è offrire alle Biche come me l'opportunità di sentirsi potenti e sicure nei loro vestiti, consumando meglio. Voglio anche dimostrare che partendo da zero si può arrivare a qualcosa.",
    },
    email: "perrinpauline00@gmail.com",
    portrait: "/media/designers/pauline.jpg",
    portraitFocus: "top",
    logo: "/media/designers/bichelogo.png",
    edition: "02",
  },
  {
    slug: "juan-asprilla-ortiz",
    name: "Juan Esteban Asprilla Ortiz",
    brand: "i love me",
    bio: {
      fr: "Oraw est une marque qui se veut de mettre en avant les corps dans une optique de confiance et non de séduction ni de sexualisation. Le but recherché c'est de pouvoir se sentir en confiance pour pouvoir porter le vêtement sans baisser la tête mais en marchant avec la tête haute. Donc en conclusion le vêtement permet de mettre en valeur le corps sans pour autant le cacher ou trop le dévoiler, un juste équilibre.",
      en: "Oraw is a brand that aims to celebrate bodies through confidence — not seduction, not sexualization. The goal is to feel self-assured enough to wear the garment with your head held high. In short, the clothing showcases the body without hiding it or over-exposing it: a balanced middle ground.",
      de: "Oraw ist eine Marke, die Körper aus dem Blickwinkel des Selbstvertrauens in den Vordergrund stellt — nicht der Verführung oder der Sexualisierung. Ziel ist es, sich sicher genug zu fühlen, um das Kleidungsstück mit erhobenem Kopf zu tragen. Zusammengefasst: Die Kleidung bringt den Körper zur Geltung, ohne ihn zu verbergen oder zu sehr zu enthüllen — ein ausgewogenes Gleichgewicht.",
      it: "Oraw è un marchio che vuole valorizzare i corpi in un'ottica di fiducia e non di seduzione né di sessualizzazione. L'obiettivo è potersi sentire sicuri per indossare il capo senza abbassare lo sguardo, ma camminando a testa alta. In sintesi, il vestito mette in risalto il corpo senza nasconderlo né esporlo troppo: un giusto equilibrio.",
    },
    email: "oraw.official.creative@gmail.com",
    portrait: "/media/designers/juanEsteban.jpeg",
    logo: "/media/designers/orawlogo.png",
    edition: "02",
  },
  {
    slug: "clara-rouge",
    name: "Clara Rouge",
    brand: "46°07'15.1\"N 7°10'07.7\"E",
    bio: {
      fr: "Clara Rouge a obtenu un Bachelor en design mode en 2023 à la HEAD Genève et ensuite fait un stage de 6 mois chez la designer et artisane Emma Bruschi. Elle travaille maintenant dans une ressourcerie textile genevoise, Histoire sans chute. Passionnée d'artisanat et des techniques de couture qui rendent magique le monde de la mode. Les gestes et les savoir-faire sont très importants dans son travail et ses valeurs.",
      en: "Clara Rouge earned a Bachelor in fashion design in 2023 at HEAD Geneva, then completed a six-month internship with designer and artisan Emma Bruschi. She now works at Histoire sans chute, a Geneva textile resource center. Passionate about craftsmanship and the sewing techniques that make the world of fashion magical. Gestures and savoir-faire are central to her work and her values.",
      de: "Clara Rouge schloss 2023 ihren Bachelor in Modedesign an der HEAD Genève ab und absolvierte anschließend ein sechsmonatiges Praktikum bei der Designerin und Handwerkerin Emma Bruschi. Heute arbeitet sie bei Histoire sans chute, einer Genfer Textil-Recyclingstelle. Sie ist leidenschaftlich vom Handwerk und den Nähtechniken fasziniert, die die Welt der Mode magisch machen. Gesten und Know-how spielen in ihrer Arbeit und ihren Werten eine zentrale Rolle.",
      it: "Clara Rouge ha conseguito un Bachelor in design della moda nel 2023 presso la HEAD di Ginevra e ha poi svolto uno stage di sei mesi presso la designer e artigiana Emma Bruschi. Oggi lavora presso Histoire sans chute, un centro tessile di riuso ginevrino. Appassionata di artigianato e delle tecniche di sartoria che rendono magico il mondo della moda. I gesti e il savoir-faire sono molto importanti nel suo lavoro e nei suoi valori.",
    },
    email: "rougeclara25@gmail.com",
    portrait: "/media/designers/clararougeportrait.jpg",
    logo: "/media/designers/clararougelogo.png",
    edition: "02",
  },
  {
    slug: "cancellous-team",
    name: "Cancellous Team",
    brand: "premice",
    bio: {
      fr: "Cancellous Tissues, fondée en été 2024 par Oscar Schild, Esteban Droz et Mattias Koskinen, trois amis du canton de Neuchâtel passionnés de création, de mode et de design. Son nom évoque le tissu spongieux des os humains, une structure à la fois solide et légère qui inspire leurs créations. Ce parallèle se retrouve également dans la conception des textiles. L'univers de la marque s'inscrit dans une esthétique où le corps humain joue un rôle central, nourri par l'influence de ses origines, et dans une éthique qui mise au maximum sur l'écoresponsabilité.",
      en: "Cancellous Tissues was founded in summer 2024 by Oscar Schild, Esteban Droz and Mattias Koskinen — three friends from the canton of Neuchâtel passionate about creation, fashion and design. The name evokes the spongy tissue of human bones, a structure at once solid and light that inspires their creations. The same parallel runs through their textile design. The brand's universe is rooted in an aesthetic where the human body plays a central role, nourished by the influence of its origins, and in an ethos that pushes eco-responsibility to its limits.",
      de: "Cancellous Tissues wurde im Sommer 2024 von Oscar Schild, Esteban Droz und Mattias Koskinen gegründet — drei Freunden aus dem Kanton Neuenburg, die eine Leidenschaft für Kreation, Mode und Design teilen. Der Name verweist auf das schwammartige Gewebe menschlicher Knochen, eine Struktur, die zugleich stabil und leicht ist und ihre Kreationen inspiriert. Diese Parallele findet sich auch in der Gestaltung der Stoffe wieder. Die Welt der Marke ist in einer Ästhetik verankert, in der der menschliche Körper eine zentrale Rolle spielt — genährt vom Einfluss seiner Herkunft — und in einer Ethik, die kompromisslos auf Ökoverantwortung setzt.",
      it: "Cancellous Tissues è stata fondata nell'estate del 2024 da Oscar Schild, Esteban Droz e Mattias Koskinen, tre amici del canton Neuchâtel appassionati di creazione, moda e design. Il nome evoca il tessuto spugnoso delle ossa umane, una struttura insieme solida e leggera che ispira le loro creazioni. Questo parallelo si ritrova anche nella concezione dei tessuti. L'universo del marchio si inscrive in un'estetica in cui il corpo umano gioca un ruolo centrale, nutrito dall'influenza delle sue origini, e in un'etica che punta al massimo sulla responsabilità ecologica.",
    },
    portrait: "/media/designers/cancellousteam.png",
    logo: "/media/designers/cancellousteamlogo.png",
    edition: "02",
  },
  {
    slug: "loup",
    name: "LOUP",
    brand: "je rêve sans m'endormir",
    bio: EMPTY_BIO,
    portrait: "/media/designers/loup.jpg",
    logo: "/media/designers/straylogo-loup.jpg",
    edition: "02",
  },
  {
    slug: "byebapt",
    name: "Byebapt",
    brand: "enfant parfait",
    bio: EMPTY_BIO,
    portrait: "/media/designers/byebaptportrait.jpeg",
    logo: "/media/designers/byebaptlogo.jpeg",
    edition: "02",
  },
  {
    slug: "katia-de-quattro",
    name: "Katia De Quattro",
    brand: "sea of deadlines",
    bio: EMPTY_BIO,
    portrait: "/media/designers/katiadequattro.jpg",
    logo: "/media/designers/24klogo-katia.jpeg",
    edition: "02",
  },
  {
    slug: "raphael-kolly",
    name: "Raphaël Kolly",
    brand: "doux-leurs",
    bio: EMPTY_BIO,
    portrait: "/media/designers/raphaelkolly.jpg",
    logo: "/media/designers/plutonicostudios-raphael.png",
    edition: "02",
  },
  {
    slug: "zoe-perrinjaquet",
    name: "Zoé Perrinjaquet",
    brand: "reconstruction",
    bio: EMPTY_BIO,
    portrait: "/media/designers/zoéperrinjaquet.jpg",
    logo: "/media/designers/zoélogo.jpg",
    edition: "02",
  },
  {
    slug: "julia-gauthier",
    name: "Julia Gauthier",
    brand: "renaissance",
    bio: EMPTY_BIO,
    portrait: "/media/designers/juliagauthierportrait.jpg",
    logo: "/media/designers/juliaguathierlogo.png",
    edition: "02",
  },
  {
    slug: "loric-bernard",
    name: "Loric Bernard",
    brand: "indicibilis",
    bio: EMPTY_BIO,
    portrait: "/media/designers/LoricBernardPortrait.png",
    logo: "/media/designers/loricbernardLogo.png",
    edition: "02",
  },
  {
    slug: "alison-bovier",
    name: "Alison Bovier",
    brand: "ying yang",
    bio: EMPTY_BIO,
    portrait: "/media/designers/Alsionportrait.jpeg",
    logo: "/media/designers/Alybrend-Alisonlogo.jpeg",
    edition: "02",
  },
  {
    slug: "tchango-shotine",
    name: "Tchango & Shotine",
    brand: "sp3ctrum vein$",
    bio: EMPTY_BIO,
    portrait: "/media/designers/tchango%20etshotineportrait.jpg",
    logo: "/media/designers/tchangoetshotinelogo.png",
    edition: "02",
  },
  {
    slug: "bastien-fluckiger",
    name: "Bastien Flückiger",
    brand: "the daughters of eve",
    bio: EMPTY_BIO,
    portrait: "/media/designers/bastienfluckigerportrait.jpeg",
    portraitFocus: "top",
    logo: "/media/designers/rosemary-bastienlogo.png",
    edition: "02",
  },
];
