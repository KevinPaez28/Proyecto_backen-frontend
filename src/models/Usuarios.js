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
    
    
    
     const [rows] = await connection.query("INSERT INTO usuarios (documento, nombre_usuario, apellido_usuario, telefono, contrasenia, id_genero, id_ciudad) VALUES (?, ?, ?, ?, ?, ?, ?)",[documento, nombre_usuario, apellido_usuario, telefono, contrasenia, genero, ciudad]);

     console.log(rows);
     
     return {
       id: rows.insertId,
       nombre_usuario: nombre_usuario,
       apellido_usuario: apellido_usuario,
       telefono: telefono,
       contrasenia: contrasenia,
       id_genero: genero,
       id_ciudad:ciudad
     }
   } catch (error) {
    
    console.error("Error al insertar los Usuarios", error);
    // throw new Error ("Error al insertar los Usuarios " )    
   }
  }
  async getbyid(id) {
    try {
      const [rows] = await connection.query("SELECT * FROM usuarios WHERE id_usuario = ?", [id]);
      if (rows.length === 0) {
        return []
      }
      return rows[0];
    } catch (error) {
      throw new Error("Error al obtener los Usuarios");
    }
  }
 async putAllciudades(id, campos){
    try {
      let query = "UPDATE usuarios SET ";
      let params = [];
 
      for (const [key, value] of Object.entries(campos)) {
        query += `${key} = ?, `;
        params.push(value)
      }
      query = query.slice(0, -2);
 
      query += " WHERE id_usuario = ?";
      params.push(id);
      const [rows] = await connection.query(query, params);
      return rows.affectedRows > 0 ? { id, ...campos } : null;
    } catch (error) {
       throw new Error("Error al actualizar la ciudad");
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