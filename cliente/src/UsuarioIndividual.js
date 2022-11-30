import React from 'react'
import {Link} from 'react-router-dom'
function UsuarioIndividual({usuario}){
    return(
    <div className="container">   
        <div className='row'>
            <div className='col-sm-6 offset-3'>
                <ul className='list-group'>

                    <li className='list-group-item'>{usuario.idusuario}</li>
                    <li className='list-group-item'>{usuario.nombre}</li>

                    <li className='list-group-item'>{usuario.email}</li>

                    <li className='list-group-item'>{usuario.telefono}</li>

                </ul>

                <Link to={`/editarusuario/${usuario.idusuario}`}>Editar<li className='btn btn-success'></li></Link>  
                <Link to={`/eliminar/usuario${usuario.idusuario}`}>Borrar<li className='btn btn-danger'></li></Link>                
               {/* <!-- <button className='btn btn-danger'>Borrar</button>--> */}
                <hr className='mt-4'></hr>
                    
                </div>
                
            </div>
        </div>
    )
}
export default UsuarioIndividual