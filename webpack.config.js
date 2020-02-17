const path = require('path');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: __dirname,
    compress: true,
    port: 9000,
    publicPath: '/dist/'
  }
};
