import connection from "../utils/db.js"

class Generos{
  async getAllgeneros() {
    try {
      const [rows] = await connection.query("SELECT * FROM generos")
      return rows;
    } catch (error) {
     throw new Error ("Error al consultar las generos")
    }
  }
  async postAllgeneros(genero) {
    try {
      const [rows] = await connection.query("INSERT INTO generos (genero) values (?)", [genero])
      return {
        id:rows.id,
        genero: genero
      }
    } catch (error) {
     throw new Error ("Error al insertar las generos")
    }
  }
  async patchAllgeneros(id,genero) {
    try {
      for (const key in genero) {
        const [rows] = await connection.query(`UPDATE generos SET ${key} = ? where id_genero = ?`,[genero[key],id])
      }
      const [mostrar] = await connection.query("SElECT * FROM generos WHERE id_genero = ?", [id])
      return mostrar;
    } catch (error) {
     throw new Error ("Error al actualizar las generos")
    }
  }
  async putAllgeneros(id, genero) {
    try {
      const [rows] = await connection.query(`UPDATE generos SET genero = ? where id_genero = ?`,[genero,id])
      if (rows.affectedRows === 0) {
       throw new Error("Ciudad no encontrado")
       }
      return "genero modificada";
    } catch (error) {
      throw new Error ("Error al actualizar las generos")
    }
  }
  async deleteGeneros(id) {
    try {
      const [rows] = await connection.query("DELETE from generos where id_genero=?", [id])
      if (rows.affectedRows === 0) {
       throw new Error("genero no encontrado")
      }
      return "genero eliminada";
    } catch (error) {
     throw new Error ("Error al eliminar las ciudades")
    }
  }
}


export default Generos;