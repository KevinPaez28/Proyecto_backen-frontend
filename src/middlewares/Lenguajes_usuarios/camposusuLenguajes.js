import { ResponseProvider } from "../../providers/ResponseProvider.js";
import { campos } from "./ValidacionesUsulenguajes.js";

export function camposLenguajes(req, res, next) {
  const errors = [];

  for (const campo of campos) {
    const {
      name,
      required,
      minLength,
      maxLength,
    } = campo;

    const value = req.body[name];

    if (required && !value) {
      errors.push({
        campo: name,
        message: `El campo ${name} es obligatorio y no puede estar vacio.`,
      })
      continue;
    }
    if (minLength && value && value.length < minLength) {
      errors.push({
        campo: name,
        message: `El campo ${name} debe tener al menos ${minLength} caracteres.`,
        
      })
      continue;
    }
    if (maxLength && value && value.length > maxLength) {
      errors.push({
        campo: name,
        message: `El campo ${name} no puede tener más de ${maxLength} caracteres.`,
      });
      
      continue;
    }
  }
  if (errors.length > 0) {

    return ResponseProvider.error(
      res,
      "Error de validación",
      400,
      errors
    );
   }  

    next();
}