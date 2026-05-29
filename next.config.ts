import type { NextConfig } from "next";

/**
 * Security headers applied to every route. Vercel adds a few defaults
 * but explicit headers are stronger, deterministic, and easier to
 * audit later.
 *
 * Not added here (intentionally, would need testing first):
 *   Content-Security-Policy — Next's hydration uses inline scripts;
 *     a strict CSP without nonces would break it, and a CSP with
 *     'unsafe-inline' barely improves on the baseline. To be added
 *     in a separate change with proper nonce/hash plumbing.
 */
const securityHeaders = [
  {
    // Force HTTPS for ~2 years and include subdomains. `preload`
    // signals readiness for the browser HSTS preload list, but the
    // site has to be explicitly submitted to be added.
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    // Block MIME sniffing so the browser can't infer a script from
    // a non-script Content-Type.
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    // Disallow framing on other origins to prevent clickjacking.
    // (CSP `frame-ancestors` supersedes this for modern browsers,
    // but the header is harmless and provides defence in depth.)
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    // Limit how much of the referring URL is sent to third parties.
    // Sends origin only when crossing origin or downgrading scheme.
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    // Disable browser features the app doesn't use. Anything not
    // explicitly listed defaults to disallowed.
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "res.cloudinary.com" },
    ],
  },
  experimental: {
    optimizePackageImports: ["gsap", "lenis"],
  },
  async headers() {
    return [
      {
        // Apply to every path on the site.
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
