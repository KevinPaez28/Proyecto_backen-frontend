import Generos from "../models/Generos.js"

class GenerosController{
  static getAll = async (req, res) => {
    const OBJgeneros = new Generos();
    const generos = await OBJgeneros.getAllgeneros();
    res.json(generos);
  }
  static postAll = async (req, res) => {
    try {
      const { genero } = req.body;
      const OBJgeneros = new Generos();
      const generos = await OBJgeneros.postAllgeneros(genero);
      res.status(200).json(generos)
    } catch (error) {
     res.status(500).json({error: error.message})
    }
  }
  static patchAll = async (req, res) => {
    try { 
      const { id } = req.params;
      const  genero  = req.body;
       const OBJgeneros = new Generos();
      const generos = await OBJgeneros.patchAllgeneros(id,genero);
      res.status(200).json(generos)
    } catch (error) {
     res.status(500).json({error: error.message})
    }
  }
  static putAll = async (req, res) => {
    try {
      const { id } = req.params
      const { genero } = req.body;
       const OBJgeneros = new Generos();
      const generos = await OBJgeneros.putAllgeneros(id,genero);
      res.status(200).json(generos)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }
  static Deletegeneros = async (req, res) => {
    try {
      const { id } = req.params;
      const OBJgeneros = new Generos();
      const generos = await OBJgeneros.deleteGeneros(id);
      res.status(200).json(generos)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }
}

export default GenerosController;