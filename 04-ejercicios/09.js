/**
 * Crear algoritmo que devuelva
 * un array de objetos en base a pares
 * 
 */

let pairs = [
    [1,{name:"Nicolas"}],
    [2,{name:"Jorge"}],
    [3,{name:"Luis"}]
];

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

function toCollection(arr) {
    let collection = [];
    for (idx in arr) {
        let elemento = arr[idx];
        collection[idx] = elemento[1];
        collection[idx].id = elemento[0];
    }
    return collection
}

let resultado = toCollection(pairs);
console.log(resultado)