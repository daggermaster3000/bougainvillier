import type { NextConfig } from "next";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'acts-crissier.ch',
        pathname: '/**',
      },
    ],
  },
};


export default nextConfig;
