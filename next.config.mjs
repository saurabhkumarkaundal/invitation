/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true 
    },
    basePath: '/invitation', 
    assetPrefix: '/invitation',
  };

export default nextConfig;
