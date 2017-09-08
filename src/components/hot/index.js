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