// next.config.js
module.exports = {
  images: {
    domains: ["randomuser.me"],
  },
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/api/:slug*",
        headers: [
          {
            key: "cache-control",
            value: "no-store, max-age=0",
          },
        ],
        source: "/api/hello",
        headers: [
          {
            key: "cache-control",
            value: "public, max-age=86400, immutable",
          },
        ],
      },
    ];
  },
};
