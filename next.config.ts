import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["cdn.sanity.io"],
  },
  typescript: {
    ignoreBuildErrors: true, // ✅ Type errors ko ignore karega
  },
  eslint: {
    ignoreDuringBuilds: true, // ✅ ESLint errors ignore karega
  },
};

export default nextConfig;
