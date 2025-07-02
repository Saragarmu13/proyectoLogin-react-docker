import React from 'react';
import { Link } from 'react-router-dom';
import '../hojas-de-estilo/Inicio.css';

function Inicio(){
    return(
        <div
        className='contenedor-inicio'
        >
            <h2>Bienvenido, has iniciado sesión correctamente</h2>

            <Link to='/loggedout' className='link-logout'>
                <button
                className='boton-logout'
                name='logout'
                type='button'
                >
                    CERRAR SESIÓN
                </button>
            </Link>
        </div>


    )
}

export default Inicio;