import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output:
    process.env.STATIC_EXPORT === "1" ? ("export" as const) : undefined,
  trailingSlash: process.env.STATIC_EXPORT === "1",
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
