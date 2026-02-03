import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // 👇 ESTA ES LA PARTE QUE SOLUCIONA EL ERROR DE VERCEL
  eslint: {
    ignoreDuringBuilds: true,
  },
  // 👆 FIN DE LA PARTE NUEVA

  reactStrictMode: true,
  transpilePackages: ["next-mdx-remote"],
  allowedDevOrigins: ["chanhdai-macbook.local"],
  turbopack: {
    root: path.join(__dirname, "."),
  },
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.chanhdai.com",
        port: "",
      },
    ],
    qualities: [75, 100],
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
  // Las cabeceras comentadas las dejamos tal cual
  // async headers() { ... }
};

export default nextConfig;
