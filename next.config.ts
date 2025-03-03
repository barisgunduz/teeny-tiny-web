import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	eslint: {
		ignoreDuringBuilds: true, // ❌ Build sırasında ESLint hatalarını yoksay
	},
	typescript: {
		ignoreBuildErrors: true, // ❌ Build sırasında TypeScript hatalarını yoksay
	},
	generateBuildId: async () => {
		return `${Date.now()}`; // 🚀 Her build'de farklı ID oluştur
	},
};

export default nextConfig;
