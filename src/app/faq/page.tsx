import { Accordion, type AccordionItem } from "@/components/Accordion";
import { MediaZone } from "@/components/MediaZone";
import { getDict } from "@/i18n/server";

export const metadata = { title: "FAQ — R2JC" };

export default async function FAQ() {
  const t = await getDict();

  const items: AccordionItem[] = t.faq.items.map((item) => ({
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
    <section className="bg-pearl text-noir min-h-screen pt-32 md:pt-40 pb-24">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <p className="font-mono text-[11px] uppercase tracking-wider-2 opacity-60 mb-6 text-center">
          {t.faq.eyebrow}
        </p>
        <h1 className="font-display font-light text-display-md text-center mb-6 leading-[1.05]">
          <span className="font-semibold">{t.faq.title}</span>
        </h1>
        <p className="font-display font-light text-xl md:text-3xl text-center mb-16 text-noir/70">
          {t.faq.subtitle}
        </p>

        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
          <div className="md:col-span-7">
            <Accordion items={items} tone="dark" initialOpen={0} />
          </div>

          <div className="md:col-span-5">
            <MediaZone
              id="FAQ-SAPMI"
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
              {t.editions.e01.coverLabel}
            </p>
          </div>
        </div>

        <div className="mt-20 text-center border-t border-noir/15 pt-12">
          <p className="font-mono text-[11px] uppercase tracking-wider-2 opacity-60 mb-3">
            {t.faq.ctaEyebrow}
          </p>
          <a
            href="mailto:Info@r2jc.ch"
            className="inline-block bg-noir text-blanc px-8 py-3 rounded font-sans text-sm tracking-[0.02em] hover:bg-silver transition-colors duration-500"
          >
            Info@r2jc.ch
          </a>
        </div>
      </div>
    </section>
  );
}
