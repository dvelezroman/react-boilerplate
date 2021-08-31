const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
 mode: 'development',
 entry: path.join(__dirname, "src", "index.js"),
 output: {
   path: path.resolve(__dirname, "/build"),
   filename: "bundle.js",
   sourceMapFilename: "bundle.js.map"
 },
 devtool: "source-map",
 module: {
  rules: [
    {
      test: /\.?js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    },
    {
      test: /\.(s(a|c)ss)$/,
      use: ['style-loader','css-loader', 'sass-loader']
    },
    {
      test: /\.(png|jp(e*)g|svg|gif)$/,
      use: ['file-loader'],
    },
    {
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    }
  ]
},
resolve: {
  extensions: ['*', '.js', '.jsx']
},
 plugins: [
   new webpack.DefinePlugin({
    'process.env': JSON.stringify(dotenv.config().parsed)
   }),
   new HtmlWebpackPlugin({
     template: path.join(__dirname, "src", "index.html"),
   }),
 ],
}
