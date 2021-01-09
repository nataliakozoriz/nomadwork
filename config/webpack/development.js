process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const webpackConfig = require('./base')
environment.plugins.append(
    'Provide',
    new webpack.ProvidePlugin({
      $: 'jquery/src/jquery',
      jQuery: 'jquery/src/jquery',
    })
  );
module.exports = webpackConfig
