const path = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

const devConfig = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    static: path.resolve(__dirname, '../dist'),
    compress: true,
    port: 4000
  }
}

module.exports = merge(commonConfig, devConfig)