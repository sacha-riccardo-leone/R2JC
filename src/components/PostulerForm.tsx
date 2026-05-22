"use client";

import { useState, type FormEvent } from "react";
import { useT } from "@/i18n";

/**
 * PostulerForm — designer open-call application form.
 *
 * Submission strategy (prototype): the form composes an email body containing
 * every field and opens the user's email client with `mailto:info@r2jc.ch`
 * pre-filled. Zero backend. Production upgrade: replace the mailto: with a
 * POST to a Next.js API route that pushes to a service (Resend, Sendgrid, ...)
 * and stores the submission. The form fields and validation stay identical.
 */
export function PostulerForm() {
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
    const href = `mailto:Info@r2jc.ch?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(lines)}`;

    // Open user's email client with the application pre-filled
    window.location.href = href;
    setSubmitted(true);
  };

  // Reusable input + textarea styles
  const inputClass =
    "w-full bg-transparent border-b border-noir/30 py-2 font-sans text-base focus:outline-none focus:border-noir transition-colors";
  const labelClass =
    "block font-mono text-[11px] uppercase tracking-wider-2 opacity-70 mb-2";
  const hintClass =
    "mt-1 font-mono text-[10px] uppercase tracking-wider-2 text-noir/40";
  const sectionLabel =
    "font-mono text-[11px] uppercase tracking-wider-2 text-noir/60 mb-6 pb-3 border-b border-noir/15";

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <p className="font-mono text-[11px] uppercase tracking-wider-2 opacity-60 mb-4">
          ※
        </p>
        <h2 className="font-display font-light text-display-md mb-6 leading-tight">
          <span className="font-semibold">{p.success.title}</span>
        </h2>
        <p className="max-w-prose mx-auto font-sans text-base md:text-lg text-noir/80 leading-relaxed mb-10">
          {p.success.body}
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="inline-block font-mono text-[11px] uppercase tracking-wider-2 border-b border-noir hover:text-silver hover:border-silver transition-colors"
        >
          {p.success.again} →
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="max-w-2xl mx-auto space-y-16"
      noValidate
    >
      {/* Section 1 — About */}
      <fieldset>
        <legend className={sectionLabel + " block w-full"}>
          ※ {p.sections.about}
        </legend>
        <div className="space-y-8">
          <div>
            <label className={labelClass}>{p.labels.fullName}</label>
            <input type="text" name="fullName" required className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>{p.labels.email}</label>
            <input type="email" name="email" required className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>{p.labels.phone}</label>
            <input type="tel" name="phone" className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>{p.labels.link}</label>
            <input type="text" name="link" className={inputClass} />
          </div>
        </div>
      </fieldset>

      {/* Section 2 — Practice */}
      <fieldset>
        <legend className={sectionLabel + " block w-full"}>
          ※ {p.sections.practice}
        </legend>
        <div className="space-y-8">
          <div>
            <label className={labelClass}>{p.labels.discipline}</label>
            <select
              name="discipline"
              required
              defaultValue=""
              className={inputClass + " appearance-none cursor-pointer"}
            >
              <option value="" disabled></option>
              <option value="Mode">{p.disciplines.mode}</option>
              <option value="Photographie">{p.disciplines.photography}</option>
              <option value="Performance">{p.disciplines.performance}</option>
              <option value="Direction artistique">
                {p.disciplines.artDirection}
              </option>
              <option value="Son">{p.disciplines.sound}</option>
              <option value="Autre">{p.disciplines.other}</option>
            </select>
          </div>
          <div>
            <label className={labelClass}>{p.labels.q1}</label>
            <textarea
              name="q1"
              required
              rows={5}
              className={inputClass + " resize-none"}
            />
            <p className={hintClass}>{p.labels.q1Hint}</p>
          </div>
        </div>
      </fieldset>

      {/* Section 3 — Work */}
      <fieldset>
        <legend className={sectionLabel + " block w-full"}>
          ※ {p.sections.work}
        </legend>
        <div className="space-y-8">
          <div>
            <label className={labelClass}>{p.labels.q2}</label>
            <textarea
              name="q2"
              required
              rows={5}
              className={inputClass + " resize-none"}
            />
            <p className={hintClass}>{p.labels.q2Hint}</p>
          </div>
          <div>
            <label className={labelClass}>{p.labels.portfolio}</label>
            <input
              type="url"
              name="portfolio"
              placeholder="https://..."
              className={inputClass}
            />
            <p className={hintClass}>{p.labels.portfolioHint}</p>
          </div>
        </div>
      </fieldset>

      {/* Section 4 — Vision */}
      <fieldset>
        <legend className={sectionLabel + " block w-full"}>
          ※ {p.sections.vision}
        </legend>
        <div>
          <label className={labelClass}>{p.labels.q3}</label>
          <textarea
            name="q3"
            required
            rows={4}
            className={inputClass + " resize-none"}
          />
          <p className={hintClass}>{p.labels.q3Hint}</p>
        </div>
      </fieldset>

      {/* Submit */}
      <div className="pt-4">
        <button
          type="submit"
          className="bg-noir text-blanc px-10 py-4 rounded font-sans text-sm tracking-[0.02em] hover:bg-silver transition-colors duration-500"
        >
          {p.submit}
        </button>
        <p className={hintClass + " mt-4"}>{p.status.promise}</p>
      </div>
    </form>
  );
}
