const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        publicPath: `/`,
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        open: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
                use: {
                    loader: 'url-loader?limit=100000',
                },
            }
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devtool: 'source-map',
};
