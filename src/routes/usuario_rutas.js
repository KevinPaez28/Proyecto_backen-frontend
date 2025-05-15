import express from "express";
import UsuariosController from "../controller/UsuariosController.js";
import { camposUsuarios,parcialesLenguajes } from "../middlewares/Usuarios/index.js"; 

const exportar = express.Router();

exportar.get('/', UsuariosController.getUsuarios)
exportar.post('/',camposUsuarios, UsuariosController.postusuarios)
exportar.patch('/:id',parcialesLenguajes, UsuariosController.patchusuarios)
exportar.put('/:id', camposUsuarios,UsuariosController.patchusuarios)
exportar.delete('/:id',UsuariosController.deleleteUsuarios)


export default exportar;