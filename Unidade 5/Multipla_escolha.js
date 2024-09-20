const diaDaSemana = 1;
switch (diaDaSemana) {
    case 1:
        console.log('domingo')
        return; // ou break
    case 1:
        console.log('segunda') 
        return;
    case 1:
        console.log('terça')
        return;
    case 1:
        console.log('quarta')
        return;
    case 1:
        console.log('quinta')
        return;
    case 1:
        console.log('sexta')
        return;
    case 1:
        console.log('sabado')
        return;
    default:
        console.log('Dia inválido')
}// return para a execução da função, break não.

console.log(diaDaSemana(4))

function diaDaSemanaNumber(dia) {
    switch  (dia) {
        case 'domingo':
            return 1
        case 'segunda':
            return 2
        case 'terça':
            return 3
        case 'quarta':
            return 4
        case 'quinta':
            return 5
        case 'sexta':
            return 6
        case 'sabado':
            return 7
        default:
            return 'Dia Inválido'
    }
}


console.log(diaDaSemanaNumber('quarta'));