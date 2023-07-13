const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  devServer: {
    port: 8081,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "products",
      filename: "remoteEntry.js",
      exposes: {
        "./ProductsIndex": "./src/index.js",
      },
      shared: {
        faker: {
          singleton: true,
        },
      },
    }),
    new webpack.DefinePlugin({
      "process.env.APP_ENV": JSON.stringify(process.env.APP_ENV),
    }),
  ],
};
