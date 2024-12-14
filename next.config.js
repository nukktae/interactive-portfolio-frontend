/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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