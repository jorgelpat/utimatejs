const user = {id:1};

user.name = 'Jorge'; //agregamos name a user
user.guardar = function(){ //agregamos funcion
    console.log("Guardando", user.name)
}

user.guardar();

delete user.name; //eliminamos name
delete user.guardar; //eliminamos guardar
console.log(user);


// Así creamos un objeto al que no podemos cambiarle
// las propiedades ni sus valores asignadas originalmente
const user1 = Object.freeze({id:1})

user1.name = 'Jorge';
user1.id = 2;
console.log(user1);


// Así creamos un objeto al que no podemos agregarle
// propiedades pero sí podemos cambiarle su valor
const user2 = Object.seal({id:1})

user2.name = 'Jorge';
user2.id = 2;
console.log(user2);