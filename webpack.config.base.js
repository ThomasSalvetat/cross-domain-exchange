const HtmlWebpackPlugin = require("html-webpack-plugin");
const InlineChunkHtmlPlugin = require('inline-chunk-html-plugin');
const path = require("path");

const getFolder = (name, folder) => {
  return folder ? `${folder}/${name}` : name;
};

const getDistPath = (folder) => {
  return folder ? path.resolve(__dirname, "dist", folder) : path.resolve(__dirname, "dist");
};

const getPartialPath = (folder, template) => {
  return folder ? path.join(__dirname, "src", folder, 'partials', `${template}.handlebars`) : path.join(__dirname, "src", 'partials', `${template}.handlebars`);
};

const config = (name, {customTemplate, folder, mode}) => {
  const template = customTemplate ? customTemplate : name;
  const folderPath = getFolder(name, folder);
  return {
    mode,
    entry: path.join(__dirname, 'src', `${folderPath}.ts`),
    output: {
      filename: "main.js",
      path: getDistPath(folder),
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
            partialDirs: path.join(__dirname, 'src', 'partials'),
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
        template: getPartialPath(folder, template),
        inject: 'body',
        filename: `${name}.html`
      }),
      new InlineChunkHtmlPlugin(HtmlWebpackPlugin, ['main'])
    ],
  };
}

exports.configs = ({mode}) => [
  config("index",{ mode}),
  config("hub", {customTemplate: "empty", folder: "tab", mode}),
  config("detail",{ folder: "tab", mode}),
  config("hub", {customTemplate: "empty", folder: "iframe", mode}),
  config("detail",{ folder: "iframe", mode}),
  config("hub", {customTemplate: "empty", folder: "broadcast", mode}),
  config("detail",{ folder: "broadcast", mode})
];