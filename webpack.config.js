const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: 'index.html',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exlude: /node_modules/,
        loader: 'babel-loader',
        query: {
          preset: ['@babel/env', '@babel/react'],
        },
      },
      {
        rest: /\.s>css/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  devServer: {
    publicPath: '/build',
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
};
