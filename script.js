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
    if (jogadorAtual === 'X') {
        jogadorAtual = 'O';
    } else {
        jogadorAtual = 'X';
    }
}