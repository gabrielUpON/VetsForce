/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://192.168.1.10:3001/api/:path*',
      },
    ];
  },
};

export default nextConfig;