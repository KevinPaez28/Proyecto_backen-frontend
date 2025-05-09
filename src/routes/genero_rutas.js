import express from "express";
import GenerosController from "../controller/GenerosController.js";

const exportar = express.Router();

exportar.get('/', GenerosController.getAll)
exportar.post('/',GenerosController.postAll)
exportar.patch('/:id',GenerosController.patchAll)
exportar.put('/:id',GenerosController.putAll)
exportar.delete('/:id',GenerosController.Deletegeneros)


export default exportar;