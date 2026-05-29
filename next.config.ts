import type { NextConfig } from "next";

/**
 * Content Security Policy.
 *
 * Pragmatic baseline, not strict CSP. Strict CSP requires per-request
 * nonces injected via middleware (because Next 15 hydration inlines
 * scripts), which is doable but adds complexity. This policy still
 * does meaningful work: it locks every resource fetch to same-origin
 * (no external script/font/image hosts can ever be added without an
 * explicit allow-list update), bans framing entirely, locks form
 * submission targets, and forces https for subresources.
 *
 * What 'unsafe-inline' permits today that a future nonce-based
 * policy would forbid:
 *   - script-src: Next's hydration scripts (__NEXT_DATA__, etc.)
 *   - style-src: inline style={{...}} props in components +
 *     next/font's runtime injected <style> tags
 * Both are first-party — so the residual XSS surface is "inline
 * script/style injected by an attacker into our HTML", not "remote
 * script loaded from attacker.com". The latter is fully blocked.
 *
 * If a future change adds an external script (e.g. Vercel Analytics,
 * a YouTube embed, a Stripe Checkout), its origin needs adding to
 * the matching directive here, not anywhere else.
 */
// Vercel injects a preview-only feedback toolbar from vercel.live so
// reviewers can drop inline comments on every preview deployment. It
// doesn't run in production. Allow its origins on preview builds only
// — production CSP stays minimal. Read VERCEL_ENV at config time:
// each environment (preview vs production) gets its own build with
// its own baked-in CSP value.
const isPreview = process.env.VERCEL_ENV === "preview";
const vlive = isPreview ? " https://vercel.live" : "";

const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${vlive}`,
  `style-src 'self' 'unsafe-inline'${vlive}`,
  `img-src 'self' data: blob:${vlive}`,
  "font-src 'self' data:",
  "media-src 'self'",
  `connect-src 'self'${vlive}`,
  isPreview ? "frame-src https://vercel.live" : "frame-src 'none'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self' mailto:",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

/**
 * Security headers applied to every route. Vercel adds a few defaults
 * but explicit headers are stronger, deterministic, and easier to
 * audit later.
 */
const securityHeaders = [
  {
    // The CSP above — see comment block for the policy rationale.
    key: "Content-Security-Policy",
    value: csp,
  },
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
    // CSP frame-ancestors 'none' already covers this for modern
    // browsers; XFO DENY mirrors it for any browser that doesn't
    // fully implement CSP frame-ancestors. The two cumulative.
    key: "X-Frame-Options",
    value: "DENY",
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
    // Kept to universally-recognized directives only. We initially
    // had `interest-cohort=()` (deprecated FLoC, Chrome warned) and
    // then `browsing-topics=()` (Topics API, Chromium-only — Firefox/
    // Safari also warn). Both were noise for no real benefit; the
    // app uses none of these APIs anyway, so the default-disallowed
    // posture from Permissions-Policy on supporting features already
    // covers us.
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
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
