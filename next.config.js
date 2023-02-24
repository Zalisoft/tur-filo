/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix:
    process.env.NODE_ENV === "development" ? "/tur-filo/" : undefined,
  basePath: process.env.NODE_ENV === "development" ? "/tur-filo/" : undefined,
  // TODO Configure external images' sources
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        hostname: "*",
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgoConfig: {
              plugins: [{ name: "removeViewBox", active: false }],
            },
            typescript: true,
          },
        },
      ],
    });
    return config;
  },
};

module.exports = nextConfig;
