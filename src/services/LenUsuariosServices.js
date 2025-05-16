import Lenguajes_usuario from "../models/lenguaje_usuario.js"

class LenUsuariosServices{
  static async getLenguajesUsu() {
    try {
      const instanciarLenguajesUsu = new Lenguajes_usuario();
      const lenguajesUsu = await instanciarLenguajesUsu.getall();
      if (lenguajesUsu.length === 0) {
        return {
          error: true,
          code: 404,
          message: "Lenguajes Usuarios no encontrados"
        };
      }
      return {
        error: false,
        code: 200,
        message: "Lenguajes Usuarios Obtenida correctamente",
        data: lenguajesUsu
      };
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error al obtener los Lenguajes Usuarios"
      }
    }
  }
  static async lenguajesbyid(id) {
   try {
    const instanciarLenguajesUsu = new Lenguajes_usuario();
    const lenguajesusu = await instanciarLenguajesUsu.getbyid(id)
    if (lenguajesusu.length === 0) {
      return {
        error: true,
        code: 404,
        message: "Lenguajes Usuarios no encontrados"
      };
    }
    return {
      error: false,
      code: 200,
      message: "Lenguajes Usuarios Obtenida correctamente",
      data: lenguajesusu
    };
  } catch (error) {
    return {
      error: true,
      code: 500,
      message: "Error al obtener los Lenguajes Usuarios"
    }
   }
  }
  static async postlenguajesUsu(id_usuario, id_lenguaje) {
    try {
      const instanciarLenguajesUsu = new Lenguajes_usuario();
      const LenguajesUsu = await instanciarLenguajesUsu.postlenguajesUsu(id_usuario, id_lenguaje)
      return {
        error: false,
        code: 200,
        message: "Lenguajes Usuarios creada correctamente",
        data: LenguajesUsu,
      };
    } catch (error) {
      console.log
      return {
        error: true,
        code: 500,
        message: "Error al crear las Lenguajes Usuario",
      };
    }
    
  }
  static async putLenguajesUsu(id, campos) {
    try {
      const instanciarLenguajesUsu = new Lenguajes_usuario();
      const LenguajesUsu = await instanciarLenguajesUsu.getbyid(id);

      if (LenguajesUsu.length === 0) {
        return {
          error: true,
          code: 404,
          message: "Lenguajes Usuarios no encontrados",
        };
      }
      const Lenguajesusuarios = await instanciarLenguajesUsu.putAllciudades(id, campos);
      if (Lenguajesusuarios === null) {
        return {
          error: true,
          code: 400,
          message: "Error al actualizar la Lenguajes Usuarios",
        };
      }
      return {
        error: false,
        code: 200,
        message: "Lenguajes Usuarios actualizados correctamente",
        data: Lenguajesusuarios,
      };
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error interno al actualizar Lenguajes Usuarios",
      };
    }
  }
  static async delete(id) {
    try {
      const instanciarLenguajesUsu = new Lenguajes_usuario();
      const LenguajesUsu = await instanciarLenguajesUsu.getbyid(id);
      if (LenguajesUsu.length === 0) {
        return {
          error: true,
          code: 404,
          message: "Lenguajes Usuarios no encontrados",
        };
      }
      const usuarios = await instanciarLenguajesUsu.lenguajesbyidusuario(id);
      if (usuarios.length > 0) {
        return {
          error: true,
          code: 400,
          message: "No se puede eliminar la ciudad tiene usuarios asociados"
        }
      }
      const LenguajesUsuarios = await instanciarLenguajesUsu.delete(id);
      if (LenguajesUsuarios.error) {
        return {
          error: true,
          code: 400,
          message: LenguajesUsuarios.mensaje,
        };
      }
      return {
        error: false,
        code: 200,
        message: "ciudad eliminada correctamente",
        data: LenguajesUsuarios
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

export default LenUsuariosServices