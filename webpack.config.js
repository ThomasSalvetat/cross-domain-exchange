const { hubConfig, detailConfig } = require("./webpack.config.base");

module.exports = [
  {...hubConfig, mode: 'development'},
  {...detailConfig, mode: 'development'},
];
