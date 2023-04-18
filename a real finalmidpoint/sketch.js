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



const orbsList = [
    {
        // x: randomInt(canvasWidth, canvasWidth + 1000),
        x: canvasWidth + 10000,
        y: randomInt(50, canvasHeight - 55),
        width: 10,
        speed: -15,
        color: 'red'
    }
]

const dartsList = [
    {
        // x: randomInt(canvasWidth, canvasWidth + 5000),
        x: canvasWidth + 100,
        y: randomInt(50, canvasHeight - 55),
        width: 10,
        speed: randomInt(-12, -6),
        color: 'green',
    }, {
        // x: randomInt(canvasWidth, canvasWidth + 5000),
        x: canvasWidth + 300,
        y: randomInt(50, canvasHeight - 55),
        width: 10,
        speed: randomInt(-12, -6),
        color: 'green',
    }, {
        // x: randomInt(canvasWidth, canvasWidth + 5000),
        x: canvasWidth + 200,
        y: randomInt(50, canvasHeight - 55),
        width: 10,
        speed: randomInt(-12, -6),
        color: 'green',
    }
]


const pillsList = [
    {
        // x: randomInt(canvasWidth, canvasWidth + 300),
        x: canvasWidth + 2000,
        y: randomInt(50, canvasHeight - 55),
        width: 10,
        speed: randomInt(-4, -3),
        color: 'blue'
    }, {
        // x: randomInt(canvasWidth, canvasWidth + 300),
        x: canvasWidth + 2200,
        y: randomInt(50, canvasHeight - 55),
        width: 10,
        speed: -5,
        color: 'blue'
    },
]

const gravityList = [
    {
        // x: randomInt(canvasWidth, canvasWidth + 300),
        x: canvasWidth + 4000,
        y: randomInt(50, canvasHeight - 55),
        width: 10,
        speed: -4,
        color: 'yellow'
    },
]

const player = {
    x: canvasWidth / 2,
    y: 100,
    width: 50,
    speed: 1,
    color: 'purple',
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


    //SPEED
    // player.y += player.speed;
    caveLava.x += caveLava.speed;
    platformList.x += platformList.speed;

    if (player.color === 'purple') {
        player.y += player.speed;
    }

    if (player.color === 'red') {
        player.y += player.speed;
    }

    if (player.color === 'yellow') {
        player.y += -player.speed;
    }




    // draw player:
    fill(player.color);
    circle(player.x, player.y, player.width);


    //ORBS
    for (let i = 0; i < orbsList.length; i++) {
        let orbs = orbsList[i];
        fill(orbs.color);
        circle(orbs.x, orbs.y, orbs.width);



        orbs.x += orbs.speed
        if (orbs.x < -10) {
            orbs.x = canvasWidth + 10;
            orbs.y = randomInt(55, canvasHeight - 55);
            orbs.speed = -20;
            player.x = player.x + 2;
        }
    }

    //DARTS
    for (let i = 0; i < dartsList.length; i++) {
        let darts = dartsList[i];
        fill(darts.color);
        circle(darts.x, darts.y, darts.width);



        darts.x += darts.speed
        if (darts.x < -10) {
            darts.x = canvasWidth + 10;
            darts.y = randomInt(55, canvasHeight - 55);
            darts.speed = randomInt(-15, -6);
            player.x = player.x + 2;
        }
    }

    //Pills
    for (let i = 0; i < pillsList.length; i++) {
        let pills = pillsList[i];
        fill(pills.color)
        circle(pills.x, pills.y, pills.width);
        pills.x += pills.speed
        if (pills.x < -10) {
            pills.x = canvasWidth + 10;
            pills.y = randomInt(55, canvasHeight - 55);
            pills.speed = randomInt(-6, -4);
            player.x = player.x + 2;
        }
    }

    // Gravity
    for (let i = 0; i < gravityList.length; i++) {
        let gravity = gravityList[i];
        fill(gravity.color)
        circle(gravity.x, gravity.y, gravity.width);
        gravity.x += gravity.speed
        if (gravity.x < -10) {
            gravity.x = canvasWidth + 10;
            gravity.y = randomInt(55, canvasHeight - 55);
            gravity.speed = randomInt(-6, -4);
            player.x = player.x + 2;
        }
    }



    // orbs
    // if (orbs.x < -300) {
    //     orbs.x = canvasWidth + 300;
    //     orbs.y = randomInt(55, canvasHeight - 55)
    //     player.x = player.x + 2;
    // }

    // if (darts.x < -10) {
    //     darts.x = canvasWidth + 10;
    //     darts.y = randomInt(55, canvasHeight - 55)
    //     player.x = player.x + 5;
    // }

    // if (pills.x < -10) {
    //     pills.x = canvasWidth + 10;
    //     pills.y = randomInt(55, canvasHeight - 55)
    //     player.x = player.x + 1;
    // }
    if (player.x < -10) {
        player.x = canvasWidth / 2;
        player.y = canvasHeight / 2;
        player.color = 'purple';
    }


    // if (player.color === 'red') {
    //     var a = 1;
    // }

    // draw platform:
    //1. Loop through each platform and draw it
    for (let i = 0; i < platformList.length; i++) {
        let platform = platformList[i];
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

    // const topOrb = orbs.y - orbs.width / 2;
    // const bottomOrb = orbs.y + orbs.width / 2;
    // const rightOrb = orbs.x + orbs.width / 2;
    // const leftOrb = orbs.x - orbs.width / 2;

    // const topDart = darts.y - darts.width / 2;
    // const bottomDart = darts.y + darts.width / 2;
    // const rightDart = darts.x + darts.width / 2;
    // const leftDart = darts.x - darts.width / 2;

    // const topPill = pills.y - pills.width / 2;
    // const bottomPill = pills.y + pills.width / 2;
    // const rightPill = pills.x + pills.width / 2;
    // const leftPill = pills.x - pills.width / 2;

    // HOW TO LOSE A LIFE
    for (let i = 0; i < orbsList.length; i++) {
        let orbs = orbsList[i];

        const topOrb = orbs.y - orbs.width / 2;
        const bottomOrb = orbs.y + orbs.width / 2;
        const rightOrb = orbs.x + orbs.width / 2;
        const leftOrb = orbs.x - orbs.width / 2;

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
            player.color = 'purple';
        }

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
            player.width = player.width + 10;
            return;
        }
        else {
            player.speed = 1;
            // player.color = 'blue';
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
            player.color = 'purple';
            player.width = player.width + 10;
            player.y += -player.speed;
            return;
        }
        else {
            player.speed = 1;
            // player.color = 'blue';
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
            // player.color = 'blue';
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
            // player.color = 'purple';
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
    if (player.x >= canvasWidth - 100) {
        fill('black')
        rect(0, 0, canvasWidth, canvasHeight)
        player.speed = 0;
        orbsList.speed = 0;
        dartsList.speed = 0;
        pillsList.speed = 0;
        gravityList.speed = 0;
    }

    

}



// function drawOrb(x, y, size, fillColor) {

//     fill(fillColor);
//     circle(x + size, y, size);
// }

// function drawDart(x, y, size, fillColor) {

//     fill(fillColor);
//     circle(x + size, y, size);
// }


// function drawPill(x, y, size, fillColor) {

//     fill(fillColor);
//     circle(x + size, y, size);
// }


function moveController(ev) {
    console.log(ev.code);

    // if (ev.code==='ArrowLeft' && player.color === 'purple') {
    //     player.x=player.x-a;
    // }


    // if (ev.code ==='ArrowRight' && player.color === 'purple') {
    //     player.x=player.x+a;

    // }
    if (ev.code ==='Space' ) {
        // player.x=player.x+a;
        player.color='red';
    
    }

    // if (ev.code ==='BrowserForward' && player.color === 'blue' ) {
    //     player.x=player.x+a;
    //     player.y=player.y-a;

    // }

    // if (ev.code ==='BrowserBack' && player.color === 'blue') {
    //     player.x=player.x-a;
    //     player.y=player.y-a;

    // }


    if (ev.code === 'ArrowUp' && player.color === 'purple') {
        player.y = player.y - a;
    }

    if (ev.code === 'ArrowUp' && player.color === 'red') {
        player.y = player.y - a;
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

    if (ev.code === 'Space') {
        player.speed = 0;
        orbsList.speed = 0;
        dartsList.speed = 0;
        pillsList.speed = 0;
        gravityList.speed = 0;
    }

    // if (ev.code ==='Space') {
    //     player.width=player.width+10;
    // }

    // if (ev.code ==='KeyM') {
    //     player.width=player.width-10;
    // }

}
document.addEventListener('keydown', moveController);

