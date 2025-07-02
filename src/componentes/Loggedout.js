import React from 'react';
import { Link } from 'react-router-dom';
import '../hojas-de-estilo/Loggedout.css';

function Inicio(){
    return(
        <div
        className='contenedor-loggedout'
        >
            <h2>Hasta pronto, has cerrado sesión correctamente</h2>

            <Link to='/' className='link-inicio'>
                <button
                className='boton-inicio'
                name='inicio'
                type='button'
                >
                    IR A LA PÁGINA DE INICIO DE SESIÓN
                </button>
            </Link>
        </div>


    )
}

export default Inicio;