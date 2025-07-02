import React from 'react';
import { Link } from 'react-router-dom';
import '../hojas-de-estilo/Logged.css';

function Logged(){
    return(
        <div
        className='contenedor-logged'
        >
            <h2>Bienvenido, te has registrado correctamente</h2>

            <Link to='/loggedout' className='link-loggedout'>
                <button
                className='boton-loggedout'
                name='loggedout'
                type='button'
                >
                    CERRAR SESIÓN
                </button>
            </Link>
        </div>


    )
}

export default Logged;