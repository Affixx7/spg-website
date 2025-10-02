/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for deployment on Vercel or other static hosts
  output: 'export',
  
  // Configure image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Optional: Add a base path if deploying to a subdirectory
  // basePath: '/your-base-path',
  
  // Optional: Configure trailing slashes
  trailingSlash: true,
};

export default nextConfig;
