/**
 * ====================================================================================================
 * Name    : Nabvar Script
 * File    : Navbar.js
 * Version : 0.0.1
 * ====================================================================================================
 */

 // Require
 import {Div, Button, Span, Link, Nav, Ul, Li} from '../../../components/html/index.js'
 
  /**
   * Create a Navbar
   */
  export default function createNavBar(){
      
     // Crete Div Element
     var result = new Nav('');
     result.classList.add('navbar');
     result.classList.add('navbar-default');
     result.classList.add('navbar-fixed-top');

     // Container
     var container = new Div('');
     container.classList.add('container');
     result.appendChild(container);

     // Navbar Header
     var navbarHeader = new Div('');
     navbarHeader.classList.add('navbar-header');
     container.appendChild(navbarHeader);
     var button = new Button('',null);
     button.classList.add('navbar-toggle');
     button.classList.add('collapsed');
     var span = new Span('');
     span.classList.add('sr-only');
     button.appendChild(span);
     var spanIcon1 = new Span('');spanIcon1.classList.add('icon-bar');
     var spanIcon2 = new Span('');spanIcon2.classList.add('icon-bar');
     var spanIcon3 = new Span('');spanIcon3.classList.add('icon-bar');
     
     button.appendChild(spanIcon1);
     button.appendChild(spanIcon2);
     button.appendChild(spanIcon3);
     
     container.appendChild(button);
     var link = new Link('Webpack','#');
     link.classList.add('navbar-brand');
     container.appendChild(link);

     // Nabbar
     var navbar = new Div('');
     navbar.id = 'navbar';
     navbar.classList.add('collapse');
     navbar.classList.add('navbar-collapse');
     container.appendChild(navbar);

     // Navbar-nav
     var ul = new Ul();
     ul.classList.add('nav');
     ul.classList.add('navbar-nav');

     // Active Li
     var liActive = new Li();
     liActive.classList.add('active');
     
     // Link
     var homeLink = new Link('Home','#');
     liActive.appendChild(homeLink);

     ul.appendChild(liActive);

     navbar.appendChild(ul);
     
     // Return Result
     return result;
 }