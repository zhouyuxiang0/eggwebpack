module.exports = {
  entry: './app/public/static/test.js',
  output: {
    filename: '[name].js',
    path: `${__dirname}/app/public/static`,
    publicPath: '/static'
  }
}