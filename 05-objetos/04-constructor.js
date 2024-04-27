// las funciones constructoras necesitan 
// Upper Camel Case


// objeto = {id:1,recuperarClave: function(){}}
function Usuario(){
    this.id = 1;
    this.recuperarClave = function () {  // ya no se llama funcion sino método
        console.log("recuperando clave...")
    }
}

// para crear un usuario lo llamamos con "new"
let usuario = new Usuario();

console.log(usuario);