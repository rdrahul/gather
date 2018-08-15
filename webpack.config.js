const path = require('path');

module.exports = {
    entry: './lib/nb/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'gather.js',
        libraryTarget: 'amd'
    },
    mode: 'none',
    devtool: "inline-source-map",
    externals: {
        "base/js/namespace": "base/js/namespace",
        "base/js/utils": "base/js/utils"
    },
    node: {
        fs: 'empty'
    },
    module: {
        rules: [{
            test: /\.txt/,
            use: ['raw-loader']
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.png$/,
            use: ['file-loader']
        }]
    },
    optimization: {
        minimize: false
    },
    resolve: {
        extensions: ['.js', '.css'],
        modules: [
            'node_modules'
        ]
    }
};