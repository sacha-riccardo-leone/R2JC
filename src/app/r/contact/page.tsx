import { Reveal } from "@/components/Reveal";
import { getDict } from "@/i18n/server";

export const metadata = { title: "Contact — R2JC Reworked" };

export default async function ReworkedContact() {
  const t = await getDict();
  const c = t.contact;

  return (
    <main className="bg-noir text-blanc">
      {/* HERO — eyebrow + split-weight title + intro paragraph */}
      <section className="min-h-screen relative flex flex-col justify-center px-6 md:px-10 py-32 md:py-40">
        <div className="max-w-7xl mx-auto w-full">
          <Reveal motion="blur">
            <p className="font-mono text-[11px] uppercase tracking-wider-2 text-blanc/40 mb-10 md:mb-16">
              {c.eyebrow}
            </p>
          </Reveal>

          <Reveal motion="blur" delay={150}>
            <h1 className="font-display text-[clamp(2.5rem,9vw,8rem)] leading-[0.95] tracking-[-0.04em] mb-16 md:mb-24">
              <span className="font-black">{c.title}.</span>
            </h1>
          </Reveal>

          <Reveal motion="blur" delay={300}>
            <p className="max-w-prose font-sans text-base md:text-lg text-blanc/75 leading-relaxed">
              {c.intro}
            </p>
          </Reveal>
        </div>
      </section>

      {/* COORDONNÉES + FORM — asymmetric 5/7 split, dark themed form fields */}
      <section className="px-6 md:px-10 py-24 md:py-32 border-t border-blanc/15">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-12 gap-y-16 md:gap-x-16">
          {/* LEFT — coordonnées */}
          <Reveal motion="blur" className="md:col-span-5 space-y-12">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider-2 text-blanc/40 mb-3">
                {c.labels.address}
              </p>
              <p className="font-display text-xl md:text-2xl font-medium leading-tight">
                Rue Agassiz 10
                <br />
                2610 Saint-Imier
                <br />
                Suisse
              </p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider-2 text-blanc/40 mb-3">
                {c.labels.email}
              </p>
              <a
                href="mailto:Info@r2jc.ch"
                className="font-display text-xl md:text-2xl font-medium border-b border-blanc/40 hover:border-blanc transition-colors pb-1"
              >
                Info@r2jc.ch
              </a>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider-2 text-blanc/40 mb-3">
                {c.labels.phone}
              </p>
              <a
                href="tel:+41765142303"
                className="font-display text-xl md:text-2xl font-medium border-b border-blanc/40 hover:border-blanc transition-colors pb-1"
              >
                076 514 23 03
              </a>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider-2 text-blanc/40 mb-3">
                {c.labels.follow}
              </p>
              <ul className="space-y-2 font-display text-lg md:text-xl font-medium">
                {[
                  { label: "Instagram", href: "https://www.instagram.com/r2jc.officiel/" },
                  { label: "TikTok", href: "https://www.tiktok.com/@r2jc.officiel" },
                  { label: "YouTube", href: "https://www.youtube.com/@r2jc.officiel" },
                ].map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block border-b border-blanc/40 hover:border-blanc hover:text-silver transition-colors pb-0.5"
                    >
                      {social.label} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* RIGHT — form (mailto submission to keep parity with Upgraded
              postuler/presse pattern; field labels in mono, lines under
              each input matching the editorial dark theme) */}
          <Reveal
            motion="blur"
            delay={200}
            className="md:col-span-7 md:col-start-7"
          >
            <form
              method="post"
              action="mailto:Info@r2jc.ch"
              encType="text/plain"
              className="space-y-8"
            >
              {(
                [
                  { name: "name", label: c.form.name, type: "text", required: true },
                  { name: "email", label: c.form.email, type: "email", required: true },
                  { name: "subject", label: c.form.subject, type: "text", required: false },
                ] as const
              ).map((f) => (
                <div key={f.name}>
                  <label className="block font-mono text-[11px] uppercase tracking-wider-2 text-blanc/40 mb-3">
                    {f.label}
                  </label>
                  <input
                    name={f.name}
                    type={f.type}
                    required={f.required}
                    className="w-full bg-transparent border-b border-blanc/30 py-3 font-sans text-base md:text-lg text-blanc focus:outline-none focus:border-blanc transition-colors"
                  />
                </div>
              ))}
              <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider-2 text-blanc/40 mb-3">
                  {c.form.message}
                </label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  className="w-full bg-transparent border-b border-blanc/30 py-3 font-sans text-base md:text-lg text-blanc focus:outline-none focus:border-blanc transition-colors resize-none"
                />
              </div>
              <div className="pt-4">
                <button
                  type="submit"
                  className="group inline-flex items-baseline gap-4 font-mono text-[11px] uppercase tracking-wider-2 border-b border-blanc pb-2 hover:text-silver hover:border-silver transition-colors"
                >
                  <span>{c.form.submit}</span>
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
