/**
 * ████████████████████████████████████████████████████████████████████████████████████████████████████
 * Name          :   Webpack Web Application Client
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

 // Hot
 import '../components/hot';

// Require
import 'bootstrap/dist/css/bootstrap.css';

// Header Component
import Header from './components/header';

// Header Component
import Footer from './components/footer';

// HomePage
import HomePage from './views/home';

// Header Module
var header = new Header('');

// Footer Module
var footer = new Footer('Open source web page: http://azmisahin.github.io');

// Home Page
var homePage = new HomePage('');

// Create Home Page
document.body.appendChild(header);
document.body.appendChild(homePage);
document.body.appendChild(footer);