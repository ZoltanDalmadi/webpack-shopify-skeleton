const path = require('path');
const entries = require('./entries');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: entries,
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'theme/assets')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'vendors'
    }
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: './src/assets/', to: path.resolve(__dirname, './theme/assets/'), ignore: ['*.js', '*.jsx', '*.scss'], flatten: true },
      { from: './src/config/', to: path.resolve(__dirname, './theme/config/'), flatten: true },
      { from: './src/layout/', to: path.resolve(__dirname, './theme/layout/'), flatten: true },
      { from: './src/locales/', to: path.resolve(__dirname, './theme/locales/'), flatten: true },
      { from: './src/sections/', to: path.resolve(__dirname, './theme/sections/'), flatten: true },
      { from: './src/templates/', to: path.resolve(__dirname, './theme/templates/'), flatten: true },
      { from: './src/templates/customers', to: path.resolve(__dirname, './theme/templates/customers'), flatten: true }
    ])
  ]
};
