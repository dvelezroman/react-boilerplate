const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
 mode: 'production',
 entry: path.join(__dirname, "src", "index.js"),
 devtool: "source-map",
 output: {
   path: path.resolve(__dirname, "/build"),
   filename: "bundle.js"
 },
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
      use: [MiniCssExtractPlugin,'css-loader', 'sass-loader']
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
   new HtmlWebpackPlugin({
     template: path.join(__dirname, "src", "index.html"),
   }),
 ],
}
