const express = require('express');
const cors = require('cors');
const usuariosRoutes = require('./routes/usuarios');

const app = express();

app.use(cors());
app.use(express.json());

// seteamos urlencoded para capturar los datos del formulario, hace que puedas leer req.body con los datos del formulario.
app.use(express.urlencoded({ extended: false })); 


app.use('/usuarios', usuariosRoutes);

//manejar usuarios con contraseña y quieres almacenar esas contraseñas de forma segura
const bcryptjs = require('bcryptjs');

app.listen(3001, '0.0.0.0', () => {
    console.log("Servidor corriendo en puerto 3001");
})