/**
 * ████████████████████████████████████████████████████████████████████████████████████████████████████
 * Name          :   Webpack Web Application
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
    app:'./src/index.js'
    , button:'./src/components/button/index.js'
    , media:'./src/components/media/index.js'
    , print:'./src/components/print/index.js'
 };

 // Output
 var output = {
    filename:'[name].bundle.js',
    path: path.resolve(__dirname,distFolder)
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
            test:/\.(png|svg|jpg|gif)$/,
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
        }
    ]
};

// Html Webpack Plugin
var HtmlWebpackPlugin = require('html-webpack-plugin');

// Clean Distributor Folder
var CleanWebpackPlugin = require('clean-webpack-plugin');

/**
 * Configuration Module
 * 
 * This module webpack configuration
 */

 module.exports = {
     entry:enrty,
     output:output,
     module:modules,
     devtool:'inline-source-map',
     devServer:{
         contentBase:'./dist'
     },
     plugins:[
         new CleanWebpackPlugin([distFolder]),
         new HtmlWebpackPlugin({
         title:'Webpack Tutorial'
     })]
 };