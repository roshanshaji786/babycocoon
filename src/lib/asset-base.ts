/**
 * Prefixes public assets when the static demo is hosted under the repository
 * path on GitHub Pages. In local development and a normal Next.js deploy,
 * assets continue to live at the root.
 */
export const assetBase =
  process.env.NEXT_PUBLIC_STATIC === "1" ? "/babycocoon" : "";

export function withAssetBase(path: string): string {
  if (
    !path ||
    !assetBase ||
    !path.startsWith("/") ||
    path.startsWith(`${assetBase}/`) ||
    path === assetBase ||
    path.startsWith("//")
  ) {
    return path;
  }

  return `${assetBase}${path}`;
}
