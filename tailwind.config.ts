import type { Config } from "tailwindcss";

/**
 * R2JC design tokens.
 * Two voices: a display serif and a mechanical grotesque.
 * Palette restraint is the luxury — one heat moment, the rest is ink and bone.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0B",
        bone: "#F2EEE6",
        plaster: "#C8C2B6",
        steel: "#1F2326",
        cinabre: "#D63A1A",
      },
      fontFamily: {
        // Self-hosted later; for the prototype we use the next-best web stacks.
        display: [
          "var(--font-display)",
          "Times New Roman",
          "ui-serif",
          "Georgia",
          "serif",
        ],
        sans: [
          "var(--font-sans)",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        mono: [
          "var(--font-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },
      fontSize: {
        // Editorial scale — overshoots default Tailwind for hero typography.
        "display-sm": ["clamp(3.5rem, 8vw, 6rem)", { lineHeight: "0.9", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(5rem, 12vw, 10rem)", { lineHeight: "0.85", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(7rem, 18vw, 16rem)", { lineHeight: "0.82", letterSpacing: "-0.03em" }],
        "display-xl": ["clamp(10rem, 22vw, 22rem)", { lineHeight: "0.8", letterSpacing: "-0.04em" }],
      },
      letterSpacing: {
        "wider-2": "0.12em",
        "wider-3": "0.18em",
      },
      maxWidth: {
        "prose-edition": "56ch",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
        curtain: "cubic-bezier(0.65, 0, 0.35, 1)",
      },
      keyframes: {
        "rise-in": {
          from: { opacity: "0", transform: "translateY(40px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "wipe-in": {
          from: { clipPath: "inset(0 100% 0 0)" },
          to: { clipPath: "inset(0 0 0 0)" },
        },
        "breathe": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.005)" },
        },
      },
      animation: {
        "rise-in": "rise-in 900ms cubic-bezier(0.22, 1, 0.36, 1) both",
        "wipe-in": "wipe-in 1200ms cubic-bezier(0.65, 0, 0.35, 1) both",
        "breathe": "breathe 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
