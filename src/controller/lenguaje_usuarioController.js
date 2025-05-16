import { ResponseProvider } from "../providers/ResponseProvider.js";
import LenUsuariosServices from "../services/LenUsuariosServices.js"
class Usuarioslenguaje {
  static GetallLenguajes = async (req, res) => {
    try {
      const response = await LenUsuariosServices.getLenguajesUsu();      
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
  static getlenguajesbyid = async (req, res) => {
    const { id } = req.params;
    try {
    const response = await LenUsuariosServices.lenguajesbyid(id);
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
      console.log(error)
      ResponseProvider.error(res, "Error al interno en el servidor", 500);
    }
  }
  static postlenUsuarios = async (req, res) => {
    const { id_usuario, id_lenguaje } = req.body;
    try {
    const response = await LenUsuariosServices. postlenguajesUsu(id_usuario , id_lenguaje);
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
      ResponseProvider.error(res, "Error al interno en el servidor", 500);
    }
  }
  static putlengUsuarios = async (req, res) => {
    const { id } = req.params;
    const  campos  = req.body;
    try {
      const response = await LenUsuariosServices.putLenguajesUsu(id, campos) 
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
  static DeleteLenguajesUsu = async (req, res) => {
    const { id } = req.params;
    try {
      const response = await LenUsuariosServices.delete(id) 
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

export default Usuarioslenguaje;