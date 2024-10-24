/* eslint-disable @typescript-eslint/no-var-requires */

const withNextIntl = require("next-intl/plugin")();

/** @type {import('next').NextConfig} */
const config = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com", 
        port: "",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/en",
        destination: "/en/master",
        permanent: false,
      },
    ];
  },
};

module.exports = withNextIntl(config);
