//funcoes anonimas e expressao de função

//Funcao anonima: funcao sem nome
//expressao de funcao: funcao atribuida  a uma variavel
let anonima =   function() {
    console.log('Funcao anonima');
}

anonima();


// arrow functions , mesma ideia de uma funcao anonima

let arrow  = () => {
    console.log("Arrow Function");
}
arrow();



let somar = (a,b) => a + b;
let imcCalc = (peso, altura) => (peso/altura**2).toFixed(2);
console.log(somar(10,20));
console.log(imcCalc(70,1.75));