# R2JC — Backlog

Ideas approved in principle but **deferred** — not part of the current build
priority. Pick up when the higher-priority items are shipped or when time/budget
allows.

---

## Deferred — voice notes from designers

**Status:** deferred (originally suggestion #7 from the product brainstorm).

**What it is:** a 15–30 second voice memo from each designer playing inline on
their `/editions` card. Phone-quality audio is fine — intimacy beats production
value here.

**Why it matters:** emotional connection no bio paragraph can match. Distinctly
contemporary (post-2025 voice-note culture). Almost zero production cost.

**Implementation sketch:**
- One MP3 per designer at `public/media/designers/voice/{slug}.mp3`
- Add `voice?: string` to `Designer` type in `src/data/designers.ts`
- Discreet play button next to the brand caption inside the Specimen Plate
- Custom monospace play indicator (no native `<audio controls>` chrome) — same
  philosophy as the chrome-free hero video
- Single-track at a time across the page (playing one pauses others)
- Auto-pause on scroll-out via IntersectionObserver

---

## Deferred — downloadable PDF lookbook per edition

**Status:** deferred (originally suggestion #8 from the product brainstorm).

**What it is:** a 30-page PDF generated from the existing designer data in the
same Specimen Plate visual language. Available at `/editions/02/lookbook.pdf`.

**Why it matters:** designers share it to their buyers/press contacts (free
marketing), sponsors include it in their year-end reports (proof of value),
zero ongoing labor once the generator is in place.

**Implementation sketch:**
- Server route handler at `app/editions/[edition]/lookbook.pdf/route.ts`
- Render with React-PDF (`@react-pdf/renderer`) — pure JS, no headless browser
- One spread per designer: portrait + logo + bio + 6 looks
- Cover page with edition number + dates + sponsor wall
- Cache the generated PDF (it only changes when designers data does)
- "Download lookbook" CTA on `/editions` hero section

---

When you're ready to pick these up, the data structures are already in place
(`bio: LocalizedBio`, `looks: string[]`). Both are mostly UI + integration work.
