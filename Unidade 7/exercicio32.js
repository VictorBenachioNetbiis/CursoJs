const numeros = [1, 2, 3, 2, 4, 2, 5];
function contaOcorrencias(arr, num) {  
    return arr.filter(function(numero) {  
        return numero === num;  
    }).length;  
}  

const resultado = contaOcorrencias(numeros, 2);  
console.log(resultado);