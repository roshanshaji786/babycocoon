import type { NextConfig } from "next";

const isStaticExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  output: isStaticExport ? ("export" as const) : undefined,
  // GitHub Pages serves this repository below /babycocoon rather than at the
  // domain root. Next prefixes generated links and _next assets with this
  // path in the static build; public assets are handled by asset-base.ts.
  basePath: isStaticExport ? "/babycocoon" : undefined,
  trailingSlash: isStaticExport,
  // In static-export mode the /api route handlers don't exist server-side;
  // the client-side shim in src/lib/static-shim.ts serves the same data.
  pageExtensions:
    process.env.STATIC_EXPORT === "1" ? ["tsx"] : ["tsx", "ts"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

export default nextConfig;
