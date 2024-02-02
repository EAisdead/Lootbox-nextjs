/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.nocookie.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
