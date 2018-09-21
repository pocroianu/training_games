const path = require('path');
const publicFolder = 'public';

module.exports = {
    entry: {
        main: './src/project/index.ts'
    },
    output: {
        path: path.join(__dirname, publicFolder),
        filename: './js/[name].bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.ts', '.js'],
        modules: [path.resolve(path.join(__dirname, 'node_modules'))]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader']
            }
        ]
    }
};