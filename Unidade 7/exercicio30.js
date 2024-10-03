const numeros = [1, 2, 3, 4, 5, 6];  
function filtraPares(arr) {  
    return arr.filter(function(numero) {  
        return numero % 2 === 0;  
    });  
}  


const pares = filtraPares(numeros);  
console.log(pares); 