// Exemplo usando forEach para percorrer um array e executar uma função para cada elemento  
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];  
arr.forEach(function(elemento, index, array) {  
    console.log(elemento);  
    console.log(index);  
    console.log(array);  
});  

// Usando map para criar um novo array com os valores dobrados  
let dobroArr = arr.map((el) => el * 2);  
console.log(dobroArr);  

// Definindo um array de alunos  
const alunos = [  
    {  
        nome: 'Victor1',  
        idade: 15,  
        nota: [9, 10, 11],  
        turma: '1B'  
    },  
    {  
        nome: 'Victor3',  
        idade: 20,  
        nota: [9, 10, 11],  
        turma: '1B'  
    },  
    {  
        nome: 'Victor2',  
        idade: 19,  
        nota: [9, 10, 11],  
        turma: '1B'  
    },  
];  

// Usando map para calcular a média das notas de cada aluno  
const AlunosComMedia = alunos.map((aluno) => {  
    // Calcular a soma das notas  
    let somaNotas = aluno.nota.reduce((acc, nota) => acc + nota, 0);  
  
    // Calcular a média  
    const media = somaNotas / aluno.nota.length;  

    // Retornar um novo objeto com as informações desejadas  
    return {  
        nome: aluno.nome,  
        idade: aluno.idade,  
        notas: aluno.nota,  
        media: media,  
    };  
});  

// Exibindo os alunos originais  
alunos.forEach(aluno => console.log(aluno));  
console.log('----------------');  

// Exibindo alunos com média  
AlunosComMedia.forEach(aluno => console.log(aluno));