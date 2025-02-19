import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/lineup-website', // Replace 'your-repo-name' with your GitHub repository name
  images: {
    unoptimized: true,
  },/* config options here */
};

export default nextConfig;
