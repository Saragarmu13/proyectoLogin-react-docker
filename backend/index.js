const express = require('express');
const cors = require('cors');
const usuariosRoutes = require('./routes/usuarios');

const app = express();

app.use(cors());
app.use(express.json());

// seteamos urlencoded para capturar los datos del formulario, hace que puedas leer req.body con los datos del formulario.
app.use(express.urlencoded({ extended: false })); 


app.use('/usuarios', usuariosRoutes);

// Ruta de prueba para ver si funciona el backend
//const pingRoute = require('./routes/ping');
//app.use(pingRoute);

// Ruta de prueba para ver si funciona la base de datos
//const testRoutes = require('./routes/test');
//app.use(testRoutes);

//manejar usuarios con contraseña y quieres almacenar esas contraseñas de forma segura
const bcryptjs = require('bcryptjs');


app.listen(3001, '0.0.0.0', () => {
    console.log("Servidor corriendo en puerto 3001");
})

