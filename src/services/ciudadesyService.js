import Ciudades from "../models/Ciudades.js"

class CiudadesServices {

  static async getCiudades() {
    try {
      const instanciarCiudades = new Ciudades();
      const ciudades = await instanciarCiudades.getAll();
      if (ciudades.length === 0) {
        return {
          error: true,
          code: 404,
          message: "Ciudad no encontrada"
        };
      }
      return {
        error: false,
        code: 200,
        message: "Ciudades Obtenida correctamente",
        data: ciudades
      };
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error al obtener las Ciudades"
      }
    }
  }
  static async ciudadesbyid(id) {
    try {
      const instanciarCiudades = new Ciudades();
      const ciudades = await instanciarCiudades.getbyid(id);
      if (ciudades.length === 0) {
        return {
          error: true,
          code: 404,
          message: "Ciudad no encontrada",
        }
      }
      const usuarios = await instanciarCiudades.usuarios(id);
      ciudades.usuarios = usuarios;
      return {
        error: false,
        code: 200,
        message: "Ciudad obtenida correctamente",
        data: ciudades,
      };
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error al obtener las Ciudades",
      };
    }
  }
  static async postAll(ciudad) {
    try {
      const instanciarCiudades = new Ciudades();
      const ciudades = await instanciarCiudades.postAll(ciudad);
      if (ciudades.length === 0) {
        return {
          error: true,
          code: 404,
          message: "Error al crear la Ciudad",
        }
      }
      return {
        error: false,
        code: 200,
        message: "Ciudad creada correctamente",
        data: ciudades,
      };
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error al crear las ciudades",
      };
    }
  }
  static async putCiudades(id, campos) {
    try {
      const instanciarCiudades = new Ciudades();
      const ciudadesexistentes = await instanciarCiudades.getbyid(id);

      if (ciudadesexistentes.length === 0) {
        return {
          error: true,
          code: 404,
          message: "Ciudad no encontrada",
        };
      }
      const ciudades = await instanciarCiudades.putAllciudades(id, campos);
      if (ciudades === null) {
        return {
          error: true,
          code: 400,
          message: "Error al actualizar la Ciudad",
        };
      }
      return {
        error: false,
        code: 200,
        message: "Ciudad actualizada correctamente",
        data: ciudades,
      };
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error interno al actualizar la Ciudad",
      };
    }
  }
  static async delete(id) {
    try {
      const instanciarCiudades = new Ciudades();
      const ciudadesexistentes = await instanciarCiudades.getbyid(id);

      if (ciudadesexistentes.length === 0) {
        return {
          error: true,
          code: 404,
          message: "Ciudad no encontrada",
        };
      }

      const usuarios = await instanciarCiudades.usuarios(id);
      if (usuarios.length > 0) {
        return {
          error: true,
          code: 400,
          message: "No se puede eliminar la ciudad tiene usuarios asociados"
        }
      }

      const ciudades = await instanciarCiudades.DeleteCiudades(id)
      if (ciudades.error) {
        return {
          error: true,
          code: 400,
          message: ciudades.mensaje,
        };
      }
      // Retornamos la respuesta de eliminación
      return {
        error: false,
        code: 200,
        message: "ciudad eliminada correctamente",
        data: ciudadesexistentes
      }
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error interno al eliminar la ciudad",
      };
    }
  }
}
export default CiudadesServices