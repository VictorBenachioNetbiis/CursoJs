
const pessoa = {  
    nome: "Carlos",  
    idade: 30,  
    cidade: "São Paulo",  
    profissao: "Engenheiro",  
    hobby: "Fotografia"  
};  


for (const chave in pessoa) {  
    console.log(chave + ": " + pessoa[chave]);  
}