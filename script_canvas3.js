let tela = document.getElementById("tela");

let ctx = tela.getContext("2d");
ctx.lineWidth = 5;
ctx.moveTo(10,10);
ctx.strokeStyle = 'blue';
ctx.lineTo(200,400);
ctx.lineTo(200,200);
ctx.closePath();
ctx.stroke();

ctx.beginPath();

ctx.lineWidth = 5;
ctx.moveTo(10,10);
ctx.strokeStyle = 'red';
ctx.lineTo(100,400);
ctx.lineTo(100,200);
ctx.closePath();
ctx.stroke();