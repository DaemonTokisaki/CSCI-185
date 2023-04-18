let x = 200;
let y = 200;
let width = 200;
let height = 40;
let fillColor = 'white';

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 


const drawPerson =[ 
    
]

function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    fill("darkgray")
    circle(x, y, 200);

    fill("darkgray")
    circle(x, y, 180);

    fill("gray")
    circle(x, y, 150);

    fill("darkgray")
    circle(x, y, 140);

    fill("yellow")
    circle(x, y, 100);

    // https://p5js.org/reference/#/p5/rect
    fill('hotpink')
    point(60, 20, 55, 55);

    fill('gray')
    rect(x-120, y-170, 20, 340);

    fill('darkgray')
    rect(x-120, y-120, 20, 40);

    fill('darkgray')
    rect(x-120, y+80, 20, 40);

    fill("#5A5A5A")
    circle(x-110, y, 20);

    fill('darkred')
    circle(x-110, y, 10);

    fill('gray')
    rect(x+100, y-170, 20, 340);

    fill('darkgray')
    rect(x+100, y-120, 20, 40);

    fill('darkgray')
    rect(x+100, y+80, 20, 40);

   

    fill("#5A5A5A")
    circle(x+110, y, 20);

    fill('darkred')
    circle(x+110, y, 10);

    fill('darkblue')
    beginShape(TRIANGLE_FAN);
    vertex(x, y-50);
    vertex(x, y);
    vertex(x+50, y);
    vertex(x, y-50);
    vertex(x-50, y);
    vertex(x, y+50);
    endShape();

    fill('darkblue')
    beginShape(TRIANGLE_FAN);
    vertex(x, y+50);
    vertex(x, y);
    vertex(x+50, y);
    endShape();

    fill('darkblue')
    beginShape(TRIANGLE_FAN);
    vertex(x, y+50);
    vertex(x, y);
    vertex(x-50, y);
    endShape();


    drawGrid(canvasWidth, canvasHeight);
}


function moveController (ev) {
    console.log(ev.code);
    // left arrow moves circle left
    // right arrow moves circle right
    // up arrow moves circle up
    // down arrow moves circle down
if (ev.code ==='ArrowUp') {
    console.log('move tie fighter up!');
    y=y-20;
}

if (ev.code ==='ArrowDown') {
    console.log('move tie fighter down!');
    y=y+20;
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
    fill("darkgray")
    circle(x, y, width);

    fill("darkgray")
    circle(x, y, width-20);

    fill("gray")
    circle(x, y, width-50);

    fill("darkgray")
    circle(x, y, width-60);

    fill(fillColor)
    circle(x, y, width-100);

    // https://p5js.org/reference/#/p5/rect
    fill('hotpink')
    point(60, 20, 55, 55);

    fill('gray')
    rect(x-120, y-170, 20, height+300);

    fill('darkgray')
    rect(x-120, y-120, 20, height);

    fill('darkgray')
    rect(x-120, y+80, 20, height);

    fill("#5A5A5A")
    circle(x-110, y, 20);

    fill('darkred')
    circle(x-110, y, 10);

    fill('gray')
    rect(x+100, y-170, 20, height+300);

    fill('darkgray')
    rect(x+100, y-120, 20, height);

    fill('darkgray')
    rect(x+100, y+80, 20, height);

   

    fill("#5A5A5A")
    circle(x+110, y, 20);

    fill('darkred')
    circle(x+110, y, 10);

    fill('darkblue')
    beginShape(TRIANGLE_FAN);
    vertex(x, y-50);
    vertex(x, y);
    vertex(x+50, y);
    vertex(x, y-50);
    vertex(x-50, y);
    vertex(x, y+50);
    endShape();

    fill('darkblue')
    beginShape(TRIANGLE_FAN);
    vertex(x, y+50);
    vertex(x, y);
    vertex(x+50, y);
    endShape();

    fill('darkblue')
    beginShape(TRIANGLE_FAN);
    vertex(x, y+50);
    vertex(x, y);
    vertex(x-50, y);
    endShape();

    drawGrid(canvasWidth, canvasHeight);
}


// Add event listener on keydown
document.addEventListener('keydown', moveController);
