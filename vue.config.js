module.exports = {
  transpileDependencies: [
    'vuetify'
  ]
}
module.exports = {

  outputDir: 'docs',

  publicPath: process.env.NODE_ENV=== 'production'

      ? '/vue-app-2/'

      : '/'

}