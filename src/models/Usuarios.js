import connection from "../utils/db.js";

class Usuarios {

  
  async getAll() {
    try {
      const [rows] = await connection.query("SELECT * FROM usuarios")
      return rows;
    } catch (error) {
      throw new Error ("Error al consultar los Usuarios")
    }
  }
  async postUsuarios(documento, nombre_usuario, apellido_usuario, telefono, contrasenia, genero, ciudad) {
   try {
     const [rows] = await connection.query("INSERT INTO usuarios (documento, nombre_usuario, apellido_usuario, telefono, contrasenia, genero, ciudad) VALUES (?, ?, ?, ?, ?, ?, ?)",
  [documento, nombre_usuario, apellido_usuario, telefono, contrasenia, genero, ciudad]);
     return {
       id: rows.id,
       nombre_usuario: nombre_usuario,
       apellido_usuario: apellido_usuario,
       telefono: telefono,
       contrasenia: contrasenia,
       genero: genero,
       ciudad,ciudad
     }
   } catch (error) {
    throw new Error ("Error al insertar los Usuarios " )    
   }
  }
  async patchUsuarios(id, dato_parcial) {
    try {
      for (const key in dato_parcial) {
        const [result] = await connection.query(`UPDATE usuarios SET ${key} = ?  where id_usuario = ?`, [dato_parcial[key], id]);
       }
       const [imprimir] = await connection.query("SELECT * FROM usuarios where id_usuario =?",[id])
      return imprimir; 
    } catch (error) {
      throw new Error("Error al actualizar la Usuarios")
    }
  }
  async putUsuarios(id, documento, nombre_usuario, apellido_usuario, telefono, contrasenia, genero, ciudad) {
     try {
      const [rows] = await connection.query("UPDATE usuarios SET documento = ?, nombre_usuario = ?, apellido_usuario = ?, telefono= ?, contrasenia= ?, genero= ?, ciudad= ?  where id_usuario= ?", [ documento, nombre_usuario, apellido_usuario, telefono, contrasenia, genero, ciudad, id])
       if (rows.affectedRows === 0) {
       throw new Error("Categoria no encontrada")
      }
      return "Usuario modificada";
    } catch (error) {
      throw new Error ("Error al actualizar las Usuario"+error)
    }
  }
  async deleteUsuarios(id) {
    try {
      const [rows] = await connection.query("DELETE from usuarios where id_usuario=?", [id])
      if (rows.affectedRows === 0) {
       throw new Error("Usuario no encontrado")
       }
      return "Usuario eliminada";
    } catch (error) {
     throw new Error ("Error al eliminar los Usuario")
    }
  }
}
export default Usuarios;