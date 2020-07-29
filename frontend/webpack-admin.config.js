const path = require('path'),
  HTMLplugin = require('html-webpack-plugin'),
  MiniCssExtractPlugin = require('mini-css-extract-plugin'),
  UglifyJsPlugin = require('uglifyjs-webpack-plugin'),
  OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'pug', 'admin.js'),
  },
  output: {
    path: path.resolve(__dirname, 'admin'),
    filename: 'admin.js',
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'admin'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(gif|png|jpe?g)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img',
            }
          }
        ]
      },
      {
        test: /\.(eot|ttf|woff|woff2|svg)$/,
        exclude: /[^\.]svg/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts',
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        exclude: /fonts/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'svg',
            }
          }
        ]
      },
      {
        test: /\.pug$/,
        use: 'pug-loader'
      },
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  plugins: [
    new HTMLplugin({
      template: path.resolve(__dirname, 'pug', 'pages', 'admin.pug'),
      filename: 'admin.html',
      minify: false,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    })
  ],
};