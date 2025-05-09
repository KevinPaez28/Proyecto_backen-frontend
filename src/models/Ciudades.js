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

  async postAll(nombre) {
   try {
     const [rows] = await connection.query("INSERT INTO ciudades (ciudad) values (?)", [nombre])
    return {
      id: rows.id,
      nombre: nombre
    }
   } catch (error) {
    throw new Error ("Error al insertar las ciudades")
   }
  }

  async patchAllciudades(id, ciudad) {
    try {
      for (const key in ciudad) {
      
        const[rows] = await connection.query(`UPDATE ciudades SET ${key} = ? where id_ciudad = ?`,[ciudad[key], id])
      }
      const [mostrar] = await connection.query("SELECT * FROM ciudades Where id_ciudad = ?",[id]);
      return "Ciudades modificadas";
    } catch (error) {
      throw new Error ("Error al actualizar las ciudades")
    }
  }
  async putAllciudades(id,ciudad) {
    try {
      const [rows] = await connection.query("UPDATE ciudades SET ciudad = ? where id_ciudad= ?", [ciudad, id])
       if (rows.affectedRows === 0) {
       throw new Error("Categoria no encontrada")
      }
      return "Ciudad modificada";
    } catch (error) {
      throw new Error ("Error al actualizar las ciudades")
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
