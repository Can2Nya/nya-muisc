const merge = require('webpack-merge');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const config = require('./webpack.config.js');

module.exports = merge(config, {
  plugins: [
    new webpack.DefinePlugin({
      // https://doc.react-china.org/docs/optimizing-performance.html#webpack
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new UglifyJsPlugin(),
  ]
});