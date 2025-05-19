import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  images: {
    domains: ["cdn-images-1.medium.com", "miro.medium.com"],
  },
  /* config options here */
  //output: "export",
};

export default nextConfig;
