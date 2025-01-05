import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['localhost', 'www.anubilegdemberel.com', 'anubilegdemberel.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.anubilegdemberel.com',
      },
    ],
  },
  experimental: {
  },
};

export default nextConfig;
