let obj = {};
let obj2 = new Object;

/**
 * let obj = new Object();
 * new Array();
 * new String();
 * new Number();
 * new Boolean();
 */

function Usuario(){
    this.name = "Jorge";
}
let user = new Usuario();
console.log(user.constructor);