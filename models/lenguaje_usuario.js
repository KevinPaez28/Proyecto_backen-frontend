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
  async postAll() {
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
}