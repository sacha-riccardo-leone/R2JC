import { MediaZone } from "@/components/MediaZone";
import { getDict } from "@/i18n/server";

export const metadata = { title: "Sponsors — R2JC" };

type SponsorEntry = { id: string; label: string; file: string };

const SPONSOR_ROWS: { rowKey: "principaux" | "locaux" | "culturels" | "regionaux"; sponsors: SponsorEntry[] }[] = [
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

export default async function Sponsors() {
  const t = await getDict();

  return (
    <section className="bg-pearl text-noir min-h-screen pt-32 md:pt-40 pb-24">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <p className="font-mono text-[11px] uppercase tracking-wider-2 opacity-60 mb-6 text-center">
          {t.sponsors.eyebrow}
        </p>
        <h1 className="font-display font-light text-display-md text-center mb-6 leading-[1.05]">
          {t.sponsors.titlePre}{" "}
          <span className="font-semibold">{t.sponsors.titleAccent}</span>
        </h1>

        <div className="max-w-3xl mx-auto mt-16 md:mt-20 mb-20 md:mb-24">
          <p className="font-mono text-[11px] uppercase tracking-wider-2 opacity-60 mb-6 text-center">
            {t.sponsors.remerciementsEyebrow}
          </p>
          <div className="space-y-6 font-sans text-base md:text-lg leading-relaxed text-noir/85">
            <p>{t.sponsors.remerciementsP1}</p>
            <p>{t.sponsors.remerciementsP2}</p>
            <p>{t.sponsors.remerciementsP3}</p>
            <p>{t.sponsors.remerciementsP4}</p>
          </div>
        </div>

        <div className="space-y-16 md:space-y-20">
          {SPONSOR_ROWS.map((row) => (
            <div key={row.rowKey}>
              <p className="font-mono text-[11px] uppercase tracking-wider-2 opacity-60 mb-6 text-center">
                {t.sponsors.rows[row.rowKey]}
              </p>
              <div
                className="grid gap-px bg-noir/10"
                style={{
                  gridTemplateColumns: `repeat(${Math.min(
                    row.sponsors.length,
                    4
                  )}, minmax(0, 1fr))`,
                }}
              >
                {row.sponsors.map((s) => (
                  <div
                    key={s.id}
                    data-media-zone={s.id}
                    className="bg-blanc flex items-center justify-center p-6 md:p-8"
                  >
                    <MediaZone
                      id={s.id}
                      kind="image"
                      ratio="4/3"
                      priority="P1"
                      tone="dark"
                      label={s.label}
                      brief={`Drop logo at ${s.file}`}
                      src={s.file}
                      alt={s.label}
                      className="hover:opacity-70 transition-opacity duration-500 w-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-noir text-blanc p-10 md:p-16 text-center mt-20">
          <p className="font-mono text-[11px] uppercase tracking-wider-2 opacity-60 mb-4">
            {t.sponsors.ctaEyebrow}
          </p>
          <h2 className="font-display font-light text-2xl md:text-4xl mb-6 max-w-2xl mx-auto leading-tight">
            {t.sponsors.ctaTitle}
          </h2>
          <a
            href="mailto:Info@r2jc.ch?subject=Partenariat%20R2JC"
            className="inline-block mt-4 bg-blanc text-noir px-8 py-3 rounded font-sans text-sm tracking-[0.02em] hover:bg-silver hover:text-blanc transition-colors duration-500"
          >
            Info@r2jc.ch
          </a>
        </div>
      </div>
    </section>
  );
}
