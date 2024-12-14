/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_URL}/:path*`
      }
    ];
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://www.anubilegdemberel.com',
        permanent: true,
        basePath: false,
        has: [
          {
            type: 'host',
            value: 'anubilegdemberel.com'
          }
        ]
      }
    ];
  }
};

module.exports = nextConfig; 