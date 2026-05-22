# R2JC — Rencontre de Jeunes Créateurs

A platform, movement, and cultural ecosystem for emerging Swiss creators.
This repository hosts the redesigned r2jc.ch — built for deployment on Vercel.

```
01  ACCUEIL          Home — six-act manifesto entrance
02  MANIFESTE        Long-read philosophy
03  ÉDITIONS         The archive — past + upcoming
04  CRÉATEURS        Designer index
05  PARTICIPER       Recruitment / application
06  PRESSE           Media + partners
07  CONTACT          Including newsletter
```

## Stack

- **Next.js 15** · App Router · React 19 · TypeScript
- **Tailwind CSS 3.4** with custom R2JC design tokens
- **Lenis** smooth scroll
- **GSAP** for cinematic transitions (reserved for production polish)
- **next/font** (Instrument Serif / Inter / JetBrains Mono — placeholders for self-hosted Migra + Neue Haas + ABC Diatype Mono)

## Design tokens

| Token       | Hex       | Use                                    |
| ----------- | --------- | -------------------------------------- |
| `ink`       | `#0A0A0B` | Base / type / void                     |
| `bone`      | `#F2EEE6` | Cream-white surface                    |
| `plaster`   | `#C8C2B6` | Secondary surface                      |
| `steel`     | `#1F2326` | Cool deep neutral                      |
| `cinabre`   | `#D63A1A` | Accent — max twice per page            |

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Media zones

Every photo/video placement is a `<MediaZone>` with a stable ID
(`HOME-V1`, `HOME-G1-01`, `ED-VID-02`, …). Until R2JC delivers
the asset, an elegant typographic fallback shows the ID, priority,
and content brief — so the site is launch-ready *before* assets arrive.

When an asset is delivered, just pass `src="..."` to the corresponding
zone and the fallback disappears.

See the full Media Zone Map in `MEDIA-ZONES.md` (to be added).

## Deployment to Vercel

```bash
npx vercel        # link the project
npx vercel --prod # deploy
```

Or push to GitHub and import via the Vercel dashboard. No env vars
are required for the prototype.

## Brand voice

> « Ceux que l'on découvre avant les autres. »
> *Those discovered before the rest.*

Declarative. Manifesto-cadenced. Short sentences. Long silences.
Never explain — always assert.
