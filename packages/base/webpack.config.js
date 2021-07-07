const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: false,
  entry: './src/index.js',
  output: {
    filename: '[name].js', // 入口文件名生成规则
    chunkFilename: '[name].js' // 非入口文件名生成规则
  },
  cache: {
    type: 'memory'
  },
  // watch: true,
  devServer: {
    port: 8080
  },
  resolve: {
    fallback: {
      "crypto": require.resolve("crypto-browserify"),
      "stream": require.resolve("stream-browserify"),
      "buffer": require.resolve("buffer/")
    }
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
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
    } ,
      {
        test: /\.png$/,
        type: 'asset/resource' // 相当于file-loader，输出文件到目录
      },
      {
        test: /\.ico$/,
        type: 'asset/inline' // 相当与url-loader， 处理成base64
      },
      {
        test: /\.txt/,
        type: 'asset/source' // 相当与raw-loader，将文件处理成字符串导入
      },
      {
        test: /\.jpg$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024 // 超过此阈值 使用asset/resource，小于则使用inline
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}