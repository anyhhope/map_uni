const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const json5 = require('json5');

module.exports = {
    entry: './src/index.js',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'start'),
        clean: true,
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.json5$/i,
                type: 'json',
                parser: {
                    parse: json5.parse,
                }
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/assets/'),
                    to: 'assets',
                },
                {
                    from: path.resolve(__dirname, 'src/css/'),
                    to: 'css',
                },
            ],
        }),
    ],

    devServer: {
        static: {
            directory: path.join(__dirname, 'start'),
        },
        open: true,
    },

    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development'
};