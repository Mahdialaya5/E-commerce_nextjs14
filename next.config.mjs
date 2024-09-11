/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['www.entreprises-magazine.com',"www.samsungtunisie.tn","zaarastore.tn"],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'samsungstoretunisie.tn',
         
          },
        ],
      },
};

export default nextConfig;
