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
    return Math.random() * (max - min + 1) + min;
}

function randomInt(min, max) {
    return Math.floor(randomShot(min, max));
}


function setup() {
    createCanvas(canvasWidth, canvasHeight);
   
}



const orbsList = [
    {
        
        x: canvasWidth + 10000,
        y: randomInt(55, canvasHeight - 55),
        width: 10,
        speed: -8,
        color: 'hotpink'
    }
]

const dartsList = [
    {
        x: canvasWidth + 100,
        y: randomInt(55, canvasHeight - 55),
        width: 10,
        speed: randomInt(-8, -4),
        color: 'green',
    }, {
        x: canvasWidth + 300,
        y: randomInt(55, canvasHeight - 55),
        width: 10,
        speed: randomInt(-8, -4),
        color: 'green',
    }, {
        x: canvasWidth + 200,
        y: randomInt(55, canvasHeight - 55),
        width: 10,
        speed: randomInt(-8, -4),
        color: 'green',
    }
]


const pillsList = [
    {
        x: canvasWidth + 2000,
        y: randomInt(55, canvasHeight - 55),
        width: 10,
        speed: randomInt(-6, -3),
        color: 'blue'
    }, {
        x: canvasWidth + 2300,
        y: randomInt(55, canvasHeight - 55),
        width: 10,
        speed: randomInt(-6, -3),
        color: 'blue'
    },


]

const gravityList = [
    {
        x: canvasWidth + 4000,
        y: randomInt(55, canvasHeight - 55),
        width: 30,
        speed: randomInt(-5, -3),
        color: 'yellow'
    },
]

const player = {
    x: canvasWidth / 2,
    y: 100,
    width: 30,
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

function draw() {

    clear();

    fill('gray')
    rect(0, 0, canvasWidth, canvasHeight)

    fill(caveLava.top)
    rect(0, 0, canvasWidth, 50)

    
    fill(caveLava.bottom)
    rect(0, canvasHeight - 50, canvasWidth, 50)

if(player.color=== 'red'){
    fill(0);
    textSize(30);
    text('Press Right Arrow to Resume', 450, 650);}

    if(player.color=== "#E3242B"){
        fill(0);
        textSize(30);
        text('Press Right Arrow to Start', 450, 650);}
    

    if(player.color ==='purple'||player.color ==='yellow')
    for(let i=0; i< 200;i++){
        const x= randomInt(0,canvasWidth);
        const y= randomInt(canvasHeight-55,canvasHeight);
        const diameter = randomInt(5,10);
        fill('red')
        circle(x,y,diameter)
    }

    if (player.color === 'purple') {
        player.y += player.speed;
    }

    if (player.color === 'yellow') {
        player.y += -player.speed;
    }

    fill(player.color);
    circle(player.x, player.y, player.width);

    fill('blue');
    circle(player.x, player.y, player.width*.8);

    fill('lightblue');
    circle(player.x, player.y, player.width*.6);

    fill('pink');
    circle(player.x, player.y, player.width*.4);

    fill('hotpink');
    circle(player.x, player.y, player.width*.2);

    fill(player.color);
    circle(player.x, 27, 10);

    fill('white');
    rect(canvasWidth-100,0,10,10);
    rect(canvasWidth-80,0,10,10);
    rect(canvasWidth-60,0,10,10);
    rect(canvasWidth-40,0,10,10);
    rect(canvasWidth-20,0,10,10);
    rect(canvasWidth-90,10,10,10);
    rect(canvasWidth-70,10,10,10);
    rect(canvasWidth-50,10,10,10);
    rect(canvasWidth-30,10,10,10);
    rect(canvasWidth-10,10,10,10);
    rect(canvasWidth-100,20,10,10);
    rect(canvasWidth-80,20,10,10);
    rect(canvasWidth-60,20,10,10);
    rect(canvasWidth-40,20,10,10);
    rect(canvasWidth-20,20,10,10);
    rect(canvasWidth-90,30,10,10);
    rect(canvasWidth-70,30,10,10);
    rect(canvasWidth-50,30,10,10);
    rect(canvasWidth-30,30,10,10);
    rect(canvasWidth-10,30,10,10);
    rect(canvasWidth-100,40,10,10);
    rect(canvasWidth-80,40,10,10);
    rect(canvasWidth-60,40,10,10);
    rect(canvasWidth-40,40,10,10);
    rect(canvasWidth-20,40,10,10);

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

        if(player.x>=canvasWidth-200){
            orbs.speed=-5;
        }

        if (player.color === 'purple' || player.color === 'yellow') {
            orbs.x += orbs.speed;

        }
        if (player.color === "#E3242B") {
            orbs.x = canvasWidth + 10000;
            orbs.y = randomInt(55, canvasHeight - 55);
        }
        if (orbs.x < -10) {
            orbs.x = canvasWidth + 10;
            orbs.y = randomInt(55, canvasHeight - 55);
            orbs.speed = -10;
            player.x = player.x + 4;
        }
    }

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
            darts.y = randomInt(55, canvasHeight - 55);
        }
         if (darts.x < -10) {
            darts.x = canvasWidth + 10;
            darts.y = randomInt(55, canvasHeight - 55);
            darts.speed = randomInt(-8, -4);
            player.x = player.x + 4;
        }
    }

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
            pills.y = randomInt(55, canvasHeight - 55);
        }
        if (pills.x < -10) {
            pills.x = canvasWidth + 10;
            pills.y = randomInt(55, canvasHeight - 55);
            pills.speed = randomInt(-6, -4);
            player.x = player.x + 4;
        }
    }

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
            gravity.y = randomInt(55, canvasHeight - 55);
        }
        if (gravity.x < -30) {
            gravity.x = canvasWidth + 10;
            gravity.y = randomInt(55, canvasHeight - 55);
            gravity.speed = randomInt(-6, -4);
            player.x = player.x + 4;
        }
    }

    if (player.x < -10) {
        player.x = canvasWidth / 2;
        player.y = canvasHeight / 2;
        player.width = 30;
        player.color = 'purple'
    }

    const topPlayer = player.y - player.width / 2;
    const bottomPlayer = player.y + player.width / 2;
    const rightPlayer = player.x + player.width / 2;
    const leftPlayer = player.x - player.width / 2;

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
            player.width = 30;
            player.color = 'purple';
        }
    }

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
            pills.y = randomInt(55, canvasHeight - 55)
            player.width = player.width + 10;
            return;
        }
        else {
            player.speed = 1;
        }
    }

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
            gravity.y= randomInt(55, canvasHeight - 55),
            player.color = 'purple';
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
            gravity.y = randomInt(55, canvasHeight - 55);
            player.color = 'yellow';
            player.y += -player.speed;
            return;
        }
        else {
            player.speed = 1;
        }
    }

    if (player.x >= canvasWidth - 100) {
        fill('gold');
        rect(0, 0, canvasWidth, canvasHeight);
        player.color = 'red';
        fill('purple');
        circle(canvasWidth / 2, canvasHeight / 2, 180)
        fill('blue');
        circle(canvasWidth / 2, canvasHeight / 2, 160)
        fill('lightblue');
        circle(canvasWidth / 2, canvasHeight / 2, 140)
        fill('pink');
        circle(canvasWidth / 2, canvasHeight / 2, 120)
        fill('hotpink');
        circle(canvasWidth / 2, canvasHeight / 2, 100)
        fill(0);
        textSize(80);
        text('CONGRATULATIONS!', 200, 100);
        text('PRESS SPACE TO PLAY AGAIN', 50, 600);
    }
    
    if (player.color === 'orange') {
        fill('darkblue');
        rect(0, 0, canvasWidth, canvasHeight);

        fill(0);
        textSize(30);
        text('Objective: Get to the other side ', 450, 50);

        fill(0);
        textSize(30);
        text('If you get hit by a bat: Player gets pushed back ', 350, 150);

        fill(0);
        textSize(30);
        text('If you get hit by a spider: Player grows bigger ', 350, 200);

        fill(0);
        textSize(30);
        text('If you touch the lava, cave top, go off screen, or get hit by an arrow: Player resets ', 100, 100);

        fill(0);
        textSize(30);
        text('Ì̶̡̲̠̖̖̫̇͛̓̅̈̉̂͝f̴̨̟̦͖̖̯̘̣͎̥̣̺̬͓͊̈̆͊̐́͜ ̸̨̢̟̦̥̲̘̬̻͕͗́̅ÿ̵̨̨͉̠͍̮̩͈͙͔͇̰́̈͋̌̈̚̕͠͠ǫ̵͙̰̭̦͎͈͍̣͚͛͛̆̈̌ử̵̖̦͚̹̥͇̐ ̶̨̱̬̰̖̦̪͍̩̱̔ġ̶̡̮̤̃̍̑̃e̸̡̩̰̬͍̞͈͍̩͉̱̰̩͐t̶͚̐̅̿̓̂̈́͝ͅ ̶̮̯͐̚h̸̢̨̛̲̫̭̬͕͕̻́̾͘͘i̵̛̤͓̻̣̫̰̩̙̓̾̀̃̎̆̎͋̉̍̀͘t̷̡̞͙̞̰̔̈́̉͋̌̿̔͒͝ ̶̳̗͑̍͛̆̀̄̾̇̈̍̋̈́̎͝b̷̗͈͕̤͍͕͖̼̣̞̘̌̾͒́̎̉͂́̓͒̕̕͠y̸̡̙̦̱̤͇̰̯͗̅̈͒̌̐̆͊́̈́̃͋͝͝ͅ ̶̢̡͖̞̬̯̰̲̬͕͈̬͚̤͋́͂ͅṱ̸̡̧̞̭̫̮̼̺͖̺̦̝̅̀̇̆̏̇͝ĥ̴̨̧̩̳͍̹̝̩͆͊̄ę̷̡̛͉̘̣̟̜̱͖̖̯̙̄̾̐͊͋́̋̍̕͠ ̸̢̙̫̗̈́̾͊͗͝ẻ̸̛͖͎͔͉̻͎̱̲͎̤̠̉̈́͒͗̂̚͝y̵̧͉̭͕͈̤͉̤̰̲̗̰͔̬̱̋̾̈́́̈̉͌͊ȩ̷̢̛̫̤̦̭̰̳̙̤̮͙̇̃͒͂̃͋͌̅͛̏͛̇͐͝:̵̨̮̰̿̄͂̌͂͝͝ ̶̨̨̬̖̼̯͙̣̻͓͊̽͜p̷̛̻͈͚͈̠̖̰͔̔́̊̋̿͒̓͊͒͝ͅl̷̡͈̩̺̺͉̹͗̆̾̊͌̚͘ͅͅȁ̸͕̺̀̽͂͝ỳ̵̡̛̻̞̻̤̲̱͓̝̣͓̬̀̓͆͒́͗̂̔̂̂̕͜͝͠è̷̮̞̟͙̙̥̹͓̙̯͆̂̈̄̈̽̿̏̇͌́r̵̺̣̬̯̦͇͒͋̉̉̌̔̊̏̾̑̆̈́͝ͅ ̴͚̿̊̈́͂̌̏̉̈́́͑̑͆̄͝͠Ȩ̸̮̟͇͕͚̠̙̩̖̤͌͌̄̉͐͊́̋̿Ṛ̷̩̤͍͔̹̥̟̪̜̻͗́̍͛̊̃́͛͝͝ͅR̴̡̟͕̳̝͕̫̞̅́̋͑̔̉̚͝O̸̡̤̘̗̬̩͙̗̼̮̟̣̓́͗͋͌̅͗͠Ŗ̵̛͙̗͎̼̳̞̲̱͙̫̲͒̇̑̑̎̅̓͋͝', 375, 350);
        fill(0);
        textSize(30);
        text('Ȋ̶̧̗̼̭̈̿̃̐̈́͗̑̕f̶̞̞̞̺̻̭̎̃̓ ̴͙̌̀͛̾̃̆̓͊̈̾̒̍̀̉̈y̷̢̖͐̕o̵̢̨̦͗̇̏̓̏́͒̓ṳ̴̢̢̖̦̺̹͍͕̩̔̅̕̚͜͜ ̵̪̜̣͈̹̃͂̅̌̑̕g̸̨̳͇̗̱͉̫͚͈͚͓̯̰͎̒̍̾̀͆̀͒͌̽̆̓̒̋͝ē̸̻̒̀͌̇̀͊̈́̃͘t̴̡͚̫̬̀̔ ̷̢̡͉̙͙͓̬͍͖̥̳̪̱̠̝͛̀̅͠h̸̯͚͔͋̋̐̇ͅi̵̧̛̮̫̗͉̱͍͓̜͖̭̹͙͉̓̐͗͒̀́͛̓͗͑̀͋̈́t̴̳̬̠̫̦̦̖͍͓̬̟̄̈̇͒̈́̎̋͠ ̶͚̦̳̒̎͊͛̽̒͂̋̚̕͝͝͝b̶̻̝̖͈̖͊̔̿͝ͅy̴͙̫̘̮͋̃̾̑͐̌̈́͆̄̍̏͐̊͋̚ ̵̈ţ̷͉̺̯̞̗͓̄̿̔͊̂̂̓̄͗̿̋̓͘͘ḧ̶̺͔̭̪̮͖́̈́̎͂͋̈̅̀͌̕͝͠e̵̡̪̰̮̥͖̾̎̅̈̉́͊͋̀̄͛̈̚ ̵̡̺͉̿̏́̎̐̉̔͂͌̾̃̕͝ė̷̡̳͚̘̹͒̈͘͠ͅy̵̡͕̼̤̰͔͓͙͖͍͙̭̙̏̎̀͑̓̉͌͆̃̃̔̊͆͘͝ę̵͎̞͔̫̟̺̩̘̺̎̊̇͂͒͑͠:̷̡̖̪̤̗̗͙̙͎͙̰̀ ̸̨͙͓͇͙̺̰̒̀̌̀̏̔͗͠͠p̷̧̨̢͉̪̦͈̱̰̦̥̫̆̋̿͂͋̅͑̀̄̕͜l̴̨̳̹͇͖͇̺͊̐́̔́͜ă̷̫͚̩͔̞̺̺͎̗͒͐̒̀̅͊ͅͅy̶̨̛͖̜̖̪̠̤̹͖̼̟̜͚̙̔̏̍̉͊͜͠͠ḛ̷͈͎͍̝̫͈̦̥̬̯͖͇̀͜r̸̯̈́͊ ̸̡̱̗̝͈͉̥̈́̆̽͘E̷̢̛̻̞͈̠̫͗̍̈́͐́̇͑̃̽̀̕͠͝R̷̙͙̳̼̘͖͖̺̟͓͛̂͑̾̈́̅̄͜Ŗ̷̧̧̼̯̪̭̯̹͍̟̙͖̬̑͑̐̅̉͑͛̿̀ͅO̴̧̫̘̱̹̻͈̱͈̒̈́͋͋͒͛̽͝͝ͅR̷̲̘̭͈̀', 375, 350);
        fill(0);
        textSize(30);
        text('Left Arrow pauses', 50, 500);
        fill(0);
        textSize(30);
        text('Right Arrow resumes', 950, 500);
        fill(0);
        textSize(30);
        text('Up Arrow: Player goes up', 470, 450);
        fill(0);
        textSize(30);
        text('Down Arrow: Player goes down', 460, 550);
        fill(0);
        textSize(30);
        text('Space Bar resets game', 500, 500);
        fill(0);
        textSize(50);
        text('Press Space then Right Arrow to START!', 250, 600);
    }
}

function moveController(ev) {
    console.log(ev.code);

    if (ev.code === 'Space') {
        player.x = canvasWidth / 2;
        player.y = 100;
        player.width = 30;
        player.color = "#E3242B";
    }

    if (ev.code === 'ArrowLeft') {
        player.color = 'red';
    }

    if (ev.code === 'ArrowRight' && player.color === 'red') {
        player.color = 'purple';
    }

    if (ev.code === 'ArrowRight' && player.color === "#E3242B") {
        player.color = 'purple';
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