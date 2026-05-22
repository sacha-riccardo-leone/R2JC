import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SmoothScroll } from "@/components/SmoothScroll";

/**
 * Type pairing — provisional, web-stack approximations of the recommended
 * Set B (Migra + Neue Haas Grotesk + ABC Diatype Mono). To be replaced with
 * self-hosted woff2 once licenses are acquired.
 */
const display = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "R2JC — Rencontre de Jeunes Créateurs",
  description:
    "Une plateforme suisse pour les créateurs émergents. Mode, art, identité, culture. Édition 03 — Bienne, automne 2026.",
  metadataBase: new URL("https://r2jc.ch"),
  openGraph: {
    title: "R2JC — Rencontre de Jeunes Créateurs",
    description: "Ceux que l'on découvre avant les autres.",
    url: "https://r2jc.ch",
    siteName: "R2JC",
    locale: "fr_CH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "R2JC",
    description: "Ceux que l'on découvre avant les autres.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <body className="font-sans bg-ink text-bone">
        <SmoothScroll />
        <ScrollProgress />
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
