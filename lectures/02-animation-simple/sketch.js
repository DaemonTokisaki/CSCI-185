// let speed = 1;
// let s = 200;
// let t = 100;


const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 


  

function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

// In p5.js, if you create a function called "draw",
// the function will be invoked over and over again
// in an animation loop (which is part of how p5.js 
// works).

const platform = {
    x: 200, 
    y: 600, 
    width: 500,
    height: 100,
    speed: 1,
    color: 'darkRed'
}

const player = {
    x: 100,
    y: 200,
    width: 50,
    speed: 1,
    color: 'blue'
}


function draw(){
    
    clear();
    player.y += player.speed;
    
    // draw player:
    fill(player.color);
    circle(player.x, player.y, player.width);

    // draw platform:
    fill(platform.color)
    rect(platform.x, platform.y, platform.width, platform.height);

    

    const topPlayer = player.y - player.width / 2;
    const bottomPlayer = player.y + player.width / 2;
    const rightPlayer = player.x + player.width / 2;
    const leftPlayer = player.x - player.width / 2;

    const topPlatform = platform.y;
    const bottomPlatform = platform.y + platform.height;
    const leftPlatform = platform.x;
    const rightPlatform = platform.x + platform.width;
       
    if (
        bottomPlayer >= topPlatform && 
        rightPlayer >= leftPlatform &&
        leftPlayer <= rightPlatform &&
        topPlayer <= bottomPlatform
        ){
        player.color = 'red';
        player.speed = 0;
    } else {
        player.speed = 1;
        player.color = 'blue';
    }

}

function moveController (ev) {
    console.log(ev.code);
    if (ev.code==='ArrowLeft') {
        player.x=player.x-20;
    }


    if (ev.code ==='ArrowRight') {
        player.x=player.x+20;

    }


    if (ev.code ==='BrowserForward') {
        player.x=player.x+20;
        player.y=player.y-20;

    }

    if (ev.code ==='BrowserBack') {
        player.x=player.x-20;
        player.y=player.y-20;

    }


    if (ev.code ==='ArrowUp') {
        player.y=player.y-20;
    }

    if (ev.code ==='ArrowDown') {
        player.y=player.y+20;
    }
    
    if (ev.code ==='Space') {
        player.width=player.width+10;
    }
    
    if (ev.code ==='KeyM') {
        player.width=player.width-10;
    }
    
    if (ev.code ==='KeyR') {
        player.color ='red';
    }
    if (ev.code ==='KeyY') {
        player.color ='yellow';
    }
    if (ev.code ==='KeyB') {
        player.color ='blue';
    }
}
document.addEventListener('keydown', moveController);

