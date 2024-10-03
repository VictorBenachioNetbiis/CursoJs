const candidatos = [  
    {nome: 'Guilherme Boulos', numero: '01', votos: 0},  
    {nome: 'Ricardo Nunes', numero: '02', votos: 0},  
    {nome: 'Pablo Marçal', numero: '03', votos: 0},  
];  

const ulCandidatos = document.getElementById('candidatos');  
let votosBrancos = 0;  
let votosNulos = 0;  

function renderizarCandidatos() {  
    ulCandidatos.innerHTML = '';  
    candidatos.sort((a, b) => b.votos - a.votos);  
    candidatos.forEach(candidato => {  
        ulCandidatos.innerHTML += `  
            <li>  
                <span class="nome-candidato">${candidato.nome}</span>  
                <span class="votos-candidato">${candidato.votos} votos</span>  
            </li>  
        `;  
    });  
}  

function votaCandidato() {  
    const numeroCandidato = document.getElementById('inputNumero').value;  
    const candidatoEncontrado = candidatos.find(c => c.numero === numeroCandidato);  

    if (candidatoEncontrado) {  
        candidatoEncontrado.votos++;  
    } else if (numeroCandidato.trim() === "") {  
        votosBrancos++;  
    } else {  
        votosNulos++;  
    }  

    // Atualiza a exibição de votos  
    document.getElementById('votos-brancos').innerText = votosBrancos;  
    document.getElementById('votos-nulos').innerText = votosNulos;  
    
    // Renderiza a lista de candidatos novamente  
    renderizarCandidatos();  
    
    // Limpa o campo de entrada  
    document.getElementById('inputNumero').value = '';  
}  

// Inicializa a tela com candidatos  
renderizarCandidatos();