process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const environment = require('./environment')
const customConfig = require('./custom')

const merge = require('webpack-merge')


module.exports = merge(environment.toWebpackConfig(), customConfig)