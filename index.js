const fs = require("fs")
const ops = require("./src/fileops")


const leer = (path) => {
    return new Promise((resolve, reject)=>{
        fs.readFile(path, 'utf8', (err, lista)=>{
            if(err) reject(err);
            resolve(lista.split("\n"))
        })
    })
}

const escribir = (path, valores) => {
    return new Promise((resolve, reject)=>{
        fs.writeFile(path, valores, (err, result)=>{
            if(err) reject(err);
            resolve(true)            
        })
    })
}

async function nuevoActualizado(origen , destino){
    const texto = await leer(origen)
    const names = ops.callNames(texto).join("\n")
    await escribir(destino, names)
    console.log("guardado")        
}

nuevoActualizado("./resources/name.txt", "./resources/newname.txt")



/*
let num;
//Leer archivo dde numeros
fs.readFile("./resources/number.txt","utf8",(err, texto)=>{
    if(err) throw err;
    const numbers = texto.split("\n").map(n=>Number(n))
    num = ops.incrementValues(numbers);
    //Escribir nuevo archivo
    fs.writeFile("./resources/numbernew.txt", num.join("\n"), (err, result)=>{
        if(err) throw err;
    })
})
*/