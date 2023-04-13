var a = 20;
let b = 200;
let c = 300;
let d = 400;
let e = 500;
let f = 600;
let g = 700;
let h = 800;
let i = 900;
let j = 1000;



const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 


function randomShot(min, max) { 
	// min and max included 
	return Math.random() * (max - min + 1) + min;
}

function randomInt(min, max) { 
	// min and max included 
	return Math.floor(randomShot(min, max));
}


function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

const orbs = {
    x: randomInt(canvasWidth, canvasWidth+300),
    y: randomInt(50, canvasHeight-55),
    width: 20,
    speed: -20,
    color: 'hotpink'
}

const darts = {
    x: randomInt(canvasWidth, canvasWidth+300),
    y: randomInt(50, canvasHeight-55),
    width: 10,
    speed: -5,
    color: 'green'
}

const player = {
    x: canvasWidth/2,
    y: 100,
    width: 50,
    speed: 1,
    color: 'blue',
}

const caveLava = {
    x:0,
    y: canvasHeight,
    width: 50,
    speed: -10,
    top: 'black',
    bottom: 'crimson'
}


const platformList = [
    // ADD PLATFORMS

   {
            x: 500,
            y: 500,
            width: 500,
            height: 100,
            speed: -10,
            color: 'darkRed',
        },
        // {  x: 300,
        //     y: 300,
        //     width: 500,
        //     height: 100,
        //     color: 'darkRed',
        // }
       
]






function draw(){


    clear();

    //BACKGROUND
    fill('gray')
    rect(0,0,canvasWidth,canvasHeight)

    fill(caveLava.top)
    rect(0,0,canvasWidth,50)

    fill(caveLava.bottom)
    rect(0,canvasHeight-50,canvasWidth,50)

//SPEED
    player.y += player.speed;
    orbs.x += orbs.speed;
    caveLava.x += caveLava.speed;
    darts.x += darts.speed;
    platformList.x +=platformList.speed;

    // draw player:
    fill(player.color);
    circle(player.x, player.y, player.width);
    // objects
    drawOrb(orbs.x, orbs.y, orbs.width, orbs.color);
    drawDart(darts.x,darts.y,darts.width,darts.color);



    // orbs
    if (orbs.x<-300){
        orbs.x =canvasWidth+300;
        orbs.y =randomInt(55, canvasHeight-55)
    }
    if (darts.x<-10){
        darts.x =canvasWidth+10;
        darts.y =randomInt(400, 505)
    }
    if (player.x<-10){
        player.x = canvasWidth/2;
        player.y = 100
    }
    // if (player.color === 'red') {
    //     var a = 1;
    // }

    // draw platform:
    //1. Loop through each platform and draw it
    for (let i = 0; i < platformList.length; i++) {
        let platform = platformList [i];
        fill(platform.color)
        rect(platform.x, platform.y, platform.width, platform.height);
    }
   

    

    // fill(platform.color)
    // rect(platform.x+100, platform.y-300, platform.width, platform.height);


    // fill(platform.color)
    // rect(platform.x=platform.x+100, platform.y=platform.y-100, platform.width, platform.height);

    // fill(platform.color)
    // rect(platform.x=platform.x+1, platform.y=platform.y-1, platform.width, platform.height);


    const topPlayer = player.y - player.width / 2;
    const bottomPlayer = player.y + player.width / 2;
    const rightPlayer = player.x + player.width / 2;
    const leftPlayer = player.x - player.width / 2;

    const topOrb = orbs.y - orbs.width / 2;
    const bottomOrb = orbs.y +orbs.width / 2 ;
    const rightOrb = orbs.x + orbs.width / 2;
    const leftOrb = orbs.x - orbs.width / 2 ;

    const topDart = darts.y - darts.width / 2;
    const bottomDart = darts.y + darts.width / 2 ;
    const rightDart = darts.x + darts.width / 2 ;
    const leftDart = darts.x - darts.width / 2;
    
    if (
        bottomPlayer >= topOrb && 
        rightPlayer >= leftOrb &&
        leftPlayer <= rightOrb &&
        topPlayer <= bottomOrb
        ||
        bottomPlayer >= canvasHeight-55
        ||
        topPlayer <= 55
        ){
    
        orbs.speed = orbs.speed;
        player.y=100;
        player.x=canvasWidth/2;
    } 

        // HOW TO GET PUSHED
    if (
        bottomPlayer >= topDart && 
        rightPlayer >= leftDart &&
        leftPlayer <= rightDart &&
        topPlayer <= bottomDart

        ){
        darts.speed = darts.speed;
        player.x=darts.x-25;
    } 




    //2. Colision loop
    for (let i = 0; i < platformList.length; i++) {
    let platform = platformList[i];

    const topPlatform = platform.y;
    const bottomPlatform = platform.y + platform.height ;
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
        return;
    }  else {
        player.speed = 1;
        player.color = 'blue';
    }

    
   

    
}

 
    
    
    // if (
    //     bottomPlayer >= topOrb && 
    //     rightPlayer >= leftOrb &&
    //     leftPlayer <= rightOrb &&
    //     topPlayer <= bottomOrb
    //     ){
    //     orbs.color = 'red';
    //     player.color = 'red';
    //     player.speed = 0;
    //     orbs.speed = 0;
    // } else {
    //     player.speed = 1;
    //     player.color = 'blue';
    // }


}

function drawOrb(x, y, size, fillColor) {
   
    fill(fillColor);
    circle(x + size, y, size);
}

function drawDart(x, y, size, fillColor) {
   
    fill(fillColor);
    circle(x + size, y, size);
}



function moveController (ev) {
    console.log(ev.code);
    // if (ev.code==='ArrowLeft' && player.color === 'blue') {
    //     player.x=player.x-a;
    // }


    // if (ev.code ==='ArrowRight' && player.color === 'blue') {
    //     player.x=player.x+a;

    // }


    // if (ev.code ==='BrowserForward' && player.color === 'blue' ) {
    //     player.x=player.x+a;
    //     player.y=player.y-a;

    // }

    // if (ev.code ==='BrowserBack' && player.color === 'blue') {
    //     player.x=player.x-a;
    //     player.y=player.y-a;

    // }


    if (ev.code ==='ArrowUp') {
        player.y=player.y-a;
    }

    if (ev.code ==='ArrowDown' && player.color === 'blue') {
        player.y=player.y+a;
    }
    
    // if (ev.code ==='Space') {
    //     player.width=player.width+10;
    // }
    
    // if (ev.code ==='KeyM') {
    //     player.width=player.width-10;
    // }
    
}
document.addEventListener('keydown', moveController);

