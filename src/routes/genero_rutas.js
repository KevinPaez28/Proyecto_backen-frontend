import express from "express";
import GenerosController from "../controller/GenerosController.js";
import {camposGeneros ,parcialesCiudad } from "../middlewares/Generos/index.js"; 

const exportar = express.Router();

exportar.get('/',GenerosController.getAll)
exportar.get('/:id',GenerosController.getGenerosbyId)
exportar.post('/',camposGeneros,GenerosController.postgenero)
exportar.patch('/:id',camposGeneros,GenerosController.patchAll)
exportar.put('/:id',parcialesCiudad,GenerosController.patchAll)
exportar.delete('/:id',GenerosController.Deletegeneros)


export default exportar;