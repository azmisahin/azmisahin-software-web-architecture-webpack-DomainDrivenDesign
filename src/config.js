/**
 * ████████████████████████████████████████████████████████████████████████████████████████████████████
 * Name          :   Webpack Web Application Config
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
Instance.Name = 'Config Manager';
Instance.Version = '0.0.1';
Instance.Debug = true;
Instance.prototype = (function () {
    
    // Init
    // Initialize Test
    function Init() {
        // Initalize 
        console.log(Instance.Name + " Version : " + version()); Debugger();
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