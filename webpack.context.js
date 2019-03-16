const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: [
        './libs/adapter/index.js',
        './src/context/index.js' 
    ],
    output: {
        path: path.resolve('dist/openDataContext'),
        filename: 'index.js'
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
    },
    plugins: [
        new webpack.ProvidePlugin({
            PIXI: 'pixi.js'
        })
  ],
}