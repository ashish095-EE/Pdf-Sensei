import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Helps with debugging
  async headers() {
    return [
      {
        source: "/(.*)", // Apply to all routes
        headers: [
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          { key: "Cross-Origin-Embedder-Policy", value: "require-corp" },
          { key: "Access-Control-Allow-Origin", value: "*" }, // Fix CORS
          { key: "Access-Control-Allow-Methods", value: "GET, POST, PUT, DELETE, OPTIONS" },
          { key: "Access-Control-Allow-Headers", value: "Content-Type, Authorization" },
          { key: "Access-Control-Allow-Credentials", value: "true" }, // Fix Clerk/Firebase Auth issues
          { key: "Set-Cookie", value: "Secure; HttpOnly; SameSite=Lax" }, // Prevent Chrome cookie issues
        ],
      },
    ];
  },
};

export default nextConfig;
