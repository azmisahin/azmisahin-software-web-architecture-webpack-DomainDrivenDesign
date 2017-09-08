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

  // Check Environment
  if (process.env.NODE_ENV !== 'production'){
    console.log("Development Mode!")
  }else{
    console.log("Production Mode!")
  }