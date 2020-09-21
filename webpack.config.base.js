const HtmlWebpackPlugin = require("html-webpack-plugin");
const InlineChunkHtmlPlugin = require('inline-chunk-html-plugin');
const path = require("path");

exports.hubConfig = {
  entry: "./src/hub/index.ts",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.handlebars$/,
        loader: "handlebars-loader",
        options: {
          partialDirs: path.join(__dirname, "/src/hub/partials"),
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Hub",
      template: "./src/hub/index.handlebars",
      inject: 'body'
    }),
    new InlineChunkHtmlPlugin(HtmlWebpackPlugin, ['main'])
  ],
};

exports.detailConfig = {
  entry: "./src/detail/index.ts",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist", "detail"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.handlebars$/,
        loader: "handlebars-loader",
        options: {
          partialDirs: path.join(__dirname, "/src/detail/partials"),
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Detail",
      template: "./src/detail/index.handlebars",
      inject: 'body'
    }),
    new InlineChunkHtmlPlugin(HtmlWebpackPlugin, ['main'])
  ],
};