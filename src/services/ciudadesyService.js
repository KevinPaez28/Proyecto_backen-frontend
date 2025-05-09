import Ciudades from "../models/Ciudades.js"
class CiudadesServices {
  static async getCiudades(){
  try {
    const instanciarCiudades = new Ciudades();
    const ciudades = await instanciarCiudades.getAll();
    if (ciudades.length == 0) {
      return {
        error: true,
        code: 404,
        message:"No hay Ciudades registradas"
      }
    }
    return {
      error: false,
      code: 200,
      message: "Ciudades Obtenida correctamente",
      data: ciudades,
    };
  } catch (error) {
    return {
      error: true,
      code: 500,
      message:"Error al obtener las Ciudades"
    }
  }
  }

  
}

export default CiudadesServices