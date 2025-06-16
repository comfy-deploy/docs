import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cd-misc.s3.us-east-2.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'cd-public-misc.s3.us-east-1.amazonaws.com',
      },
    ],
  },
};

export default withMDX(config);
