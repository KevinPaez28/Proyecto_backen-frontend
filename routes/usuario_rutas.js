import express from "express";
import UsuariosController from "../controller/UsuariosController.js";

const exportar = express.Router();

exportar.get('/', UsuariosController.getUsuarios)
exportar.post('/', UsuariosController.postusuarios)
exportar.patch('/:id', UsuariosController.patchusuarios)
exportar.put('/:id', UsuariosController.putusuarios)
exportar.delete('/:id',UsuariosController.deleleteUsuarios)


export default exportar;