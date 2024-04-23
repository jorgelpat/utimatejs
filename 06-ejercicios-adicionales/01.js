/**
 * Escribir una función llamada contrasenaValida 
 * que reciba un string y retorne true si el 
 * string es igual a "2Fj(jjbFsuj" o "eoZiugBf&g9". 
 * De lo contrario debe retornar false
 * 
 */

function contrasenaValida(string) {
     return string === "2Fj(jjbFsuj" || string === "eoZiugBf&g9";
}

console.log(contrasenaValida("eoZiugBf&g9"))