// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require("@nrwl/next/plugins/with-nx");

/**
 * @type {import("@nrwl/next/plugins/with-nx").WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false
  },
  swcMinify: true,
  experimental: {
    modularizeImports: {
      // "@mui/material/styles": {
      //   transform: "@mui/material/styles/{{member}}"
      // },
      // "@mui/material/?(((\\w*)?/?)*)": {
      //   transform: "@mui/material/{{ matches.[1] }}/{{member}}"
      // },
      "@mui/icons-material/?(((\\w*)?/?)*)": {
        transform: "@mui/icons-material/{{ matches.[1] }}/{{member}}"
      }
    }
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:3333/api/:path*"
      }
    ];
  }
};

module.exports = withNx(nextConfig);
