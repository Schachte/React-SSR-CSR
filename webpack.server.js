const path = require("path");
const merge = require("webpack-merge");
const baseConfg = require("./webpack.base.js");
const webpackNodeExternals = require("webpack-node-externals");

const config = {
  // Inform webpack that we are building a bundle for node.js
  // rather than for the browser
  target: "node",

  // Tell webpack the root file of our
  // server application
  entry: "./src/server/index.js",

  // Tell webpack where to put the output file that is generate
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },
  externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfg, config);
