const alunos = [  
    { nome: "Ana", notas: { prova1: 8, prova2: 7, prova3: 6 } },  
    { nome: "Lucas", notas: { prova1: 9, prova2: 8, prova3: 7 } },  
    { nome: "Mariana", notas: { prova1: 5, prova2: 6, prova3: 7 } },  
    { nome: "Pedro", notas: { prova1: 7, prova2: 8, prova3: 9 } },  
];  

const alunosAprovados = [];  

for (const aluno of alunos) {  
    let somaNotas = 0;  
    let quantidadeNotas = 0;  

    for (const chave in aluno.notas) {  
        somaNotas += aluno.notas[chave];  
        quantidadeNotas++;  
    }  

    const media = somaNotas / quantidadeNotas;  

    if (media > 7) {  
        alunosAprovados.push({ nome: aluno.nome, media: media }); 
    }  
}  

console.log("Alunos com média acima de 7:"); 
for (const aluno of alunosAprovados) {  
    console.log(`Nome: ${aluno.nome}, Média: ${(aluno.media).toFixed(2)}`);  
}