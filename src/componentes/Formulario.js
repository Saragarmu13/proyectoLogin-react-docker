import React, { useState } from 'react';
import '../hojas-de-estilo/Formulario.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Formulario(){
    const[usuario, setUsuario] = useState('')
    const[errorUsuario, setErrorUsuario] = useState('')
    const[contrasena, setContrasena] = useState('')
    const[errorContrasena, setErrorContrasena] = useState('')
    const[blur, setBlur] = useState(false)
    const[mensajeError, setMensajeError] = useState('');
    
    const navigate = useNavigate();

    function manejarCambioUsuario(e){
        setUsuario(e.target.value); //Actualiza el valor del estado
        const valor = e.target.value;
        const regexEmail = /^[^\s@]+@[^\s@]+\.(com|es)$/;
        if(!regexEmail.test(valor)){
            setErrorUsuario('El correo electrónico debe tener un formato válido')
        } else{
            setErrorUsuario('')
        }

    }
 
    function manejarCambioContrasena(e){
        const regexMayusMinNum = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/;
        setContrasena(e.target.value);
        if(e.target.value === ''){
            setErrorContrasena('Introduzca una contraseña')
        } else if(e.target.value.length < 8){
            setErrorContrasena('La contraseña debe tener al menos 8 caracteres')
        } else if(!regexMayusMinNum.test(e.target.value)){
            setErrorContrasena('La contraseña debe contener al menos una minúscula, una mayúscula y un número')
        }
        else {
            setErrorContrasena('')
        } 
    }

    function manejarBlur(){
        setBlur(true)
    }


    /*cont[enviar,setEnviar] = useState('')*/

    const manejarEnvio = async (e) => {
        e.preventDefault() // Evita que recargue la página
        try{
            const res = await axios.post('http://localhost:3001/usuarios/login', { 
                correo: usuario, // el usuario y la contrasena, el segundo valor, es el parámetro que ponemos en el useState
                contrasena: contrasena 
            });
            console.log('Respuesta del servidor:', res.data);

            if(res.status === 200){
                    navigate('/inicio');
                }

        } catch(error){
            console.log('Error en login:', error.response?.data || error.message);
            setMensajeError('Correo o contraseña incorrectos');
        }
    };

return(
    <form 
    className='contenedor-formulario'
    onSubmit={manejarEnvio}
    action='/auth'
    method='POST'>
        <header>
            <h1>INICIO DE SESIÓN</h1>
        </header>

        <div className='contenedor-input'>
            <input
            className='usuario-input'
            type='text'
            placeholder='Correo Electrónico'
            name='usuario'
            value={usuario}
            onChange={manejarCambioUsuario}
            onBlur={manejarBlur}
            />
            {blur && errorUsuario && (
                <p className='error'>{errorUsuario}</p>
            )}

            <input
            className='password-input'
            type='password'
            placeholder='Contraseña'
            name='contrasena'
            value={contrasena}
            onChange={manejarCambioContrasena}
            onBlur={manejarBlur}
            />   

            {blur && errorContrasena && (
                <p className='error'>{errorContrasena}</p>
            )}

            {mensajeError && <p className="error">{mensajeError}</p>}
        </div>
        
        <div className='contenedor-botones'>
            <button
            className='boton-submit'
            name='submit'
            type='submit'
            >
            CONECTARSE
            </button>
            

           
            <button
            className='boton-registrarse'
            name='registrarse'
            type='button'>
                <Link to='/registrarse' className='link-registrarse'>REGISTRARSE</Link>
            </button>
    
        </div>
       

        <div className='contenedor-recuerda'>
            <label className='label-checkbox'>
               <input
            className='checkbox'
            type='checkbox'
            name='recuerdame'
            /> Recuérdame  
            </label>
            

           <Link to='/recuperarContrasena' className='link-recuperar-contrasena'>¿Olvidaste tu contraseña?</Link>
        </div>
        
    </form>
);
}

export default Formulario;