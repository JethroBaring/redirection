/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
        {
          source: '/(.*)',
          headers: [
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
