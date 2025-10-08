/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    turbo: true, // Enables Turbopack for faster dev builds
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  eslint: {
    dirs: ['pages', 'components', 'app', 'lib'],
  },
}

module.exports = nextConfig
