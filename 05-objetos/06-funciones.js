function Usuario(nombre){
    this.nombre = nombre;
}

console.log(Usuario.name);
console.log(Usuario.length);

const U = Usuario;
let user = new U("Jorge");

console.log(user);

function of(Fn, arg){
    return new Fn(arg);
}