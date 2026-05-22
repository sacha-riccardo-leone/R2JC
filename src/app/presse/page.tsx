import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { CopyButton } from "@/components/CopyButton";
import { AccreditationForm } from "@/components/AccreditationForm";
import { getDict } from "@/i18n/server";

export const metadata = { title: "Presse — R2JC" };

const PRESS_LOGOS = [
  { id: "PRESS-telebielingue",      label: "TeleBielingue",      file: "/media/sponsors/TeleBielingue.svg" },
  { id: "PRESS-le-journal-du-jura", label: "Le Journal du Jura", file: "/media/sponsors/journalJura.png" },
  { id: "PRESS-a-jour",             label: "À Jour",             file: "/media/sponsors/rot_ajour_claim_RZ.webp" },
  { id: "PRESS-le-quotidien",       label: "Le Quotidien",       file: "/media/sponsors/lequotidien.png" },
];

const RELEASES: { key: "edition03" | "edition02" | "edition01"; url?: string }[] = [
  // url is undefined until R2JC drops the actual PDF into /public/press/
  { key: "edition03" },
  { key: "edition02" },
  { key: "edition01" },
];

export default async function Presse() {
  const t = await getDict();
  const p = t.presse;

  return (
    <>
      {/* Hero */}
      <section className="bg-noir text-blanc pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-wider-2 opacity-70 mb-6">
              {p.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="font-display font-light text-display-md leading-[1.05]">
              <span className="font-semibold">{p.title}</span>
            </h1>
          </Reveal>
          <Reveal delay={250}>
            <p className="mt-10 max-w-prose mx-auto font-sans text-base md:text-lg leading-relaxed opacity-85">
              {p.intro}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Section 1 — Boilerplate statements */}
      <section className="bg-pearl text-noir py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <Reveal>
            <p className="font-mono text-[10px] uppercase tracking-wider-2 text-noir/40 tabular-nums mb-3">
              01 / 05
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display font-light text-3xl md:text-5xl leading-tight mb-4">
              <span className="font-semibold">{p.statements.title}</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="font-sans text-base text-noir/70 mb-12 max-w-prose">
              {p.statements.intro}
            </p>
          </Reveal>

          <div className="space-y-10">
            {[
              { label: p.statements.label25, text: p.statements.s25 },
              { label: p.statements.label50, text: p.statements.s50 },
              { label: p.statements.label150, text: p.statements.s150 },
            ].map((entry, i) => (
              <Reveal key={i} delay={i * 80}>
                <article className="bg-blanc border border-noir/15 p-6 md:p-8">
                  <div className="flex justify-between items-baseline mb-4">
                    <span className="font-mono text-[10px] uppercase tracking-wider-2 text-noir/60">
                      {entry.label}
                    </span>
                    <CopyButton
                      text={entry.text}
                      copyLabel={p.statements.copy}
                      copiedLabel={p.statements.copied}
                    />
                  </div>
                  <p className="font-sans text-base md:text-lg leading-relaxed text-noir/85">
                    {entry.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 — Visual identity / assets */}
      <section className="bg-blanc text-noir py-20 md:py-28 border-t border-noir/10">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <Reveal>
            <p className="font-mono text-[10px] uppercase tracking-wider-2 text-noir/40 tabular-nums mb-3">
              02 / 05
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display font-light text-3xl md:text-5xl leading-tight mb-4">
              <span className="font-semibold">{p.assets.title}</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="font-sans text-base text-noir/70 mb-12 max-w-prose">
              {p.assets.intro}
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10 border border-noir/20 bg-pearl/40 p-6 md:p-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo/r2jcLogo.png"
                alt="R2JC"
                className="h-24 w-auto select-none"
                draggable={false}
              />
              <div className="flex-1">
                <p className="font-display font-medium text-xl text-noir">
                  {p.assets.logo}
                </p>
                <p className="font-mono text-[10px] uppercase tracking-wider-2 text-noir/50 mt-1">
                  PNG · transparent
                </p>
              </div>
              <a
                href="/logo/r2jcLogo.png"
                download
                className="inline-block bg-noir text-blanc px-6 py-3 rounded font-sans text-sm tracking-[0.02em] hover:bg-silver transition-colors duration-500"
              >
                {p.assets.download} ↓
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Section 3 — Press releases */}
      <section className="bg-pearl text-noir py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <Reveal>
            <p className="font-mono text-[10px] uppercase tracking-wider-2 text-noir/40 tabular-nums mb-3">
              03 / 05
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display font-light text-3xl md:text-5xl leading-tight mb-12">
              <span className="font-semibold">{p.releases.title}</span>
            </h2>
          </Reveal>

          <ul className="border-t border-noir/15">
            {RELEASES.map((r, i) => (
              <Reveal key={r.key} delay={i * 80}>
                <li className="border-b border-noir/15 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 py-6">
                  <span className="font-display text-lg md:text-xl">
                    {p.releases[r.key]}
                  </span>
                  {r.url ? (
                    <a
                      href={r.url}
                      download
                      className="font-mono text-[11px] uppercase tracking-wider-2 border-b border-noir hover:text-silver hover:border-silver transition-colors self-start sm:self-auto"
                    >
                      {p.releases.download} ↓
                    </a>
                  ) : (
                    <span className="font-mono text-[10px] uppercase tracking-wider-2 text-noir/40">
                      {p.releases.soon}
                    </span>
                  )}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 4 — Press accreditation */}
      <section className="bg-blanc text-noir py-20 md:py-28 border-t border-noir/10">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <Reveal>
            <p className="font-mono text-[10px] uppercase tracking-wider-2 text-noir/40 tabular-nums mb-3">
              04 / 05
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display font-light text-3xl md:text-5xl leading-tight mb-4">
              <span className="font-semibold">{p.accreditation.title}</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="font-sans text-base text-noir/70 mb-12 max-w-prose">
              {p.accreditation.intro}
            </p>
          </Reveal>
          <Reveal delay={300}>
            <AccreditationForm />
          </Reveal>
        </div>
      </section>

      {/* Section 5 — Existing coverage */}
      <section className="bg-pearl text-noir py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <Reveal>
            <p className="font-mono text-[10px] uppercase tracking-wider-2 text-noir/40 tabular-nums mb-3">
              05 / 05
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display font-light text-3xl md:text-5xl leading-tight mb-12">
              <span className="font-semibold">{p.coverage.title}</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-noir/10">
            {PRESS_LOGOS.map((logo) => (
              <div
                key={logo.id}
                data-media-zone={logo.id}
                className="bg-blanc aspect-[4/3] flex items-center justify-center p-6 md:p-8"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logo.file}
                  alt={logo.label}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct press contact */}
      <section className="bg-noir text-blanc py-16 md:py-20 text-center">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <p className="font-mono text-[11px] uppercase tracking-wider-2 opacity-60 mb-4">
            {p.contact.eyebrow}
          </p>
          <p className="font-display font-light text-2xl md:text-3xl leading-tight mb-8">
            {p.contact.line}
          </p>
          <Link
            href="mailto:Info@r2jc.ch"
            className="inline-block bg-blanc text-noir px-8 py-3 rounded font-sans text-sm tracking-[0.02em] hover:bg-silver hover:text-blanc transition-colors duration-500"
          >
            Info@r2jc.ch
          </Link>
        </div>
      </section>
    </>
  );
}
