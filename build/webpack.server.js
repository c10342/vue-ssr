const { merge } = require("webpack-merge");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const ServerRenderPlugin = require("vue-server-renderer/server-plugin");

const path = require("path");

const baseConfig = require("./webpack.base");
const resolve = (dir) => {
  return path.resolve(__dirname, dir);
};

const config = {
  entry: { server: resolve("../src/server-entry.js") },
  target: "node",
  output: {
    libraryTarget: "commonjs2",
  },
  plugins: [
    new ServerRenderPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.ssr.html",
      template: resolve("../public/index.ssr.html"),
      inject: false,
    }),
  ],
};

module.exports = merge(baseConfig, config);
