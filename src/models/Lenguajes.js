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
  async postAll(nombre_lenguaje) {
    try {
      const [rows] = await connection.query("INSERT INTO lenguajes (nombre_lenguaje) values (?)", [nombre_lenguaje])
    return {
      id: rows.id,
      nombre_lenguaje: nombre_lenguaje
    }
   } catch (error) {
    throw new Error ("Error al insertar las Lenguajes")
   }
  }
  async patchLenguajes(id, nombre_lenguaje) {
    try {
      for (const key in nombre_lenguaje) {
      
        const[rows] = await connection.query(`UPDATE lenguajes SET ${key} = ? where id_lenguaje = ?`,[nombre_lenguaje[key], id])
      }
      const [mostrar] = await connection.query("SELECT * FROM lenguajes Where id_lenguaje = ?",[id]);
      return "Lenguajes modificados";
    } catch (error) {
      throw new Error ("Error al actualizar las Lenguajes")
    }
  }
  async putlenguajes(id, nombre_lenguaje) {
      try {
        const [rows] = await connection.query(`UPDATE lenguajes SET nombre_lenguaje = ? where id_lenguaje = ?`, [nombre_lenguaje, id])
      if (rows.affectedRows === 0) {
       throw new Error("Lenguaje no encontrada")
      }
      return "Lenguaje modificado";
    } catch (error) {
      throw new Error ("Error al actualizar las Lenguajes")
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