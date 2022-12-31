/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    API_URL:
      process.env.NODE_ENV === "production"
        ? ""
        : "https://blogfly.herokuapp.com",
  },
};

module.exports = nextConfig;
