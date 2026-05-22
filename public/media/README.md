# R2JC media folder

Drop all the brand assets here. Each MediaZone in the codebase points to a
predictable filename — once a file exists at the expected path, the prototype
automatically replaces the typographic fallback with the real asset.

## Folder layout

```
public/media/
├── press/        Press logos (header: "Ils parlent de nous")
├── sponsors/     Sponsor logos (Sponsors page)
├── editions/     Edition cover images + designer portraits
├── home/         Homepage hero stills, @sapmi portrait
└── README.md     This file
```

## Naming convention

- Lowercase, kebab-case (`le-journal-du-jura.png`, not `Le_Journal_Du_Jura.png`)
- Prefer SVG > PNG > JPG for logos
- For raster: 2× the displayed size minimum, sRGB color profile
- Strip background (transparent PNG) when possible — the page background varies by section

See the per-folder README for the exact expected filenames.
