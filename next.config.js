/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: true,
    images: {
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "fakestoreapi.com",
    //   },
    // ],
    domains: ["fakestoreapi.com"],
    minimumCacheTTL: 1500000,
  },
  transpilePackages: ["next/font"]

};

module.exports = nextConfig;
