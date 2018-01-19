var path = require('path');

module.exports = {
  entry: './entry.jsx',
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        query: {
          presets: ['env', 'react']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
};
