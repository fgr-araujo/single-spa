/* eslint-env node */
const webpack = require('webpack')
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/react1.js',
  output: {
    filename: 'react1.js',
    library: 'react1',
    libraryTarget: 'amd',
    path: path.resolve(__dirname, 'build/react1'),
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              localIdentName: '[path][name]__[local]',
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins() {
                return [
                  require('autoprefixer')
                ];
              },
            },
          },
        ],
      },
      {
        test: /\.css$/,
        include: [path.resolve(__dirname, 'node_modules')],
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    modules: [
      __dirname,
      'node_modules',
    ],
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: '"format amd";',
      raw: true,
    }),
    CopyWebpackPlugin([
      {from: path.resolve(__dirname, 'src/index.html')},
      {from: path.resolve(__dirname, 'src/styles.css')},
    ]),
    new CleanWebpackPlugin(['build/react1']),
  ],
  devtool: 'source-map',
  externals: [
    /^lodash$/,
    /^single-spa$/,
    /^rxjs\/?.*$/,
  ],
};

