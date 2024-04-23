// Indice de masa corporal

let peso = 70;
let altura = 1.74;

function bmi(x,y){
    let bmi = x/(y**2)
    let data;
    return data = bmi<18.5 ? "Bajo de peso":
    bmi >=18.5 && bmi <25 ? "Normal":
    bmi >=25 && bmi < 30 ? "Sobrepeso":
    bmi >=30 ? "Obeso": false;
}

resultado = bmi(peso,altura);
console.log(resultado);