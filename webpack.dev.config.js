import webpack from 'webpack';
import path from 'path';
import nodeExternals from 'webpack-node-externals';




// const browserConfig = {
//
//     entry: {
//         admin: path.join(__dirname, 'Admin/client/index.js'),
//         bundle: path.join(__dirname, 'client/index.js')
//     },
//
//     output: {
//         path: path.join(__dirname, 'src'),
//         publicPath: '/',
//         filename: '[name].js'
//     },
//
//     module: {
//         loaders: [
//             {
//                 test: /\.jsx?$/,
//                 exclude: /node_modules/,
//                 loaders: ['react-hot-loader/webpack', 'babel-loader']
//
//             },
//             {
//                 test: /\.css$/,
//                 loaders: ['style-loader', 'css-loader']
//             },
//             {
//                 test: /\.sass$/,
//                 loaders: ['style-loader', 'css-loader', 'sass-loader']
//             },
//             {
//                 test: /\.eot$|.ttf$|.woff$|.jpg$|.png$|.svg$|.woff2$/,
//                 loaders: ['file-loader']
//             }
//         ]
//     },
//
//     plugins: [
//         // new webpack.optimize.CommonsChunkPlugin({
//         //     name: 'common',
//         //     filename: '[name].common.js'
//         // }),
//         new webpack.HotModuleReplacementPlugin(),
//         new webpack.NoEmitOnErrorsPlugin(),
//         new webpack.optimize.OccurrenceOrderPlugin(),
//         new webpack.ProvidePlugin({
//             'React': 'react',
//             "PropTypes":"prop-types",
//         })
//     ],
//
//     resolve: {
//         extensions: ['.js', '.jsx']
//     }
// };
//
// const serverConfig = {
//     entry: './server/index.js',
//
//     target: 'node',
//     externals: [nodeExternals()],
//
//     output: {
//         path: '/',
//         publicPath: '/',
//         filename: 'server.js',
//         libraryTarget: "commonjs2"
//     },
//
//     module: {
//         loaders: [
//             {
//                 test: /\.jsx?$/,
//                 exclude: /node_modules/,
//                 loaders: ['react-hot-loader/webpack', 'babel-loader']
//
//             },
//             {
//                 test: /\.css$/,
//                 loaders: ['style-loader', 'css-loader']
//             },
//             {
//                 test: /\.sass$/,
//                 loaders: ['style-loader', 'css-loader', 'sass-loader']
//             },
//             {
//                 test: /\.eot$|.ttf$|.woff$|.jpg$|.png$|.svg$|.woff2$/,
//                 loaders: ['file-loader']
//             }
//         ]
//     },
//
//     plugins: [
//         // new webpack.optimize.CommonsChunkPlugin({
//         //     name: 'common',
//         //     filename: '[name].common.js'
//         // }),
//         new webpack.HotModuleReplacementPlugin(),
//         new webpack.NoEmitOnErrorsPlugin(),
//         new webpack.optimize.OccurrenceOrderPlugin(),
//         new webpack.ProvidePlugin({
//             'React': 'react',
//             "PropTypes":"prop-types",
//         })
//     ],
//
//     resolve: {
//         extensions: ['.js', '.jsx']
//     }
// };
//
// module.exports = [browserConfig, serverConfig];


module.exports = {

    entry: {
        admin: path.join(__dirname, 'Admin/client/index.js'),
        bundle: path.join(__dirname, 'client/index.js')
    },

    output: {
        path: '/',
        publicPath: '/',
        filename: '[name].js'
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot-loader/webpack', 'babel-loader']

            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\.sass$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.eot$|.ttf$|.woff$|.jpg$|.png$|.svg$|.woff2$/,
                loaders: ['file-loader']
            }
        ]
    },

    plugins: [
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'common',
        //     filename: '[name].common.js'
        // }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.ProvidePlugin({
            'React': 'react',
            "PropTypes":"prop-types",
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ],

    resolve: {
        extensions: ['.js', '.jsx']
    }
}