const express = requiere('express');
const cors = require('cors');
const usuariosRoutes = require('./routes/usuarios');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/usuarios', usuariosRoutes);

app.listen(3000, () => {
    console.log("Servidor corriendo en puerto 3000");
})