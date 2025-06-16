//import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Formulario from './componentes/Formulario';
import RecuperarContrasena from './componentes/RecuperarContrasena';
import '../src/hojas-de-estilo/Formulario.css';



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
        </Routes>
      </BrowserRouter>
      
    </div>

    
   
  );
}

export default App;
