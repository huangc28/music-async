const fs = require('fs')
const path = require('path')
const config = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', '.babelrc'), 'utf-8'))
require('babel-register')(config)

require('css-modules-require-hook')({
  generateScopedName: '[name]__[local]___[hash:base64:5]',
})

require('asset-require-hook')({
  extensions: ['jpeg', 'jpg', 'svg'],
})

require(path.resolve(__dirname, '../server', 'server.js'))
