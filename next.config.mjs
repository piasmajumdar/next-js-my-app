/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  // https://i.ibb.co/WNDdTBvV/butterfly.avif
  reactCompiler: true,
  images: {
    // domains: ['images.unsplash.com', 'i.ibb.co'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],

  },
};

export default nextConfig;
