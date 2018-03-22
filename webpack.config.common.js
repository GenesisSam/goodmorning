const webpack = require("webpack");
const { TsConfigPathsPlugin } = require("awesome-typescript-loader");

module.exports = {
  entry: "./app/index.tsx",
  devtool: "source-map",
  output: {
    path: __dirname + "/public",
    publicPath: "public",
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    plugins: [new TsConfigPathsPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
        options: {
          transpileOnly: true,
        },
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
    ],
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};
