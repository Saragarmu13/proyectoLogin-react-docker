import React, { useState } from 'react';
import '../hojas-de-estilo/Registrarse.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Registrarse(){
    const[usuario, setUsuario] = useState('')
    const[errorUsuario, setErrorUsuario] = useState('')
    const[nombreUsuario, setNombreUsuario] = useState('');
    const[contrasena, setContrasena] = useState('');
    const[errorContrasena, setErrorContrasena] = useState('')
    const[blur, setBlur] = useState(false)
    const[error, setError] = useState('');

    const navigate = useNavigate();
    

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

    function manejarNombreUsuario(e){
        setNombreUsuario(e.target.value);
    }

    function manejarContrasena(e){
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

    const manejarEnvio = async (e) =>{
        e.preventDefault() // Evita que recargue la página
        if(!usuario || !nombreUsuario || !contrasena){
            setError('Por favor, completa todos los campos');
            return
        }
            try{
                const res = await axios.post('http://localhost:3001/usuarios/register', { 
                    correo: usuario, 
                    'nombre_completo': nombreUsuario,
                    contrasena: contrasena 
                });
                console.log('Respuesta del servidor:', res.data);
                

                if(res.status === 201){
                    setError(''); // Limpia mensaje de error
                    navigate('/logged');
                }

                
            } catch(error){
                console.log('Error en login:', error.response?.data || error.message);
                setError('Hubo un error al registrar el usuario.');
            }
    }

    function manejarReset(){
        navigate('/');
    }
    
return(
    <form
    className='contenedor-formulario'
    onSubmit={manejarEnvio}>
        <header>
            <h1>Formulario de Registro</h1>
        </header>
        
        <div className='contenedor-input'>
            <input 
            className='usuario-input'
            type='text'
            name='usuario'
            placeholder='Correo Electrónico'
            value={usuario}
            onChange={manejarUsuario}
            onBlur={manejarBlur}/>

            {blur && errorUsuario && (
                <p className='error'>{errorUsuario}</p>
            )}

            <input 
            className='nombreUsuario-input'
            type='text'
            name='nombre_completo'
            placeholder='Nombre completo'
            value={nombreUsuario}
            onChange={manejarNombreUsuario}
            onBlur={manejarBlur}
            />
            {blur}

            <input
            className='password-input'
            type='password'
            placeholder='Contraseña'
            name='contrasena'
            value={contrasena}
            onChange={manejarContrasena}
            onBlur={manejarBlur}
            />   
            {blur && errorContrasena && (
                <p className='error'>{errorContrasena}</p>
            )}

            {error && <p className='error'>{error}</p>}
        </div>
           
        <div className='contenedor-botones'>
             <button
            className='boton-submit'
            name='submit'
            type='submit'>REGISTRARSE</button>

            <button
            className='boton-reset'
            name='reset'
            type='reset'
            onChange={manejarReset}>
                <Link to='/' className='link-reset'>CANCELAR</Link>
            </button>
        </div>
       
        
    </form>
);
}

export default Registrarse;