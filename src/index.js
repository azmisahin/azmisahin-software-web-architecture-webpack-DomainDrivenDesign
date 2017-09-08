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

// Button Element
import Button from './components/button';

// Media Element
import Media from './components/media';

// Add a Element
document.body.appendChild(new Button());
document.body.appendChild(new Media());

// Current Document Title
var currentTile = document.title;
   
// Hot Module Updating System
if(module.hot){

    // Set a Updateting Message
    document.title = "Updating...";
    
    // Proccess

    // Wait
    setTimeout(function(){ document.title = currentTile; }, 5000);
    
  }