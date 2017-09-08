/**
 * ████████████████████████████████████████████████████████████████████████████████████████████████████
 * Name          :   Webpack Web Application Developer Configuration
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
 
 // Merge Configuration
 const merge = require('webpack-merge');
 const common = require('./webpack.common.js');

 /**
  * Configuration Module
  * 
  * This module webpack configuration
  */
 
  module.exports = merge(common,{
      devtool:'inline-source-map',
      devServer:{
          contentBase: path.join(__dirname,distFolder),
          compress:true,
          port:80,
          allowedHosts:[
              '.herokuapp.com',
              '.azmisahin.com'
          ],
          // HMR
          hot:true
      }
  });