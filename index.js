const error = require("./src/errors")

try{
    error.standardErr.range();
}catch(err){    
    console.log("Ha ocurrido un error ",err)
}

