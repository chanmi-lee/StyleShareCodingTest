const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: [
        'webpack-hot-middleware/client',
         '../src/index.js'
    ],
    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },
    devServer: {
        hot: true,
        inline: true,
        contentBase: __dirname + "/public/"
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpg|svg|json)$/,
                use: {
                    loader: 'url-loader?limit=8192'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "../public/index.html",
            filename: "index.html"
        })
    ],
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.json', '.css'],
    }
}