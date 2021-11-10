let tela = document.getElementById("tela");
let ctx = tela.getContext("2d");

let imgcanvas = new Image(); // Criando um objeto para receber imagem
imgcanvas.src = "./img/1001tracklists.svg"; // Atribuindo o caminho da imagem

imgcanvas.onload = desenhandoImagem(); // Metodo onload usado e para sabermos quando a imagem parou de carregar, no caso e quando a funcao `desenhandoImagem()` for executada

function desenhandoImagem(){ // Criando o metodo que ira desenhar a imagem
    ctx.drawImage(this/* O metodo 'this' esta se referindo a variavel 'imgcanvas'*/, 5, 5);
}
