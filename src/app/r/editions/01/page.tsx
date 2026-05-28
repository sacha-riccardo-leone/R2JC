import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { getDict } from "@/i18n/server";

export const metadata = { title: "Édition 01 — R2JC Reworked" };

export default async function ReworkedEdition01() {
  const t = await getDict();
  const e = t.editions.e01;

  return (
    <main className="bg-noir text-blanc">
      {/* HERO — eyebrow + huge split-weight title */}
      <section className="min-h-screen relative flex flex-col justify-center px-6 md:px-10 py-32 md:py-40">
        <div className="max-w-7xl mx-auto w-full">
          <Reveal motion="blur">
            <p className="font-mono text-[11px] uppercase tracking-wider-2 text-blanc/40 mb-10 md:mb-16">
              {e.bannerEyebrow}
            </p>
          </Reveal>

          {/* Title — Upgraded uses "Revenons sur notre / 1ère édition".
              Split across two lines: titlePre (light) on top, titleAccent
              (heavy) below. */}
          <Reveal motion="blur" delay={150}>
            <h1 className="font-display text-[clamp(2.5rem,9vw,8rem)] leading-[0.95] tracking-[-0.04em] mb-16 md:mb-24">
              <span className="font-light">{e.titlePre}</span>
              <br />
              <span className="font-black">{e.titleAccent}.</span>
            </h1>
          </Reveal>

          {/* Caption — "La première rencontre — où tout a commencé.
              @sapmi et les autres pionniers ont posé les bases…" */}
          <Reveal motion="blur" delay={300}>
            <p className="max-w-3xl font-display text-xl md:text-3xl font-light text-blanc/75 leading-[1.3]">
              {e.caption}
            </p>
          </Reveal>
        </div>
      </section>

      {/* DATA POINTS — asymmetric 3-column row, same chrome as /r §1 hero */}
      <section className="px-6 md:px-10 py-20 md:py-32 border-t border-blanc/15">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-3 gap-y-10 md:gap-x-12">
          <Reveal motion="blur">
            <p className="font-mono text-[11px] uppercase tracking-wider-2 text-blanc/40 mb-3">
              Année
            </p>
            <p className="font-display text-3xl md:text-5xl font-semibold tabular-nums tracking-[-0.03em]">
              2023
            </p>
          </Reveal>
          <Reveal motion="blur" delay={120}>
            <p className="font-mono text-[11px] uppercase tracking-wider-2 text-blanc/40 mb-3">
              Acte
            </p>
            <p className="font-display text-3xl md:text-5xl font-semibold tabular-nums tracking-[-0.03em]">
              01
            </p>
          </Reveal>
          <Reveal motion="blur" delay={240}>
            <p className="font-mono text-[11px] uppercase tracking-wider-2 text-blanc/40 mb-3">
              Statut
            </p>
            <p className="font-display text-3xl md:text-5xl font-semibold tracking-[-0.03em]">
              Archive
            </p>
          </Reveal>
        </div>
      </section>

      {/* CONTINUER — back banner to the editions index */}
      <section className="border-t border-blanc/15">
        <Link
          href="/r/editions"
          className="group block bg-noir text-blanc hover:bg-blanc/[0.04] transition-colors duration-500 ease-editorial border-b border-blanc/15"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16 grid grid-cols-12 gap-x-4 md:gap-x-8 items-baseline relative">
            <div className="col-span-12 md:col-span-8 md:pr-44">
              <p className="font-mono text-[11px] uppercase tracking-wider-2 text-blanc/40 mb-3">
                Retour
              </p>
              <h2 className="font-display font-medium text-2xl md:text-3xl leading-tight tracking-[-0.02em]">
                Voir toutes les éditions
              </h2>
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
        </Link>
      </section>
    </main>
  );
}
