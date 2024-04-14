
// Ejemplo con funcion
function numeroMayor(a, b) {
    if (a>b) {
        console.log(a," es mayor")
    } else if (b>a) {
        console.log(b, "es mayor")
    } else {
        console.log("ninguno es mayor")
    }
}

let mayor = numeroMayor(10, 5);


// Ejemplo con operador ternario
function otroEjemplo(a,b) {
    return (a>b) ? a : b;
}

let otroMayor = otroEjemplo(10, 15);

console.log(otroMayor);