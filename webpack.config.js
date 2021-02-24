const webpack = require("webpack");

const nodeENV = process.env.NODE_ENV || "production";
const minimizeBundle = nodeENV === "production";

module.exports = {
  entry: {
    filename: "./src/index.js",
  },
  output: {
    filename: "build.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  optimization: {
    minimize: minimizeBundle,
  },
  devtool: "source-map",
  devServer: {
    contentBase: "./build/build.js",
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": { NODE_ENV: JSON.stringify(nodeENV) },
    }),
  ],
};
