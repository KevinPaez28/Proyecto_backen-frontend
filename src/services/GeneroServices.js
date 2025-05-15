import Generos from "../models/Generos.js";

class GeneroServices{
 
  static async getAllgenero() {
    try {
      const instanciargeneros = new Generos();
      const generos = await instanciargeneros.getAllgeneros();
      if (generos.length === 0) {
        return {
          error: true,
          code: 404,
          message: "genero no encontrado"
        };
      }
      return {
        error: false,
        code: 200,
        message: "Genero Obtenido correctamente",
        data: generos
      };
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error al obtener los generos"
      }
    }
  }
  static async generosbyid(id) {
    try {
      const instanciargeneros = new Generos();
      const generos = await instanciargeneros.getallbyId(id);
      if (generos.length === 0) {
        return {
          error: true,
          code: 404,
          message: "Genero no encontrado",
        }
      }
      const usuarios = await instanciargeneros.usuarios(id);
      generos.usuarios = usuarios;
      return {
        error: false,
        code: 200,
        message: "Genero obtenida correctamente",
        data: generos, 
      };
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error al obtener los generos"
      }
    }
  }
  static async postAll(genero) {
    try {
      const instanciargeneros = new Generos();
      const generos = await instanciargeneros.postAllgeneros(genero)
      if (generos.length === 0) {
        return {
          error: true,
          code: 404,
          message: "Genero no encontrado",
        }
      }
      return {
        error: false,
        code: 200,
        message: "Genero creado correctamente",
        data: generos,
      };
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error al obtener los generos"
      }
    }
  }
  static async patchAll(id,campos) {
    try {
      const instanciargeneros = new Generos();
      const Generosexistentes = await instanciargeneros.getallbyId(id);

      if (Generosexistentes.length === 0) {
        return {
          error: true,
          code: 404,
          message: "Genero no encontrado",
        };
      }
      const Genero = await instanciargeneros.putallGeneros(id, campos);
      if (Genero === null) {
        return {
          error: true,
          code: 400,
          message: "Error al actualizar el Genero",
        };
      }
      return {
        error: false,
        code: 200,
        message: "Genero actualizado correctamente",
        data: Genero,
      };
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error interno al actualizar el Genero",
      };
    }
  }
  static async delete(id) {
    try {
      const instanciarGeneros = new Generos();
      const Generosexistentes = await instanciarGeneros.getallbyId(id);

      if (Generosexistentes.length === 0) {
        return {
          error: true,
          code: 404,
          message: "generos no encontrada",
        };
      }

      const generosbyUsuarios = await instanciarGeneros.usuarios(id);
      if (generosbyUsuarios.length > 0) {
        return {
          error: true,
          code: 400,
          message: "No se puede eliminar el genero tiene usuarios asociados"
        }
      }

      const generos = await instanciarGeneros.deleteGeneros(id)
      if (generos.error) {
        return {
          error: true,
          code: 400,
          message: generos.mensaje,
        };
      }
      // Retornamos la respuesta de eliminación
      return {
        error: false,
        code: 200,
        message: "ciudad eliminada correctamente",
        data: Generosexistentes
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


export default GeneroServices;