import type { Config } from "tailwindcss";

/**
 * R2JC design tokens — aligned with the existing r2jc.ch artistic direction.
 *
 * Palette: black + silver + warm gray + white. No accent color.
 * The "heat" comes from typographic weight contrast and the signature
 * animated-zoom hero word, not from color.
 *
 * Typography: Montserrat (display/nav) + Poppins (body) + Roboto (utility).
 * Same Google fonts the live site uses, with stronger hierarchy.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        noir: "#000000",       // headers, hero text, footer background
        silver: "#919296",     // primary gray — buttons, secondary text
        pearl: "#C3C3C3",      // body background, warm light gray
        mist: "#E5E5E5",       // light text on dark, dividers on dark
        graphite: "#2A373C",   // their dark divider color
        blanc: "#FFFFFF",      // pure white
      },
      fontFamily: {
        display: [
          "var(--font-display)",
          "Montserrat",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        sans: [
          "var(--font-sans)",
          "Poppins",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        mono: [
          "var(--font-mono)",
          "Roboto Mono",
          "ui-monospace",
          "SFMono-Regular",
          "monospace",
        ],
      },
      fontSize: {
        // Display scale, weight-led not size-led to feel Swiss-modernist.
        "display-sm": ["clamp(2.5rem, 5vw, 4rem)",   { lineHeight: "1.05", letterSpacing: "-0.01em" }],
        "display-md": ["clamp(3.5rem, 8vw, 6.5rem)", { lineHeight: "1.02", letterSpacing: "-0.015em" }],
        "display-lg": ["clamp(5rem, 12vw, 10rem)",   { lineHeight: "0.98", letterSpacing: "-0.02em" }],
        "display-xl": ["clamp(6rem, 16vw, 14rem)",   { lineHeight: "0.95", letterSpacing: "-0.025em" }],
      },
      letterSpacing: {
        // Matches their Montserrat nav: 0.6px tracking on uppercase 15px ≈ 0.04em
        nav: "0.04em",
        "wider-2": "0.12em",
        "wider-3": "0.18em",
      },
      maxWidth: {
        prose: "62ch",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
        curtain: "cubic-bezier(0.65, 0, 0.35, 1)",
      },
      keyframes: {
        // R2JC signature — recreates Royal Elementor's wpr-fancy-text-zoom
        "zoom-in-out": {
          "0%":   { opacity: "0", transform: "scale(0)" },
          "20%":  { opacity: "1", transform: "scale(1)" },
          "80%":  { opacity: "1", transform: "scale(1)" },
          "100%": { opacity: "0", transform: "scale(1.6)" },
        },
        "rise-in": {
          from: { opacity: "0", transform: "translateY(30px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        "breathe": {
          "0%, 100%": { transform: "scale(1)" },
          "50%":      { transform: "scale(1.005)" },
        },
        "preview-in": {
          from: { opacity: "0", transform: "scale(0.96) translateY(6px)" },
          to:   { opacity: "1", transform: "scale(1) translateY(0)" },
        },
      },
      animation: {
        "zoom-in-out": "zoom-in-out 3200ms cubic-bezier(0.22, 1, 0.36, 1) infinite",
        "rise-in":     "rise-in 900ms cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-up":     "fade-up 700ms cubic-bezier(0.22, 1, 0.36, 1) both",
        "breathe":     "breathe 4s ease-in-out infinite",
        "preview-in":  "preview-in 220ms cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
