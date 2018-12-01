const fs = require("fs")
const ops = require("./src/fileops")

let nombres


fs.readFile("./resources/name.txt","utf8", (err, lista)=>{
    if(err) throw err;
    const nom = lista.split("\n")
    nombres = ops.callNames(nom)    
})

//Escribir nuevo archivo
fs.writeFile("./resources/namenew.txt", nombres.join("\n"), (err, result)=>{
    if(err) throw err;
    console.log("Se escribió el archivo de nombres")
})


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