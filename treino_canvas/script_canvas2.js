let tela = document.getElementById("tela");

let ctx = tela.getContext("2d");
ctx.rect(10,10,400,200);
ctx.strokeStyle = '#4d52ce';
ctx.fillStyle = '#379494';
ctx.lineWidth = 5;
ctx.fill();
ctx.stroke();

ctx.clearRect(20,20,40,20);
