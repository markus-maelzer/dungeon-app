var path = require('path');
var webpack = require('webpack');
var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
    './src/main.js'
  ],
  output: {
    path: path.resolve(__dirname, './public'),
    publicPath: '/public/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: ['es2015', 'react'],
            plugins: ['transform-class-properties']
          }
        }

      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
           {
             loader: "sass-loader"
           }
        ]
      }
    ]

  },

  plugins: [
    HTMLWebpackPluginConfig,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
}
