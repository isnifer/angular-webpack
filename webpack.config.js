var webpack = require('webpack');

module.exports = {
    context: __dirname,
    entry: {
        uo: './uo.js',
        zik: './zik.js'
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
