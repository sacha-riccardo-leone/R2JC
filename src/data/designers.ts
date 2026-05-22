/**
 * Designers featured at R2JC.
 * Names, brand and email are taken verbatim from r2jc.ch/editions/.
 * Bios are stored per-locale ({ fr, en, de, it }) so the editions page renders
 * the brand presentation in the visitor's chosen language.
 * Portrait and logo paths point to files under /public/media/designers/.
 *
 * For a future designer whose bio is not yet supplied, set all four locales
 * to empty strings — the editions page just skips rendering the bio paragraph
 * when the bio for the current locale is empty.
 */

import type { Locale } from "@/i18n/locales";

export type LocalizedBio = Record<Locale, string>;

export type Designer = {
  slug: string;
  name: string;
  brand: string;
  bio: LocalizedBio;
  email?: string;
  /** Instagram handle without the leading @ (e.g. "bicheparis") */
  instagram?: string;
  /** Full website URL including protocol (e.g. "https://www.denervaud.co") */
  website?: string;
  /** Portrait of the designer, under /public */
  portrait: string;
  /** Optional object-position for the portrait crop (e.g. "top", "50% 20%"). Default: center. */
  portraitFocus?: string;
  /** Brand logo (optional), under /public */
  logo?: string;
  /**
   * Runway / show looks for this designer. Filenames only — the editions page
   * prefixes them with /media/editions-archive/. Order = presentation order.
   * Derived from r2jc.ch/editions/ HTML structure (no per-file renaming needed).
   */
  looks: string[];
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
    instagram: "lumeatribe_",
    portrait: "/media/designers/corinne-soalca.jpg",
    logo: "/media/designers/lumeatribelogo.jpg",
    looks: ["IMG_2383.jpeg", "IMG_2259.jpeg", "IMG_2171.jpeg", "IMG_2233.jpeg", "IMG_2225.jpeg", "IMG_2192.jpeg"],
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
    instagram: "denervaud.co",
    website: "https://www.denervaud.co",
    portrait: "/media/designers/tim-denervaud.jpg",
    logo: "/media/designers/denervaudlogo.png",
    looks: ["IMG_2102.jpeg", "IMG_2091.jpeg", "IMG_1941.jpeg", "IMG_1928.jpeg", "IMG_2015.jpeg", "IMG_2133.jpeg"],
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
    instagram: "bicheparis",
    portrait: "/media/designers/pauline.jpg",
    portraitFocus: "top",
    logo: "/media/designers/bichelogo.png",
    looks: ["IMG_2468.jpeg", "IMG_2401.jpeg", "IMG_2411.jpeg", "IMG_2392.jpeg", "IMG_2491.jpeg", "IMG_2459.jpeg"],
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
    instagram: "oraw_studio",
    portrait: "/media/designers/juanEsteban.jpeg",
    logo: "/media/designers/orawlogo.png",
    looks: ["IMG_2284.jpeg", "IMG_2477.jpeg", "IMG_2332.jpeg", "IMG_2342.jpeg", "IMG_1968.jpeg", "IMG_2294.jpeg"],
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
    instagram: "clarajorouge",
    portrait: "/media/designers/clararougeportrait.jpg",
    logo: "/media/designers/clararougelogo.png",
    looks: ["IMG_1728.jpeg", "IMG_1688.jpeg", "IMG_1801.jpeg", "IMG_1695.jpeg", "IMG_1752.jpeg", "IMG_1744.jpeg"],
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
    email: "cancelloustissues@gmail.com",
    instagram: "cancelloustissues",
    portrait: "/media/designers/cancellousteam.png",
    logo: "/media/designers/cancellousteamlogo.png",
    looks: ["IMG_1592.jpeg", "IMG_1671.jpeg", "IMG_1712.jpeg", "IMG_1600-2.jpeg", "IMG_1680.jpeg", "IMG_1720.jpeg"],
    edition: "02",
  },
  {
    slug: "loup",
    name: "LOUP",
    brand: "je rêve sans m'endormir",
    bio: {
      fr: "Stray est une entité créative qui incarne l'esprit d'exploration et une évolution constante. Chaque pièce créée est une aventure qui se transforme au fil du temps, tout comme son créateur. Bienvenue dans Stray, un monde où chaque vêtement est en constante mutation.",
      en: "Stray is a creative entity embodying the spirit of exploration and constant evolution. Each piece is an adventure that transforms over time, just like its creator. Welcome to Stray — a world where every garment is in constant mutation.",
      de: "Stray ist eine kreative Entität, die den Geist der Erforschung und der ständigen Weiterentwicklung verkörpert. Jedes Stück ist ein Abenteuer, das sich mit der Zeit wandelt, ebenso wie sein Schöpfer. Willkommen bei Stray — einer Welt, in der jedes Kleidungsstück in ständiger Veränderung ist.",
      it: "Stray è un'entità creativa che incarna lo spirito di esplorazione e di evoluzione costante. Ogni pezzo è un'avventura che si trasforma nel tempo, proprio come il suo creatore. Benvenuti in Stray — un mondo in cui ogni capo è in continua mutazione.",
    },
    email: "louise.michel@clearcode.ch",
    instagram: "stray_officiel",
    portrait: "/media/designers/loup.jpg",
    logo: "/media/designers/straylogo-loup.jpg",
    looks: ["IMG_2115.jpeg", "IMG_1991.jpeg", "IMG_2209.jpeg", "IMG_2216.jpeg"],
    edition: "02",
  },
  {
    slug: "byebapt",
    name: "Byebapt",
    brand: "enfant parfait",
    bio: {
      fr: "Créateur de vêtements et artiste musical, il explore les multiples univers contrastés de la couleur blanche. Humain ultrasensible et passionné, il transmet des émotions profondément authentiques et introspectives à travers son art. Son travail reflète une vision de la vie, à la fois tristement réaliste et porteuse d'espoir, tout en laissant une large place à l'interprétation du public.",
      en: "Clothing designer and musical artist, he explores the many contrasting worlds of the color white. An ultra-sensitive and passionate human, he conveys deeply authentic and introspective emotions through his art. His work reflects a vision of life that is both sadly realistic and full of hope, while leaving wide room for the audience's interpretation.",
      de: "Modedesigner und Musiker, erforscht er die vielfältigen, gegensätzlichen Welten der Farbe Weiß. Als ultrasensibler und leidenschaftlicher Mensch vermittelt er durch seine Kunst zutiefst authentische und introspektive Emotionen. Seine Arbeit spiegelt eine Sicht auf das Leben wider, die zugleich traurig realistisch und hoffnungsvoll ist und der Interpretation des Publikums viel Raum lässt.",
      it: "Stilista e artista musicale, esplora i molteplici universi contrastanti del colore bianco. Essere umano ultrasensibile e appassionato, trasmette attraverso la sua arte emozioni profondamente autentiche e introspettive. Il suo lavoro riflette una visione della vita al tempo stesso tristemente realistica e carica di speranza, lasciando ampio spazio all'interpretazione del pubblico.",
    },
    email: "byebapt@gmail.com",
    instagram: "byebapt",
    portrait: "/media/designers/byebaptportrait.jpeg",
    logo: "/media/designers/byebaptlogo.jpeg",
    looks: ["IMG_1623-2.jpeg", "IMG_1769-1.jpeg", "IMG_1793.jpeg", "IMG_1784.jpeg", "IMG_1761.jpeg", "IMG_1776.jpeg"],
    edition: "02",
  },
  {
    slug: "katia-de-quattro",
    name: "Katia De Quattro",
    brand: "sea of deadlines",
    bio: {
      fr: "Créée en 2024, 24k se définit par une esthétique avant-gardiste où la déconstruction et les finitions brutes s'imposent comme une signature. Loin des conventions, chaque pièce incarne un équilibre subtil entre sophistication et caractère affirmé. Actuellement centrée sur les accessoires, la marque s'apprête à élargir son univers avec des collections complètes, intégrant vêtements et silhouettes inédites.",
      en: "Founded in 2024, 24k is defined by an avant-garde aesthetic where deconstruction and raw finishes stand as its signature. Far from convention, each piece embodies a subtle balance between sophistication and bold character. Currently focused on accessories, the brand is preparing to expand its universe with complete collections including garments and entirely new silhouettes.",
      de: "Im Jahr 2024 gegründet, definiert sich 24k durch eine avantgardistische Ästhetik, in der Dekonstruktion und rohe Verarbeitung zur Signatur werden. Fernab der Konventionen verkörpert jedes Stück ein feines Gleichgewicht zwischen Raffinesse und ausgeprägtem Charakter. Derzeit auf Accessoires konzentriert, schickt sich die Marke an, ihr Universum mit vollständigen Kollektionen aus Kleidung und neuen Silhouetten zu erweitern.",
      it: "Fondato nel 2024, 24k si definisce attraverso un'estetica avanguardista in cui la decostruzione e le finiture grezze si impongono come firma. Lontano dalle convenzioni, ogni pezzo incarna un equilibrio sottile tra sofisticazione e carattere deciso. Attualmente focalizzato sugli accessori, il marchio si prepara ad ampliare il proprio universo con collezioni complete che integreranno abiti e silhouette inedite.",
    },
    email: "katia.dequattro@gmail.com",
    instagram: "2____4____k",
    portrait: "/media/designers/katiadequattro.jpg",
    logo: "/media/designers/24klogo-katia.jpeg",
    looks: ["IMG_2251.jpeg", "IMG_2277.jpeg", "IMG_2269.jpeg", "IMG_2322.jpeg", "IMG_2450.jpeg", "IMG_2310.jpeg"],
    edition: "02",
  },
  {
    slug: "raphael-kolly",
    name: "Raphaël Kolly",
    brand: "doux-leurs",
    bio: {
      fr: "Plutonico studios est une marque suisse proposant des vêtements streetwear flirtant avec un univers futuriste et apocalyptique. Au travers de ses collections, la marque aborde des sujets tabous ou peu représentés afin de les mettre en lumière, les dénoncer ou les sublimer. Grâce au travail de coupes et de matières créatives le spectateur peut s'immiscer au cœur même des différentes thématiques.",
      en: "Plutonico studios is a Swiss brand offering streetwear that flirts with a futuristic, apocalyptic universe. Through its collections, the brand tackles taboo or under-represented subjects in order to bring them to light, expose them or sublimate them. Through inventive cuts and materials, the viewer is drawn into the very heart of each theme.",
      de: "Plutonico Studios ist eine Schweizer Marke, die Streetwear anbietet, die mit einem futuristischen, apokalyptischen Universum kokettiert. Durch ihre Kollektionen greift die Marke tabuisierte oder wenig repräsentierte Themen auf, um sie ans Licht zu bringen, anzuprangern oder zu sublimieren. Dank kreativer Schnitte und Materialien kann das Publikum ins Innere der verschiedenen Themen eintauchen.",
      it: "Plutonico Studios è un marchio svizzero che propone capi streetwear che flirtano con un universo futuristico e apocalittico. Attraverso le sue collezioni, il marchio affronta temi tabù o poco rappresentati per metterli in luce, denunciarli o sublimarli. Grazie al lavoro sui tagli e sui materiali creativi, lo spettatore può immergersi nel cuore stesso delle diverse tematiche.",
    },
    email: "raphaelkolly@icloud.com",
    instagram: "plutonico_studio",
    portrait: "/media/designers/raphaelkolly.jpg",
    logo: "/media/designers/plutonicostudios-raphael.png",
    looks: ["IMG_1862.jpeg", "IMG_1903.jpeg", "IMG_1893.jpeg", "IMG_1873.jpeg", "IMG_1851.jpeg", "IMG_1883.jpeg"],
    edition: "02",
  },
  {
    slug: "zoe-perrinjaquet",
    name: "Zoé Perrinjaquet",
    brand: "reconstruction",
    bio: {
      fr: "Ma marque est basée sur mes valeurs, l'écologie, la transparence et l'inclusivité ! J'essaie au mieux de les transmettre au travers de mes créations en proposant des matériaux recyclés mais durable pour tous et toutes, en tentant au mieux de mettre le corps en valeur. Très inspiré par la mode japonaise, mon style est un mélange de streetwear et d'élégance.",
      en: "My brand is built on my values — ecology, transparency and inclusivity. I do my best to convey them through my creations by offering recycled yet durable materials for everyone, while trying to highlight the body. Heavily inspired by Japanese fashion, my style is a blend of streetwear and elegance.",
      de: "Meine Marke basiert auf meinen Werten — Ökologie, Transparenz und Inklusion. Ich versuche so gut wie möglich, sie durch meine Kreationen weiterzugeben, indem ich recycelte und zugleich langlebige Materialien für alle anbiete und gleichzeitig den Körper zur Geltung bringe. Stark inspiriert von der japanischen Mode ist mein Stil eine Mischung aus Streetwear und Eleganz.",
      it: "Il mio marchio si basa sui miei valori — ecologia, trasparenza e inclusività. Cerco di trasmetterli al meglio attraverso le mie creazioni, proponendo materiali riciclati ma durevoli per tutti e tutte, e provando a valorizzare il corpo. Fortemente ispirato dalla moda giapponese, il mio stile è una fusione tra streetwear ed eleganza.",
    },
    email: "zoeperrinjaquet@gmail.com",
    instagram: "venusz.e",
    portrait: "/media/designers/zoéperrinjaquet.jpg",
    logo: "/media/designers/zoélogo.jpg",
    looks: ["IMG_1703.jpeg", "IMG_1655.jpeg", "IMG_1638.jpeg", "IMG_1840.jpeg", "IMG_1664.jpeg", "IMG_1646.jpeg"],
    edition: "02",
  },
  {
    slug: "julia-gauthier",
    name: "Julia Gauthier",
    brand: "renaissance",
    bio: {
      fr: "À travers mes créations, je cherche à exprimer ce qui ne se dit pas, mais qui se ressent profondément. Je vise à capturer les émotions brutes, sincères, celles qui bouleversent, apaisent ou troublent. Chaque pièce est une invitation à se laisser aller, à ressentir sans filtre et à se laisser parler. Mon univers est un mélange d'instinct et de sensibilité, où chaque détail raconte une histoire, éveille une mémoire ou suscite une émotion. Plus qu'un simple regard, je veux offrir une expérience, une connexion entre mon univers et ceux qui le découvrent.",
      en: "Through my creations, I seek to express what cannot be said but is deeply felt. I aim to capture raw, sincere emotions — the ones that move, soothe or disturb. Each piece is an invitation to let go, to feel without filter and to let yourself speak. My universe is a mix of instinct and sensitivity, where every detail tells a story, awakens a memory or stirs an emotion. More than a simple look, I want to offer an experience — a connection between my world and those who discover it.",
      de: "Mit meinen Kreationen versuche ich auszudrücken, was nicht ausgesprochen, aber zutiefst empfunden wird. Ich möchte rohe, aufrichtige Emotionen einfangen — jene, die erschüttern, beruhigen oder verstören. Jedes Stück ist eine Einladung, sich gehen zu lassen, ungefiltert zu fühlen und sich selbst sprechen zu lassen. Mein Universum ist eine Mischung aus Instinkt und Sensibilität, in der jedes Detail eine Geschichte erzählt, eine Erinnerung weckt oder eine Emotion auslöst. Mehr als nur ein Blick möchte ich ein Erlebnis bieten — eine Verbindung zwischen meiner Welt und jenen, die sie entdecken.",
      it: "Attraverso le mie creazioni cerco di esprimere ciò che non si dice, ma si sente profondamente. Voglio catturare emozioni grezze e sincere — quelle che sconvolgono, rassicurano o turbano. Ogni pezzo è un invito a lasciarsi andare, a sentire senza filtri e a lasciarsi raccontare. Il mio universo è una fusione di istinto e sensibilità, dove ogni dettaglio racconta una storia, risveglia un ricordo o suscita un'emozione. Più di un semplice sguardo, voglio offrire un'esperienza — una connessione tra il mio universo e chi lo scopre.",
    },
    email: "gauthier.julia@hotmail.com",
    instagram: "juliagauthi3r",
    portrait: "/media/designers/juliagauthierportrait.jpg",
    logo: "/media/designers/juliaguathierlogo.png",
    looks: ["IMG_1952.jpeg", "IMG_2353.jpeg", "IMG_2201.jpeg", "IMG_2420.jpeg", "IMG_2001.jpeg", "IMG_2366.jpeg"],
    edition: "02",
  },
  {
    slug: "loric-bernard",
    name: "Loric Bernard",
    brand: "indicibilis",
    bio: {
      fr: "Parfois, l'expression de soi va au delà des mots. Elle transcende la manière de s'exprimer : là où certaines choses sont indicibles, mes créations me permettent de l'exprimer.",
      en: "Sometimes, expressing oneself goes beyond words. It transcends the way we speak: where some things are unspeakable, my creations let me express them.",
      de: "Manchmal geht der Selbstausdruck über Worte hinaus. Er übersteigt die Art zu sprechen: wo manche Dinge unaussprechlich sind, erlauben mir meine Kreationen, sie auszudrücken.",
      it: "A volte l'espressione di sé va oltre le parole. Trascende il modo di esprimersi: là dove certe cose sono indicibili, le mie creazioni mi permettono di dirle.",
    },
    email: "loric.bernard@gmail.com",
    portrait: "/media/designers/LoricBernardPortrait.png",
    logo: "/media/designers/loricbernardLogo.png",
    looks: ["IMG_1736.jpeg", "IMG_1809.jpeg", "IMG_2374.jpeg", "IMG_1833.jpeg", "IMG_1824.jpeg", "IMG_1817.jpeg"],
    edition: "02",
  },
  {
    slug: "alison-bovier",
    name: "Alison Bovier",
    brand: "ying yang",
    bio: {
      fr: "Je suis une femme très joyeuse, forte et toujours prête à relever des défis. Étudiante en mode, je sais que réussir demande des sacrifices, mais les efforts finissent toujours par être récompensés, et cette réalité me pousse à persévérer. J'adore jouer avec les opposés en mêlant pièces oversize et éléments élégants pour créer une harmonie inattendue. Ma marque révélera la beauté des contrastes, l'équilibre entre audace et raffinement, racontant une histoire de force et de délicatesse.",
      en: "I am a very joyful, strong woman, always ready to take on a challenge. As a fashion student, I know that success demands sacrifices, but effort is always eventually rewarded — and that reality is what keeps me going. I love playing with opposites, mixing oversized pieces with elegant elements to create unexpected harmony. My brand will reveal the beauty of contrasts, the balance between boldness and refinement, telling a story of strength and delicacy.",
      de: "Ich bin eine sehr fröhliche, starke Frau, die immer bereit ist, sich Herausforderungen zu stellen. Als Modestudentin weiß ich, dass Erfolg Opfer verlangt, aber Anstrengung wird am Ende immer belohnt — und genau diese Wahrheit treibt mich an. Ich liebe es, mit Gegensätzen zu spielen und Oversize-Stücke mit eleganten Elementen zu kombinieren, um eine unerwartete Harmonie zu schaffen. Meine Marke wird die Schönheit der Kontraste enthüllen, das Gleichgewicht zwischen Mut und Raffinesse, und eine Geschichte von Stärke und Zartheit erzählen.",
      it: "Sono una donna molto gioiosa, forte e sempre pronta a raccogliere sfide. Studentessa di moda, so che riuscire richiede sacrifici, ma gli sforzi finiscono sempre per essere ricompensati — ed è questa realtà che mi spinge a perseverare. Adoro giocare con gli opposti, mescolando pezzi oversize ed elementi eleganti per creare un'armonia inattesa. Il mio marchio rivelerà la bellezza dei contrasti, l'equilibrio tra audacia e raffinatezza, raccontando una storia di forza e delicatezza.",
    },
    email: "bovier.brenda@hotmail.com",
    instagram: "alybrend",
    portrait: "/media/designers/Alsionportrait.jpeg",
    logo: "/media/designers/Alybrend-Alisonlogo.jpeg",
    looks: ["IMG_2152.jpeg", "IMG_2160.jpeg", "IMG_2430.jpeg", "IMG_2439.jpeg", "IMG_2080.jpeg", "IMG_2067.jpeg"],
    edition: "02",
  },
  {
    slug: "tchango-shotine",
    name: "Tchango & Shotine",
    brand: "sp3ctrum vein$",
    bio: {
      fr: "Nous remettons en question les normes sociales et célébrons l'authenticité individuelle à travers notre nouvelle collection, plongée dans un univers post-apocalyptique. Alliant des esthétiques gothiques et nuu tribal, les pièces invitent à retrouver notre véritable nature.",
      en: "We challenge social norms and celebrate individual authenticity through our new collection, set in a post-apocalyptic universe. Combining gothic and nuu-tribal aesthetics, the pieces invite us to reconnect with our true nature.",
      de: "Wir stellen gesellschaftliche Normen in Frage und feiern die individuelle Authentizität mit unserer neuen Kollektion, die in einer postapokalyptischen Welt angesiedelt ist. Indem sie gotische und nuu-tribale Ästhetik verbinden, laden die Stücke dazu ein, zu unserer wahren Natur zurückzufinden.",
      it: "Mettiamo in discussione le norme sociali e celebriamo l'autenticità individuale attraverso la nostra nuova collezione, immersa in un universo post-apocalittico. Unendo estetiche gotiche e nuu-tribali, i pezzi invitano a ritrovare la nostra vera natura.",
    },
    email: "bippysnc@gmail.com",
    instagram: "bippy.bippy",
    portrait: "/media/designers/tchango%20etshotineportrait.jpg",
    logo: "/media/designers/tchangoetshotinelogo.png",
    looks: ["IMG_2182.jpeg", "IMG_2302.jpeg", "IMG_2243.jpeg", "IMG_1916.jpeg"],
    edition: "02",
  },
  {
    slug: "bastien-fluckiger",
    name: "Bastien Flückiger",
    brand: "the daughters of eve",
    bio: {
      fr: "Au premier regard Rosemary est une marque a l'univers gothique, streetwear avec un air plutôt kafkaïen. Mais elle est avant tout une représentation désinvolte et militante d'une mode qui critiquent les codes du genres en les poussant a leur paroxysme ou en les déconstruisant. Au delà d'une marque Rosemary est une alié de l'intersectionnalité et de la diversité. Plus que des valeurs, ces concepts constitue la ligne directrice de la marque au fil des collections.",
      en: "At first glance Rosemary is a brand with a gothic, streetwear universe and a rather Kafkaesque air. But above all it is a casual and militant statement of a fashion that critiques gender codes by pushing them to the extreme or deconstructing them entirely. Beyond being a brand, Rosemary is an ally of intersectionality and diversity. More than values, these concepts form the guiding line of the brand from one collection to the next.",
      de: "Auf den ersten Blick ist Rosemary eine Marke mit einer gothischen, streetwear-geprägten Welt und einem eher kafkaesken Hauch. Vor allem aber ist sie eine ungezwungene und militante Darstellung einer Mode, die Geschlechtercodes kritisiert, indem sie sie auf die Spitze treibt oder dekonstruiert. Über eine Marke hinaus ist Rosemary eine Verbündete der Intersektionalität und der Vielfalt. Mehr als nur Werte bilden diese Konzepte die Leitlinie der Marke über die Kollektionen hinweg.",
      it: "A prima vista Rosemary è un marchio dall'universo gotico, streetwear, con un'aria piuttosto kafkiana. Ma è soprattutto una rappresentazione disinvolta e militante di una moda che critica i codici di genere spingendoli al loro parossismo o decostruendoli. Più che un semplice marchio, Rosemary è un'alleata dell'intersezionalità e della diversità. Più che semplici valori, questi concetti costituiscono la linea guida del marchio attraverso le collezioni.",
    },
    email: "fluckiger.contact@gmail.com",
    instagram: "rosemaryy__couture",
    portrait: "/media/designers/bastienfluckigerportrait.jpeg",
    portraitFocus: "top",
    logo: "/media/designers/rosemary-bastienlogo.png",
    looks: ["IMG_2026.jpeg", "IMG_2045.jpeg", "IMG_2038.jpeg", "IMG_2142.jpeg", "IMG_1612.jpeg", "IMG_2056.jpeg"],
    edition: "02",
  },
];
