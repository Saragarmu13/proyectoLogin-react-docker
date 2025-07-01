const pool = require('../bd');

const crearUsuario = async(correo, nombre_completo, contrasena) =>{
    const sql = 'INSERT INTO usuarios (correo, nombre_completo, contrasena) VALUES (?, ?, ?)';
    try{
        const [result] = await pool.query(sql, [correo, nombre_completo, contrasena]);
        return result;
    } catch (error){
        throw error;
    }
};

/*const obtenerUsuarios = async() =>{
    const sql = 'SELECT * FROM usuarios';
    try{
        const[rows] = await pool.query(sql);
        return rows;
    } catch(error){
        throw error;
    }
};*/

const obtenerUsuarioPorCorreo = async(correo) =>{
    const sql = 'SELECT * FROM usuarios WHERE correo=?';
    try{
        const[rows] = await pool.query(sql, [correo]);
        return rows[0];
    } catch(error){
        throw error;
    }
};

/*const eliminarUsuario = async(id) =>{
    const sql = 'DELETE FROM usuarios WHERE id=?';
    try{
        const[result] = await pool.query(sql, [id]);
        return result;
    } catch(error){
        throw error;
    }
};*/

module.exports={
    crearUsuario,
    obtenerUsuarioPorCorreo,
 
};