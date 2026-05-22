import type { Metadata, Viewport } from "next";
import { Montserrat, Poppins, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SmoothScroll } from "@/components/SmoothScroll";

/**
 * Type pairing — matches the live r2jc.ch font stack (Montserrat + Poppins)
 * with Roboto Mono for editorial captions and metadata.
 */
const display = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

const sans = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const mono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "R2JC — Rencontre de Jeunes Créateurs",
  description:
    "Une scène aux designers qui méritent d'être découverts. R2JC est un collectif suisse qui valorise les jeunes créateurs.",
  metadataBase: new URL("https://r2jc.ch"),
  icons: {
    icon: [
      { url: "/logo/r2jcLogo.png", sizes: "any" },
    ],
    apple: "/logo/r2jcLogo.png",
  },
  openGraph: {
    title: "R2JC — Rencontre de Jeunes Créateurs",
    description: "Une scène aux designers qui méritent d'être découverts.",
    url: "https://r2jc.ch",
    siteName: "R2JC",
    locale: "fr_CH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "R2JC",
    description: "Une scène aux designers qui méritent d'être découverts.",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
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
      <body className="font-sans bg-pearl text-noir">
        <SmoothScroll />
        <ScrollProgress />
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
