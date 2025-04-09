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
const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = 400;

const eraseBtn =document.getElementById("erase-btn");
const modeBtn=document.getElementById("mode-btn");
const destroyBtn=document.getElementById("destroy-btn");
const colorOptions = Array.from(document.getElementsByClassName("color-option"));
const color=document.getElementById("color");
const lineWidth = document.getElementById("line-width");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
ctx.lineWidth =lineWidth.value;
let isPainting = false;
let isFilling = false;

function onMouseMove(event){
    if(isPainting){
        //const color = colors[Math.floor(Math.random()* colors.length)];
        //ctx.strokeStyle=color;
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
    }
    ctx.beginPath();
    ctx.moveTo(event.offsetX,event.offsetY);
}

function startPainting(){
    isPainting = true;
}

function endPainting(){
    isPainting = false;
}

function colorClick(event){
    const colorValue = event.target.dataset.color;
    ctx.strokeStyle =colorValue;
    ctx.fillStyle = colorValue;
    color.value = colorValue
}

function onCanvasClick(){
    if(isFilling){
        ctx.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    }
}


canvas.addEventListener("mousemove", onMouseMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", endPainting);
canvas.addEventListener("mouseleave", endPainting);
canvas.addEventListener("click", onCanvasClick);

lineWidth.addEventListener("change", (event)=>{
    ctx.lineWidth = event.target.value;
})

color.addEventListener("change",(event)=>{
    ctx.strokeStyle =event.target.value;
    ctx.fillStyle= event.target.value;
})

colorOptions.forEach((color)=>{
    color.addEventListener("click", colorClick);
})

modeBtn.addEventListener("click",()=>{
    if(isFilling){
        isFilling = false;
        modeBtn.innerText ="Fill";
    } else {
        isFilling = true;
        modeBtn.innerText ="Draw";
    }
});

destroyBtn.addEventListener("click",()=>{
    ctx.fillStyle ="white";
    ctx.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
})

eraseBtn.addEventListener("click",()=>{
    ctx.strokeStyle ="white";
    isFilling=false;
    modeBtn.innerText="Fill";
})