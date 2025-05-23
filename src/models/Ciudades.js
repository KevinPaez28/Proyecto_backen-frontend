import connection from "../utils/db.js"

class Ciudades{
  async getAll() {
    try {
      const [rows] = await connection.query("SELECT * FROM ciudades")
      return rows;
    } catch (error) {
      throw new Error ("Error al consultar las ciudades")
    }
  }
  
  async getbyid(id) {
    try {
      const [rows] = await connection.query("SELECT * FROM ciudades WHERE id_ciudad = ?", [id]);
      if (rows.length === 0) {
        return []
      }
      return rows[0];
    } catch (error) {
      throw new Error("Error al obtener la Ciudades");
    }
  }
  //Obtener usuarios por Id_cuidad
  async usuarios(CiudadId) {
    const [rows] = await connection.query("SELECT * FROM usuarios WHERE ciudad = ?",[CiudadId])
    return rows;
  }

  async postAll(ciudad) {
   try {
     const [rows] = await connection.query("INSERT INTO ciudades (ciudad) values (?)", [ciudad])
    return {
      id: rows.id,
      ciudad: ciudad
    }
   } catch (error) {
    throw new Error ("Error al insertar las ciudades")
   }
  }


  async putAllciudades(id, campos) {
 
    try {
     let query = "UPDATE ciudades SET ";
     let params = [];

     for (const [key, value] of Object.entries(campos)) {
       query += `${key} = ?, `;
       params.push(value)
     }
     query = query.slice(0, -2);

     query += " WHERE id_ciudad = ?";
     params.push(id);
     const [rows] = await connection.query(query, params);
     return rows.affectedRows > 0 ? { id, ...campos } : null;
   } catch (error) {
      throw new Error("Error al actualizar la ciudad");
   }
  }
  async DeleteCiudades(id) {
    try {
      const [rows] = await connection.query("DELETE from ciudades where id_ciudad=?", [id])
      if (rows.affectedRows === 0) {
       throw new Error("Ciudad no encontrado")
       }
      return "Ciudad eliminada";
    } catch (error) {
     throw new Error ("Error al eliminar las ciudades")
    }
  }

  
}

export default Ciudades;
