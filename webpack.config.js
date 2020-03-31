const path = require('path');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const Merge = require('webpack-merge')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const WebpackModules = require('webpack-modules')

"use strict";
console.log('@@@@@@@@@@', '--', process.env.NODE_ENV.trim(), 'model--', '@@@@@@@@@@')
const orderScript = process.env.NODE_ENV.trim()

if (orderScript == 'scss_compile') {
    module.compile = {
        entry: {
            sass: './src/styles.js'
        },
        devtool: 'source-map',
        output: {
            path: path.resolve(__dirname, 'dist', 'css'),
            filename: '[name].bundle.js',
            publicPath: '/',
            libraryTarget: 'var',
            library: '[name]'
        },
        resolve: {
            extensions: ['.js', '.json'],
            modules: [
                path.resolve('./src'),
                'node_modules'
            ]
        },
        plugins: [
            new CleanWebpackPlugin(),
            new WebpackModules(),
            new MiniCssExtractPlugin({
                filename: "main.min.css",
            }),
        ],
        module: {
            rules: [{
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: false,
                        }
                    }
                ]
            }, {
                test: /\.(scss|sass)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ],
            }, {
                test: /\.(woff|woff2|eot|ttf|otf|png|svg|jpg|gif|webp)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            publicPath: '../../',
                        },
                    }
                ]
            }, {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    }
                }
            }],
        }
    }
} else {
    module.compile = {
        entry: {
            dist: './src/editor.js'
        },
        devtool: 'source-map',
        output: {
            path: path.resolve(__dirname, 'dist', 'js'),
            filename: '[name].bundle.js',
            publicPath: '/',
            libraryTarget: 'var',
            library: '[name]'
        },
        resolve: {
            extensions: ['.js', '.json'],
            modules: [
                path.resolve('./src'),
                'node_modules'
            ]
        },
        plugins: [
            new CleanWebpackPlugin(),
            new WebpackModules(),
        ],
        module: {
            rules: [{
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    }
                }
            }],
        }
    }
}

module.exports = module.compile