const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackBaseConfig = require('./webpack.base')

const config = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          options: {
            loaders: {
              js: [
                {
                  loader: 'babel-loader',
                  options: ctx.options.babel
                }
              ],
              css: [
                'vue-style-loader',
                { loader: 'css-loader', options: { sourceMap: true } }
              ],
              postcss: [
                'vue-style-loader',
                { loader: 'css-loader', options: { sourceMap: true } }
              ]
            }
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              // enable CSS Modules
              modules: true,
              // customize generated class names
              localIdentName: '[local]_[hash:base64:8]'
            }
          }
        ]
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
}

module.exports = merge(webpackBaseConfig, config)
