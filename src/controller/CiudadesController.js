import Ciudades from "../models/Ciudades.js"

class CiudadesController{
  static getAllciudades = async (req, res) => {
    const OBJciudades = new Ciudades();
    const ciudades = await OBJciudades.getAll();
    res.json(ciudades);
  }
  static postAllciudades = async (req, res) => {
    try {
    const { nombre } = req.body;
    const OBJciudades = new Ciudades();
    const ciudades = await OBJciudades.postAll(nombre)
    res.status(200).json(ciudades)
    } catch (error) {
    res.status(500).json({error: error.message})
    }
  }
  static patchAllciudades = async (req, res) => {
    const {id} = req.params;
    const ciudad  = req.body;
    try {
    const OBJciudades = new Ciudades();
    const ciudades = await OBJciudades.patchAllciudades(id,ciudad)
    res.status(200).json(ciudades)
   } catch (error) {
    res.status(500).json({error: error.message})
   }
  }
  static putAllciudades = async (req, res) => {
    try {
      const {id} = req.params;
      const { ciudad } = req.body;
      const OBJciudades = new Ciudades();
      const ciudades = await OBJciudades.putAllciudades(id,ciudad)
      res.status(200).json(ciudades)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }
  static DeleteCiudades = async (req, res) => {
  try {
    const { id } = req.params;
    const OBJciudades = new Ciudades();
    const ciudades = await OBJciudades.DeleteCiudades(id)
    res.status(200).json(ciudades)
  } catch (error) {
    res.status(500).json({ error: error.message })
    }
  }
}

export default CiudadesController;