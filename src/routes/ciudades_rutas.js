import express from "express";
import CiudadesController from "../controller/CiudadesController.js"
const exportar = express.Router();

exportar.get('/', CiudadesController.getAllciudades)
exportar.get('/',CiudadesController.getCiudadesbyId)
// // exportar.post('/',CiudadesController.postAllciudades)
// // exportar.put('/:id',CiudadesController.putAllciudades)
// // exportar.patch('/:id',CiudadesController.patchAllciudades)
// // exportar.delete('/:id',CiudadesController.DeleteCiudades)

export default exportar;