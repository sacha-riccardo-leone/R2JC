/**
 * Designers featured at R2JC.
 * Names + brand + bio + contact email are taken verbatim from r2jc.ch/editions/.
 * Portrait file paths follow the convention documented in
 * /public/media/editions/README.md.
 */

export type Designer = {
  slug: string;
  name: string;
  brand: string;
  bio: string;
  email?: string;
  portrait: string; // path under /public
  edition: "01" | "02";
};

export const DESIGNERS_EDITION_02: Designer[] = [
  {
    slug: "corinne-soalca",
    name: "Corinne Soalca",
    brand: "šamán",
    bio: "Lumea Tribe puise son essence dans la spiritualité, le chamanisme et la connexion avec la nature qui infusent chaque aspect de ses collections. Fabriqués de façon artisanale à partir de matériaux de seconde main, ses textiles et bijoux incarnent un savoir-faire authentique. La marque préserve l'héritage du passé tout en réinventant le présent avec des créations uniques et audacieuses.",
    email: "soalca.c@gmail.com",
    portrait: "/media/editions/corinne-soalca.jpg",
    edition: "02",
  },
  {
    slug: "tim-denervaud",
    name: "Tim Dénervaud",
    brand: "altitude",
    bio: "Ma marque incarne ma personnalité et reflète ma vision du monde. Mon objectif est de partager mon univers unique et ma manière singulière de percevoir la réalité. En quête constante de singularité et d'innovation, Denervaud est le fruit d'une passion profonde et d'un travail acharné, symbolisant une créativité audacieuse et sans compromis.",
    email: "tim.denervaud@icloud.com",
    portrait: "/media/editions/tim-denervaud.jpg",
    edition: "02",
  },
  {
    slug: "pauline-perrin",
    name: "Pauline Perrin",
    brand: "see me",
    bio: "Biche, c'est moi. Biche ce sont toutes les filles comme moi. Je suis Pauline et je suis totalement autodidacte. J'ai créé cette marque à l'instinct ; je l'ai d'abord rêvée, puis je l'ai osée. L'idée a germé il y a 3 ans et ne m'a plus quittée, mais le parcours est long et non sans épreuves. Mon but est de donner l'opportunité aux Biches comme moi de se sentir puissantes et confiantes dans leurs vêtements, tout en consommant mieux. Je souhaite également montrer qu'en partant de rien on peut arriver à quelque chose.",
    email: "perrinpauline00@gmail.com",
    portrait: "/media/editions/pauline-perrin.jpg",
    edition: "02",
  },
  {
    slug: "juan-asprilla-ortiz",
    name: "Juan Esteban Asprilla Ortiz",
    brand: "i love me",
    bio: "Oraw est une marque qui se veut de mettre en avant les corps dans une optique de confiance et non de séduction ni de sexualisation. Le but recherché c'est de pouvoir se sentir en confiance pour pouvoir porter le vêtement sans baisser la tête mais en marchant avec la tête haute. Donc en conclusion le vêtement permet de mettre en valeur le corps sans pour autant le cacher ou trop le dévoiler, un juste équilibre.",
    email: "oraw.official.creative@gmail.com",
    portrait: "/media/editions/juan-asprilla-ortiz.jpg",
    edition: "02",
  },
  {
    slug: "clara-rouge",
    name: "Clara Rouge",
    brand: "46°07'15.1\"N 7°10'07.7\"E",
    bio: "Clara Rouge a obtenu un Bachelor en design mode en 2023 à la HEAD Genève et ensuite fait un stage de 6 mois chez la designer et artisane Emma Bruschi. Elle travaille maintenant dans une ressourcerie textile genevoise, Histoire sans chute. Passionnée d'artisanat et des techniques de couture qui rendent magique le monde de la mode. Les gestes et les savoir-faire sont très importants dans son travail et ses valeurs.",
    email: "rougeclara25@gmail.com",
    portrait: "/media/editions/clara-rouge.jpg",
    edition: "02",
  },
  {
    slug: "cancellous-team",
    name: "Cancellous Team",
    brand: "premice",
    bio: "Cancellous Tissues, fondée en été 2024 par Oscar Schild, Esteban Droz et Mattias Koskinen, trois amis du canton de Neuchâtel passionnés de création, de mode et de design. Son nom évoque le tissu spongieux des os humains, une structure à la fois solide et légère qui inspire leurs créations. Ce parallèle se retrouve également dans la conception des textiles. L'univers de la marque s'inscrit dans une esthétique où le corps humain joue un rôle central, nourri par l'influence de ses origines, et dans une éthique qui mise au maximum sur l'écoresponsabilité.",
    portrait: "/media/editions/cancellous-team.jpg",
    edition: "02",
  },
  {
    slug: "loup",
    name: "LOUP",
    brand: "je rêve sans m'endormir",
    bio: "",
    portrait: "/media/editions/loup.jpg",
    edition: "02",
  },
  {
    slug: "byebapt",
    name: "Byebapt",
    brand: "enfant parfait",
    bio: "",
    portrait: "/media/editions/byebapt.jpg",
    edition: "02",
  },
  {
    slug: "katia-de-quattro",
    name: "Katia De Quattro",
    brand: "sea of deadlines",
    bio: "",
    portrait: "/media/editions/katia-de-quattro.jpg",
    edition: "02",
  },
  {
    slug: "raphael-kolly",
    name: "Raphaël Kolly",
    brand: "doux-leurs",
    bio: "",
    portrait: "/media/editions/raphael-kolly.jpg",
    edition: "02",
  },
  {
    slug: "zoe-perrinjaquet",
    name: "Zoé Perrinjaquet",
    brand: "reconstruction",
    bio: "",
    portrait: "/media/editions/zoe-perrinjaquet.jpg",
    edition: "02",
  },
  {
    slug: "julia-gauthier",
    name: "Julia Gauthier",
    brand: "renaissance",
    bio: "",
    portrait: "/media/editions/julia-gauthier.jpg",
    edition: "02",
  },
  {
    slug: "loric-bernard",
    name: "Loric Bernard",
    brand: "indicibilis",
    bio: "",
    portrait: "/media/editions/loric-bernard.jpg",
    edition: "02",
  },
  {
    slug: "alison-bovier",
    name: "Alison Bovier",
    brand: "ying yang",
    bio: "",
    portrait: "/media/editions/alison-bovier.jpg",
    edition: "02",
  },
  {
    slug: "tchango-shotine",
    name: "Tchango & Shotine",
    brand: "sp3ctrum vein$",
    bio: "",
    portrait: "/media/editions/tchango-shotine.jpg",
    edition: "02",
  },
  {
    slug: "bastien-fluckiger",
    name: "Bastien Flückiger",
    brand: "the daughters of eve",
    bio: "",
    portrait: "/media/editions/bastien-fluckiger.jpg",
    edition: "02",
  },
];
