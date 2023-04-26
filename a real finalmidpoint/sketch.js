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

let img;
function preload() {
  img = loadImage('assets/alava.gif');
}


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



const orbsList = [
    {
        // x: randomInt(canvasWidth, canvasWidth + 1000),
        x: canvasWidth + 10000,
        y: randomInt(50, canvasHeight - 55),
        width: 10,
        speed: -8,
        color: 'hotpink'
    }
]




const dartsList = [
    {
        // x: randomInt(canvasWidth, canvasWidth + 5000),
        x: canvasWidth + 100,
        y: randomInt(50, canvasHeight - 55),
        width: 10,
        speed: randomInt(-10, -6),
        color: 'green',
    }, {
        // x: randomInt(canvasWidth, canvasWidth + 5000),
        x: canvasWidth + 300,
        y: randomInt(50, canvasHeight - 55),
        width: 10,
        speed: randomInt(-10, -6),
        color: 'green',
    }, {
        // x: randomInt(canvasWidth, canvasWidth + 5000),
        x: canvasWidth + 200,
        y: randomInt(50, canvasHeight - 55),
        width: 10,
        speed: randomInt(-10, -6),
        color: 'green',
    }
]


const pillsList = [
    {
        // x: randomInt(canvasWidth, canvasWidth + 300),
        x: canvasWidth + 2000,
        y: randomInt(50, canvasHeight - 55),
        width: 10,
        speed: randomInt(-6, -3),
        color: 'blue'
    }, {
        // x: randomInt(canvasWidth, canvasWidth + 300),
        x: canvasWidth + 2300,
        y: randomInt(50, canvasHeight - 55),
        width: 10,
        speed: randomInt(-6, -3),
        color: 'blue'
    },


]

const gravityList = [
    {
        // x: randomInt(canvasWidth, canvasWidth + 300),
        x: canvasWidth + 4000,
        y: randomInt(50, canvasHeight - 55),
        width: 30,
        speed: randomInt(-5, -3),
        color: 'yellow'
    },
]

const player = {
    x: canvasWidth / 2,
    y: 100,
    width: 40,
    speed: 1,
    color: 'orange',
}

const caveLava = {
    x: 0,
    y: canvasHeight,
    width: 50,
    speed: -10,
    top: 'black',
    bottom: 'crimson'
}



const platformList = [
    // ADD PLATFORMS

    //    {
    //             x: 500,
    //             y: 500,
    //             width: 500,
    //             height: 100,
    //             speed: -10,
    //             color: 'darkRed',
    //         },
    // {  x: 300,
    //     y: 300,
    //     width: 500,
    //     height: 100,
    //     color: 'darkRed',
    // }

]






function draw() {


    clear();


    //BACKGROUND


    fill('gray')
    rect(0, 0, canvasWidth, canvasHeight)

    fill(caveLava.top)
    rect(0, 0, canvasWidth, 50)

    
    
    fill(caveLava.bottom)
    rect(0, canvasHeight - 50, canvasWidth, 50)


    if(player.color ==='purple'||player.color ==='yellow')
    for(let i=0; i< 200;i++){
        const x= randomInt(0,canvasWidth);
        const y= randomInt(canvasHeight-55,canvasHeight);
        const diameter = randomInt(5,10);
        fill('red')
        circle(x,y,diameter)
    }

    // if(player.color ==='red'||player.color ==="#E3242B")
    // for(let i=0; i< 200;i++){
    //     const x= randomInt(0,canvasWidth);
    //     const y= randomInt(canvasHeight-55,canvasHeight);
    //     const diameter = randomInt(5,10);
    //     fill('red')
    //     circle(x,y,diameter)
    // }




    if (player.color === 'purple') {
        player.y += player.speed;
    }



    if (player.color === 'yellow') {
        player.y += -player.speed;
    }




    // draw player:
    fill(player.color);
    circle(player.x, player.y, player.width);


    //caveLava




    //ORBS
    for (let i = 0; i < orbsList.length; i++) {
        let orbs = orbsList[i];
        fill('white')
        beginShape(TRIANGLE_FAN);
        vertex(orbs.x, orbs.y);
        vertex(orbs.x + 20, orbs.y - 5);
        vertex(orbs.x + 20, orbs.y + 5);
        endShape()
        fill('brown')
        rect(orbs.x - 34, orbs.y - 2, 40, 4)
        fill('gray')
        beginShape(TRIANGLE_FAN);
        vertex(orbs.x - 30, orbs.y - 5);
        vertex(orbs.x - 40, orbs.y);
        vertex(orbs.x - 30, orbs.y + 5);
        endShape()



        if (player.color === 'purple' || player.color === 'yellow') {
            orbs.x += orbs.speed;

        }
        if (player.color === "#E3242B") {
            orbs.x = canvasWidth + 10000;
            orbs.y = randomInt(50, canvasHeight - 55);
        }
        if (orbs.x < -10) {
            orbs.x = canvasWidth + 10;
            orbs.y = randomInt(55, canvasHeight - 55);
            orbs.speed = -10;
            player.x = player.x + 4;
        }

    }

    //DARTS
    for (let i = 0; i < dartsList.length; i++) {
        let darts = dartsList[i];

        fill('black')
        circle(darts.x, darts.y, darts.width);
        circle(darts.x + 4, darts.y + 5, darts.width / 2);
        circle(darts.x + 10, darts.y + 5, 12);
        beginShape(TRIANGLE_FAN);
        vertex(darts.x, darts.y - 5);
        vertex(darts.x + 5, darts.y - 10);
        vertex(darts.x + 5, darts.y);
        endShape();
        beginShape(TRIANGLE_FAN);
        vertex(darts.x + 20, darts.y);
        vertex(darts.x + 25, darts.y - 10);
        vertex(darts.x + 5, darts.y);
        endShape();
        beginShape(TRIANGLE_FAN);
        vertex(darts.x + 10, darts.y + 12);
        vertex(darts.x + 25, darts.y + 12);
        vertex(darts.x + 15, darts.y);
        endShape();
        fill('white')
        circle(darts.x, darts.y - 2, 4)

        if (player.color === 'purple' || player.color === 'yellow') {
            darts.x += darts.speed;
        }
        if (player.color === "#E3242B") {
            darts.x = canvasWidth + 100;
            darts.y = randomInt(50, canvasHeight - 55);
        }

        // darts.x += darts.speed
        if (darts.x < -10) {
            darts.x = canvasWidth + 10;
            darts.y = randomInt(55, canvasHeight - 55);
            darts.speed = randomInt(-10, -6);
            player.x = player.x + 4;
        }


    }

    //Pills
    for (let i = 0; i < pillsList.length; i++) {
        let pills = pillsList[i];
        fill('red');
        circle(pills.x, pills.y, pills.width);

        fill('black')
        rect(pills.x + 12, pills.y, .1, 10)
        rect(pills.x + 12, pills.y + 10, 10, .1)
        rect(pills.x + 12, pills.y - 10, .1, 10)
        rect(pills.x + 12, pills.y - 10, 10, .1)

        rect(pills.x + 8, pills.y, .1, 14)
        rect(pills.x + 8, pills.y + 14, 10, .1)
        rect(pills.x + 8, pills.y - 14, .1, 14)
        rect(pills.x + 8, pills.y - 14, 10, .1)

        rect(pills.x + 4, pills.y, .1, 14)
        rect(pills.x + 4, pills.y + 14, -10, .1)
        rect(pills.x + 4, pills.y - 14, .1, 14)
        rect(pills.x + 4, pills.y - 14, -10, .1)

        rect(pills.x, pills.y, .1, 10)
        rect(pills.x, pills.y + 10, -10, .1)
        rect(pills.x, pills.y - 10, .1, 10)
        rect(pills.x, pills.y - 10, -10, .1)

        fill('brown')
        circle(pills.x, pills.y, 10)
        circle(pills.x + 10, pills.y, 15)

        fill('red')
        beginShape(TRIANGLE_FAN);
        vertex(pills.x + 10, pills.y);
        vertex(pills.x + 5, pills.y + 5);
        vertex(pills.x + 5, pills.y - 5);
        endShape();
        fill('red')
        beginShape(TRIANGLE_FAN);
        vertex(pills.x + 10, pills.y);
        vertex(pills.x + 15, pills.y + 5);
        vertex(pills.x + 15, pills.y - 5);
        endShape();


        if (player.color === 'purple' || player.color === 'yellow') {
            pills.x += pills.speed;

        }

        if (player.color === "#E3242B") {
            pills.x = canvasWidth + 2000;
            pills.y = randomInt(50, canvasHeight - 55);
        }
        if (pills.x < -10) {
            pills.x = canvasWidth + 10;
            pills.y = randomInt(55, canvasHeight - 55);
            pills.speed = randomInt(-6, -4);
            player.x = player.x + 4;
        }

    }

    // Gravity
    for (let i = 0; i < gravityList.length; i++) {
        let gravity = gravityList[i];

        fill("#FFCBCB")

        circle(gravity.x, gravity.y, gravity.width);

        fill('red')
        circle(gravity.x - 8, gravity.y, 12)
        fill('black')
        circle(gravity.x - 9, gravity.y, 6)

        fill('darkred')
        beginShape();
        vertex(gravity.x + 2, gravity.y - 16);
        vertex(gravity.x + 15, gravity.y - 10);
        vertex(gravity.x + 45, gravity.y - 5);
        vertex(gravity.x + 15, gravity.y + 10);
        vertex(gravity.x + 2, gravity.y + 16);
        endShape()

        line(gravity.x, gravity.y - 14, gravity.x + 40, gravity.y - 5)


        line(gravity.x - 5, gravity.y + 10, gravity.x + 30, gravity.y - 10)

        line(gravity.x + 10, gravity.y + 10, gravity.x + 5, gravity.y - 14)

        line(gravity.x + 10, gravity.y - 10, gravity.x + 5, gravity.y + 14)

        line(gravity.x, gravity.y + 14, gravity.x + 35, gravity.y)

        line(gravity.x, gravity.y + 14, gravity.x + 35, gravity.y - 15)

        line(gravity.x, gravity.y - 10, gravity.x + 35, gravity.y - 2)

        line(gravity.x, gravity.y + 10, gravity.x + 40, gravity.y - 5)

        line(gravity.x - 5, gravity.y - 10, gravity.x + 40, gravity.y + 2)

        line(gravity.x + 5, gravity.y + 10, gravity.x + 40, gravity.y - 10)

        line(gravity.x, gravity.y - 5, gravity.x + 40, gravity.y + 8)

        line(gravity.x + 10, gravity.y, gravity.x, gravity.y - 8)




        if (player.color === 'purple' || player.color === 'yellow') {
            gravity.x += gravity.speed

        }
        if (player.color === "#E3242B") {
            gravity.x = canvasWidth + 4000;
            gravity.y = randomInt(50, canvasHeight - 55);
        }

        if (gravity.x < -10) {
            gravity.x = canvasWidth + 10;
            gravity.y = randomInt(55, canvasHeight - 55);
            gravity.speed = randomInt(-6, -4);
            player.x = player.x + 4;
        }


    }

    if (player.x < -10) {
        player.x = canvasWidth / 2;
        player.y = canvasHeight / 2;
        player.width = 40;
        player.color = 'purple'
    }

    // draw platform:
    //1. Loop through each platform and draw it
    for (let i = 0; i < platformList.length; i++) {
        let platform = platformList[i];
        fill(platform.color)
        rect(platform.x, platform.y, platform.width, platform.height);
    }






    const topPlayer = player.y - player.width / 2;
    const bottomPlayer = player.y + player.width / 2;
    const rightPlayer = player.x + player.width / 2;
    const leftPlayer = player.x - player.width / 2;



    // HOW TO LOSE A LIFE
    for (let i = 0; i < orbsList.length; i++) {
        let orbs = orbsList[i];

        const topOrb = orbs.y - orbs.width / 2;
        const bottomOrb = orbs.y + orbs.width / 2;
        const rightOrb = orbs.x + orbs.width / 2;
        const leftOrb = orbs.x - orbs.width / 2;


        // for (let zo = 0;zo < 4; zo++) {
        ;

        if (
            bottomPlayer >= topOrb &&
            rightPlayer >= leftOrb &&
            leftPlayer <= rightOrb &&
            topPlayer <= bottomOrb
            ||
            bottomPlayer >= canvasHeight - 55
            ||
            topPlayer <= 55
        ) {

            orbs.speed = orbs.speed;
            player.y = canvasHeight / 2;
            player.x = canvasWidth / 2;
            player.width = 40;
            player.color = 'purple';
        }
        //     if (zo>=4){
        //        player.color='black';
        //     }
        // }




        // if (
        //     bottomPlayer >= topOrb &&
        //     rightPlayer >= leftOrb &&
        //     leftPlayer <= rightOrb &&
        //     topPlayer <= bottomOrb
        //     ||
        //     bottomPlayer >= canvasHeight - 55
        //     ||
        //     topPlayer <= 55
        // ) {

        //     orbs.speed = orbs.speed;
        //     player.y = canvasHeight / 2;
        //     player.x = canvasWidth / 2;
        //     player.width=50;
        //     player.color='purple';
        // }

    }



    // HOW TO GET PUSHED
    for (let i = 0; i < dartsList.length; i++) {
        let darts = dartsList[i];

        const topDart = darts.y - darts.width / 2;
        const bottomDart = darts.y + darts.width / 2;
        const rightDart = darts.x + darts.width / 2;
        const leftDart = darts.x - darts.width / 2;

        if (
            bottomPlayer >= topDart &&
            rightPlayer >= leftDart &&
            leftPlayer <= rightDart &&
            topPlayer <= bottomDart

        ) {
            dartsList.speed = dartsList.speed;
            player.x = darts.x - 25;
        }

    }

    // How to change size
    for (let i = 0; i < pillsList.length; i++) {
        let pills = pillsList[i];

        const topPill = pills.y - pills.width / 2;
        const bottomPill = pills.y + pills.width / 2;
        const rightPill = pills.x + pills.width / 2;
        const leftPill = pills.x - pills.width / 2;

        if (
            bottomPlayer >= topPill &&
            rightPlayer >= leftPill &&
            leftPlayer <= rightPill &&
            topPlayer <= bottomPill

        ) {
            pills.x = canvasWidth;
            pills.y = randomInt(50, canvasHeight - 55)
            player.width = player.width + 10;
            return;
        }
        else {
            player.speed = 1;
        }
    }

    // HOW TO REVERSE GRAVITY
    for (let i = 0; i < gravityList.length; i++) {
        let gravity = gravityList[i];

        const topGravity = gravity.y - gravity.width / 2;
        const bottomGravity = gravity.y + gravity.width / 2;
        const rightGravity = gravity.x + gravity.width / 2;
        const leftGravity = gravity.x - gravity.width / 2;

        if (
            bottomPlayer >= topGravity &&
            rightPlayer >= leftGravity &&
            leftPlayer <= rightGravity &&
            topPlayer <= bottomGravity &&
            player.color === 'yellow'

        ) {
            gravity.x = canvasWidth;
            gravity.y= randomInt(50, canvasHeight - 55),
            player.color = 'purple';
            player.width = player.width + 10;
            player.y += -player.speed;
            return;
        }
        else {
            player.speed = 1;
        }

        if (
            bottomPlayer >= topGravity &&
            rightPlayer >= leftGravity &&
            leftPlayer <= rightGravity &&
            topPlayer <= bottomGravity &&
            player.color === 'purple'

        ) {
            gravity.x = canvasWidth;
            player.color = 'yellow';
            player.width = player.width + 10;
            player.y += -player.speed;
            return;
        }

        else {
            player.speed = 1;
        }


    }





    //2. Colision loop
    for (let i = 0; i < platformList.length; i++) {
        let platform = platformList[i];

        const topPlatform = platform.y;
        const bottomPlatform = platform.y + platform.height;
        const leftPlatform = platform.x;
        const rightPlatform = platform.x + platform.width;




        if (
            bottomPlayer >= topPlatform &&
            rightPlayer >= leftPlatform &&
            leftPlayer <= rightPlatform &&
            topPlayer <= bottomPlatform
        ) {
            player.color = 'red';
            player.speed = 0;
            return;
        } else {
            player.speed = 1;
        }





    }



    if (player.x >= canvasWidth - 100) {
        fill('gold');
        rect(0, 0, canvasWidth, canvasHeight);
        player.color = 'red';
        fill('purple');
        circle(canvasWidth / 2, canvasHeight / 2, 200)
        fill(0);
        textSize(80);
        text('CONGRATULATIONS!', 200, 100);
        text('PRESS SPACE TO PLAY AGAIN', 50, 600);
    }
    //FIX
    if (player.color === 'orange') {
        fill('orange');
        rect(0, 0, canvasWidth, canvasHeight);


        //ADD TEXT HERE
        fill(0);
        textSize(32);
        text('word', 300, 300);




        // fill('blue')
        // rect(0,0,canvasWidth,100)
        // frameRate(10);
        // fill("darkorange");
        // let x = randomInt(0, canvasWidth);
        // let y = randomInt(0, 55);
        // let diameter = randomFloat(5, 25);
        // circle(x, y, diameter);


        // circle(x+200, y, diameter);
        // circle(x+400, y, diameter);
        // circle(x+290, y, diameter);
        // circle(x+750, y, diameter);
        // circle(x+600, y, diameter);

    }
    // image(img, 0, canvasHeight-255);
 
}



function moveController(ev) {
    console.log(ev.code);

    if (ev.code === 'Space') {


        player.x = canvasWidth / 2;
        player.y = 100;
        player.width = 40;
        player.color = "#E3242B";


    }
    if (ev.code === 'BrowserBack') {
        if (ev) {
            ev.preventDefault();
        }
        player.color = 'red';

    }

    if (ev.code === 'BrowserForward' && player.color === 'red') {
        if (ev) {
            ev.preventDefault();
        }
        player.color = 'purple';


    }

    if (ev.code === 'BrowserForward' && player.color === "#E3242B") {
        player.color = 'purple';


    }
    //REMOVE
    if (ev.code === 'ArrowRight' && player.color === 'purple') {
        player.x = player.x + a;
    }

    if (ev.code === 'ArrowUp' && player.color === 'purple') {
        player.y = player.y - a;
    }

    if (ev.code === 'ArrowUp' && player.color === 'red') {

    }

    if (ev.code === 'ArrowUp' && player.color === 'yellow') {
        player.y = player.y + a;
    }

    if (ev.code === 'ArrowDown' && player.color === 'purple') {
        player.y = player.y + a;
    }


    if (ev.code === 'ArrowDown' && player.color === 'yellow') {
        player.y = player.y - a;
    }


}
document.addEventListener('keydown', moveController);

