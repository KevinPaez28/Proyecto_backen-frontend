import express from "express";
import LenguajesController from "../controller/LenguajesController.js";

const exportar = express.Router();

exportar.get('/', LenguajesController.getALenguajes)
exportar.post('/', LenguajesController.postLenguajes)
exportar.patch('/:id',LenguajesController.patchlenguaje )
exportar.put('/:id', LenguajesController.putlenguajes)
exportar.delete('/:id',LenguajesController.deleteLenguajes)

export default exportar;