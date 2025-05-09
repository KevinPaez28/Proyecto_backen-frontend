import Lenguajes from "../models/Lenguajes.js"

class Lenguajescontroller{
  static getALenguajes = async (req, res) => {
    const OBJlenguajes = new Lenguajes();
    const lenguajes = await OBJlenguajes.getAll();
    res.json(lenguajes);
  }
  static postLenguajes = async (req, res) => {
    const { nombre_lenguaje } = req.body;
     const OBJlenguajes = new Lenguajes();
    const lenguajes = await OBJlenguajes.postAll(nombre_lenguaje);
    res.json(lenguajes);
  }
   static patchlenguaje = async (req, res) => {
    const {id} = req.params;
     const nombre_lenguaje = req.body;
    try {
    const OBJlenguajes = new Lenguajes();
    const lenguajes = await OBJlenguajes.patchLenguajes(id,nombre_lenguaje)
    res.status(200).json(lenguajes)
   } catch (error) {
    res.status(500).json({error: error.message})
   }
  }
  static putlenguajes = async (req, res) => {
    const { id } = req.params;
    const {nombre_lenguaje} = req.body;
    try {
    const OBJlenguajes = new Lenguajes();
    const lenguajes = await OBJlenguajes.putlenguajes(id,nombre_lenguaje)
    res.status(200).json(lenguajes)
    } catch (error) {
     res.status(500).json({error: error.message})
    }
  }
  static deleteLenguajes = async (req, res) => {
    const { id } = req.params;
    try {
    const OBJlenguajes = new Lenguajes();
    const lenguajes = await OBJlenguajes.deletelenguajes(id)
    res.status(200).json(lenguajes)
    } catch (error) {
    res.status(500).json({error: error.message})
    }
  }
}

export default Lenguajescontroller