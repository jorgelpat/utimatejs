/*
Crear algoritmo que tome un array de objetos
y devuelva un array de pares
*/


let array = [{
    id: 1,
    name:'Nicolas'
}, {
    id: 2,
    name:'Jorge'
}, {
    id: 3,
    name:'Luis'
}]

let pares = [
    [1, array[0]],
    [2, array[1]],
    [3, array[2]]
];

function toPairs(arr) {
    let pairs = [];
    for (idx in arr) {
        let elemento = arr[idx];
        pairs[idx] = [elemento.id, elemento];
    }
    return pairs
}

let resultado = toPairs(array);
console.log(resultado);