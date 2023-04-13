const photos = [
    "images/img1-600x400.jpg",
    "images/img2-600x400.jpg",
    "images/img3-600x400.jpg",
    "images/img4-600x400.jpg",
    "images/img5-600x400.jpg",
    "images/img6-600x400.jpg",
    "images/img7-600x400.jpg",
    "images/img8-600x400.jpg",
    "images/img9-600x400.jpg",
    "images/img10-600x400.jpg"
];
let idx = 0;




/* This function should:
    (1) display the new image inside of the .current-photo container, and 
    (2) update the caption inside of the .caption paragraph
*/
function showImage() {

    //     let template = `
    //     <div class="photo" style="background-image:url('${ photos[idx]}')"></div>
    // `;
    //     document.querySelector('.current-photo').insertAdjacentHTML('beforeend', template);

    document.querySelector('.current-photo').innerHTML = `<img src="${photos[idx]}" />`;
    document.querySelector('.caption').innerHTML = [idx + 1];

    // if (idx<12){
    // document.querySelector('.caption').innerHTML = [idx+1];
    // }

    // if (idx <= -1) {
    //     idx = 9;
    // }

    // target the img element and change its src to the image insode photos this is at slot idx

    //target the caption and tell which photo you are looking at
    console.log('photos[idx]');
    // console.log('Show image');
}


/* This function should set the idx variable 
   to one greater than the current value of idx, 
   and then invoke the showImage() function.
   If the idx gets to one less than the length of 
   the array, set idx to 0.
*/
function forward() {
    if (idx == 9) {
        idx = 0;
    } 
    else{
         ++idx;
        }
    // for (let idx = 0; idx < photos.length; idx++)
    //     photo = showImage[idx];
    // console.log('forward');
    // if (idx = 11) {
    //     idx = 0;
    // }
   
    showImage();
    // document.querySelector('.caption').innerHTML = [idx + 1];


}


/* This function should set the idx variable 
   to one less than the current value of idx, 
   and then invoke the showImage() function.
   If the idx gets to the beginning, set idx to
   one less than the length of the array.
*/
function back() {
    if (idx == 0) {
        idx = 9
    }

    else{
        --idx;
       }
    // for (let idx = 0; idx > photos.length; idx--)
    //     console.log('back');
    // photo = showImage[idx];

    // if (idx = -1) {
    //     idx = 10
    // }

    // document.querySelector('.caption').innerHTML = [idx];


    // if (idx = photos.length){
    //     idx = 0
    // }
    // create an if else statement that loops
    // --idx;
    showImage()
}
