const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isDevelopment = process.env.NODE_ENV === "development";

module.exports = {
  entry: {
    site: "./src/js/index.js",
    admin: "./src/admin/js/index.js"
  },
  devtool: "source-map",
  output: {
    filename: "js/[name]/main.js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    contentBase: "./dist/",
    compress: true,
    port: 9000,
    historyApiFallback: true
  },
  module: {
    rules: [
      // Js
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      // CSS
      {
        test: /\.scss$/i,
        use: [
          isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
      // Img
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              esModule: false
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
      chunks: ["site"]
    }),
    new HtmlWebPackPlugin({
      template: "./src/admin/index.html",
      filename: "./admin/index.html",
      chunks: ["admin"]
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css"
    })
  ]
};
