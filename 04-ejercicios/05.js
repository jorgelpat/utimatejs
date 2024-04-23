//Devuelve el menor y el mayor de un array

let array = [15,12,5,-8,7,-15,9,17,-21];

function getMenorMayor(arr){
    let menor = arr[0];
    let mayor = arr[0];
    for (numero of arr) {
        menor = menor < numero ? menor : numero;
        mayor = mayor > numero ? mayor : numero;
    }
    return [mayor, menor]
}
 console.log(getMenorMayor(array));