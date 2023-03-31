function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);
    background("black");
    // makeCreature(800, 400,'blue','darkblue');
    // makeCreature(300,100,'black','indigo');
    // makeCreature(100,500,'red','black');
    // makeCreature(1100,100,'green','blue');
    // makeCreature(380,380,'pink','purple');

    // for debugging:
    // drawGrid(canvasWidth, canvasHeight);
}


function makeCreature(x,y,fillColor,eyeColor) {
 
    // your creature:
    // fill(fillColor);
    // circle(x, y, 300);

    // fill(eyeColor);
    // ellipse(x-50, y-50, 30, 40);
    // ellipse(x+50, y-50, 30, 40);

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

}

function mouseDragged() {
    makeCreature(mouseX,mouseY,'black','purple')
}

function mouseClicked() {
    makeCreature(mouseX,mouseY,'white','darkgreen')
}