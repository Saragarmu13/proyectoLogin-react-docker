const usuarioModel = require('../models/usuarioModel');

/*crearUsuario = async(req, res) => {
    const { nombre } = req.body;
    try{
        const resultado = await usuarioModel.crearUsuario(nombre);
        res.status(201).json({ mensaje: 'Usuario creado', id:resultado.insertId });
    }catch(error){
        res.status(500).json({ error: 'Error al crear usuario'});
    }
};

obtenerUsuarios = async(req, res) => {
    try{
        const resultado = await usuarioModel.obtenerUsuarios();
        res.status(201).json({ mensaje: 'Usuario encontrado', id:resultado.insertId });
    }catch(error){
        res.status(500).json({ error: 'No se encontró ningún usuario'});
    }
};*/


login = async(req,res) => {
    const { correo , contrasena } = req.body;
    const usuario = await usuarioModel.obtenerUsuarioPorCorreo(correo);
    try{
        if (!usuario) {
                return res.status(404).json({ mensaje: 'Usuario no encontrado' });
            }

            if (usuario.contrasena !== contrasena) {
                return res.status(401).json({ mensaje: 'Contraseña incorrecta' });
            }

        return res.status(200).json({ mensaje: 'Login exitoso', usuario });
    } catch (error) {
        return res.status(500).json({ mensaje: 'Error del servidor', error });
    }
};

register = async(req,res) => {
    const { correo, nombre_completo, contrasena } = req.body;
    
    try{
        const usuarioExistente = await usuarioModel.obtenerUsuarioPorCorreo(correo);

        if(usuarioExistente){
            return res.status(409).json({ mensaje: 'El usuario ya existe' });
        }

        const usuario = await usuarioModel.crearUsuario(correo, nombre_completo, contrasena);
        return res.status(201).json({ mensaje: 'Usuario registrado correctamente', usuario });
    } catch(error){
        return res.status(500).json({ mensaje: 'Error del servidor', error });
    }
};


/* obtenerUsuarioPorId = async(req, res) => {
    const { id } = req.params;
    try{
        const resultado = await usuarioModel.obtenerUsuarioPorId(id);
        res.status(201).json({ mensaje: 'Usuario encontrado', id:resultado.insertId });
    }catch(error){
        res.status(500).json({ error: 'No se encontró ningún usuario con ese id'});
    }
};*/

module.exports = {
    login,
    register,
    
};