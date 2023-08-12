/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    API_URL:
      process.env.NODE_ENV === "production"
        ? "https://blog-fly-server-q5v2el3j9-fatihguzel1.vercel.app"
        : "http://localhost:5000",
  },
};

const removeImports = require("next-remove-imports")();

module.exports = removeImports(nextConfig);
