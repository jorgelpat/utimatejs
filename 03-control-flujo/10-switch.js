let accion = "listar";

switch (accion) {
    case "listar":
        console.log("Accion de listar");
        break;
    case "guardar":
        console.log("Accion de guardar")
        break;
    default:
        console.log("Accion no reconocida");
}

// si se borra el break se activan ambos al tener listar como variable