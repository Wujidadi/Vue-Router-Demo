// module.paths.push('/usr/local/lib/node_modules');

const TerserPlugin = require('terser-webpack-plugin');
// const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    mode: 'production',
    plugins: [
        // new VueLoaderPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader'
            }
            // {
            //     test: /\.vue$/,
            //     loader: 'vue-loader'
            // }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                parallel: true,
                terserOptions: {
                    format: {
                        comments: false
                    }
                },
                extractComments: false
            })
        ]
    }
};
