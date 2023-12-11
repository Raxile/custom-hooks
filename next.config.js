/** @type {import('next').NextConfig} */

const ESLintPlugin = require('eslint-webpack-plugin');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== 'development',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.dummyjson.com',
        port: '',
        pathname: '/data/products/**',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config, { dev }) => {
    // Run ESLint only in development
    if (dev) {
      config.plugins.push(new ESLintPlugin());
    }

    return config;
  },
};

module.exports = nextConfig;
