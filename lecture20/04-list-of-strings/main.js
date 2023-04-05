// [] means array of strings
const names = [
    "Jane", "Brenda", "Wanda", "Maria", "Jasper",
    "John", "Malik", "Arjun", "Larry", "Curly", "Moe",
    "Tristan"
];





// use a while loop to output a message for each
// item in the array:
const outputElement = document.querySelector('#output');

// what do you want to repeat?
// output
// how long do you want to repeat
// 11
// names.length
// what do you want to change each time?
// which slot is being accessed
let i = 0;
while (i< names.length){
    outputElement.insertAdjacentHTML('beforeend', `<p>Welcome, ${names[i]}!</p>`);
    i++;
}

// outputElement.insertAdjacentHTML('beforeend', `<p>Welcome, ${names[1]}!</p>`);
// outputElement.insertAdjacentHTML('beforeend', `<p>Welcome, ${names[2]}!</p>`);
// outputElement.insertAdjacentHTML('beforeend', `<p>Welcome, ${names[3]}!</p>`);
