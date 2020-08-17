const path = require('path'),
  HTMLplugin = require('html-webpack-plugin'),
  MiniCssExtractPlugin = require('mini-css-extract-plugin'),
  UglifyJsPlugin = require('uglifyjs-webpack-plugin'),
  OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'src', 'index.tsx'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'dist'),
    // proxy: [
    //   {
    //     context: ['/flats', '/users', '/auth'],
    //     target: 'http://osipuk.ru:4000/',
    //     changeOrigin: true,
    //     secure: false,
    //   },
    //   {
    //     context: ['/api'],
    //     target: 'http://localhost:3000/',
    //     changeOrigin: true,
    //     secure: false,
    //   }
    // ]
  },
  module: {
    rules: [
      {
        test:/\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            },
          },
        ],
      },
      {
        test:/\.jsx?$/,
        exclude: /node_modules\/?!(swiper|dom7)/,
        loader:'babel-loader',
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
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      assets: path.resolve(__dirname, 'src', 'assets'),
      components: path.resolve(__dirname, 'src', 'components'),
      containers: path.resolve(__dirname, 'src', 'containers'),
      hoc: path.resolve(__dirname, 'src', 'hoc'),
      store: path.resolve(__dirname, 'src', 'store'),
      actions: path.resolve(__dirname, 'src', 'store', 'actions'),
      reducers: path.resolve(__dirname, 'src', 'store', 'reducers'),
      utils: path.resolve(__dirname, 'src', 'utils'),
      layouts: path.resolve(__dirname, 'src', 'layouts'),
      img: path.resolve(__dirname, 'src', 'assets', 'img'),
      svg: path.resolve(__dirname, 'src', 'assets', 'svg'),
      types: path.resolve(__dirname, 'src', 'types'),
      '@': path.resolve(__dirname, 'src'),
    }
  },
  plugins: [
    new HTMLplugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    })
  ],
};