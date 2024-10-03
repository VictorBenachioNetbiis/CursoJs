let arr = [1, 2, 3, 4, 5];

// concat() junta dois ou mais arrays
let arr2 = [6, 7, 8, 9, 10];
let arr3 = arr.concat(arr2); // junta os dois arrays
console.log(arr3); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// join() junta os elementos de um array em uma string
let arr4 = arr3.join('-');
console.log(arr4); // 1 2 3 4 5 6 7 8 9 10

//reverse() inverte ordem dos elementos de um array // não muda o array principal
let arrayReverso = [...arr] //cria um novo array com os elementos do array principal
let arr5 = arr4.split('-');
arr5.reverse();
console.log(arr5.join('-')); // 10-9-8-7-6-5-4-3-2-1