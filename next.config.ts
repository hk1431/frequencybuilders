import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: "/frequencybuilders",
  assetPrefix: "/frequencybuilders",
};

export default nextConfig;
