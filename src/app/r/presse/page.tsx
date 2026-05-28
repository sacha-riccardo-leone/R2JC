import { Reveal } from "@/components/Reveal";
import { getDict } from "@/i18n/server";
import { ReworkedCopyButton } from "./ReworkedCopyButton";
import { ReworkedAccreditationForm } from "./ReworkedAccreditationForm";

export const metadata = { title: "Presse — R2JC Reworked" };

const PRESS_LOGOS = [
  { id: "PRESS-telebielingue",      label: "TeleBielingue",      file: "/media/sponsors/TeleBielingue.svg" },
  { id: "PRESS-le-journal-du-jura", label: "Le Journal du Jura", file: "/media/sponsors/journalJura.png" },
  { id: "PRESS-a-jour",             label: "À Jour",             file: "/media/sponsors/rot_ajour_claim_RZ.webp" },
  { id: "PRESS-le-quotidien",       label: "Le Quotidien",       file: "/media/sponsors/lequotidien.png" },
];

const RELEASES: { key: "edition03" | "edition02" | "edition01"; url?: string }[] = [
  { key: "edition03" },
  { key: "edition02" },
  { key: "edition01" },
];

export default async function ReworkedPresse() {
  const t = await getDict();
  const p = t.presse;

  return (
    <main className="bg-noir text-blanc">
      {/* HERO */}
      <section className="min-h-screen relative flex flex-col justify-center px-6 md:px-10 py-32 md:py-40">
        <div className="max-w-7xl mx-auto w-full">
          <Reveal motion="blur">
            <p className="font-mono text-[11px] uppercase tracking-wider-2 text-blanc/40 mb-10 md:mb-16">
              {p.eyebrow}
            </p>
          </Reveal>

          <Reveal motion="blur" delay={150}>
            <h1 className="font-display text-[clamp(2.5rem,9vw,8rem)] leading-[0.95] tracking-[-0.04em] mb-16 md:mb-24">
              <span className="font-black">{p.title}.</span>
            </h1>
          </Reveal>

          <Reveal motion="blur" delay={300}>
            <p className="max-w-3xl font-display text-xl md:text-3xl font-light text-blanc/75 leading-[1.3]">
              {p.intro}
            </p>
          </Reveal>
        </div>
      </section>

      {/* SECTION 01 — boilerplate statements (3 copyable blocks) */}
      <section className="px-6 md:px-10 py-24 md:py-32 border-t border-blanc/15">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-12 gap-y-8 md:gap-x-12 items-start mb-16 md:mb-20">
            <Reveal motion="blur" className="md:col-span-5">
              <p className="font-mono text-[11px] uppercase tracking-wider-2 text-blanc/40 mb-6">
                01 — {p.statements.eyebrow}
              </p>
              <h2 className="font-display text-3xl md:text-5xl font-semibold leading-[1.1] tracking-[-0.03em]">
                {p.statements.title}
              </h2>
            </Reveal>
            <Reveal motion="blur" delay={150} className="md:col-span-6 md:col-start-7">
              <p className="font-sans text-base md:text-lg leading-relaxed text-blanc/65 max-w-prose">
                {p.statements.intro}
              </p>
            </Reveal>
          </div>

          <div className="space-y-12 md:space-y-16">
            {[
              { label: p.statements.label25,  text: p.statements.s25  },
              { label: p.statements.label50,  text: p.statements.s50  },
              { label: p.statements.label150, text: p.statements.s150 },
            ].map((entry, i) => (
              <Reveal key={i} motion="blur">
                <article className="border border-blanc/15 p-8 md:p-10">
                  <div className="flex justify-between items-baseline mb-6">
                    <span className="font-mono text-[10px] uppercase tracking-wider-2 text-blanc/50">
                      {entry.label}
                    </span>
                    <ReworkedCopyButton
                      text={entry.text}
                      copyLabel={p.statements.copy}
                      copiedLabel={p.statements.copied}
                    />
                  </div>
                  <p className="font-sans text-base md:text-lg leading-relaxed text-blanc/85">
                    {entry.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 02 — logo & assets */}
      <section className="px-6 md:px-10 py-24 md:py-32 border-t border-blanc/15">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-12 gap-y-12 md:gap-x-16 items-center">
          <Reveal motion="blur" className="md:col-span-5">
            <p className="font-mono text-[11px] uppercase tracking-wider-2 text-blanc/40 mb-6">
              02 — {p.assets.eyebrow}
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold leading-[1.1] tracking-[-0.03em] mb-6">
              {p.assets.title}
            </h2>
            <p className="font-sans text-base md:text-lg leading-relaxed text-blanc/65 max-w-prose">
              {p.assets.intro}
            </p>
          </Reveal>
          <Reveal motion="blur" delay={150} className="md:col-span-6 md:col-start-7">
            <div className="bg-blanc text-noir p-8 md:p-12 flex flex-col items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo/r2jcLogo.png"
                alt="R2JC logo"
                className="h-20 md:h-28 w-auto object-contain mb-8"
              />
              <p className="font-mono text-[10px] uppercase tracking-wider-2 text-noir/50 mb-6">
                {p.assets.logo}
              </p>
              <a
                href="/logo/r2jcLogo.png"
                download="r2jc-logo.png"
                className="font-mono text-[11px] uppercase tracking-wider-2 border-b border-noir hover:text-silver hover:border-silver transition-colors pb-1"
              >
                {p.assets.download} ↓
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 03 — releases */}
      <section className="px-6 md:px-10 py-24 md:py-32 border-t border-blanc/15">
        <div className="max-w-7xl mx-auto w-full">
          <Reveal motion="blur">
            <p className="font-mono text-[11px] uppercase tracking-wider-2 text-blanc/40 mb-6">
              03 — {p.releases.eyebrow}
            </p>
          </Reveal>
          <Reveal motion="blur" delay={120}>
            <h2 className="font-display text-3xl md:text-5xl font-semibold leading-[1.1] tracking-[-0.03em] mb-12 md:mb-16">
              {p.releases.title}
            </h2>
          </Reveal>

          <ul className="border-t border-blanc/15">
            {RELEASES.map((r) => (
              <Reveal key={r.key} motion="blur">
                <li className="border-b border-blanc/15 py-8 md:py-10 grid grid-cols-12 gap-x-4 md:gap-x-8 items-baseline">
                  <span className="col-span-12 md:col-span-9 font-display text-xl md:text-3xl font-medium tracking-[-0.02em] mb-2 md:mb-0">
                    {p.releases[r.key]}
                  </span>
                  <span className="col-span-12 md:col-span-3 md:text-right">
                    {r.url ? (
                      <a
                        href={r.url}
                        className="font-mono text-[11px] uppercase tracking-wider-2 border-b border-blanc/60 hover:text-silver hover:border-silver transition-colors pb-0.5"
                      >
                        {p.releases.download} ↓
                      </a>
                    ) : (
                      <span className="font-mono text-[11px] uppercase tracking-wider-2 text-blanc/40">
                        {p.releases.soon}
                      </span>
                    )}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* SECTION 04 — accreditation form */}
      <section className="px-6 md:px-10 py-24 md:py-32 border-t border-blanc/15">
        <div className="max-w-5xl mx-auto w-full">
          <Reveal motion="blur">
            <p className="font-mono text-[11px] uppercase tracking-wider-2 text-blanc/40 mb-6">
              04 — {p.accreditation.eyebrow}
            </p>
          </Reveal>
          <Reveal motion="blur" delay={120}>
            <h2 className="font-display text-3xl md:text-5xl font-semibold leading-[1.1] tracking-[-0.03em] mb-6">
              {p.accreditation.title}
            </h2>
          </Reveal>
          <Reveal motion="blur" delay={240}>
            <p className="font-sans text-base md:text-lg leading-relaxed text-blanc/65 max-w-prose mb-16">
              {p.accreditation.intro}
            </p>
          </Reveal>
          <Reveal motion="blur" delay={360}>
            <ReworkedAccreditationForm />
          </Reveal>
        </div>
      </section>

      {/* SECTION 05 — coverage */}
      <section className="px-6 md:px-10 py-24 md:py-32 border-t border-blanc/15">
        <div className="max-w-7xl mx-auto w-full">
          <Reveal motion="blur">
            <p className="font-mono text-[11px] uppercase tracking-wider-2 text-blanc/40 mb-6">
              05 — {p.coverage.eyebrow}
            </p>
          </Reveal>
          <Reveal motion="blur" delay={120}>
            <h2 className="font-display text-3xl md:text-5xl font-semibold leading-[1.1] tracking-[-0.03em] mb-12">
              {p.coverage.title}
            </h2>
          </Reveal>

          <Reveal motion="blur" delay={240}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-blanc/15">
              {PRESS_LOGOS.map((s) => (
                <div
                  key={s.id}
                  className="bg-blanc flex items-center justify-center p-6 md:p-10 aspect-[3/2]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.file}
                    alt={s.label}
                    className="max-h-full max-w-full object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTACT — white banner closing the page */}
      <a
        href="mailto:Info@r2jc.ch?subject=Presse%20R2JC"
        className="group block bg-blanc text-noir hover:bg-mist transition-colors duration-500 ease-editorial border-t border-blanc/15"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24 grid grid-cols-12 gap-x-4 md:gap-x-8 items-baseline relative">
          <div className="col-span-12 md:col-span-8 md:pr-44 lg:pr-56">
            <p className="font-mono text-[11px] uppercase tracking-wider-2 text-noir/40 mb-4">
              {p.contact.eyebrow}
            </p>
            <h2 className="font-display font-medium text-2xl md:text-4xl leading-tight tracking-[-0.02em]">
              {p.contact.line}
            </h2>
            <p className="mt-6 font-mono text-[12px] uppercase tracking-wider-2 text-noir/60">
              Info@r2jc.ch
            </p>
          </div>
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
    </main>
  );
}
