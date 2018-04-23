const path = require('path');
const root = __dirname;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  // 入口文件
  entry: path.resolve(root, 'src/index.jsx'),
  // 出口文件
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(root, 'dist')
  },
  // loaders
  module: {
    rules: [
      {test: /\.jsx?$/, use: ['babel-loader'], exclude: /node_modules/}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'nya music!',
      template: 'src/template.html'
    }),
    new CleanWebpackPlugin(['dist']), // 清除目录
  ]
}