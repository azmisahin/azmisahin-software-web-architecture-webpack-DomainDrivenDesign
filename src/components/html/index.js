/**
 * ====================================================================================================
 * Name    : Html Script
 * File    : html.js
 * Version : 0.0.1
 * ====================================================================================================
 */

  /**
  * Create Button Element
  */
  export function Button(content,clickCallback){
    
   // Crete Button Element
   var result = document.createElement('button');
   
   // Set Element Value
   result.innerHTML = content;
   
   // Event
   result.onclick = clickCallback;

   // Return Result
   return result;
}

 /**
  * Create Div Element
  */
  export function Div(content){
    
   // Crete Div Element
   var result = document.createElement('div');
   
   // Set Element Value
   result.innerHTML = content;
   
   // Return Result
   return result;
}


 /**
  * Create Footer Element
  */
  export function Footer(){
    
   // Crete Footer Element
   var result = document.createElement('footer');
      
   // Return Result
   return result;
}

/**
  * Create H1 Element
  */
  export function H1(content){
    
   // Crete H1 Element
   var result = document.createElement('h1');
   
   // Set Element Value
   result.innerHTML = content;
   
   // Return Result
   return result;
}

 /**
  * Create li Element
  */
  export function Li(){
    
   // Crete Li Element
   var result = document.createElement('li');
   
   // Return Result
   return result;
}

 /**
  * Create Link Element
  */
  export function Link(content,link){
    
   // Crete Div Element
   var result = document.createElement('a');
   
   // Set Element Value
   result.innerHTML = content;
   result.setAttribute('href', link);
   
   // Return Result
   return result;
}

// Create a Media Element
export function Media(src,alt){
  
  // Create Media Element
  var result = new Image();
  result.alt = alt;
  
  // Set Source
  result.src = src;
  
  // return result
  return result;
};


 /**
  * Create Nav Element
  */
  export function Nav(content){
    
   // Crete Div Element
   var result = document.createElement('nav');

   // Set Element Value
   result.innerHTML = content;
   
   // Return Result
   return result;
}
 /**
  * Create P Element
  */
  export function P(content){
    
   // Crete P Element
   var result = document.createElement('p');
   
   // Set Element Value
   result.innerHTML = content;
   
   // Return Result
   return result;
}

/**
  * Create Span Element
  */
  export function Span(content){
    
   // Crete Span Element
   var result = document.createElement('span');
   
   // Set Element Value
   result.innerHTML = content;
   
   // Return Result
   return result;
}

 /**
  * Create Ul Element
  */
  export function Ul(){
    
   // Crete Ul Element
   var result = document.createElement('ul');
   
   // Return Result
   return result;
}