let x = 100;
let y = 200;
let width = 50;
let speed = 1;
let s = 200;
let t = 100;

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

async function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

// In p5.js, if you create a function called "draw",
// the function will be invoked over and over again
// in an animation loop (which is part of how p5.js 
// works).




function draw(){
    
    clear();
    noFill();
    y+=speed;
    circle(x, y, width);

    fill('darkRed')
    rect(200, 600, 500, 100);

    

    // drawGrid(canvasWidth, canvasHeight);

   
    // if (ev.code ==='ArrowLeft') {
    //     console.log(ev.code);
    //     y=y-20;
    // }
    
 
//   if (true){x += speed;
//     clear();
//     noFill();
//     circle(x, y, width);
// drawGrid(canvasWidth, canvasHeight);
//   }
   
   

   
if (y>=400){
    clear();
    fill('blue');
    y+=.1;
    circle(x, y, width);

    fill('darkRed')
    rect(200, 600, 500, 100);


    // drawGrid(canvasWidth, canvasHeight);
   
}




    if (y>=573 && x>=173){
        fill('red')
        circle(x,y,width);


        fill('darkRed')
        rect(200, 600, 500, 100);


        noDraw();
    }

    // if (y=t){
    //     fill('red')
    //     circle(x,y,width);
    //     fill('darkRed')
    //     rect(200, 600, 1500, 100);
    //     noDraw();
    // }

}

function moveController (ev) {
    console.log(ev.code);
    if (ev.code==='ArrowLeft') {
        x=x-20;
    }

    if (ev.code ==='ArrowRight') {
        x=x+20;

    }

    if (ev.code ==='BrowserForward') {
        x=x+20;
        y=y-20;

    }

    if (ev.code ==='BrowserBack') {
        x=x-20;
        y=y-20;

    }


    if (ev.code ==='ArrowUp') {
        y=y-20;
    }

    if (ev.code ==='ArrowDown') {
        y=y+20;
    }
    
    if (ev.code ==='Space') {
        width=width+10;
    }
    
    if (ev.code ==='KeyM') {
        width=width-10;
    }
    
    if (ev.code ==='KeyR') {
        fillColor ='red';
    }
    if (ev.code ==='KeyY') {
        fillColor ='yellow';
    }
    if (ev.code ==='KeyB') {
        fillColor ='blue';
    }
}
document.addEventListener('keydown', moveController);


