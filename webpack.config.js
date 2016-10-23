module.exports = {
    entry: './src/index.js',
    output: {
        path: './dist/',
        filename: 'vue-fancy-form.js',
        library: 'vue-fancy-form',
        libraryTarget: 'umd',
        umdNamedDefine: true,
    },
    resolve: {
        extensions: [
            '',
            '.js',
            '.vue',
        ],
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
            },
            {
                test: /\.vue$/,
                loader: 'vue',
            },
        ],
    },
}
