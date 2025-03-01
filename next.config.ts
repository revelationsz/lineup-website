import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    loader: 'default',
  },
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
  },
};

export default nextConfig;
