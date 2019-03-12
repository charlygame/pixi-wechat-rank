const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: [
        './libs/adapter/index.js',
        './src/app.js' 
    ],
    output: {
        path: path.resolve('dist'),
        filename: 'game.js'
    },
    devtool: 'source-map',
    stats: 'errors-only',
    module: {
        rules: [
            {
                test: /\.js$/, // 为啥多加一个\
                use:['babel-loader'],
                exclude: /node_modules/
            }
        ]
    }
}