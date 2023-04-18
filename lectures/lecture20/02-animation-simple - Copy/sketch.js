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



const dartsList = [
    {
        x: randomInt(canvasWidth-300, canvasWidth - 200),
        y: randomInt(50, canvasHeight - 55),
        width: 10,
        speed: -5,
        color: 'green',
    },{
        x: randomInt(canvasWidth-300, canvasWidth - 200),
        y: randomInt(50, canvasHeight - 55),
        width: 10,
        speed: -10,
        color: 'green',
    },{
        x: randomInt(canvasWidth-300, canvasWidth - 200),
        y: randomInt(50, canvasHeight - 55),
        width: 10,
        speed: -20,
        color: 'green',
    },
    

]

const player = {
    x: canvasWidth -200,
    y: 100,
    width: 50,
    speed: 1,
    color: 'blue',
}





// for (let i = 0; i < dartsList.length; i++) {
//     let darts = dartsList[i];
//     circle(darts.x, darts.y, darts.width);
//     // dartsList.y += dartsList.speed;
//     // if (darts.x < -10) {
//     //     darts.x = canvasWidth + 10;
//     //     darts.y = randomInt(400, 505)
//     // }
// }




function draw() {


    clear();


 
    //SPEED
    player.y += player.speed;
   
    
    
    // draw player:
    fill(player.color);
    circle(player.x, player.y, player.width);
   

    for (let i = 0; i < dartsList.length; i++) {
        let darts = dartsList[i];
        fill(darts.color)
        circle(darts.x, darts.y, darts.width);
        darts.x += darts.speed
        // dartsList.y += dartsList.speed;
        if (darts.x < -10) {
            darts.x = canvasWidth + 10;
            darts.y = randomInt(55, canvasHeight-55)
            player.x 
        }
    }




   
    if (player.x < -10 || player.y > canvasHeight) {
        player.x = canvasWidth / 2;
        player.y = 100
    }
    
    const topPlayer = player.y - player.width / 2;
    const bottomPlayer = player.y + player.width / 2;
    const rightPlayer = player.x + player.width / 2;
    const leftPlayer = player.x - player.width / 2;


  

    // // HOW TO GET PUSHED
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
        } else {
            player.speed = 1;
            // player.color = 'blue';
        }

     }



   

    }

    


    function moveController(ev) {
        console.log(ev.code);
      


        if (ev.code === 'ArrowUp') {
            player.y = player.y - a;
        }

        if (ev.code === 'ArrowDown' && player.color === 'blue') {
            player.y = player.y + a;
        }

        // if (ev.code ==='Space') {
        //     player.width=player.width+10;
        // }

        // if (ev.code ==='KeyM') {
        //     player.width=player.width-10;
        // }

    }
    document.addEventListener('keydown', moveController);

