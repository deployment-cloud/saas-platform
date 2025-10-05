/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // ✅ Disable static export (use SSR)
  output: undefined,

  // ✅ Recommended for Prisma + Next.js
  experimental: {
    serverActions: true,
  },
};

export default nextConfig;
