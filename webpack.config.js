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
            new WebpackModules(),
            // new webpack.ProvidePlugin({ 
            //     $: "jquery",
            //     jQuery: "jquery",
            //     "window.jQuery": "jquery"
            // }),
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
            },{
                test: /\.(ttf|eot|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader',
                options: {
                  limit: 50000,
                  mimetype: 'application/font-woff',
                  name: './fonts/[name].[ext]',
                },
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
                    }
                }
            }],
        }
};