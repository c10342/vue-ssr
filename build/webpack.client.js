const { merge } = require("webpack-merge");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const ClientRenderPlugin = require("vue-server-renderer/client-plugin");

const path = require("path");

const baseConfig = require("./webpack.base");
const resolve = (dir) => {
  return path.resolve(__dirname, dir);
};

const config = {
  entry: { client: resolve("../src/client-entry.js") },
  plugins: [
    new ClientRenderPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: resolve("../public/index.html"),
    }),
  ],
};

module.exports = merge(baseConfig, config);
