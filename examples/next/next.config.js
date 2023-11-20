/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@six-group/ui-library-react', '@six-group/ui-library'],
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
