const merge = require("webpack-merge");
const common = require("./webpack.config.common.js");
const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[path][name]__[local]--[hash:base64:5]",
            },
          },
          {
            loader: "postcss-loader",
            options: {
              config: {
                path: "./postcss.config.js",
              },
            },
          },
          {
            loader: "sass-loader",
          },
        ]
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
    new UglifyJsPlugin({ sourceMap: true }),
  ],
});
