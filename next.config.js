const withImages = require('next-images')
module.exports = withImages({
  dynamicAssetPrefix: true,
  distDir: 'build',
})