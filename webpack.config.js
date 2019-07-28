const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// const extractCSS = new ExtractTextPlugin('stylesheets/[name]-one.css');
module.exports = {
  entry: './client/src/test.js',
  module: {
    rules: [{
      test: /\.(jpg|png|gif)$/,
      use: {
        // loader: 'file-loader',
        loader: 'url-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'images/',
          limit: 10240
        }
      }
    }, {
      test: /\.(eot|ttf|svg|woff)$/,
      use: {
        loader: 'file-loader',
        // loader: 'url-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'font/'
        }
      }
    }, {
      test: /\.vue$/,
      use: {
        loader: 'vue-loader'
      }
    }, {
      test: /\.(sa|sc|c)ss$/,
      use: [
        'style-loader',
        {
          loader: "file-loader",
          options: {
              name: "css/[name].[ext]",
          }
        }, {
          loader: MiniCssExtractPlugin.loader,
          options: {
            // you can specify a publicPath here
            // by default it uses publicPath in webpackOptions.output
            // publicPath: './',
            hmr: process.env.NODE_ENV === 'development',
          },
        }, {
          loader: 'css-loader',
          options: {
            importLoaders: 2,
            modules: true
          }
        },
        'postcss-loader',
        'sass-loader',
      ]
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
      // ignoreOrder: false
    })
  ],
  output: {
    filename: '[name].js',
    path: `${__dirname}/app/public/static`,
    publicPath: '/static/js'
  }
}