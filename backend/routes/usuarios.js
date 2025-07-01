const express = require('express');
const router = express.Router();

const usuarioController = require('../controllers/usuarioController');

// DEFINIR LAS RUTAS Y VINCULARLAS A LAS FUNCIONES DEL CONTROLADOR
router.post('/login', usuarioController.login);
router.post('/register', usuarioController.register);


module.exports = router;