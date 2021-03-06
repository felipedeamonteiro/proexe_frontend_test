/** @type {import('next').NextConfig} */
const withImages = require('next-images');
module.exports = withImages(
  {
    inlineImageLimit: false,
    reactStrictMode: true,
    esModule: true,
    fileExtensions: ["jpg", "jpeg", "png", "gif"],
    webpack(config, options) {
      return config
    }
  }
)
