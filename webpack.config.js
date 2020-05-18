/* eslint-env node */
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: "./src/index.js",
  devtool: process.env.NODE_ENV === "production" ? "source-map" : "cheap-module-eval-source-map",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js",
    library: "globalnavigation",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  resolve: {
    alias: {
      react: "preact/compat",
      "react-dom": "preact/compat",
      "create-react-class": "preact/compat/lib/create-react-class",
      "react-dom-factories": "preact/compat/lib/react-dom-factories"
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.ejs"
    }),
    new Dotenv()
  ]
};
