/**
 * Crear array de longitud N, que sus elementos
 * sean numeros de 1 hasta N
 * 
 */

let longitud = 5;

function crearArray(n) {
    let arr = [];
    for (let i = 0;i < n; i++){
        arr[i] = i+1;
    }
    return arr
}

let resultado = crearArray(longitud);

console.log(resultado);