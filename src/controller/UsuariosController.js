import { ResponseProvider } from "../providers/ResponseProvider.js";
import UsuariosServices from "../services/UsuariosServices.js";

class UsuariosController{
  static getUsuarios = async (req, res) => {
    try {
      const response = await UsuariosServices.getusuarios();      
      if (response.error) {
        return ResponseProvider.error(
          res,
          response.message,
          response.code
        );
      } else {
        return ResponseProvider.success(
          res,
          response.data,
          response.message,
          response.code
        );
      }
    } catch (error) {
      ResponseProvider.error(res, "Error interno del servidor", 500)
    }
  }
  static getbyid = async (req, res) =>{
    const {id} = req.params;
    try {
      const response = await UsuariosServices.getbyidUsuaruos(id);      
      if (response.error) {
        return ResponseProvider.error(
          res,
          response.message,
          response.code
        );
      } else {
        return ResponseProvider.success(
          res,
          response.data,
          response.message,
          response.code
        );
      }
    } catch (error) {
      ResponseProvider.error(res, "Error interno del servidor", 500)
    }
  }
  
  static postusuarios = async (req, res) => {
    
    const { documento, nombre_usuario, apellido_usuario, telefono, contrasenia, id_genero, id_ciudad } = req.body
    try {
    const usuarios = await UsuariosServices.postUsuarios(documento,nombre_usuario,apellido_usuario,telefono,contrasenia,id_genero,id_ciudad);
    if (usuarios.error) {
      return ResponseProvider.error(
        res,
        usuarios.message,
        usuarios.code
      );
    } else {
      return ResponseProvider.success(
        res,
        usuarios.data,
        usuarios.message,
        usuarios.code
      );
    }
  } catch (error) {
    ResponseProvider.error(res, "Error interno del servidor", 500)
  }
  }
  static patchusuarios = async (req, res) => {
    const {id} = req.params
    const campos  = req.body
    try {
      const response = await UsuariosServices.putUsuarios(id, campos) 
      if (response.error) {
       return ResponseProvider.error(
          res,
          response.message,
          response.code
        );
      }
      return ResponseProvider.success(
        res,
        response.data,
        response.message,
        response.code
      );
    } catch (error) {
      ResponseProvider.error(res, "Error al interno en el servidor", 500);
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
      const response = await UsuariosServices.delete(id) 
     if (response.error) {
         return ResponseProvider.error(
            res,
            response.message,
            response.code
          );
        }
        return ResponseProvider.success(
          res,
          response.data,
          response.message,
          response.code
        );
      } catch (error) {
        ResponseProvider.error(res, "Error al interno en el servidor", 500);
      }
  }
}

export default UsuariosController;