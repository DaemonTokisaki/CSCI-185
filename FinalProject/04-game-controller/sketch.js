let x = 100;
let y = 500;
let width = 50;
let height = 40;
let vx =5.0;
let vy =1;
let gravity = 0.5;
let fillColor = 'white';



const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

function setup() {
   ball= createCanvas(canvasWidth, canvasHeight);


   { fill("red")
    circle(x, y, 50);}

    
    ballMovement();
    drawGrid(canvasWidth, canvasHeight);
}



function ballMovement(ev){
ball.x += vx;
ball.y +=vy;
}

function moveController (ev) {
    console.log(ev.code);

 
if (ev.code ==='ArrowUp') {
    console.log('move tie fighter up!');
    y=y-20;
}

 if (ev.code ==='ArrowDown') {
    console.log('move tie fighter down!');
    y=y+20;
}

if (ev.code ==='BrowserForward') {
    console.log('Diangle!');
    x=x+10;
    y=y-10;

}

if (ev.code ==='BrowserBack') {
    console.log('Diangle!');
    x=x-10;
    y=y-10;

}




if (ev.code ==='ArrowLeft') {
    console.log('move tie fighter left!');
    x=x-20;
}

if (ev.code ==='ArrowRight') {
    console.log('move tie fighter right!');
    x=x+20;
}

if (ev.code ==='Space') {
    console.log('increase size!');
    width=width+10;
}

if (ev.code ==='KeyM') {
    console.log('decrease size!');
    width=width-10;
}

if (ev.code ==='KeyR') {
    console.log('Red!');
    fillColor ='red';
}
if (ev.code ==='KeyY') {
    console.log('Yellow!');
    fillColor ='yellow';
}
if (ev.code ==='KeyB') {
    console.log('blue!');
    fillColor ='blue';
}

    // redraw circle:
    clear();
    // noFill();
    // circle(x, y, width);
    fill("red")
    circle(x, y, width);

   
    
    drawGrid(canvasWidth, canvasHeight);
}


setInterval(function gravity(){
    vy+=0.05
})


// Add event listener on keydown
document.addEventListener('keydown', moveController);
