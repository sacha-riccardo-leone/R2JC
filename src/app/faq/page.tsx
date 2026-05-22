import { Accordion } from "@/components/Accordion";
import { MediaZone } from "@/components/MediaZone";
import { FAQ_ITEMS } from "@/data/faq";

export const metadata = { title: "FAQ — R2JC" };

export default function FAQ() {
  return (
    <section className="bg-pearl text-noir min-h-screen pt-32 md:pt-40 pb-24">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <p className="font-mono text-[11px] uppercase tracking-wider-2 opacity-60 mb-6 text-center">
          FAQ
        </p>
        <h1 className="font-display font-light text-display-md text-center mb-6 leading-[1.05]">
          <span className="font-semibold">FAQ</span>
        </h1>
        <p className="font-display font-light text-xl md:text-3xl text-center mb-16 text-noir/70">
          Toutes les réponses à vos questions
        </p>

        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
          <div className="md:col-span-7">
            <Accordion items={FAQ_ITEMS} tone="dark" initialOpen={0} />
          </div>

          <div className="md:col-span-5">
            <MediaZone
              id="FAQ-SAPMI"
              kind="image"
              ratio="4/5"
              priority="P0"
              tone="dark"
              label="@sapmi"
              brief="Portrait — Designer 1ʳᵉ édition. Drop file at /media/home/sapmi-portrait.jpg"
            />
            <p className="mt-5 font-sans text-sm leading-snug text-noir/70">
              <span className="font-semibold text-noir">@sapmi</span>
              <br />
              Designer 1ʳᵉ édition
            </p>
          </div>
        </div>

        <div className="mt-20 text-center border-t border-noir/15 pt-12">
          <p className="font-mono text-[11px] uppercase tracking-wider-2 opacity-60 mb-3">
            Une autre question&nbsp;?
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
