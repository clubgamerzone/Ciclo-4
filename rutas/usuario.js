const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const eschema = mongoose.Schema

const eschemaUsuario = new eschema({
nombre: String,
email: String,
telefono: String,
idusuario: String
})

const ModeloUsuario= mongoose.model('usuarios',eschemaUsuario)
module.exports = router


//agregar usuario
router.post('/agregarusuario', (req, res) =>{

    const nuevousuario = new ModeloUsuario({

        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono,
        idusuario: req.body.idusuario
    })
nuevousuario.save(function(err){
if(!err){
    res.send('usuario ok')
}else{
    res.send(err)
}

})
})

//obtener usuarios
router.get('/obtenerusuarios', (req,res)=>{
    ModeloUsuario.find({}, function(docs,err){
        if(!err){
            res.send('usuario ok')
        }else{
            res.send(err)
        }
    })

})