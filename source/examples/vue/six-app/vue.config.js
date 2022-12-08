const CopyWebpackPlugin = require("copy-webpack-plugin")

module.exports = {
  publicPath: '/six-webcomponents/demos/vue-demo',
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin(
        [
          {
            from: 'node_modules/@six/ui-library/dist/ui-library/assets',
            to: 'assets'
          }
        ]
      )
    ]
  }
}
