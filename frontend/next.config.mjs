/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{ hostname: "images.pexels.com" } , {hostname : "localhost"} , {hostname : "88.222.242.99"}],
      },
}
export default nextConfig;
