/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: false,
  },

  images: {
    unoptimized: true,
  },
  env: {
    dominio: process.env.DOMINIO,
  },
};

module.exports = nextConfig;
