const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: false,
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: '[name].js', // 入口文件名生成规则
    chunkFilename: '[name].js' // 非入口文件名生成规则
  },
  // optimization: {
  //   moduleIds: 'natural',
  //   chunkIds: 'natural'
  // },
  devServer: {
    port: 8081
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react'
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}