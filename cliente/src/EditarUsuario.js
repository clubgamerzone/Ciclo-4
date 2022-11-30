import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router'
import {useNavigate} from 'react-router-dom'

function EditarUsuario(){
    const params = useParams()
    const navegar = useNavigate()
   // Hooks
    const[nombre, setNombre] = useState('')
    const[email, setEmail] = useState('')
    const[telefono, setTelefono] = useState('')

    useEffect(()=>{
        axios.post('/api/usuario/obtenerdatausuario',{idusuario: params.idusuario}).then(res=>{
            console.log(res.data[0])
            console.log(res.data[1])
            const datausuario= res.data[0]
            setNombre(datausuario.nombre)
            setEmail(datausuario.email)
            setTelefono(datausuario.telefono)
        })
    }, [])


//funcion que actualiza
function editarUsuario(){
//nuevo objeto para actualizar
    const actualizarusuario ={
        nombre: nombre,
        email: email,
        telefono:telefono,
        idusuario: params.idusuario
    }

//hacer la petición
    axios.post('/api/usuario/actualizausuario', actualizarusuario)
    .then(res => {
        console.log(res.data)
        navegar(0)
        alert(res.data)
    })
    .then(err => {console.log(err)})
}

    return(
        <div>   
            <div className="container">   
            <div className="row">
            <h2> Editar Usuario</h2>
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

                <button onClick={editarUsuario} className='btn btn-success'>Guardar edición</button>
            </div>     
        </div>

         </div>


        </div>
    )
}
export default EditarUsuario