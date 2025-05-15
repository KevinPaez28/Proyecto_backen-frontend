import connection from "../utils/db.js";

class Lenguajes{
  async getAll() {
    try {
      const [rows] = await connection.query("SELECT * FROM lenguajes")
      return rows;
    } catch (error) {
    throw new Error ("Error al consultar las categorias")
    }
  }
  async getbyid(id) {
    try {
      const [rows] = await connection.query("SELECT * FROM lenguajes WHERE id_lenguaje = ?", [id]);
      if (rows.length === 0) {
        return []
      }
      return rows[0];
    } catch (error) {
      throw new Error("Error al obtener los Lenguajes");
    } 
  }
  async postAll(lenguaje) {
    try {
      const [rows] = await connection.query("INSERT INTO lenguajes (nombre_lenguaje) values (?)", [lenguaje])
    return {
      id: rows.id,
      lenguaje: lenguaje
    }
   } catch (error) {
    throw new Error ("Error al insertar las Lenguajes")
   }
  }
 
  async putlenguajes(id, campos) {
    try {
      let query = "UPDATE lenguajes SET ";
      let params = [];
 
      for (const [key, value] of Object.entries(campos)) {
        query += `${key} = ?, `;
        params.push(value)
      }
      query = query.slice(0, -2);
 
      query += " WHERE id_lenguaje = ?";
      params.push(id);
      const [result] = await connection.query(query, params);
      return result.affectedRows > 0 ? { id, ...campos } : null;
    } catch (error) {
       throw new Error("Error al actualizar el lenguaje");
    }
  }
  async deletelenguajes(id) {
 try {
      const [rows] = await connection.query("DELETE from lenguajes where id_lenguaje=?", [id])
      if (rows.affectedRows === 0) {Usuario
       throw new Error("Lenguajes no encontrado")
       }
      return "Lenguaje eliminada";
    } catch (error) {
     throw new Error ("Error al eliminar las Lenguaje")
    }
  }
}

export default Lenguajes;