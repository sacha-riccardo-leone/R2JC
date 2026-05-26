# R2JC — Rencontre de Jeunes Créateurs

A platform, movement, and cultural ecosystem for emerging Swiss creators.
This repository hosts the redesigned r2jc.ch — built for deployment on Vercel.

> « Ceux que l'on découvre avant les autres. »

## Stack

- **Next.js 15** · App Router · React 19 · TypeScript
- **Tailwind CSS 3.4** with custom R2JC design tokens
- **Lenis** smooth scroll (mounted globally, opt-out per page)
- **i18n** — cookie-based FR / EN / DE / IT, no FOUC. Server helpers in
  `src/i18n/server.ts`, client provider in `src/i18n/index.tsx`.
- **Native HTML5 `<video>`** for chrome-free playback. No YouTube embeds.
- **GSAP** available, but most motion is hand-rolled CSS / `requestAnimationFrame`.

## Site map

```
/                   Home — hero video + manifesto blocks + Edition 02 reel + FAQ
/editions           Magazine-cover gallery (hover any cover to fan its pages)
  /editions/01      Retrospective — TBD
  /editions/02      The 2024 edition · 16 designer specimen plates
  /editions/03      The upcoming edition · countdown + lineup + RSVP
/postuler           Open call — designer application (mailto)
/presse             Press kit · boilerplates · accreditation form (mailto)
/contact            Newsletter + direct contact
/faq                Frequently asked questions
/sponsors           Partner wall
/api/edition-03.ics RFC 5545 calendar feed for Edition 03
```

## Design tokens

Black + silver + warm gray + white. No accent color — the visual heat
comes from typographic weight contrast.

| Token       | Hex       | Use                                    |
| ----------- | --------- | -------------------------------------- |
| `noir`      | `#000000` | Headers, hero type, footer background  |
| `silver`    | `#919296` | Primary gray — buttons, secondary type |
| `pearl`     | `#C3C3C3` | Body background, warm light gray       |
| `mist`      | `#E5E5E5` | Light text on dark, dividers on dark   |
| `graphite`  | `#2A373C` | Dark divider color                     |
| `blanc`     | `#FFFFFF` | Pure white                             |

Typography: **Montserrat** (display / nav) · **Poppins** (body) ·
**Roboto Mono** (utility / labels).

## Local development

```bash
npm install
npm run dev          # next dev --turbopack
npm run dev:clean    # wipe .next/ then start dev (use when Turbopack chokes)
npm run typecheck    # tsc --noEmit
npm run lint         # next lint
```

Open <http://localhost:3000>. No env vars required.

## MediaZone fallback system

Every image / video slot is a `<MediaZone>` with a stable ID (`HOME-V1`,
`ED02-PORTRAIT-<slug>`, …). Until R2JC delivers the asset, an elegant
typographic fallback shows the ID, priority, and content brief — so the
site is launch-ready *before* assets arrive. Pass `src="..."` to fill a
zone.

See `MEDIA-ZONES.md` for the full map.

## Editions data

Edition 02's designer roster lives in `src/data/designers.ts`
(`DESIGNERS_EDITION_02`). Each entry holds slug, brand, localized bio,
contact links, portrait + logo paths, and a list of runway-look filenames
in `/public/media/editions-archive/`. Files referenced but missing on
disk fall back to typographic placeholders — no broken images ever ship.

## Deployment

Vercel — push to `main` and the dashboard handles the rest. No env vars
needed for the prototype.

## Brand voice

Declarative. Manifesto-cadenced. Short sentences. Long silences. Never
explain — always assert.
