import webpack from 'webpack';
import path from 'path';

export default {
    debug: true,
    devtool: 'cheap-module-eval-source-map',
    noInfo: false,
    entry: {
        jumbotron: ['eventsource-polyfill', 'webpack-hot-middleware/client?reload=true', './src/apps/jumbotron/app'],
        personcard: ['eventsource-polyfill', 'webpack-hot-middleware/client?reload=true', './src/apps/personcard/app'],
        list: ['eventsource-polyfill', 'webpack-hot-middleware/client?reload=true', './src/apps/list/app'],
        common: ['eventsource-polyfill', 'webpack-hot-middleware/client?reload=true', './src/common/app'],
        vendor: ['eventsource-polyfill', 'webpack-hot-middleware/client?reload=true', './src/bundles/vendor/index']
    },
    target: 'web',
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: '[name].bundle.js'
    },
    devServer: {
        contentBase: './src'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
            {test: /(\.css)$/, loaders: ['style', 'css']},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
            {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
        ]
    }
};