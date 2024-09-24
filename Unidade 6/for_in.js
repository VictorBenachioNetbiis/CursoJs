const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let index in arr) {
    console.log((arr[index]*2));
}
console.log('-------------------')
const obj = {
    nome: 'Victor',
    sobrenome: 'Benachio'
}

for (let key in obj) {
    console.log(key+':'+obj[key]);
}