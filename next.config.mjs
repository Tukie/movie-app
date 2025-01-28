/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "m.media-amazon.com",
      },
      {
        hostname: "www.matichon.co.th",
      },
    ],
  },
};

export default nextConfig;
