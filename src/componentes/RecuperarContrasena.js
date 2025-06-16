import React, { useState } from 'react';
import '../hojas-de-estilo/Formulario.css';
import '../hojas-de-estilo/RecuperarContrasena.css';
import candado from '../images/candado.png';
import { Link } from 'react-router-dom';

function RecuperarContrasena(){
    const[usuario, setUsuario] = useState('')
    const[blur, setBlur] = useState(false)
    const[errorUsuario, setErrorUsuario] = useState('')

    function manejarUsuario(e){
        setUsuario(e.target.value);
        const valor = e.target.value;
        const regexEmail = /^[^\s@]+@[^\s@]+\.(com|es)$/;
        if(!regexEmail.test(valor)){
            setErrorUsuario('El correo electrónico debe tener un formato válido')
        } else{
            setErrorUsuario('')
        }
    }

    function manejarBlur(){
        setBlur(true)
    }

    
return(
    <form
    className='contenedor-formulario'
    /*onSubmit={manejarEnvio}*/>
        <header>
            <h1>¿No recuerdas tu contraseña?</h1>
            <img alt='candado' className='imagen-candado' src={candado}></img>
            <p>No te preocupes. Ingresa tu Email y te ayudaremos</p>
        </header>
        <input 
        className='correo-recuperar'
        type='text'
        name='usuario'
        placeholder='Correo Electrónico'
        value={usuario}
        onChange={manejarUsuario}
        onBlur={manejarBlur}/>

        {blur && errorUsuario && (
                <p className='error'>{errorUsuario}</p>
            )}

        <button
        className='boton-submit'
        name='submit'
        type='submit'>Solicitar</button>

        <Link to='/' className='link'>Volver a Inicio de sesión</Link>
    </form>
)
}

export default RecuperarContrasena;