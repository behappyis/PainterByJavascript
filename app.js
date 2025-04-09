const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

ctx.lineWidth =2;
ctx.moveTo(0,0);

const colors = [
    "#f6e58d",
    "#f6e58d",
    "#ff7979",
    "#badc58",
    "#dff9fb",
    "#f9ca24",
    "#f0932b",
    "#6ab04c",
    "#c7ecee",
    "#7ed6df",
    "#e056fd",
    "#686de0"
]

function onMouseMove(event){
    ctx.beginPath();
    ctx.moveTo(0,0);
    const color = colors[Math.floor(Math.random()* colors.length)];
    ctx.strokeStyle=color;
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
}

canvas.addEventListener("mousemove", onMouseMove);

