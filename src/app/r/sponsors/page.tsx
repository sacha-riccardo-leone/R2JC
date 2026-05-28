import { Reveal } from "@/components/Reveal";
import { getDict } from "@/i18n/server";

export const metadata = { title: "Partenaires — R2JC Reworked" };

// Same sponsor roster as the Upgraded /sponsors page.
type SponsorEntry = { id: string; label: string; file: string };
const SPONSOR_ROWS: {
  rowKey: "principaux" | "locaux" | "culturels" | "regionaux";
  sponsors: SponsorEntry[];
}[] = [
  {
    rowKey: "principaux",
    sponsors: [
      { id: "SPONSOR-so-sushi",  label: "Sō Sushi",                           file: "/media/sponsors/sosushi.png" },
      { id: "SPONSOR-jura-ch",   label: "République et Canton du Jura",       file: "/media/sponsors/Jura-Logo.svg.png" },
      { id: "SPONSOR-swisslos",  label: "Swisslos — Culture Canton de Berne", file: "/media/sponsors/swisslos.png" },
      { id: "SPONSOR-oak",       label: "OAK",                                file: "/media/sponsors/oak-removebg-preview.png" },
    ],
  },
  {
    rowKey: "locaux",
    sponsors: [
      { id: "SPONSOR-p-beuret",         label: "P. Beuret",         file: "/media/sponsors/pbeuret.png" },
      { id: "SPONSOR-bati-deco",        label: "Bâti-Déco Sàrl",    file: "/media/sponsors/LOGO_BATI-DECO-removebg-preview.png" },
      { id: "SPONSOR-qilomen",          label: "Qilomen",           file: "/media/sponsors/FiduciaireGilomen_New_Fond_Blanc.webp" },
      { id: "SPONSOR-crystal-services", label: "Crystal Services",  file: "/media/sponsors/crystalservices-removebg-preview.png" },
      { id: "SPONSOR-nuance",           label: "Nuance",            file: "/media/sponsors/logo_nuance_wordmark_byline_licht_ton_effekt.svg" },
      { id: "SPONSOR-leal-sarl",        label: "LEAL Sàrl",         file: "/media/sponsors/lealsarl.png" },
    ],
  },
  {
    rowKey: "culturels",
    sponsors: [
      { id: "SPONSOR-wankdorf-city",       label: "Wankdorf City Eventhall",           file: "/media/sponsors/LOGO_WANKDORF-CITY-EVETHALL-noir.png" },
      { id: "SPONSOR-cjb",                 label: "CJB — Conseil du Jura bernois",     file: "/media/sponsors/LOGO_CJB-fond-transparent-2048x720.png" },
      { id: "SPONSOR-ne-ch",               label: "République et Canton de Neuchâtel", file: "/media/sponsors/nech.png" },
      { id: "SPONSOR-la-grenouille",       label: "La Grenouille",                     file: "/media/sponsors/LA_GRENOUILLE_LOGO_AUBERGINE.png" },
      { id: "SPONSOR-raiffeisen",          label: "Raiffeisen",                        file: "/media/sponsors/raiffeisen.png" },
      { id: "SPONSOR-cabinet-de-la-forge", label: "Cabinet de la Forge",               file: "/media/sponsors/cabinetdelaforge.png" },
    ],
  },
  {
    rowKey: "regionaux",
    sponsors: [
      { id: "SPONSOR-babette",         label: "Babette Switzerland", file: "/media/sponsors/babette.png" },
      { id: "SPONSOR-grand-chasseral", label: "Grand Chasseral",     file: "/media/sponsors/logo-grand-chasseral.svg" },
      { id: "SPONSOR-saint-imier",     label: "Saint-Imier",         file: "/media/sponsors/saint-imier.webp" },
      { id: "SPONSOR-clientis",        label: "Clientis",            file: "/media/sponsors/LOGO_CLIENTIS-noir-2048x419.png" },
      { id: "SPONSOR-portabri",        label: "Portabri SA",         file: "/media/sponsors/portabri_SA-removebg-preview.png" },
      { id: "SPONSOR-bh-immo",         label: "BH Immo SA",          file: "/media/sponsors/Logo_BH-Immo-SA-removebg-preview.png" },
    ],
  },
];

export default async function ReworkedSponsors() {
  const t = await getDict();
  const s = t.sponsors;

  return (
    <main className="bg-noir text-blanc">
      {/* HERO — eyebrow + split-weight title + asymmetric remerciements */}
      <section className="min-h-screen relative flex flex-col justify-center px-6 md:px-10 py-32 md:py-40">
        <div className="max-w-7xl mx-auto w-full">
          <Reveal motion="blur">
            <p className="font-mono text-[11px] uppercase tracking-wider-2 text-blanc/40 mb-10 md:mb-16">
              {s.eyebrow}
            </p>
          </Reveal>

          <Reveal motion="blur" delay={150}>
            <h1 className="font-display text-[clamp(2.5rem,9vw,8rem)] leading-[0.95] tracking-[-0.04em] mb-16 md:mb-24">
              <span className="font-light">{s.titlePre}</span>
              <br />
              <span className="font-black">{s.titleAccent}.</span>
            </h1>
          </Reveal>

          {/* Asymmetric remerciements — eyebrow + 4 paragraphs in a 5/7 grid */}
          <div className="grid md:grid-cols-12 gap-y-8 md:gap-x-12 items-start">
            <Reveal motion="blur" delay={300} className="md:col-span-5">
              <p className="font-mono text-[11px] uppercase tracking-wider-2 text-blanc/40">
                {s.remerciementsEyebrow}
              </p>
            </Reveal>
            <Reveal motion="blur" delay={450} className="md:col-span-7 space-y-6">
              <p className="font-sans text-base md:text-lg leading-relaxed text-blanc/75 max-w-prose">
                {s.remerciementsP1}
              </p>
              <p className="font-sans text-base md:text-lg leading-relaxed text-blanc/65 max-w-prose">
                {s.remerciementsP2}
              </p>
              <p className="font-sans text-base md:text-lg leading-relaxed text-blanc/65 max-w-prose">
                {s.remerciementsP3}
              </p>
              <p className="font-sans text-base md:text-lg leading-relaxed text-blanc/65 max-w-prose">
                {s.remerciementsP4}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SPONSOR WALL — four categorised rows, white logo tiles on the dark page */}
      <section className="relative py-24 md:py-32 px-6 md:px-10 border-t border-blanc/15">
        <div className="max-w-7xl mx-auto w-full space-y-20 md:space-y-24">
          {SPONSOR_ROWS.map((row) => (
            <Reveal motion="blur" key={row.rowKey}>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider-2 text-blanc/40 mb-8 md:mb-10">
                  {s.rows[row.rowKey]}
                </p>
                <div
                  className="grid gap-px bg-blanc/15"
                  style={{
                    gridTemplateColumns: `repeat(${Math.min(
                      row.sponsors.length,
                      4
                    )}, minmax(0, 1fr))`,
                  }}
                >
                  {row.sponsors.map((sp) => (
                    <div
                      key={sp.id}
                      className="bg-blanc flex items-center justify-center p-6 md:p-10 aspect-[4/3]"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={sp.file}
                        alt={sp.label}
                        className="max-h-full max-w-full object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PARTNER CTA — inverted white banner like the Édition 03 banner on /r §3 */}
      <section className="relative border-t border-blanc/15">
        <a
          href="mailto:Info@r2jc.ch?subject=Partenariat%20R2JC"
          className="group block bg-blanc text-noir hover:bg-mist transition-colors duration-500 ease-editorial"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24 grid grid-cols-12 gap-x-4 md:gap-x-8 items-baseline relative">
            <div className="col-span-12 md:col-span-8 md:pr-44 lg:pr-56">
              <p className="font-mono text-[11px] uppercase tracking-wider-2 text-noir/40 mb-4">
                {s.ctaEyebrow}
              </p>
              <h2 className="font-display font-medium text-2xl md:text-4xl leading-tight tracking-[-0.02em]">
                {s.ctaTitle}
              </h2>
              <p className="mt-6 font-mono text-[12px] uppercase tracking-wider-2 text-noir/60">
                Info@r2jc.ch
              </p>
            </div>

            {/* Wayfinding chevron arrow — black on the white banner */}
            <div
              className="hidden md:block absolute right-6 md:right-10 top-1/2 -translate-y-1/2 pointer-events-none"
              aria-hidden
            >
              <div className="opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-editorial">
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 100 100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="10"
                  strokeLinecap="square"
                  strokeMiterlimit="10"
                >
                  <polyline points="52 22 80 50 52 78" />
                  <line x1="20" y1="50" x2="76" y2="50" />
                </svg>
              </div>
            </div>
          </div>
        </a>
      </section>
    </main>
  );
}
