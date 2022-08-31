const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const base = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  devtool: 'cheap-module-source-map',
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['', '.ts', '.tsx', '.js', '.json'],
    plugins: [new TsConfigPathsPlugin()]
  },
  module: {
    rules: [
      // ts-loader 用于加载解析 ts 文件
      {
        test: /\.(ts|tsx)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
        exclude: /node_modules/
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
    ],
  },
};

let tempConfig = {};

if (process.env.NODE_ENV === 'production') {
  tempConfig = {
    ...base,
    entry: './src/Component/index.tsx',
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist'),
      library: 'graph-timeline',
      libraryTarget: 'umd',
    },
    devtool: false,
    externals: { // 定义外部依赖，避免把react和react-dom打包进去
      "react": "react",
      "react-dom": "react-dom"
    },
    plugins: [
      new CleanWebpackPlugin(), // 编译之前清空 /dist
    ],
  };
} else {
  tempConfig = {
    ...base,
    entry: path.join(__dirname, './pages/index.tsx'),
    output: {
      path: path.join(__dirname, './pages/dist'),
      filename: 'bundle.js',
      library: 'graph-timeline',
      libraryTarget: 'umd',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, './pages/index.html'),
        filename: 'index.html',
      }),
    ],
    devServer: {
      // port: 8008,
    },
  }
}

module.exports = tempConfig;
