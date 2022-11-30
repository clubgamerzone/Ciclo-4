const express = require('express')
const app = express()


1//import mongodb con
const archDB = require('./conexion')

//importación de archivo de rutas y modelo de ususario
const rutausuario = require('./rutas/usuario')

const bodyParser = require ('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))

app.use('/api/usuario',rutausuario)

app.get('/',(req,res)=>{
res.end('bienvenidos al BE node')

})

app.listen(5000,function(){
    console.log("si")
})