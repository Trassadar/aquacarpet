import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "aquacarpet.ro",
          },
        ],
        destination: "https://www.aquacarpet.ro/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
