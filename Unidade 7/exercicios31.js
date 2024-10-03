const numeros = [1, 2, 3, 4, 5];  
function multiplicaArray(arr, multiplicador) {  
    return arr.map(function(numero) {  
        return numero * multiplicador;  
    });  
}  

const resultado = multiplicaArray(numeros, 2);  
console.log(resultado); 
