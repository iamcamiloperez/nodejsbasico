const greet = require("./src/greet")

//greet.emit("clap");

//greet.emit("shout","AAAU!!!")

greet.emit("call","Camilo Perez",(name) => {
    console.log("estamos llamando a ",name)
})