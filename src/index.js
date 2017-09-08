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

 // Hot Module
 require('./components/hot');

// Button Element
import Button from './components/button';

// Media Element
import Media from './components/media';

// Math in cube module
import { cube } from './components/math';

// Add a Element
document.body.appendChild(new Button('Hello World','Click Me!'));
document.body.appendChild(new Media());
document.body.appendChild(new Button('Cube',['value:',cube(5)].join('\n\n')));