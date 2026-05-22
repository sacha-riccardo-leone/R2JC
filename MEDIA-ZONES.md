# R2JC — Media Zone Map

Every photo/video placement across the site has a stable ID. Until R2JC
delivers an asset, the corresponding `<MediaZone>` shows an elegant
typographic fallback with the ID, priority, and brief — so the site is
launch-ready before any media arrives.

**Priority:** `P0` = essential · `P1` = important · `P2` = enhancement

---

## Homepage — `/`

| ID            | Kind  | Ratio | Priority | Brief                                                                                  |
| ------------- | ----- | ----- | -------- | -------------------------------------------------------------------------------------- |
| `HOME-V1`     | video | 16/9  | P0       | Silent ambient clip from Édition 02. Fabric, a face turning, an empty venue. 12–20s.   |
| `HOME-G1-01…08` | image | 4/5   | P0     | Designer portraits — front-facing, eye contact, neutral bg.                            |
| `HOME-I1`     | image | 16/9  | P0       | Édition 03 hero — venue empty, OR teaser still. Typographic-only fallback also works.  |
| `HOME-G2`     | image | 3/4   | P1       | Past edition crossfade previews (3 images per edition).                                |

## Manifeste — `/manifeste`

| ID          | Kind  | Ratio | Priority | Brief                                                          |
| ----------- | ----- | ----- | -------- | -------------------------------------------------------------- |
| `MAN-I1–I4` | image | mixed | P1       | Editorial atmosphere — backstage, hands, paper running orders. |
| `MAN-P1`    | image | 1:1   | P2       | Founders portrait grid.                                        |

## Éditions — `/editions/*`

| ID                                   | Kind  | Ratio | Priority | Brief                                          |
| ------------------------------------ | ----- | ----- | -------- | ---------------------------------------------- |
| `ED-COVER-01`, `ED-COVER-02`, `ED-COVER-03` | image | 3/4   | P0       | Edition cover images.                          |
| `ED-VID-02`                          | video | 16/9  | P0       | Full Édition 02 recap (already on YouTube).    |
| `ED-GAL-01`, `ED-GAL-02`             | gallery | mixed | P1     | 20–40 photographs per past edition.            |
| `ED-VID-01-CLIPS`, `ED-VID-02-CLIPS` | video | mixed | P2       | Short backstage micro-clips, 3–6s silent loops.|

## Créateurs — `/createurs`

| ID                       | Kind    | Ratio | Priority | Brief                                          |
| ------------------------ | ------- | ----- | -------- | ---------------------------------------------- |
| `CR-PORT-[handle]`       | image   | 4/5   | P0       | One portrait per designer.                     |
| `CR-WORK-[handle]-1..n`  | gallery | mixed | P1       | 6–12 work samples per designer.                |

## Participer — `/participer`

| ID        | Kind  | Ratio | Priority | Brief                                                                  |
| --------- | ----- | ----- | -------- | ---------------------------------------------------------------------- |
| `PART-V1` | video | 3/4   | P2       | Ambient — hand opening a door, chair placed, paper laid down. 10s loop.|

## Presse — `/presse`

| ID                       | Kind  | Ratio | Priority | Brief                                          |
| ------------------------ | ----- | ----- | -------- | ---------------------------------------------- |
| `PRESS-LOGO-[outlet]`    | image | —     | P1       | SVG press logo (Télé Bilingue, Le Journal du Jura, À Jour, Le Quotidien). |
| `PART-PORT-[partner]`    | image | 1:1   | P2       | Partner portrait blocks.                       |

---

## How to fill a zone once assets arrive

```tsx
<MediaZone
  id="HOME-V1"
  kind="video"
  ratio="16/9"
  priority="P0"
  brief="..."
  src="/media/home-v1-edition02-ambient.mp4"  // ← just add this
/>
```

The typographic fallback disappears, the asset takes over. No layout shift.

---

## Request email template (FR) to send R2JC

```
Bonjour l'équipe R2JC,

Je travaille sur une refonte visuelle du site r2jc.ch.
Pour avancer, j'aurais besoin d'accéder aux matériaux suivants
(ordre de priorité décroissant) :

PRIORITÉ 1 — INDISPENSABLE
  · Rushes / clips bruts de l'Édition 02 (en plus de la vidéo YouTube)
  · 6 à 12 portraits de créateurs (4:5, haute résolution)
  · Images de couverture pour Éditions 01, 02, 03

PRIORITÉ 2 — IMPORTANT
  · Galerie photo complète des Éditions 01 et 02
  · Logos vectoriels (SVG) de la presse : Télé Bilingue, Le Journal
    du Jura, À Jour, Le Quotidien

PRIORITÉ 3 — BONUS
  · Stories Instagram / clips TikTok archivés
  · Portraits des fondateurs

Le site est conçu pour fonctionner même sans certains éléments —
les zones manquantes ont une version typographique élégante par défaut.
Aucun blocage si tout n'est pas disponible immédiatement.

Transfert via Google Drive, WeTransfer ou Dropbox, au choix.

Merci,
[ton nom]
```
