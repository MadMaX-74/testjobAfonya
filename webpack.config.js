'use strict';

let path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/js/index.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist/js'
    },
    watch: true,

    devtool: "source-map",

    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['@babel/preset-env', {
                            debug: true,
                            corejs: 3,
                            useBuiltIns: "usage"
                        }]
                    ]
                }
            }
        }]
    },
    module: {
        rules: [{
            test: /\.s[ac]ss$/i,
            use: [
                // Creates `style` nodes from JS strings
                "style-loader",
                // Translates CSS into CommonJS
                "css-loader",
                // Compiles Sass to CSS
                "sass-loader",
            ],
        }, ],
    }
};