const {withContentlayer} = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
//   output: 'export',
  images: {
    // remotePatterns:
  },
};

module.exports = withContentlayer(nextConfig);
