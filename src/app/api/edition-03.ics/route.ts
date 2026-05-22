/**
 * Edition 03 — iCalendar feed.
 * GET /api/edition-03.ics  →  text/calendar download
 *
 * The visitor clicks "Add to calendar" on /editions/03 and downloads this file.
 * Apple Calendar / Google Calendar / Outlook all accept it natively.
 *
 * Per RFC 5545: CRLF line endings, UTC datetimes, escaped commas/semicolons.
 */

export const dynamic = "force-static";

function formatUtc(iso: string) {
  // 2026-11-14T18:00:00+01:00 → 20261114T170000Z
  return new Date(iso)
    .toISOString()
    .replace(/[-:]/g, "")
    .replace(/\.\d{3}/, "");
}

const EVENT = {
  start: "2026-09-12T18:00:00+02:00",
  end: "2026-09-12T23:00:00+02:00",
  uid: "edition-03-2026@r2jc.ch",
  summary: "R2JC — Édition 03",
  location: "Suisse — lieu à venir",
  description:
    "Rencontre de Jeunes Créateurs — Édition 03. Seize créateurs émergents en Suisse. Le lieu sera annoncé prochainement. Plus d'informations : https://r2jc.ch/editions/03",
  url: "https://r2jc.ch/editions/03",
};

export function GET() {
  const now = formatUtc(new Date().toISOString());

  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//R2JC//Edition 03//FR",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${EVENT.uid}`,
    `DTSTAMP:${now}`,
    `DTSTART:${formatUtc(EVENT.start)}`,
    `DTEND:${formatUtc(EVENT.end)}`,
    `SUMMARY:${EVENT.summary}`,
    `LOCATION:${EVENT.location}`,
    // RFC 5545 requires escaping commas & semicolons in DESCRIPTION
    `DESCRIPTION:${EVENT.description.replace(/,/g, "\\,").replace(/;/g, "\\;")}`,
    `URL:${EVENT.url}`,
    "STATUS:CONFIRMED",
    "TRANSP:OPAQUE",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  return new Response(ics, {
    status: 200,
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition":
        'attachment; filename="r2jc-edition-03.ics"',
      "Cache-Control": "public, max-age=3600",
    },
  });
}
