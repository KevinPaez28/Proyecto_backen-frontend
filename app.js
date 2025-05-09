import express from "express";
import bodyParser from "body-parser";

import ciudades_rutas from "./routes/ciudades_rutas.js"
import genero_rutas from "./routes/genero_rutas.js"
import lenguajes_rutas from "./routes/lenguajes_rutas.js"
import usuario_rutas from "./routes/usuario_rutas.js"



const app = express();

app.use(express.json());

app.use(express.urlencoded({ "extended": true }))

app.use("/ciudades",ciudades_rutas)
app.use("/generos",genero_rutas)
app.use("/lenguajes",lenguajes_rutas)
app.use("/usuarios",usuario_rutas)


app.listen(3000, () => {
  console.log("Conexion")
});