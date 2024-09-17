function somar(a,b) {
    return a + b;
}
function calcularImc(peso,altura) {
    let resultado = peso / (altura**2);
    return resultado.toFixed(2);
}


function mensagemBoasVindas() {
    console.log('--------------')
    console.log('Bem vindo ao nosso programa')
    console.log('--------------')
}

mensagemBoasVindas();
let resultado = somar(1,2);
console.log(resultado);

let imc = calcularImc(70,1.75);
console.log(imc)