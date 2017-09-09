/**
 * ████████████████████████████████████████████████████████████████████████████████████████████████████
 * Name          :   Webpack Web Application Server
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

'use strict';
Instance.Name = 'Server Manager';
Instance.Version = '0.0.1';
Instance.Debug = true;
Instance.prototype = (function () {

    // Require
    const express = require('express');
    const webpack = require('webpack');
    const webpackDevMiddleware = require('webpack-dev-middleware');

    // Middleware Application
    const app = express();
    const config = require('../../webpack.config.js');
    const compiler = webpack(config);

    // Server Listen
    function listen() {

        // Configuration Use
        app.use(webpackDevMiddleware(compiler, {
            publicPath: config.output.publicPath
        }));

        // Port Configuration
        var port = portNormalize(process.env.PORT || '3000');

        // Application Listen Start
        app.listen(port, function () {
            console.log("Application Start:" + port);
        });
    }

    // Port Normalize
    function portNormalize(val) {
        var port = parseInt(val, 10);

        if (isNaN(port)) {
            // named pipe
            return val;
        }

        if (port >= 0) {
            // port number
            return port;
        }

        return false;
    }


    // Init
    // Initialize Test
    function Init() {
        // Initalize 
        console.log(Instance.Name + " Version : " + version()); Debugger();

        // Listen
        listen();
    }
    //Debug
    function Debugger() {
        if (!Instance.Debug) {
            console = console || {};
            console.log = function () { };
        }
    }
    /*
    version
    ────────────────────────────────────────────────────────────────────────────────────────────────────*/
    function version() {
        return "0.0.0.1";
    }
    /*
    Public Functions
    ────────────────────────────────────────────────────────────────────────────────────────────────────*/
    return {
        constructor: Instance
        , Version: function () { return version() }
        , init: function () { Init(); }
    }

})();

/**
 * Instance
 * 
 * @public
 */
function Instance() { this.init(); };

// Instance Create
new Instance();

/**
 * Application Instance
 * Node Domain Driven Design
 * Module Exports
 */
module.exports = Instance;