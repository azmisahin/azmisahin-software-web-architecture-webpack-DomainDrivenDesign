/**
 * ████████████████████████████████████████████████████████████████████████████████████████████████████
 * Name          :   Webpack Web Application Production Configuration
 * Version       :   @package.json.version
 * Description   :   Web Application With Webpack
 * Author        :   Azmi ŞAHİN <bilgi@azmisahin.com>
 * Licence       :   MIT
 * ════════════════════════════════════════════════════════════════════════════════════════════════════
 * Package       :   No Package / Web Application
 * Repository    :   https://github.com/azmisahin/com.domain.www.react.web.git
 * Homepage      :   https://azmisahin.github.io
 * ████████████████████████████████████████████████████████████████████████████████████████████████████
 **/

// Require
const path = require('path');

// Application Config
const config = require('./package.json');

// Clean Distributor Folder
const CleanWebpackPlugin = require('clean-webpack-plugin');

// Html Webpack Plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Webpack Module
const webpack = require('webpack');

// Minify
const Minify = require('uglifyjs-webpack-plugin');

// Merge Configuration
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

// Build File Extract
// const ExtractTextPlugin = require("extract-text-webpack-plugin");

/**
 * Configuration Module
 * 
 * This module webpack configuration
 */

module.exports = merge(common, {
  // Production Source Mapping
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin([config.app.wwwroot]),
    new HtmlWebpackPlugin({
      title: config.app.title
      , favicon: 'src/client/favicon.ico'
    }),
    // Hot Module Repleacement Plugin
    new webpack.HotModuleReplacementPlugin(),

    // Minify
    new Minify({
      // Production Minify Map
      sourceMap: true
    }),
    // Specify the Environment
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
    // ,new ExtractTextPlugin(config.app.distroot + "/css/[name].css")
  ]
});