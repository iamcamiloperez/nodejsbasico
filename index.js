const call = require("./src/call")


async function callWithPromise(){
    const fullname = await call.withPromise("Camilo", "Perez")
        console.log(fullname)
}

callWithPromise()
console.log("post prueba")