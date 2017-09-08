/**
 * ====================================================================================================
 * Name    : Footer Script
 * File    : Footer.js
 * Version : 0.0.1
 * ====================================================================================================
 */

  // Require
  import {Div, Footer, P} from '../../../components/html/index.js'
  
  /**
  * Create a Footer
  */
 export default function createFooter(content){
     
    // Crete Div Element
    var result = new Footer('');
    result.classList.add('footer');
    var container = new Div('');
    container.classList.add('container');
    var p = new P(content);
    p.classList.add('text-muted');
    container.appendChild(p);
    result.appendChild(container);
    
    // Return Result
    return result;
}