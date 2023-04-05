var ball = document.getElementById("ball");


function moveLeft(){
    var left =
    parseInt(window.getComputedStyle(ball).getPropertyValue("left"));
    ball.style.left = left + 2 + "px";
}

function moveRight(){
    var left =
    parseInt(window.getComputedStyle(ball).getPropertyValue("right"));
    ball.style.left = left - 2 + "px";
}

document.addEventListener("keydown", event =>{
    if (event.key==="ArrowLeft"){
        interval = setInterval (moveLeft,2);
    }
    if (event.key==="ArrowRight"){
        interval = setInterval (moveRight,2);
    }
});

document.addEventListener("keyup", event=>{
    clearInterval(interval);
});