let jogador = document.getElementById("jogador");

let xInicial = 0;
let yInicial = 0;

function movendoJogador(x, y) {
    let pox = x + "px";
    let poy = y + "px";
    jogador.style.top = pox;
    jogador.style.left = poy;
}
setInterval(function () {
    movendoJogador(xInicial++,yInicial++);
}, 0.01);
