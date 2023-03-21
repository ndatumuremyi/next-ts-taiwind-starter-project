/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ['localhost', 'example.rw'],
  },
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  env: {
    DEFAULT_API: process.env.DEFAULT_API,
  },
};
