const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

// feel free to change these values as you like!
const c1 = {
    x: 100,
    y: 100,
    width: 200,
    speed: 10,
    color: 'hotpink'
};

const c2 = {
    x: 100,
    y: 400,
    width: 200,
    speed: -10,
    color: 'purple'
};

const c3 = {
    x: 400,
    y: 100,
    width: 200,
    speed: -10,
    color: 'red'
};

const c4 = {
    x: 800,
    y: 100,
    width: 200,
    speed: 10,
    color: 'green'
};

// required to set up the canvas:
function setup() {
    createCanvas(canvasWidth, canvasHeight);
}


// animation loop:
function draw() {
    // clear the canvas:
    clear();

    // move the car:
    c1.x += c1.speed;

    c2.x += c2.speed;

    c3.y += c3.speed;

    c4.y += c4.speed;

    if (c1.x>canvasWidth+300){
        c1.x =-300;
    }

    if (c2.x<-300){
        c2.x = canvasWidth+300;
    }

    if (c3.y<-300){
        c3.y = canvasHeight+300;
    }

    if (c4.y>canvasHeight+300){
        c4.y = -300;
    }

    // redraw the car:
    drawCar(c1.x, c1.y, c1.width, c1.color);

    drawCar(c2.x, c2.y, c2.width, c2.color);

    drawCar(c3.x, c3.y, c3.width, c3.color);
    
    drawCar(c4.x, c4.y, c4.width, c4.color);
    
    // draw the grid (optional -- feel free to remove this line):
    // drawGrid(canvasWidth, canvasHeight);

   

}


// this function's job is to draw a car based on the 
// parameters the user passes in (x, y, size, fillColor, and wheelColor)
function drawCar(x, y, size, fillColor, wheelColor='black') {
    strokeWeight(0);
    
    // body
    fill(fillColor);
    rect(x - size/4, y - (size/5 + size/7), size / 2, size/7); // top
    rect(x - size/2, y - size/5, size, size/5); // bottom

    // wheels:
    fill(wheelColor);
    circle(x - size / 4, y, size / 6);
    circle(x + size / 4, y, size / 6);
}
