import Usuarios from "../models/Usuarios.js"

class  UsuariosServices{
 
  static async getusuarios() {
    try {
      const instanciarUsuarios = new Usuarios();
      const usuarios = await instanciarUsuarios.getAll();
      if (usuarios.length === 0) {
        return {
          error: true,
          code: 404,
          message: "Usuarios no encontrados"
        };
      }
      return {
        error: false,
        code: 200,
        message: "Usuarios Obtenidos correctamente",
        data: usuarios
      };
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error al obtener los Usuarios"
      }
    }
  }
  static async getbyidUsuaruos(id) {
    try {
      const instanciarUsuarios = new Usuarios();
      const usuarios = await instanciarUsuarios.getbyid(id);
      if (usuarios.length === 0) {
        return {
          error: true,
          code: 404,
          message: "Usuarios no encontrados"
        };
      }
      return {
        error: false,
        code: 200,
        message: "Usuarios Obtenidos correctamente",
        data: usuarios
      };
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error al obtener los Usuarios"
      }
    }
  }
  static async postUsuarios(documento, nombre_usuario, apellido_usuario, telefono, contrasenia, genero, ciudad) {
    try {
      const instanciarUsuarios = new Usuarios();
      const usuarios = await instanciarUsuarios.postUsuarios(documento, nombre_usuario, apellido_usuario, telefono, contrasenia, genero, ciudad);
      if (usuarios.length === 0) {
        return {
          error: true,
          code: 404,
          message: "Usuarios no encontrados"
        };
      }
      return {
        error: false,
        code: 200,
        message: "Usuarios Obtenidos correctamente",
        data: usuarios
      };
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error al obtener los Usuarios"
      }
    } 
  }
  static async putUsuarios(id, campos) {
    try {
      const instanciarUsuarios = new Usuarios();
      const Usuariosexistentes = await instanciarUsuarios.getbyid(id);

      if (Usuariosexistentes.length === 0) {
        return {
          error: true,
          code: 404,
          message: "Usuario no encontrado",
        };
      }
      const usuarios = await instanciarUsuarios.putAllciudades(id, campos);
      if (usuarios === null) {
        return {
          error: true,
          code: 400,
          message: "Error al actualizar los Usuarios",
        };
      }
      return {
        error: false,
        code: 200,
        message: "Usuarios actualizada correctamente",
        data: usuarios,
      };
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error interno al actualizar los Usuarios",
      };
    }
  }
  static async delete(id) {
    try {
      const instanciarUsuarios = new Usuarios();
      const Usuariosexistentes = await instanciarUsuarios.getbyid(id);

      if (Usuariosexistentes.length === 0) {
        return {
          error: true,
          code: 404,
          message: "Usuario no encontrado",
        };
      }

      const usuarios = await instanciarUsuarios.deleteUsuarios(id)
      if (usuarios.error) {
        return {
          error: true,
          code: 400,
          message: usuarios.mensaje,
        };
      }
      // Retornamos la respuesta de eliminación
      return {
        error: false,
        code: 200,
        message: "ciudad eliminada correctamente",
        data: Usuariosexistentes
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

export default UsuariosServices