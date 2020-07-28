const path = require('path');

module.exports = {
  entry: {
    index: './index.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
}