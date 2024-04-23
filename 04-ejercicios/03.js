// validar que no sea menor a 0
// y que el elemento exista en el array

// let getbyIdx = (arr,idx) => {
//     (idx < 0 || arr.length <= idx) ? "Elemento no Existe":arr[idx];
// }

// let resultado = getbyIdx([1,2],1);
// console.log(resultado);

function getbyIdx(arr,idx) {
    if (idx < 0 || arr.length <= idx) {
        return "Elemento no Existe"
    }
    return arr[idx];
}

let resultado = getbyIdx([1,2],1);
console.log(resultado);