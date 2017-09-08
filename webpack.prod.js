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

 /**
  * Configuration Module
  * 
  * This module webpack configuration
  */
 
  module.exports = merge(common,{
    devtool:'source-map',
    plugins:[
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
        title:'Webpack Tutorial'
       }),
   // Hot Module Repleacement Plugin
   new webpack.HotModuleReplacementPlugin(),

   // Minify
   new Minify()
   ]
  });