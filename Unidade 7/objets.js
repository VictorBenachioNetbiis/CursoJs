const pessoa = {
    nome : 'Victor',
    sobrenome : 'Benachio',
    idade : 26,
    endereco: {
        logradouro : 'rua brasilandia',
        numero : 123
    },
    tecnologias : [
        "javascript",
        "html", 
        "css"
    ],
    saudacao: function(){
        console.log('Olá meu nome é' + this.nome)
    } 
}

console.log(pessoa);
console.log(pessoa.nome);
pessoa.nome = 'Victor Benachio';   
console.log(pessoa['nome']);
pessoa.saudacao();