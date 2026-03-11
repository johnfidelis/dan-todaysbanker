import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.api-sports.io",
        pathname: "/football/**",
      },
    ],
    // OR simple domains:
    // domains: ["media.api-sports.io"],
  },};

export default nextConfig;
