function crearUsuario(name, email){
    return {
        email,
        name,
        activo: true,
        recuperarClave: function(){
            console.log('Recuperando clave...');
        }
    };
}

// De esta manera creamos objetos con mismos keys
// y diferente valor de forma rápida

let user1 = crearUsuario("Jorge","jorge@gmail.com")
let user2 = crearUsuario("Luis","luis@gmail.com")

console.log(user1, user2)
