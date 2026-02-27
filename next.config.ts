import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "a-us.storyblok.com",
      },
    ],
  },
};

export default nextConfig;
