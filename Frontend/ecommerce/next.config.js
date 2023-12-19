/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "fakestoreapi.com" },
      { hostname: "res.cloudinary.com" },
    ],
  },
};

module.exports = nextConfig;
