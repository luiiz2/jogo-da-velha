const casas = document.querySelectorAll('.casa');
let jogadorAtual = 'X';

casas.forEach(casa => {
    casa.addEventListener('click', clicknacasa);
});

function clicknacasa(event) {
    const casaClicada = event.target;
    casaClicada.innertext = jogadorAtual;
}