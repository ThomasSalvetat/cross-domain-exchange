const { hubConfig, detailConfig } = require("./webpack.config.base");

module.exports = [
  {...hubConfig, mode: 'production'},
  {...detailConfig, mode: 'production'},
];
