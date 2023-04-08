function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    // noFill();
    // circle(100, 200, 50);
    // circle(100, 250, 50);
    // circle(100, 300, 50);
    // circle(100, 350, 50);
    // circle(100, 400, 50);


    let y =0;
    let x =0;
    let z = 0;

    while (y<= 650, z<=1000) {
        fill('teal')
    circle(100,y,z)
    
fill('purple')
    circle(500,y,z)
    fill('blue')
    circle(300,y,z)
    y +=30;
    z +=30;

 
}



// while (y<= 650, x<=300) {
//     circle(x,y,50)
//     y +=25;
//     x +=25
// }

// while (x<= 650) {
//     circle(x,y,50)
//     x +=50;
// }
    drawGrid(canvasWidth, canvasHeight);
}


let counter = 0;


// while (counter < 10) {
//     console.log('Hey there! Hope you\'re doing OK!');
//     counter +=1
// }


