import express from "express";
import LenguajesController from "../controller/LenguajesController.js";
import {parcialesLenguajes,camposLenguajes } from "../middlewares/Lenguajes/index.js"

const exportar = express.Router();

exportar.get('/', LenguajesController.getALenguajes)
exportar.get('/:id', LenguajesController.getLenguajesbyId)
exportar.post('/', camposLenguajes,LenguajesController.postLenguajes)
exportar.put('/:id',camposLenguajes,LenguajesController.patchlenguaje )
exportar.patch('/:id',parcialesLenguajes,LenguajesController.patchlenguaje)
exportar.delete('/:id', LenguajesController.deleteLenguajes)

export default exportar;