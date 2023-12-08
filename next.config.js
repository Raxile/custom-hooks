/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.dummyjson.com",
        port: "",
        pathname: "/data/products/**",
      },
    ],
  },
};

module.exports = nextConfig;
