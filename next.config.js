const withSvgr = require("next-svgr");

module.exports = withSvgr({
  images: {
    domains: ['res.cloudinary.com']
  },
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/home",
      },
    ];
  },
});
