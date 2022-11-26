module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/car-configurator-app/'
    : '/',
  devServer: {
    disableHostCheck: true
  }
}