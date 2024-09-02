/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sadakatcdn.cyparta.com",
        pathname: "/Cyparta_System/**/*",
        port: "",
      },
    ],
  },
};

export default nextConfig;
