const path = require('path');
const { merge } = require('webpack-merge');
const sharedWebpackConfig = require('./webpack.shared');
const moduleFederationPlugin = require('./module-federation');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const FederatedTypesPlugin = require("@module-federation/typescript");


/**
 * @type {import('webpack').Configuration}
 **/
const webpackConfig = {
  output: {
    path: path.resolve(__dirname, '../dist/client'),
    publicPath: 'http://localhost:3000/',
  },
  plugins: [
    moduleFederationPlugin.client,
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
    new FederatedTypesPlugin()
  ],
};

module.exports = merge(sharedWebpackConfig, webpackConfig);