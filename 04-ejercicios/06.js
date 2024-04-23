// 

let array = [15,12,5,-8,7,-15,9,17,-21];

function cuantosPositivos(arr){
    let cantidad = 0;
    for (numero of arr){
        if (numero > 0){
            cantidad++;
        }
    }
    return cantidad
}
console.log(cuantosPositivos(array))