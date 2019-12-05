const path = require('path');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const WebpackModules = require('webpack-modules')

module.exports = {
    entry:{ 
        dist:'./src/editor.js'
    },
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'dist', 'js'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
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
            new WebpackModules()
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
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }, {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        // plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            }]
        }
};