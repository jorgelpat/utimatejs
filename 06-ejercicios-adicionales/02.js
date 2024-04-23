/**
 * Escribir una función llamada calcularImpuestos 
 * que reciba dos argumentos numéricos: edad e ingresos. 
 * Si edad es igual o mayor a 18 y los ingresos son 
 * iguales o mayores a 1000 debe retornar ingresos * 40%. 
 * De lo contrario retornar 0.
 * 
 */

let edad = 30;
let ingresos = 100;

function calcularImpuestos(x,y) {
    let impuesto = (x > 18 && y >= 1000) ? y*0.4 : 0;
    return impuesto
}

console.log(calcularImpuestos(edad,ingresos));
