//import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Formulario from './componentes/Formulario';
import RecuperarContrasena from './componentes/RecuperarContrasena';
import Registrarse from './componentes/Registrarse';
import '../src/hojas-de-estilo/Formulario.css';
import Logged from './componentes/Logged';
import Loggedout from './componentes/Loggedout';
import Inicio from './componentes/Inicio';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route 
            path="/" 
            element={<Formulario />}
          />
          <Route 
            path="/recuperarContrasena" 
            element={<RecuperarContrasena />} 
          />
          <Route 
            path="/registrarse" 
            element={<Registrarse />} 
          />
          <Route
            path='/logged'
            element={<Logged />}
          /> 
          <Route
            path='/loggedout'
            element={<Loggedout />}
          /> 
          <Route
            path='/inicio'
            element={<Inicio />}
          /> 
        </Routes>
      </BrowserRouter>
      
    </div>

    
   
  );
}

export default App;
