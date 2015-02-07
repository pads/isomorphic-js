'use strict';

module.exports = {
  output: {
    filename: 'client.js'
  },
  module: {
    loaders: [
      {test: /\.jsx$/, loader: 'jsx-loader'}
    ]
  }
};
