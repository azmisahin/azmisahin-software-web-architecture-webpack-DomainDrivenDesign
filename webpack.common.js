/**
 * ████████████████████████████████████████████████████████████████████████████████████████████████████
 * Name          :   Webpack Web Application Common Configuration
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
 
 
 // Distributor Folder
 var distFolder = 'dist';
 
 // Enrty
 var enrty = {
     // Application Client
     app:'./src/client/index.js'
  };
 
  // Output
  var output = {
     filename:'[name].bundle.js',
     path: path.resolve(__dirname,distFolder),
     publicPath:'/',
 };
 
 // Modules
 var modules = {
     rules:[
         {
             test: /\.css$/,
             use:[
                 'style-loader',
                 'css-loader'
             ]
         },
         {
             test:/\.(png|svg|jpg|gif|ico)$/,
             use:[
                 'file-loader'
             ]
         },
         {
             test:/\.(woff|woff2|eot|ttf|otf)$/,
             use:[
                 'file-loader'
             ]
         },
         {
             test:/\.(csv|tsv)$/,
             use:[
                 'csv-loader'
             ]
         },
         {
             test:/\.xml$/,
             use: [
                 'xml-loader'
             ]
         },
         {
             test: /\.scss$/,
             use: [{
                 loader: "style-loader"
                }]
        }
     ]
 };
 
 /**
  * Configuration Module
  * 
  * This module webpack configuration
  */
 
  module.exports = {
      entry:enrty,
      output:output,
      module:modules
  };