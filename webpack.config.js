const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
   entry: {
     index: './src/index.js',
   },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'JEST DEMO',
    }),
  ],
   output: {
     filename: 'main.js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,
   },
 };
