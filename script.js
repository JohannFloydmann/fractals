const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const height = 400;
ctx.strokeStyle = 'white';
ctx.lineWidth = 3;
ctx.translate(0.5 * height, height)

function branch(len){
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -len);
    ctx.stroke();
}

branch(300)