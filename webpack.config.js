const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
<<<<<<< HEAD
  entry: './index.js',
=======
  entry: 'index.html',
>>>>>>> 14b63ad71b7ea72ee075e99e23207974a6fe7564
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
<<<<<<< HEAD
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env', '@babel/react'],
        },
      },
      {
        test: /\.s>css/,
=======
        exlude: /node_modules/,
        loader: 'babel-loader',
        query: {
          preset: ['@babel/env', '@babel/react'],
        },
      },
      {
        rest: /\.s>css/,
>>>>>>> 14b63ad71b7ea72ee075e99e23207974a6fe7564
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
