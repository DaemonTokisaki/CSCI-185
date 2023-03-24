function defaultTheme() {
    document.querySelector('body').className="default";
    // your code here.
}

function oceanTheme() {
    document.querySelector('body').className="ocean";
    // document.querySelector('body').style.backgroundColor = 'blue';
    // document.querySelector('header').style.backgroundColor = 'blue';
    // document.querySelector('div.content').style.color = 'lightblue';
    // document.querySelector('button').style.color = 'lightblue';
   // your code here.
}

function desertTheme() {
    document.querySelector('body').className="desert";
   // your code here.
//    document.querySelector('body').style.backgroundColor = 'orange';
//    document.querySelector('header').style.backgroundColor = 'orange';
//    document.querySelector('div.content').style.color = 'lightblue';
//    document.querySelector('button').style.color = 'lightblue';
}

function highContrastTheme() {
    document.querySelector('body').className="high-contrast";
    // document.querySelector('body').style.backgroundColor = 'white';
    // document.querySelector('header').style.backgroundColor = 'black';
    // // document.querySelector('#content').style.backgroundColor = 'lightblue';
    // document.querySelector('div.content').style.color = 'black';
    // document.querySelector('button').style.color = 'black';
    // // your code here.
}

/*
    Hints: 
    1. Attach the event handlers (functions) above to the click event
       of each of the four buttons (#default, #ocean, #desert, 
        and #high-contrast) in index.html.
    2. Then, modify the  body of each function so that it
       sets the className property of the body tag based on 
       the button that was clicked.
*/