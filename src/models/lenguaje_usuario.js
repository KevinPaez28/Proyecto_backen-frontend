import connection from "../utils/db.js";

class Lenguajes_usuario{
  async getall() {
     try {
      const [rows] = await connection.query("SELECT * FROM lenguaje_usuario")
      return rows;
    } catch (error) {
    throw new Error ("Error al consultar los lenguajes por usuarios")
    }
  }
  async getbyid(id) {
    try {
      const [rows] = await connection.query("SELECT * FROM lenguaje_usuario WHERE id =? ", [id])
      return rows;
    } catch (error) {
      throw new Error("Error al obtener los Lenguajes Usuario")
    }
  }
  async lenguajesbyidusuario(id) {
    try {
      const [rows] = await connection.query("SELECT * FROM usuarios WHERE id_usuario = ?",[id])
      if (rows.length === 0) {
        return []
      }
      return rows[0];
    } catch (error) {
      throw new Error("Error al obtener los Usuarios");
    }
  }

  async postlenguajesUsu(id_usuario, id_lenguaje) {
    try {
      const [rows] = await connection.query("INSERT INTO lenguaje_usuario (id_usuario,id_lenguaje) values (?,?)", [id_usuario, id_lenguaje])
     return {
       id: rows.id,
       id_usuario: id_usuario,
       id_lenguaje:id_lenguaje
     }
    } catch (error) {
     throw new Error ("Error al insertar los Lenguajes Usuarios")
    }
  }
  async putAllciudades(id, campos) {
    try {
      let query = "UPDATE lenguaje_usuario SET ";
      let params = [];
 
      for (const [key, value] of Object.entries(campos)) {
        query += `${key} = ?, `;
        params.push(value)
      }
      query = query.slice(0, -2);
 
      query += " WHERE id = ?";
      params.push(id);
      const [result] = await connection.query(query, params);
      return result.affectedRows > 0 ? { id, ...campos } : null;
    } catch (error) {
       throw new Error("Error al actualizar la ciudad");
    }
  }
  async delete(id){
    try {
      const [rows] = await connection.query("DELETE from lenguaje_usuario where id =?", [id])
      if (rows.affectedRows === 0) {
       throw new Error("lenguaje usuario no encontrado")
       }
      return "lenguaje_usuario eliminado";
    } catch (error) {
     throw new Error ("Error al eliminar las lenguaje_usuarios")
    }
  }
}

export default Lenguajes_usuario