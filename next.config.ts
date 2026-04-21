import type { NextConfig } from "next";
import path from "path";

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },

  reactStrictMode: true,
  transpilePackages: ["next-mdx-remote"],
  allowedDevOrigins: ["localhost"],
  turbopack: {
    root: path.join(__dirname, "."),
  },
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.simpleicons.org",
        port: "",
      },
    ],
    // Optimize image quality for different device sizes
    // Mobile devices get lower quality to improve loading speed
    qualities: [100, 50, 75, 90],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/webp"],
  },
  async rewrites() {
    return [
      {
        source: "/blog/:slug.mdx",
        destination: "/blog.mdx/:slug",
      },
      {
        source: "/components/:slug.mdx",
        destination: "/blog.mdx/:slug",
      },
    ];
  },
};

export default nextConfig;
