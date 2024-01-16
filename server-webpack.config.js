const path = require("path");

module.exports = {
  entry: {
    index: "./src/index.ts",
  },

  output: {
    path: path.join(__dirname, "public"),
    filename: "[name].js",
  },

  mode: "development",
  devtool: "source-map",

  resolve: {
    extensions: [".ts", ".js"],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
