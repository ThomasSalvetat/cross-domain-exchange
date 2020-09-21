const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = [
  {
    mode: "development",
    entry: "./src/hub/index.ts",
    output: {
      filename: "main.js",
      path: path.resolve(__dirname, "dist", "hub"),
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
      }),
    ],
  },
  {
    mode: "development",
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
      }),
    ],
  },
];
