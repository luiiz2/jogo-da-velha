const casas = document.querySelectorAll('.casa');
let jogadorAtual = 'X';
let nomeX = '';
let nomeO = '';
let vitoriasX = 0;
let vitoriasO = 0;

nomejogador();

casas.forEach(casa => {
    casa.addEventListener('click', clicknacasa);
});

function nomejogador() {
    const inputX = prompt("Digite o nome do jogador X:");
    const inputO = prompt("Digite o nome do jogador O:");
    if (!inputX || !inputO) {
        alert("Por favor, insira nomes para os jogadores.");
        return nomejogador();
    }
    nomeX = inputX
    nomeO = inputO
    alert(`Jogador X: ${nomeX}\nJogador O: ${nomeO}`);
}
function clicknacasa(event) {
     const casaClicada = event.target;
    if (casaClicada.innerText !== '') {
        return;
    }
    casaClicada.innerText = jogadorAtual;
    if (checarVencedor()) {
        if (jogadorAtual === 'X') {
           jogadorAtual = nomeX;
        } else {
            jogadorAtual = nomeO;
        }
        setTimeout(() => {
            alert(`Jogador ${jogadorAtual} venceu!`);
            reiniciarJogo();
        }, 100);
        return;
    }
    if (jogadorAtual === 'X') {
        jogadorAtual = 'O';
    } else {
        jogadorAtual = 'X';
    }
    for (let i = 0; i < casas.length; i++) {
        if (casas[i].innerText === '') {
            return;
        }
    }
    setTimeout(() => {
        alert('Empate!');
        reiniciarJogo();
    }, 100);
}

function reiniciarJogo() {
    casas.forEach(casa => {
        casa.innerText = '';
    });
    jogadorAtual = 'X'; // O X começa sempre
}

function checarVencedor() {
    const combinacoesVencedoras = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let combinacao of combinacoesVencedoras) {
        const [a, b, c] = combinacao;
        if (casas[a].innerText !== '' &&
            casas[a].innerText === casas[b].innerText &&
            casas[a].innerText === casas[c].innerText) {
            return true;
            }
    }
    return false;
        }

    function numerodevitorias() {
    if (checarVencedor()) {
        if (jogadorAtual === 'X') {
            vitoriasX++;
        } else {
            vitoriasO++;
        }
    }
    }
    
    function reiniciarJogototal() {
    reiniciarJogo();
    vitoriasX = 0;
    vitoriasO = 0;
    nomejogador();
}
    
document.getElementById('reset').addEventListener('click', reiniciarJogototal);