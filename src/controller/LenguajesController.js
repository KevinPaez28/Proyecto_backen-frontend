import { ResponseProvider } from "../providers/ResponseProvider.js";
import LenguajesServices from "../services/lenguajesService.js";

class Lenguajescontroller{
  static getALenguajes = async (req, res) => {
    try {
      const response = await LenguajesServices.getLenguajes();
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
  };
  static getLenguajesbyId = async(req, res) =>{
    const { id } = req.params;
    try {
      const response = await LenguajesServices.LenguajesByid(id);
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



  static postLenguajes = async (req, res) => {
    const { nombre_lenguaje } = req.body
    console.log(nombre_lenguaje)
    try {
    const response = await LenguajesServices.postAll(nombre_lenguaje);
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

  
   static patchlenguaje = async (req, res) => {
    const { id } = req.params;
    const campos = req.body;
      try {
        const response = await LenguajesServices.putlenguajes(id, campos) 
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
  
  static deleteLenguajes = async (req, res) => {
    const { id } = req.params;
    try {
      const response = await LenguajesServices.delete(id) 
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

export default Lenguajescontroller