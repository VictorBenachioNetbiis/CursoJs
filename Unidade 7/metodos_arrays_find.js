const arr = [1, 2, 3, 4, 5];
//find retorna o primeiro elemento que satisfizer a condição
const maiorQueTres = arr.find((elemento) => elemento > 3);
console.log("Tem maior que 3: ",maiorQueTres);

// find index retorna o indice do primeiro elemento que satisfizer a condição
const indiceMaiorQue3 = arr.findIndex((elemento) => elemento > 3);
console.log("Indice maior que 3: ",indiceMaiorQue3);


//some retorna true se pelo menos um elemento satisfizer a condição

const temMaiorQue3 = arr.some((elemento) => elemento > 3);
    console.log('Tem maior que 3: ',temMaiorQue3)
const temMaiorQue5 = arr.some((elemento) => elemento > 5);
console.log('Tem maior que 5: ', temMaiorQue5)

// every() retorna true se todos os elementos satisfizerem a condição
const todosMaiorQue0 = arr.every((elemento) => elemento > 0);
console.log('todos maior que 0: ', todosMaiorQue0)
const todosMaioresQue3 = arr.every((elemento) => elemento > 3);
console.log('Todos maiores que 3: ',todosMaioresQue3);


//includes() retorna true se o elemento existir no array
const tem5 = arr.includes(5);
console.log("Tem 5: ", tem5)