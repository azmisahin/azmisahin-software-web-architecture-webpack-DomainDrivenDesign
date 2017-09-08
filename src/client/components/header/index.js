/**
 * ====================================================================================================
 * Name    : Header Script
 * File    : Header.js
 * Version : 0.0.1
 * ====================================================================================================
 */

 // Require
 import Navbar from './navbar.js';
 
  /**
   * Create a Header
   */
  export default function createHeader(content){
      
     // Crete Div Element
     var result = new Navbar();
     
     // Return Result
     return result;
 }