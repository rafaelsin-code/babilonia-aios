/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "unavatar.io" },
      { protocol: "https", hostname: "**.wikipedia.org" },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
