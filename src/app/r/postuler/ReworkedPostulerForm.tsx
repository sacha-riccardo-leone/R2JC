"use client";

import { useState, type FormEvent } from "react";
import { useT } from "@/i18n";

/**
 * ReworkedPostulerForm — same field structure and mailto submission
 * pattern as the Upgraded PostulerForm, restyled for the dark Reworked
 * theme (transparent inputs with border-blanc/30 underlines, mono
 * labels at text-blanc/40, white-banner submit at the bottom).
 *
 * Submission strategy: composes an email body containing every field
 * and opens the visitor's email client with mailto:Info@r2jc.ch
 * pre-filled. No backend.
 */
export function ReworkedPostulerForm() {
  const { t } = useT();
  const p = t.postuler;

  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (key: string) => (data.get(key) ?? "").toString().trim();

    const lines = [
      `[ ${p.sections.about.toUpperCase()} ]`,
      `${p.labels.fullName}: ${get("fullName")}`,
      `${p.labels.email}: ${get("email")}`,
      `${p.labels.phone}: ${get("phone")}`,
      `${p.labels.link}: ${get("link")}`,
      "",
      `[ ${p.sections.practice.toUpperCase()} ]`,
      `${p.labels.discipline}: ${get("discipline")}`,
      `${p.labels.q1}`,
      get("q1"),
      "",
      `[ ${p.sections.work.toUpperCase()} ]`,
      `${p.labels.q2}`,
      get("q2"),
      "",
      `${p.labels.portfolio}: ${get("portfolio")}`,
      "",
      `[ ${p.sections.vision.toUpperCase()} ]`,
      `${p.labels.q3}`,
      get("q3"),
    ].join("\n");

    const subject = `Candidature R2JC — ${get("fullName") || "Sans nom"}`;
    const mailto = `mailto:Info@r2jc.ch?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(lines)}`;

    window.location.href = mailto;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto text-center py-16">
        <p className="font-mono text-[11px] uppercase tracking-wider-2 text-blanc/40 mb-6">
          ✓
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight tracking-[-0.03em] mb-6">
          {p.success.title}
        </h2>
        <p className="font-sans text-base md:text-lg text-blanc/70 leading-relaxed mb-10">
          {p.success.body}
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="font-mono text-[11px] uppercase tracking-wider-2 border-b border-blanc/60 hover:text-silver hover:border-silver transition-colors pb-1"
        >
          {p.success.again} ↺
        </button>
      </div>
    );
  }

  const sectionHeader = (num: string, label: string) => (
    <div className="flex items-baseline gap-4 mb-10 md:mb-12">
      <span className="font-mono text-xs tabular-nums text-blanc/40">{num}</span>
      <span className="font-mono text-[11px] uppercase tracking-wider-2 text-blanc/60">
        {label}
      </span>
    </div>
  );

  const textInput = (
    name: string,
    label: string,
    opts: { type?: string; required?: boolean; hint?: string } = {}
  ) => (
    <div>
      <label className="block font-mono text-[11px] uppercase tracking-wider-2 text-blanc/40 mb-3">
        {label}
        {opts.required && <span className="text-blanc/30"> *</span>}
      </label>
      <input
        name={name}
        type={opts.type ?? "text"}
        required={opts.required}
        className="w-full bg-transparent border-b border-blanc/30 py-3 font-sans text-base md:text-lg text-blanc placeholder:text-blanc/30 focus:outline-none focus:border-blanc transition-colors"
      />
      {opts.hint && (
        <p className="mt-2 font-mono text-[10px] uppercase tracking-wider-2 text-blanc/30">
          {opts.hint}
        </p>
      )}
    </div>
  );

  const textareaInput = (
    name: string,
    label: string,
    opts: { required?: boolean; hint?: string; rows?: number } = {}
  ) => (
    <div>
      <label className="block font-mono text-[11px] uppercase tracking-wider-2 text-blanc/40 mb-3">
        {label}
        {opts.required && <span className="text-blanc/30"> *</span>}
      </label>
      <textarea
        name={name}
        required={opts.required}
        rows={opts.rows ?? 5}
        className="w-full bg-transparent border-b border-blanc/30 py-3 font-sans text-base md:text-lg text-blanc focus:outline-none focus:border-blanc transition-colors resize-none"
      />
      {opts.hint && (
        <p className="mt-2 font-mono text-[10px] uppercase tracking-wider-2 text-blanc/30">
          {opts.hint}
        </p>
      )}
    </div>
  );

  return (
    <form onSubmit={onSubmit} className="space-y-20 md:space-y-24">
      {/* SECTION 01 — about */}
      <div>
        {sectionHeader("01", p.sections.about)}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {textInput("fullName", p.labels.fullName, { required: true })}
          {textInput("email", p.labels.email, { type: "email", required: true })}
          {textInput("phone", p.labels.phone)}
          {textInput("link", p.labels.link)}
        </div>
      </div>

      {/* SECTION 02 — practice */}
      <div>
        {sectionHeader("02", p.sections.practice)}
        <div className="space-y-10">
          <div>
            <label className="block font-mono text-[11px] uppercase tracking-wider-2 text-blanc/40 mb-4">
              {p.labels.discipline} <span className="text-blanc/30">*</span>
            </label>
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {(
                [
                  { value: "mode",          label: p.disciplines.mode },
                  { value: "photography",   label: p.disciplines.photography },
                  { value: "performance",   label: p.disciplines.performance },
                  { value: "artDirection",  label: p.disciplines.artDirection },
                  { value: "sound",         label: p.disciplines.sound },
                  { value: "other",         label: p.disciplines.other },
                ] as const
              ).map((opt) => (
                <label
                  key={opt.value}
                  className="inline-flex items-center gap-3 cursor-pointer group"
                >
                  <input
                    type="radio"
                    name="discipline"
                    value={opt.value}
                    required
                    className="accent-blanc w-4 h-4"
                  />
                  <span className="font-mono text-[11px] uppercase tracking-wider-2 text-blanc/70 group-hover:text-blanc transition-colors">
                    {opt.label}
                  </span>
                </label>
              ))}
            </div>
          </div>
          {textareaInput("q1", p.labels.q1, {
            required: true,
            hint: p.labels.q1Hint,
          })}
        </div>
      </div>

      {/* SECTION 03 — work */}
      <div>
        {sectionHeader("03", p.sections.work)}
        <div className="space-y-10">
          {textareaInput("q2", p.labels.q2, {
            required: true,
            hint: p.labels.q2Hint,
          })}
          {textInput("portfolio", p.labels.portfolio, {
            required: true,
            hint: p.labels.portfolioHint,
          })}
        </div>
      </div>

      {/* SECTION 04 — vision */}
      <div>
        {sectionHeader("04", p.sections.vision)}
        {textareaInput("q3", p.labels.q3, {
          required: true,
          hint: p.labels.q3Hint,
          rows: 4,
        })}
      </div>

      {/* SUBMIT — white block, matches the §3 03 banner aesthetic */}
      <div className="pt-10 -mx-6 md:-mx-10">
        <button
          type="submit"
          className="group block w-full bg-blanc text-noir hover:bg-mist transition-colors duration-500 ease-editorial"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16 grid grid-cols-12 gap-x-4 md:gap-x-8 items-baseline relative text-left">
            <div className="col-span-12 md:col-span-8 md:pr-44">
              <p className="font-mono text-[11px] uppercase tracking-wider-2 text-noir/40 mb-3">
                Envoyer
              </p>
              <span className="font-display font-medium text-2xl md:text-4xl leading-tight tracking-[-0.02em]">
                {p.submit}
              </span>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-wider-2 text-noir/50">
                {p.status.promise}
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
        </button>
      </div>
    </form>
  );
}
