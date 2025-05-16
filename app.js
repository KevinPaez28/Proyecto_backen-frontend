import express from "express";

import ciudades_rutas from "./src/routes/ciudades_rutas.js"
import genero_rutas from "./src/routes/genero_rutas.js"
import lenguajes_rutas from "./src/routes/lenguajes_rutas.js"
import usuario_rutas from "./src/routes/usuario_rutas.js"
import lenguajes_usuario_rutas from "./src/routes/lenguaje_usuario_rutas.js"
import cors from "cors";



const app = express();

app.use(express.json());
app.use(cors());


app.use(express.urlencoded({ "extended": true }))

app.use("/ciudades",ciudades_rutas)
app.use("/generos",genero_rutas)
app.use("/lenguajes",lenguajes_rutas)
app.use("/usuarios", usuario_rutas)
app.use("/LenguajesUsuarios",lenguajes_usuario_rutas)


app.listen(3000, () => {
  console.log("Conexion")
});