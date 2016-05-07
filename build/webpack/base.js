var webpack   = require('webpack');
var path      = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var config = require('../../config');

module.exports = {
    target: 'web',
    entry: {
        app: path.join(config.path_base, config.dir_client + '/client.js')
    },
    output: {
        path: path.join(config.path_base + '/dist'),
        filename: 'bundle.js',
        publicPath: ''
    },
    module: {
        preLoaders: [
            {
                test: /\.jsx?$/,
                loaders: ['eslint'],
                exclude: /node_modules/
            }
        ],
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel']
            }, {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                exclude: /node_modules/,
                loader: 'url-loader'
            }, {
                test: /\.less$/,
                exclude: /node_modules/,
                loader: 'style!css!less'
            }, {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }, {
                test: /\.jpg$/,
                exclude: /node_modules/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"' + process.env.NODE_ENV + '"'
            }
        }),
        new HtmlWebpackPlugin({
            templateContent: ''
            + '<!DOCTYPE html>'
            + '<html>'
            + ' <head>'
            + '   <meta charset="iso-8859-1">'
            + '   <title>React Notification Center</title>'
            + '   <meta name="viewport" content="width=device-width, initial-scale=1">'
            + ' </head>'
            + ' <body>'
            + '   <div id="app"></div>'
            + ' </body>'
            + '</html>',
            inject: 'body'
        })
    ]
};
