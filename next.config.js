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
    ],
  },
};

module.exports = withNextIntl(config);
