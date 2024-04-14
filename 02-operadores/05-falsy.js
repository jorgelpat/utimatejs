// short-circuit

// Falso

let nombre = "Jorge";
let username = nombre || "Anonimo";
console.log(username);

function fn1() {
    console.log("soy funcion 1");
    return true;
}

function fn2() {
    console.log("soy funcion 2");
    return true;
}

let x = fn1() && fn2();
// si fn1() return false solo muestra fn1()

