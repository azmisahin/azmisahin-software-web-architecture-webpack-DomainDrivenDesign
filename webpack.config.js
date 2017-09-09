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

// Merge Configuration
const merge = require('webpack-merge');
const prod = require('./webpack.prod.js');

/**
 * Configuration Module
 * 
 * This module webpack configuration
 */

module.exports = merge(prod, {
});