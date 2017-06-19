const { env, publicPath }  = require('../configuration.js')

module.exports = {
    test: /\.pdf$/i,
    use: [{
        loader: 'file-loader',
        options: {}
    }]
}