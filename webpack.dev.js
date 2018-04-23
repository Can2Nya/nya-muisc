const merge = require('webpack-merge');
const config = require('./webpack.config.js');

module.exports = merge(config, {
  // 使用source-map，如果发生错误，可以在打包嚎的index.js 追踪原文件的错误
  devtool: 'inline-source-map', 
  devServer: {
    // 配置 webpack-dev-server
    contentBase: './dist',
    hot: true, // 热替换模块
  }
});