/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        images: {
            remotePatterns: [
                {
                    protocol: 'https',
                    hostname: 'res.cloudinary.com',
                    port: ''
                }
            ]
        }
    }
};

export default nextConfig;
