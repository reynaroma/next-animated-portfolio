/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    remotePatterns: [
      {
        loader: 'custom',
        loaderFile: './loader.js',
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
      }
    ]
  }
};

export default nextConfig;
