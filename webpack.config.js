const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    index: ['babel-polyfill'].concat(['./index.js']),
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              publicPath: '../'
            }
          },
          "css-loader"
        ]
      },
      {
        test: /\.sass$/i,
        exclude: /node_modules/,
        use: ['css-hot-loader'].concat([MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ]),
      },
      {
        test: /\.(png|jpg|jpeg|gif|ico)$/,
        use: [
          {
            // loader: 'url-loader'
            loader: 'file-loader',
            options: {
              name: './images/[name].[ext]',
              publicPath: '../',
            },
          },
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'fonts/',
          name: '[name].[ext]',
          publicPath: '../fonts',
        },
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
    new MiniCssExtractPlugin({
      filename: './css/main.css',
      publicPath: '/',
    }),
    new HtmlWebpackPlugin({
      title: 'INDEX.HTML',
      template: './good/index.html',
      inject: true,
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      title: 'MAIN.HTML',
      template: './good/main.html',
      inject: true,
      filename: 'main.html'
    }),
    new HtmlWebpackPlugin({
      title: 'TRASH.HTML',
      template: './good/trash.html',
      inject: true,
      filename: 'trash.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([
          {from: './good/images', to: 'img'},
        ],
        {copyUnmodified: false}
    ),
  ],
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    // contentBase: path.join(__dirname, 'good'),
    port: 3001,
    hot: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.png', 'json'],
  },
};
