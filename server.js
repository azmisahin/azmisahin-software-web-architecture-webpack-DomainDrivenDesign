/**
 * ████████████████████████████████████████████████████████████████████████████████████████████████████
 * Name          :   Webpack Web Application Server
 * Version       :   @package.json.version
 * Description   :   Web Application With Webpack - Server
 * Author        :   Azmi ŞAHİN <bilgi@azmisahin.com>
 * Licence       :   MIT
 * ════════════════════════════════════════════════════════════════════════════════════════════════════
 * Package       :   No Package / Web Application
 * Repository    :   https://github.com/azmisahin/com.domain.www.react.web.git
 * Homepage      :   https://azmisahin.github.io
 * ████████████████████████████████████████████████████████████████████████████████████████████████████
 **/

 // Require
 const express = require('express');
 const webpack = require('webpack');
 const webpackDevMiddleware = require('webpack-dev-middleware');

 // Middleware Application
 const app = express();
 const config = require('./webpack.config.js');
 const compiler = webpack(config);

 // Configuration Use
 app.use(webpackDevMiddleware(compiler,{
     publicPath:config.output.publicPath
 }));

 // Port Configuration
 var port = normalizePort(process.env.PORT || '3000');
 
 // Application Listen Start
 app.listen(port,function(){
     console.log("Application Start:" + port);
 });


// Port Normalize
function normalizePort(val) {
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
  