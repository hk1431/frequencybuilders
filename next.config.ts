import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",      // static HTML export for GitHub Pages
  trailingSlash: true,   // /about → /about/index.html (required for GH Pages)
  images: {
    unoptimized: true,   // next/image optimisation is server-only
  },
  // If deploying to https://<user>.github.io/<repo>/ (not a custom domain),
  // uncomment and set basePath to your repo name:
  // basePath: "/frequencybuilders",
};

export default nextConfig;
