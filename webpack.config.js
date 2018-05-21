const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const cleanWebpackPlugin = require("clean-webpack-plugin");
const uglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
    entry: ["./src/js/index.js", "./src/js/two.js"],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new cleanWebpackPlugin(["dist"]),
        new htmlWebpackPlugin({
            title: "Index One",
            filename: "./index.html",
            template: "./index.html"
        }),
        new htmlWebpackPlugin({
            title: "Index Two",
            filename: "./path.html",
            template: "./path.html"
        }),
        new htmlWebpackPlugin({
            title: "Index Three",
            filename: "./result.html",
            template: "./result.html"
        }),
        // new uglifyJsPlugin()
    ],
    devtool: "inline-source-map",
    mode: "development",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["react"]
                    }
                }
            },
            {
                test: /\.html$/,
                use: [
                    'html-loader'
                ]
            }
        ]
    }
}