import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { getDict } from "@/i18n/server";

export const metadata = { title: "FAQ — R2JC Reworked" };

export default async function ReworkedFaq() {
  const t = await getDict();
  const f = t.faq;

  return (
    <main className="bg-noir text-blanc">
      {/* HERO — eyebrow + split-weight title + subtitle */}
      <section className="min-h-screen relative flex flex-col justify-center px-6 md:px-10 py-32 md:py-40">
        <div className="max-w-7xl mx-auto w-full">
          <Reveal motion="blur">
            <p className="font-mono text-[11px] uppercase tracking-wider-2 text-blanc/40 mb-10 md:mb-16">
              {f.eyebrow}
            </p>
          </Reveal>

          <Reveal motion="blur" delay={150}>
            <h1 className="font-display text-[clamp(2.5rem,9vw,8rem)] leading-[0.95] tracking-[-0.04em] mb-12 md:mb-16">
              <span className="font-black">{f.title}.</span>
            </h1>
          </Reveal>

          <Reveal motion="blur" delay={300}>
            <p className="max-w-3xl font-display text-xl md:text-3xl font-light text-blanc/65 leading-[1.3]">
              {f.subtitle}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Q&A — each item is a numbered 3/9 row, always-open (no accordion
          toggling needed since the answers are short and we want them
          all readable as part of the augen-style structured rhythm) */}
      <section className="px-6 md:px-10 py-16 md:py-24 border-t border-blanc/15">
        <div className="max-w-7xl mx-auto w-full">
          <div className="border-t border-blanc/15">
            {f.items.map((item, i) => {
              const num = String(i + 1).padStart(2, "0");
              // Some answers reference @r2jc.officiel via the {instagram}
              // placeholder. Split and inject a real link.
              const renderAnswer = () => {
                if (!item.a.includes("{instagram}")) {
                  return <p>{item.a}</p>;
                }
                const [before, after] = item.a.split("{instagram}");
                return (
                  <p>
                    {before}
                    <a
                      href="https://instagram.com/r2jc.officiel"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-b border-blanc/60 hover:text-silver hover:border-silver transition-colors pb-0.5"
                    >
                      @r2jc.officiel
                    </a>
                    {after}
                  </p>
                );
              };
              return (
                <Reveal key={num} motion="blur">
                  <article className="grid grid-cols-12 gap-x-4 md:gap-x-8 items-start py-12 md:py-16 border-b border-blanc/15">
                    <div className="col-span-12 md:col-span-3 flex items-baseline gap-3 md:gap-4 mb-6 md:mb-0">
                      <span className="font-mono text-xs tabular-nums text-blanc/40">
                        {num}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-wider-2 text-blanc/40">
                        Q
                      </span>
                    </div>
                    <div className="col-span-12 md:col-span-9 space-y-6">
                      <h2 className="font-display text-2xl md:text-4xl font-medium leading-tight tracking-[-0.02em]">
                        {item.q}
                      </h2>
                      <div className="font-sans text-base md:text-lg text-blanc/70 leading-relaxed max-w-prose">
                        {renderAnswer()}
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA — another question? White banner like Édition 03 on /r §3 */}
      <section className="border-t border-blanc/15">
        <Link
          href="/r/contact"
          className="group block bg-blanc text-noir hover:bg-mist transition-colors duration-500 ease-editorial"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24 grid grid-cols-12 gap-x-4 md:gap-x-8 items-baseline relative">
            <div className="col-span-12 md:col-span-8 md:pr-44 lg:pr-56">
              <p className="font-mono text-[11px] uppercase tracking-wider-2 text-noir/40 mb-4">
                {f.ctaEyebrow}
              </p>
              <h2 className="font-display font-medium text-2xl md:text-4xl leading-tight tracking-[-0.02em]">
                Écrivez-nous.
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
        </Link>
      </section>
    </main>
  );
}
