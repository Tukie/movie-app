/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'www.matichon.co.th',
      },
    ],
  },
};

export default nextConfig;
