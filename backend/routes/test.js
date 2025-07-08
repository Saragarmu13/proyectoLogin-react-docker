// Prueba para ver si hay conexión a la base de datos
/*
const express = require('express');
const router = express.Router();
const pool = require('../bd');

router.get('/test-db', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT 1');
    res.send('Conexión a la base de datos OK');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error en la conexión a la BD');
  }
});

module.exports = router;
*/