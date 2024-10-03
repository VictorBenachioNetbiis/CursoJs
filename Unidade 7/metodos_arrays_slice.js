let arr = [1, 2, 3, 4, 5];

//slice() retorna um novo array com os elementos selecionados
let novoArr = arr.slice(1, 4);
console.log(novoArr)    // elementos selecionados
console.log(arr)        // Array Original

//splice() remove e adiciona elementos em um array //retorna um novo array
let novoArr2 = arr.splice(1, 3,7,8,9,10);
console.log(novoArr2) //elementos excluidos
console.log(arr) // elementos restantes