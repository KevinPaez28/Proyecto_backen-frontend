import Lenguajes from "../models/Lenguajes.js";

class LenguajesServices {
  static async getLenguajes() {
    try {
      const instanciarLenguajes =new Lenguajes();
      const lenguajes = await instanciarLenguajes.getAll();
      if (lenguajes.length === 0) {
        return {
          error: true,
          code: 404,
          message: "lenguajes no encontrados"
        };
      }
      return {
        error: false,
        code: 200,
        message: "lenguajes Obtenidos correctamente",
        data: lenguajes
      };
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error al obtener los lenguajes"
      }
    }
  }
  static async LenguajesByid(id){
    try {
      const instanciarLenguajes =new Lenguajes();
      const lenguajes = await instanciarLenguajes.getbyid(id);
      if (lenguajes.length === 0) {
        return {
          error: true,
          code: 404,
          message: "lenguajes no encontrados"
        };
      }
      return {
        error: false,
        code: 200,
        message: "lenguajes Obtenidos correctamente",
        data: lenguajes
      };
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error al obtener los lenguajes"
      }
    }
  }
  static async postAll(lenguaje) {
    try {
      const instanciarLenguajes =new Lenguajes();
      const lenguajes = await instanciarLenguajes.postAll(lenguaje);
      if (lenguajes.length === 0) {
        return {
          error: true,
          code: 404,
          message: "lenguajes no encontrados"
        };
      }
      return {
        error: false,
        code: 200,
        message: "lenguajes creados correctamente",
        data: lenguajes
      };
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error al obtener los lenguajes"
      }
    }
  }
  static async putlenguajes(id, campos) {
    try {
      const instanciarLenguajes =new Lenguajes();
      const lenguajesexistentes = await instanciarLenguajes.getbyid(id);

      if (lenguajesexistentes.length === 0) {
        return {
          error: true,
          code: 404,
          message: "Lenguaje no encontrado",
        };
      }
      const lenguajes = await instanciarLenguajes.putlenguajes(id, campos);
      if (lenguajes === null) {
        return {
          error: true,
          code: 400,
          message: "Error al actualizar los lenguajes",
        };
      }
      return {
        error: false,
        code: 200,
        message: "lenguajes actualizados correctamente",
        data: lenguajes,
      };
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error interno al actualizar el campo",
      };
    }
  }
  static async delete(id) {
    
  }
}

export default LenguajesServices;