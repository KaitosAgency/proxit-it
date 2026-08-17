import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/services-manages-bourges",
        destination: "/supervision-informatique-bourges",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/llms.txt",
        headers: [{ key: "Content-Type", value: "text/plain; charset=utf-8" }],
      },
    ];
  },
};

export default nextConfig;
