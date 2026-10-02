import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Let the dev server be opened through Cloudflare quick tunnels (https://*.trycloudflare.com)
  allowedDevOrigins: ["*.trycloudflare.com"],
  images: {
    unoptimized: true,
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};

export default nextConfig;
