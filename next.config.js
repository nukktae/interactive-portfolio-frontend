/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    // Only apply redirects in production
    if (process.env.NODE_ENV === 'development') {
      return [];
    }
    
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