const imgOn = "https://www.w3schools.com/js/pic_bulbon.gif";
const imgOff = "https://www.w3schools.com/js/pic_bulboff.gif";
const imgDuck = "https://media.tenor.com/h0buQ0BdWBYAAAAC/subaru-duck-dance-subaru-duck.gif"
const imgHa ="https://i.gifer.com/origin/a0/a07ad08920f303f655251b1a0b353b86_w200.gif"
const elem = document.querySelector("#my_image");
// "https://www.w3schools.com/js/pic_bulbon.gif"


function turnOnOff() {
    console.log('image clicked');
    if (elem.src === imgOff) {
        elem.src = imgOn;}
        else if (elem.src === imgOn){
            elem.src = imgOff;  
        }
        else {
            elem.src = imgHa;
        }
}
