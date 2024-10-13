/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
  images: {
    // domains: ["res.cloudinary.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "pagedone.io",
      },
    ],
  },
};

export default nextConfig;
