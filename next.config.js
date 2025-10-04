/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  reactStrictMode: true,
  experimental: { serverActions: true },
  images: { domains: ['localhost', '127.0.0.1'] },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  webpack(config) {
    config.resolve.alias['@'] = path.resolve(__dirname);
    config.resolve.alias['@/components'] = path.resolve(__dirname, 'components');
    return config;
  },
  async redirects(){ return [{ source: '/', destination: '/admin', permanent: false }]; }
};
module.exports = nextConfig;
