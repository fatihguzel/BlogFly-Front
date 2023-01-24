/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    API_URL:
      process.env.NODE_ENV === "production"
        ? "https://blogflyserver.onrender.com"
        : "http://localhost:5000",
  },
};

module.exports = nextConfig;
