import React, { useState  } from 'react'
import uniquid from 'uniqid'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'

function AgregarUsuario(){
    const navegar = useNavigate()
    const[nombre, setNombre] = useState('')
    const[email, setEmail] = useState('')
    const[telefono, setTelefono] = useState('')


function agregarUsuario()
{
    var usuario = {
        nombre: nombre,
        email: email,
        telefono:telefono,
        idusuario: uniquid()
    }
    console.log(usuario)
    axios.post('/api/usuario/agregarusuario', usuario)
    .then(res => {
        navegar(0)
        alert(res.data)
    })
    .then(err => {console.log(err)})
}


    return(
    <div className="container">   
        <div className="row">
            <h2> AgregarUsuario</h2>
        </div>

        <div className="row">
            <div className="col-sm-6 offset-3">
                <div className='mb-3'>
                    <label htmlFor='nombre' className='form-label'>nombre</label>
                    <input type="text" className='form-control' value ={nombre}  onChange={(e)=>{setNombre(e.target.value)}} ></input>
                </div>

                <div className='mb-3'>
                    <label htmlFor='email' className='form-label'>email</label>
                    <input type="email" className='form-control'  value ={email}  onChange={(e)=>{setEmail(e.target.value)}}></input>
                </div>

                <div className='mb-3'>
                    <label htmlFor='telefono' className='form-label'>telefono</label>
                    <input type="text" className='form-control'  value ={telefono}  onChange={(e)=>{setTelefono(e.target.value)}}></input>
                </div>

                <button onClick={agregarUsuario} className='btn btn-success'>Guardar</button>
            </div>     
        </div>
    </div>
    )
}
export default AgregarUsuario