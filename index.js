const call = require("./src/call");

const linea = () => console.log("==============================")

console.log(call.sync("Cris"));
linea();

call.withCallback("cris", call.sync)
linea();


call.withPromise("Camilo")
    .then(name=>console.log(name))