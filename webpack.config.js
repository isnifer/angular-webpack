var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: __dirname,
    entry: {
        uo: './uo/uo.js',
        zik: './zik/zik.js'
    },
    output: {
        path: __dirname,
        filename: "build.[name].js"
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                loaders: ['babel?stage=0']
            }
        ]
    },
    externals: {
        angular: 'angular'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.less', '.css', '.jpg', '.png', '.svg']
    }
};
