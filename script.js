const casas = document.querySelectorAll('.casa');
let jogadorAtual = 'X';

casas.forEach(casa => {
    casa.addEventListener('click', clicknacasa);
});

function clicknacasa(event) {
     const casaClicada = event.target;
    if (casaClicada.innerText !== '') {
        return;
    }
    casaClicada.innerText = jogadorAtual;
    if (checarVencedor()) {
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