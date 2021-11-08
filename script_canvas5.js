let tela = document.getElementById("tela");
let ctx = tela.getContext("2d");

let circle = {
    x: 250,
    y: 250,
    raio: 100,
    inicio: 0,
    fim: 0,
};

function drawCircle(c) {
    ctx.beginPath();
    ctx.rect(0,0,500,500);
    ctx.fillStyle = "rgb(238, 240, 216)"
    ctx.fill();

    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.strokeStyle = "red";
    ctx.fillStyle = "blue";

    ctx.arc(c.x, c.y, c.raio, c.inicio, c.fim);

    ctx.fill();
    ctx.stroke();
}

setInterval(function () {
    if (circle.fim < 2 * Math.PI) {
        circle.fim += 0.3;
        circle.x += 4;
    }

    drawCircle(circle);
}, 40);
