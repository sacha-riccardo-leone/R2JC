import { ImageResponse } from "next/og";

/**
 * Open Graph image — auto-generated at build time via Next's file
 * convention (`src/app/opengraph-image.tsx`). The resulting PNG is
 * referenced from <meta property="og:image"> automatically, and most
 * Twitter/X card consumers fall back to og:image when twitter:image
 * isn't separately set — so this single file feeds every social
 * unfurl: WhatsApp, iMessage, Slack, Discord, LinkedIn, X.
 *
 * Standard OG canvas size 1200 × 630. Layout matches the Reworked
 * §1 cold-open aesthetic: massive "R2JC" wordmark centered on black,
 * tagline underneath. Uses system-ui as font fallback since loading
 * Montserrat from a remote URL at edge runtime would add latency to
 * every social-unfurl crawler hit; system-ui renders as a clean
 * grotesque on every platform.
 */

export const alt = "R2JC — Rencontre de Jeunes Créateurs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#000",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        }}
      >
        {/* Big R2JC wordmark — analogous to the §1 cold-open on /r */}
        <div
          style={{
            fontSize: 320,
            fontWeight: 900,
            letterSpacing: "-0.05em",
            lineHeight: 0.9,
          }}
        >
          R2JC
        </div>

        {/* Tagline underneath in mono-uppercase chrome */}
        <div
          style={{
            fontSize: 28,
            marginTop: 60,
            opacity: 0.55,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
          }}
        >
          Rencontre de Jeunes Créateurs
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
