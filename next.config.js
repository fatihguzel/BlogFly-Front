/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    API_URL:
      process.env.NODE_ENV === "production" ? "" : "http://localhost:5000",
  },
};

module.exports = nextConfig;
