/**
 * ====================================================================================================
 * Name    : Button Script
 * File    : button.js
 * Version : 0.0.1
 * ====================================================================================================
 */

 // Require
import print from '../print/index.js';

 /**
  * Create
  */
 export default function createButton(){

      // Creare Container Element
      var result = document.createElement('div');
      var btn = document.createElement('button');
  
      // Set Element Value
      result.innerHTML = "<h1>Hello World</h1>";
      btn.innerHTML = "Click Me!";
  
      // Event
      btn.onclick = print;
  
      // Add a Main Element
      result.appendChild(btn);

      // Return Result
      return result;
  }
