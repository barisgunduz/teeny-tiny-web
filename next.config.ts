import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ❌ Build sırasında ESLint hatalarını yoksay
  },
  typescript: {
    ignoreBuildErrors: true, // ❌ Build sırasında TypeScript hatalarını yoksay
  },
};

export default nextConfig;
