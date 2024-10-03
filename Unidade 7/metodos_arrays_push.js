
// push() adiciona um ou mais elemento no final do arrays
let arr = [1, 2, 3, 4, 5];
let newArr = arr.push(6, 7, 8, 9, 10);
console.log(newArr);
arr.push(6);
arr.push(7, 8, 9, 10);
console.log(arr);

// unshifit () adiciona um elemento no inicio do arrays
let newUnishift = arr.unshift(0);
console.log(newUnishift);
arr.unshift(0);
console.log(arr)

//pop() remove o elemento do final do arrays
let newPop = arr.pop();
console.log(newPop);
arr.pop();
console.log(arr);

//shift() remove o elemento do inicio do arrays
let newShift = arr.shift();
console.log(newShift);
arr.shift();
console.log(arr)