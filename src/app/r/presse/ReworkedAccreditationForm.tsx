"use client";

import { useState, type FormEvent } from "react";
import { useT } from "@/i18n";

/**
 * ReworkedAccreditationForm — dark-theme accreditation request form.
 * Same field structure and mailto submission as the Upgraded
 * AccreditationForm; restyled with bg-transparent inputs and
 * border-blanc/30 underlines for the Reworked page.
 */
export function ReworkedAccreditationForm() {
  const { t } = useT();
  const a = t.presse.accreditation;

  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (key: string) => (data.get(key) ?? "").toString().trim();

    const lines = [
      `${a.labels.name}: ${get("name")}`,
      `${a.labels.outlet}: ${get("outlet")}`,
      `${a.labels.role}: ${get("role")}`,
      `${a.labels.email}: ${get("email")}`,
      "",
      `${a.labels.message}:`,
      get("message"),
    ].join("\n");

    const subject = `Accréditation presse R2JC — ${get("outlet") || "Média"}`;
    const mailto = `mailto:Info@r2jc.ch?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(lines)}`;

    window.location.href = mailto;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <p className="font-mono text-[11px] uppercase tracking-wider-2 text-blanc/40 mb-6">
          ✓
        </p>
        <h3 className="font-display text-2xl md:text-4xl font-semibold leading-tight tracking-[-0.03em] mb-6">
          {a.success.title}
        </h3>
        <p className="font-sans text-base md:text-lg text-blanc/70 leading-relaxed mb-8 max-w-prose mx-auto">
          {a.success.body}
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="font-mono text-[11px] uppercase tracking-wider-2 border-b border-blanc/60 hover:text-silver hover:border-silver transition-colors pb-1"
        >
          {a.success.again} ↺
        </button>
      </div>
    );
  }

  const textInput = (
    name: string,
    label: string,
    type = "text",
    required = true
  ) => (
    <div>
      <label className="block font-mono text-[11px] uppercase tracking-wider-2 text-blanc/40 mb-3">
        {label}
        {required && <span className="text-blanc/30"> *</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full bg-transparent border-b border-blanc/30 py-3 font-sans text-base md:text-lg text-blanc focus:outline-none focus:border-blanc transition-colors"
      />
    </div>
  );

  return (
    <form onSubmit={onSubmit} className="space-y-10">
      <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
        {textInput("name", a.labels.name)}
        {textInput("outlet", a.labels.outlet)}
        {textInput("role", a.labels.role, "text", false)}
        {textInput("email", a.labels.email, "email")}
      </div>
      <div>
        <label className="block font-mono text-[11px] uppercase tracking-wider-2 text-blanc/40 mb-3">
          {a.labels.message} <span className="text-blanc/30">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={5}
          className="w-full bg-transparent border-b border-blanc/30 py-3 font-sans text-base md:text-lg text-blanc focus:outline-none focus:border-blanc transition-colors resize-none"
        />
      </div>
      <div className="pt-6">
        <button
          type="submit"
          className="font-mono text-[11px] uppercase tracking-wider-2 border-b border-blanc hover:text-silver hover:border-silver transition-colors pb-1"
        >
          {a.submit}
        </button>
      </div>
    </form>
  );
}
