/**
 * Site has two parallel "versions":
 *
 *   • Upgraded — the live evolution of r2jc.ch we built together. Lives at
 *     the canonical paths (`/`, `/editions`, `/postuler`, …) so R2JC's team
 *     recognizes their site at a glance.
 *
 *   • Reworked — Sacha's carte-blanche reinterpretation. Lives under the
 *     `/r/*` prefix in a parallel route tree. Same brand DNA, different
 *     grammar.
 *
 * The `<VersionSwitcher>` in the header navigates between equivalent paths
 * on either side. These helpers do the path math.
 */

export type Version = "upgraded" | "reworked";

export const REWORKED_PREFIX = "/r";

/** Which version does this pathname belong to? */
export function getVersion(pathname: string): Version {
  if (
    pathname === REWORKED_PREFIX ||
    pathname.startsWith(REWORKED_PREFIX + "/")
  ) {
    return "reworked";
  }
  return "upgraded";
}

/**
 * Strip the version prefix, leaving a canonical "upgraded-shaped" path.
 *   /r            → /
 *   /r/editions   → /editions
 *   /editions     → /editions (untouched)
 */
export function stripVersion(pathname: string): string {
  if (pathname === REWORKED_PREFIX) return "/";
  if (pathname.startsWith(REWORKED_PREFIX + "/")) {
    return pathname.slice(REWORKED_PREFIX.length);
  }
  return pathname;
}

/**
 * Apply the version prefix to a canonical path.
 *   ("/editions", "reworked") → /r/editions
 *   ("/",         "reworked") → /r
 *   ("/editions", "upgraded") → /editions
 */
export function withVersion(path: string, version: Version): string {
  if (version === "upgraded") return path;
  if (path === "/") return REWORKED_PREFIX;
  return REWORKED_PREFIX + path;
}

/**
 * Convenience: hop to the other version, preserving the current page.
 *   /editions    ↔ /r/editions
 *   /            ↔ /r
 *   /r/editions  ↔ /editions
 */
export function togglePath(pathname: string): string {
  const current = getVersion(pathname);
  const target: Version = current === "upgraded" ? "reworked" : "upgraded";
  return withVersion(stripVersion(pathname), target);
}
