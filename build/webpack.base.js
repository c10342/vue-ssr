const path = require("path");
const VuePluginLoader = require("vue-loader/lib/plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const resolve = (dir) => {
  return path.resolve(__dirname, dir);
};

module.exports = {
  output: {
    filename: "[name].bundle.js",
    path: resolve("../dist"),
  },
  resolve: {
    extensions: [".js", ".vue"],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          extractCSS: true,
        },
      },
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        // use: [
        //   "vue-style-loader",
        //   {
        //     loader: "css-loader",
        //     options: {
        //       esModule: false,
        //     },
        //   },
        // ],
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              esModule: false,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css",
      chunkFilename: "[id].css",
    }),
    new VuePluginLoader(),
  ],
};
