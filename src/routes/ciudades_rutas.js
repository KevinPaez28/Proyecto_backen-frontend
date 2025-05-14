import express from "express";
import CiudadesController from "../controller/CiudadesController.js"
import { camposCiudad,parcialesCiudad } from "../middlewares/Ciudades/index.js"; 
const exportar = express.Router();

exportar.get('/', CiudadesController.getAllciudades)
exportar.get('/:id',CiudadesController.getCiudadesbyId)
exportar.post('/', camposCiudad,CiudadesController.postCiudad)
exportar.put('/:id', camposCiudad,CiudadesController.putCiudad)
exportar.patch('/:id',parcialesCiudad,CiudadesController.putCiudad)
exportar.delete('/:id',CiudadesController.DeleteCiudades)

export default exportar;