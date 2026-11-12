import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 90 keeps text in project screenshots sharp; 75 is the Next 16 default.
  images: { qualities: [75, 90] },
};

export default nextConfig;
