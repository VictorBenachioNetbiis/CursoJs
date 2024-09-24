let numero = null;

try {
    console.log(numero.toUpperCase())
} catch (erro) {
    console.log('occoreu um erro' + erro.message)
 } finally {
    console.log('finalizou  o bloco try catch')
 }

//type error
console.log(numero.toUpperCase());

//syntax error
//console.log('teste); <<< algo faltando tipo, parenteses, aspas, etc...    

// reference error
console.log(teste)