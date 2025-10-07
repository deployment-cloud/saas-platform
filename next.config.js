/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Remove experimental.serverActions as Next 14 enables server actions by default
  },
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  eslint: {
    ignoreDuringBuilds: true
  }
};

module.exports = nextConfig;
