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
  async getallbyId(id) {
    try {
      const [rows] = await connection.query("SELECT * FROM generos WHERE id_genero = ?", [id])
       if (rows.length === 0) {
        return []
      }
      return rows[0];
    } catch (error) {
      throw new Error("Error al obtener los generos");
    }
  }
  async usuarios(genero) {
    const [rows] = await connection.query("SELECT * FROM usuarios WHERE genero = ?",[genero])
    return rows;
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
  async putallGeneros(id,campos) {
     try {
     let query = "UPDATE generos SET ";
     let params = [];

     for (const [key, value] of Object.entries(campos)) {
       query += `${key} = ?, `;
       params.push(value)
     }
     query = query.slice(0, -2);

     query += " WHERE id_genero = ?";
     params.push(id);
     const [result] = await connection.query(query, params);
     return result.affectedRows > 0 ? { id, ...campos } : null;
   } catch (error) {
      throw new Error("Error al actualizar el genero");
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