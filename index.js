const express = require("express")
const app = express()

app.get("/", (req, res)=>{
    res.send("Home path")
})

app.get("/app", (req, res)=>{
    res.send("Home/app path")
})

app.get("*", (req, res)=>{
    res.send("No se donde estoy")
})

app.listen(3030, ()=>{
    console.log("Servidor express escuchando en el puerto 3030")
})