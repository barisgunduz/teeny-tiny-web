import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	eslint: {
		ignoreDuringBuilds: true,
	},
	typescript: {
		ignoreBuildErrors: true,
	},
	generateBuildId: async () => {
		return `${Date.now()}`;
	},
};

export default nextConfig;
