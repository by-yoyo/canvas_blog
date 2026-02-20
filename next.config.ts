import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  reactCompiler: true,
  async redirects() {
        return [
          {
            source: '/',
            destination: '/blog',
            permanent: true,
          },
        ];
      },
};

export default nextConfig;
