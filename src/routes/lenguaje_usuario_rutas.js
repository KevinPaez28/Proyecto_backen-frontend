import express from "express";
import Usuarioslenguaje from "../controller/lenguaje_usuarioController.js";
import { camposLenguajes, parcialesUsuLenguajes } from "../middlewares/Lenguajes_usuarios/index.js"; 
const exportar = express.Router();

exportar.get('/', Usuarioslenguaje.GetallLenguajes);
exportar.get('/:id', Usuarioslenguaje.getlenguajesbyid)
exportar.post('/', camposLenguajes, Usuarioslenguaje.postlenUsuarios)
exportar.put('/:id', camposLenguajes, Usuarioslenguaje.putlengUsuarios)
exportar.patch('/:id', parcialesUsuLenguajes, Usuarioslenguaje.putlengUsuarios)
exportar.delete('/:id', Usuarioslenguaje.DeleteLenguajesUsu)
export default exportar;