import { ResponseProvider } from "../providers/ResponseProvider.js";
import CiudadesServices from "../services/ciudadesyService.js";

class CiudadesController {
  static getAllciudades = async (req, res) => {
    try {
      const response = await CiudadesServices.getCiudades();      
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
  static getCiudadesbyId = async (req, res) => {
    const { id } = req.params;
    try {
    const response = await CiudadesServices.ciudadesbyid(id);
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

}

export default CiudadesController;