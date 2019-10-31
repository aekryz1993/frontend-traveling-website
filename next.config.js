const withPlugins = require('next-compose-plugins');
const withCSS = require('@zeit/next-css')
const withImages = require('next-images');

module.exports = withPlugins([
  [withCSS, {
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: "[local]___[hash:base64:5]",
    }
  }],
  withImages
])

// module.exports = withCSS({
//   cssModules: true,
//   cssLoaderOptions: {
//     importLoaders: 1,
//     localIdentName: "[local]___[hash:base64:5]",
//   }
// })
// const withSass = require('@zeit/next-sass')
// module.exports = withSass({
//   cssModules: true,
//   cssLoaderOptions: {
//     importLoaders: 1,
//     localIdentName: "[local]___[hash:base64:5]",
//   }
// })