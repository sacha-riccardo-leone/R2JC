import Link from "next/link";
import { MediaZone } from "@/components/MediaZone";
import { Reveal } from "@/components/Reveal";
import { HeroVideo } from "@/components/HeroVideo";
import { Accordion, type AccordionItem } from "@/components/Accordion";
import { getDict } from "@/i18n/server";

export default async function Home() {
  const t = await getDict();

  // Build FAQ items from the dictionary, weaving in the @r2jc.officiel link
  // on the last answer where the {instagram} placeholder appears.
  const faqItems: AccordionItem[] = t.faq.items.map((item) => ({
    q: item.q,
    a: item.a.includes("{instagram}") ? (
      <p>
        {item.a.split("{instagram}")[0]}
        <a
          href="https://instagram.com/r2jc.officiel"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-silver"
        >
          @r2jc.officiel
        </a>
        {item.a.split("{instagram}")[1]}
      </p>
    ) : (
      <p>{item.a}</p>
    ),
  }));

  return (
    <>
      {/* ── I — HERO ───────────────────────────────────────────────── */}
      {/* pt-32 md:pt-40 reserves vertical space for the fixed header.
          With the persistent desktop nav row added later the header is
          now ~100 px tall (vs ~70 before); without this padding the
          flex-centered content drifted up under the nav on shorter
          desktop viewports and hid the eyebrow. */}
      <section className="relative min-h-screen bg-noir text-blanc overflow-hidden flex items-center pt-32 md:pt-40">
        <HeroVideo />
        <div
          aria-hidden
          className="absolute inset-0 bg-noir/55 pointer-events-none"
        />

        <div className="relative z-10 w-full px-6 md:px-10 text-center">
          <Reveal delay={150}>
            <p className="font-mono text-[11px] uppercase tracking-wider-2 opacity-70 mb-8">
              {t.home.eyebrow}
            </p>
          </Reveal>

          <Reveal delay={350}>
            <h1 className="font-display font-light text-display-md max-w-5xl mx-auto leading-[1.1]">
              <span className="block">{t.home.taglineLine1}</span>
              <span className="block">
                {t.home.taglineLine2pre}{" "}
                <span className="zoom-word font-bold italic">
                  {t.home.taglineZoom}
                </span>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={900}>
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/editions"
                className="inline-block bg-blanc text-noir px-8 py-3 rounded font-sans text-sm tracking-[0.02em] hover:bg-silver hover:text-blanc transition-colors duration-500"
              >
                {t.home.ctaEditions}
              </Link>
              <Link
                href="#histoire"
                className="inline-block border border-blanc/60 text-blanc px-8 py-3 rounded font-sans text-sm tracking-[0.02em] hover:bg-blanc hover:text-noir transition-colors duration-500"
              >
                {t.home.ctaDiscover}
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-10 pb-6 z-10">
          <div className="hairline bg-blanc mb-3" />
          <div className="flex justify-between font-mono text-[10px] uppercase tracking-wider-2 opacity-60">
            <span>{t.common.scroll}</span>
            <span>{t.common.edition03}</span>
          </div>
        </div>
      </section>

      {/* ── II — L'HISTOIRE ────────────────────────────────────────── */}
      <section id="histoire" className="bg-pearl text-noir py-28 md:py-40">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-wider-2 opacity-60 mb-6 text-center">
              {t.home.histoire.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="font-display font-light text-display-md text-center mb-20 leading-[1.05]">
              {t.home.histoire.titlePre}{" "}
              <span className="font-semibold">{t.home.histoire.titleAccent}</span>
            </h2>
          </Reveal>

          <div className="max-w-3xl mx-auto space-y-6 font-sans text-base md:text-lg leading-relaxed text-noir/85">
            <Reveal>
              <p>{t.home.histoire.p1}</p>
            </Reveal>
            <Reveal delay={120}>
              <p>{t.home.histoire.p2}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── III — ILS PARLENT DE NOUS ─────────────────────────────── */}
      <section className="bg-blanc text-noir py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <Reveal>
            <h2 className="font-display font-light text-3xl md:text-5xl text-center mb-16 md:mb-20">
              {t.home.presse.titlePre}{" "}
              <span className="font-semibold">{t.home.presse.titleAccent}</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 items-center">
            {[
              { id: "PRESS-telebielingue", label: "TeleBielingue", file: "/media/sponsors/TeleBielingue.svg" },
              { id: "PRESS-le-journal-du-jura", label: "Le Journal du Jura", file: "/media/sponsors/journalJura.png" },
              { id: "PRESS-a-jour", label: "À Jour", file: "/media/sponsors/rot_ajour_claim_RZ.webp" },
              { id: "PRESS-le-quotidien", label: "Le Quotidien", file: "/media/sponsors/lequotidien.png" },
            ].map((p, i) => (
              <Reveal key={p.id} delay={i * 80}>
                <MediaZone
                  id={p.id}
                  kind="image"
                  ratio="3/2"
                  priority="P0"
                  tone="dark"
                  label={p.label}
                  brief={`Drop the logo at ${p.file}`}
                  src={p.file}
                  alt={p.label}
                  className="hover:opacity-70 transition-opacity duration-500"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── IV — ÉDITION 02 ───────────────────────────────────────── */}
      <section className="bg-noir text-blanc py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12 md:gap-16 items-center">
          <div className="md:col-span-7">
            <Reveal>
              <MediaZone
                id="ED-VID-02"
                kind="video"
                ratio="16/9"
                priority="P0"
                tone="light"
                label="Édition 02 — Recap"
                brief="Self-hosted 30s loop from t=36:06 of the YouTube recap."
                src="/media/editions/edition-02-recap.mp4"
              />
            </Reveal>
          </div>

          <div className="md:col-span-5">
            <Reveal delay={150}>
              <p className="font-mono text-[11px] uppercase tracking-wider-2 opacity-60 mb-6">
                {t.home.ed02.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={250}>
              <h2 className="font-display font-light text-3xl md:text-5xl leading-[1.15] mb-8">
                {t.home.ed02.headingPre}{" "}
                <span className="font-semibold">{t.home.ed02.headingAccent}</span>{" "}
                {t.home.ed02.headingPost}
              </h2>
            </Reveal>
            <Reveal delay={400}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.youtube.com/@r2jc.officiel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-silver text-blanc px-6 py-3 rounded font-sans text-sm tracking-[0.02em] hover:bg-blanc hover:text-noir transition-colors duration-500"
                >
                  {t.home.ed02.ctaYoutube}
                </a>
                <Link
                  href="/editions"
                  className="inline-block border border-blanc/40 text-blanc px-6 py-3 rounded font-sans text-sm tracking-[0.02em] hover:bg-blanc hover:text-noir transition-colors duration-500"
                >
                  {t.home.ed02.ctaAll}
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── V — FAQ + @SAPMI PORTRAIT ─────────────────────────────── */}
      <section className="bg-pearl text-noir py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-wider-2 opacity-60 mb-4 text-center">
              {t.home.faq.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="font-display font-light text-3xl md:text-5xl text-center mb-16">
              {t.home.faq.titlePre}{" "}
              <span className="font-semibold">{t.home.faq.titleAccent}</span>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            <Reveal>
              <Accordion items={faqItems} tone="dark" initialOpen={0} />
              <div className="mt-10 text-center md:text-left">
                <Link
                  href="/faq"
                  className="inline-block bg-noir text-blanc px-7 py-3 rounded font-sans text-sm tracking-[0.02em] hover:bg-silver transition-colors duration-500"
                >
                  {t.home.faq.ctaAll}
                </Link>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <MediaZone
                id="HOME-SAPMI"
                kind="image"
                ratio="4/5"
                priority="P0"
                tone="dark"
                fit="cover"
                label="@sapmi"
                brief="Portrait — Designer 1ʳᵉ édition"
                src="/media/home/sapmi_portrait.jpg"
                alt="@sapmi — Designer 1ère édition R2JC"
              />
              <p className="mt-5 font-sans text-sm leading-snug text-noir/70">
                <span className="font-semibold text-noir">@sapmi</span>
                <br />
                {t.editions.cardLabel.split("·")[1]?.trim() ?? "Designer"} —{" "}
                {t.editions.e01.coverLabel}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────────── */}
      <footer className="bg-noir text-mist">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-20 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h4 className="font-display text-blanc font-medium text-[15px] mb-4">
              {t.footer.rules}
            </h4>
            <ul className="space-y-2 font-sans text-sm text-mist/80">
              <li>
                <Link
                  href="/politique-de-confidentialite"
                  className="hover:text-blanc transition-colors"
                >
                  {t.footer.privacy}
                </Link>
              </li>
              <li>
                <Link
                  href="/conditions-generales-de-ventes"
                  className="hover:text-blanc transition-colors"
                >
                  {t.footer.terms}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-blanc font-medium text-[15px] mb-4">
              {t.footer.social}
            </h4>
            <ul className="space-y-2 font-sans text-sm text-mist/80">
              <li>
                <a
                  href="https://www.instagram.com/r2jc.officiel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blanc transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@r2jc.officiel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blanc transition-colors"
                >
                  TikTok
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@r2jc.officiel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blanc transition-colors"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-blanc font-medium text-[15px] mb-4">
              {t.footer.contact}
            </h4>
            <ul className="space-y-2 font-sans text-sm text-mist/80">
              <li>
                <a
                  href="mailto:Info@r2jc.ch"
                  className="hover:text-blanc transition-colors"
                >
                  Info@r2jc.ch
                </a>
              </li>
              <li>+41 76 514 23 03</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-graphite px-6 md:px-10 py-5 flex flex-col md:flex-row md:justify-between md:items-center gap-2 text-center md:text-left font-sans text-[12px] text-mist/50">
          <span>{t.footer.rights}</span>
          <span>
            {t.footer.siteBy}{" "}
            <a
              href="https://github.com/sacha-riccardo-leone"
              target="_blank"
              rel="noopener noreferrer"
              className="text-mist/70 hover:text-blanc underline-offset-4 hover:underline transition-colors"
            >
              Sacha Riccardo Leone
            </a>
          </span>
        </div>
      </footer>
    </>
  );
}
