const path = require('path');
const HTMLPage = require('html-webpack-plugin')

module.exports = {
    devServer: {
        open: true,
        port: 9000,
    },

    devtool: 'cheap-source-code',
    entry: {
        main: path.resolve(__dirname, './index.js'),
    },

    mode: 'development',

    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
                extends: path.resolve(__dirname, './.babelrc'),
            },
        }]
    },

    output: {
        path: path.resolve(''),
        filename: '[name].js',
    },

    plugins: [
        new HTMLPage(),
    ],

}
