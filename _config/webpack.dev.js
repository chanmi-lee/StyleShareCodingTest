const path = require("path");
const webpack = require("webpack");
const merge = require("Webpack-merge");
const webpackCommon = require("./webpack.common");

module.exports = merge.smart(webpackCommon, {
    mode: "development",
    output: {
        publicPath: "/",
        filename: "[name].bundle.js",

    }
})