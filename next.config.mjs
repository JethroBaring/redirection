/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: [
      'www.google.com',
      'www.simplilearn.com',
      'objectstorage.ap-tokyo-1.oraclecloud.com',
      'storage.googleapis.com',
    ],
  },
  async headers() {
    return [
        {
          source: '/(.*)',
          headers: [
            {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'none'",
          },
            {
              key: 'X-Frame-Options',
              value: 'DENY',
            },
            {
              key: 'Strict-Transport-Security',
              value: 'max-age=65540 ; includeSubDomains'
            }
          ],
        },
      ];
  },   
};

export default nextConfig;
