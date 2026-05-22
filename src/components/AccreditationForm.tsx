"use client";

import { useState, type FormEvent } from "react";
import { useT } from "@/i18n";

/**
 * AccreditationForm — press accreditation request.
 *
 * Same prototype submission pattern as PostulerForm: composes a pre-filled
 * email body and opens the user's email client. Production upgrade: swap
 * window.location = mailto: for a POST to an API route.
 */
export function AccreditationForm() {
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
      `${a.labels.message}`,
      get("message"),
    ].join("\n");

    const subject = `Accréditation presse R2JC — ${get("outlet") || get("name") || ""}`;
    const href = `mailto:Info@r2jc.ch?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(lines)}`;

    window.location.href = href;
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-transparent border-b border-noir/30 py-2 font-sans text-base focus:outline-none focus:border-noir transition-colors";
  const labelClass =
    "block font-mono text-[11px] uppercase tracking-wider-2 text-noir/55 mb-2";

  if (submitted) {
    return (
      <div className="text-center py-8">
        <p className="font-mono text-[11px] uppercase tracking-wider-2 opacity-60 mb-4">
          ※
        </p>
        <h3 className="font-display font-light text-3xl md:text-4xl mb-6 leading-tight">
          <span className="font-semibold">{a.success.title}</span>
        </h3>
        <p className="max-w-prose mx-auto font-sans text-base text-noir/80 leading-relaxed mb-8">
          {a.success.body}
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="font-mono text-[11px] uppercase tracking-wider-2 border-b border-noir hover:text-silver hover:border-silver transition-colors"
        >
          {a.success.again} →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8" noValidate>
      <div>
        <label className={labelClass}>{a.labels.name}</label>
        <input type="text" name="name" required className={inputClass} />
      </div>
      <div>
        <label className={labelClass}>{a.labels.outlet}</label>
        <input type="text" name="outlet" required className={inputClass} />
      </div>
      <div>
        <label className={labelClass}>{a.labels.role}</label>
        <input type="text" name="role" className={inputClass} />
      </div>
      <div>
        <label className={labelClass}>{a.labels.email}</label>
        <input type="email" name="email" required className={inputClass} />
      </div>
      <div>
        <label className={labelClass}>{a.labels.message}</label>
        <textarea
          name="message"
          required
          rows={4}
          className={inputClass + " resize-none"}
        />
      </div>
      <div className="pt-2">
        <button
          type="submit"
          className="bg-noir text-blanc px-8 py-3 rounded font-sans text-sm tracking-[0.02em] hover:bg-silver transition-colors duration-500"
        >
          {a.submit}
        </button>
      </div>
    </form>
  );
}
