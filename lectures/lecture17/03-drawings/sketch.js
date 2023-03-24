function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);
    background("pink");

    /* Use the drawing functions to draw a picture. Ideas:
        * Draw an animal
        * Draw a tree
        * Draw a car
        * Draw some abstract art
    */

    // https://p5js.org/reference/#/p5/circle
    fill("darkgray")
    circle(600, 300, 200);

    fill("darkgray")
    circle(600, 300, 180);

    fill("gray")
    circle(600, 300, 150);

    fill("darkgray")
    circle(600, 300, 140);

    fill("yellow")
    circle(600, 300, 100);

    // https://p5js.org/reference/#/p5/rect
    fill('hotpink')
    point(60, 20, 55, 55);

    fill('gray')
    rect(480, 130, 20, 340);

    fill('darkgray')
    rect(480, 180, 20, 40);

    fill('darkgray')
    rect(480, 380, 20, 40);

    fill("#5A5A5A")
    circle(490, 300, 20);

    fill('darkred')
    circle(490, 300, 10);

    fill('gray')
    rect(700, 130, 20, 340);

    fill('darkgray')
    rect(700, 180, 20, 40);

    fill('darkgray')
    rect(700, 380, 20, 40);

   

    fill("#5A5A5A")
    circle(710, 300, 20);

    fill('darkred')
    circle(710, 300, 10);

    fill('darkblue')
    beginShape(TRIANGLE_FAN);
    vertex(600, 250);
vertex(600, 300);
vertex(650, 300);
vertex(600, 250);
vertex(550, 300);
vertex(600, 350);
endShape();

fill('darkblue')
    beginShape(TRIANGLE_FAN);
vertex(600, 350);
vertex(600, 300);
vertex(650, 300);
endShape();
    // add your drawing here:
    // https://p5js.org/reference/#/p5/point
    // point(110, 20);


    // https://p5js.org/reference/#/p5/text
    // text("Here is some text", 200, 40);

    // https://p5js.org/reference/#/p5/ellipse
    // fill('red');
    // ellipse(100, 200, 60, 100);

    // Other shapes...
    // Polygon: https://p5js.org/reference/#/p5/beginShape
    // Line: https://p5js.org/reference/#/p5/line
    
    // Curve: https://p5js.org/reference/#/p5/curve


    // for debugging:
    drawGrid(canvasWidth, canvasHeight)
}