
import withPlaiceholder from '@plaiceholder/next';
import {withContentlayer} from 'next-contentlayer';
// const {withContentlayer} = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  //   output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  webpack: (config) => {
    config.infrastructureLogging = {
      level: 'error',
    };
    return config;
  },
};

export default withPlaiceholder(withContentlayer(nextConfig));
