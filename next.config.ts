import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com",
                port: "",
                pathname: "/photo-**",
            },
            {
                protocol: "https",
                hostname: "www.scommerce-mage.com",
                port: "",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;
