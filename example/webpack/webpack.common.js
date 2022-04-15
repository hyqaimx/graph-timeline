const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '../index.tsx'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    publicPath: '/',
    clean: true
  },
  resolve: {
    modules: [path.resolve(__dirname, '../'), 'node_modules'],
    extensions: ['.tsx', '.ts', '.js', '.json']
  },
  optimization: {
    nodeEnv: 'development'
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        use: 'ts-loader',
        exclude: path.resolve(__dirname, '../node_modules')
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)?$/,
        use: {
          loader: "url-loader",
          options: {
            name: '[name].[ext]'
          }
        },
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      filename: 'index.html',
    }),
  ]
}