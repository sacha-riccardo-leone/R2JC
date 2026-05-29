import { Fragment } from "react";
import Link from "next/link";
import { MediaZone } from "@/components/MediaZone";
import { getDict } from "@/i18n/server";

export const metadata = { title: "Édition 01 — 2023 — R2JC" };

/**
 * /editions/01 — dedicated retrospective for the 2023 edition.
 *
 * The Édition 01 magazine cover on /editions previously linked here
 * but the page didn't exist (404). Now it lands on a short
 * retrospective: masthead, the dict's "où tout a commencé" caption
 * with @sapmi linkified, a cover placeholder, and a path back to the
 * gallery.
 *
 * Sparse on purpose — we don't have a Designer roster, looks archive,
 * or official cover photo for E01 yet. Same content shape as
 * /editions/02's intro masthead, minus the 16 specimen plates.
 */
export default async function Edition01() {
  const t = await getDict();
  const e = t.editions.e01;

  // Linkify the "@sapmi" mention inside the dict-provided caption.
  // `split` with a capture group keeps the marker in the resulting
  // array so we can rebuild the paragraph with mixed nodes.
  const renderCaption = () => {
    const parts = e.caption.split(/(@sapmi)/);
    return (
      <p>
        {parts.map((part, i) =>
          part === "@sapmi" ? (
            <a
              key={i}
              href="https://instagram.com/sapmi"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-silver transition-colors"
            >
              @sapmi
            </a>
          ) : (
            <Fragment key={i}>{part}</Fragment>
          )
        )}
      </p>
    );
  };

  return (
    <>
      {/* Masthead block — same shape and bg as /editions/02's intro. */}
      <section className="bg-pearl text-noir pt-32 md:pt-40 pb-20 md:pb-28 border-b border-noir/10">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <p className="font-mono text-[11px] uppercase tracking-wider-2 opacity-60 mb-6">
            {e.bannerEyebrow}
          </p>
          <h1 className="font-display font-light text-3xl md:text-5xl leading-tight">
            {e.titlePre}{" "}
            <span className="font-semibold">{e.titleAccent}</span>
          </h1>
        </div>
      </section>

      {/* Retrospective — dark section with cover MediaZone on the left,
          eyebrow + caption on the right. MediaZone shows its typographic
          placeholder while R2JC's official E01 cover photo isn't dropped
          in yet. */}
      <section className="bg-noir text-blanc py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-12 gap-y-10 md:gap-x-12 items-start">
            <div className="md:col-span-7">
              <MediaZone
                id="ED01-COVER"
                kind="image"
                ratio="4/5"
                priority="P1"
                tone="light"
                label={e.coverLabel}
                brief="Drop at /media/editions/edition-01-cover.jpg"
              />
            </div>
            <div className="md:col-span-5 space-y-6 md:pt-2">
              <p className="font-mono text-[11px] uppercase tracking-wider-2 opacity-60">
                {e.eyebrow}
              </p>
              <div className="font-sans text-base md:text-lg leading-relaxed text-mist/85">
                {renderCaption()}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Onward navigation — back to the gallery + forward to /editions/02
          (the next edition in chronological order, has actual content). */}
      <section className="bg-pearl text-noir py-14 md:py-16 border-t border-noir/10">
        <div className="max-w-5xl mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            href="/editions"
            className="font-mono text-[11px] uppercase tracking-wider-2 border-b border-noir hover:text-silver hover:border-silver transition-colors pb-1"
          >
            ← Toutes les éditions
          </Link>
          <Link
            href="/editions/02"
            className="font-mono text-[11px] uppercase tracking-wider-2 border-b border-noir hover:text-silver hover:border-silver transition-colors pb-1"
          >
            Édition 02 →
          </Link>
        </div>
      </section>
    </>
  );
}
