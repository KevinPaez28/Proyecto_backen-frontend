import Usuarios from "../models/Usuarios.js"

class UsuariosController{
  static getUsuarios = async (req, res) => {
    const OBJusuarios = new Usuarios();
    const usuarios = await OBJusuarios.getAll();
    res.json(usuarios);
  }
  static postusuarios = async (req, res) => {
    const { documento, nombre_usuario, apellido_usuario, telefono, contrasenia, genero, ciudad } = req.body
    try {
     const OBJusuarios = new Usuarios();
    const usuarios = await OBJusuarios.postUsuarios(documento,nombre_usuario,apellido_usuario,telefono,contrasenia,genero,ciudad);
    res.json(usuarios);
   } catch (error) {
    res.status(500).json({error: error.message})
   }
  }
  static patchusuarios = async (req, res) => {
    const {id} = req.params
    const dato_parcial  = req.body
    try {
     const OBJusuarios = new Usuarios();
    const usuarios = await OBJusuarios.patchUsuarios(id,dato_parcial);
    res.json(usuarios);
   } catch (error) {
    res.status(500).json({error: error.message})
   }
  }
  static putusuarios = async(req, res) => {
    const {id} = req.params
    const { documento, nombre_usuario, apellido_usuario, telefono, contrasenia, genero, ciudad}  = req.body
    try {
     const OBJusuarios = new Usuarios();
    const usuarios = await OBJusuarios.putUsuarios(id, documento, nombre_usuario, apellido_usuario, telefono, contrasenia, genero, ciudad);
    res.json(usuarios);
   } catch (error) {
    res.status(500).json({error: error.message})
   }
  }
  static deleleteUsuarios = async (req, res) => {
     const {id} = req.params
    try {
     const OBJusuarios = new Usuarios();
    const usuarios = await OBJusuarios.deleteUsuarios(id);
    res.json(usuarios);
   } catch (error) {
    res.status(500).json({error: error.message})
   }
  }
}

export default UsuariosController;