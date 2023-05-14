/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    API_URL:
      process.env.NODE_ENV === "production"
        ? "https://blog-fly-server-rixdwfwsn-fatihguzel1.vercel.app"
        : "http://localhost:5000",
  },
};

module.exports = nextConfig;
