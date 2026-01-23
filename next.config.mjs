import createNextIntlPlugin from "next-intl/plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Outputs a Single-Page Application (SPA)
  distDir: "./dist", // Changes the build output directory
  assetPrefix: "", // REQUIRED for GH Pages
  trailingSlash: true, // REQUIRED for routing
  images: { unoptimized: true },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
