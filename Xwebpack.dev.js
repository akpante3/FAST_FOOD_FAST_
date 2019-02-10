const merge = require('webpack-merge');
const common = require('./Xwebpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    host: 'localhost',
    open: true,
    historyApiFallback: true,
  },
});