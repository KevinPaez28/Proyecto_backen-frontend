import { ResponseProvider } from "../providers/ResponseProvider.js";
import CiudadesServices from "../services/ciudadesyService.js";
import GeneroServices from "../services/GeneroServices.js";

class GenerosController{
  static getAll = async (req, res) => {
    try {
      const genero = await GeneroServices.getAllgenero();
      if (genero.error) {
        return ResponseProvider.error(
          res,
          genero.message,
          genero.code
        );
      } else {
        return ResponseProvider.success(
          res,
          genero.data,
          genero.message,
          genero.code
        );
      }
    } catch (error) {
      ResponseProvider.error(res, "Error interno del servidor", 500)
    }
  };

  static getGenerosbyId = async (req, res) => {
    const { id } = req.params;
    const genero = await GeneroServices.generosbyid(id);
    try {
      if (genero.error) {
        return ResponseProvider.error(
          res,
          genero.message,
          genero.code
        );
      } else {
        return ResponseProvider.success(
          res,
          genero.data,
          genero.message,
          genero.code
        );
      }
    } catch (error) {
     ResponseProvider.error(res, "Error al interno en el servidor", 500);
    }
  }

  static postgenero = async (req, res) => {
    const { genero } = req.body
    const response = await GeneroServices.postAll(genero)
    try { 
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



  static patchAll = async (req, res) => {
    const { id } = req.params;
   const  genero  = req.body
    try {
    const response = await GeneroServices.patchAll(id,genero);
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

  
  static Deletegeneros = async (req, res) => {
    const {id} = req.params
    try {
      const response = await GeneroServices.delete(id) 
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

export default GenerosController;