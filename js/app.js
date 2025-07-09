/*-------------------------------- Constants --------------------------------*/
const colorsArray = ['blue', 'yellow', 'green', 'red'];
// push random to add to array each turn?

/*-------------------------------- Variables --------------------------------*/

// let blue;
// let yellow;
// let green;
// let red;

// let player;
// let winner;
// message;
// getRandom;
// let computerSequence
// let playerSequence
let isPlayerTurn

/*------------------------ Cached Element References ------------------------*/

const colorButtons = document.querySelectorAll('.colorbutton');
const messageStatus = document.querySelector('#message');
const startButton = document.querySelector('#start')


/*----------------------------- Event Listeners -----------------------------*/
// buttonColors.addEventListener('click', (event)) => {

// }

// click event for button colors:
// colorButtons.addEventListener('click', colorClick);

// function flashing(color)) {
//     const colorIndex = event.target.id;
//     currentInput += buttonColors;
// }
// console.log(colorClick)
// playButtons.addEventListener('click', () => {
    
// })

/*-------------------------------- Functions --------------------------------*/

// flash function:
// function flash(color) {
//     const button = document.getElementById(color);
//     button.classList.add('active');

// }

//     sequence.forEach((color, index)) => {
//         setTimeout(() => {
//             flash(color);

//         })
//     })
// }
//ACTIVE BLOCK:


startButton.addEventListener('click', computerSequence);

// function computerSequence() {
//     sequence = [];
//     isPlayerTurn = false;
//     const randomColor = colorsArray[Math.floor(Math.random() * colorsArray.length)];
//     sequence.push(randomColor);
//    // messageStatus= 'Watch the pattern...'; *********** something isn't working with message
//    playerSequence(); //defined below
// }


document.querySelector('#blue').addEventListener('click', play);
document.querySelector('#yellow').addEventListener('click', play);
document.querySelector('#green').addEventListener('click', play);
document.querySelector('#red').addEventListener('click', play);

const play = (event) => {
    console.log(event.target);
}


function playerSequence() {
    isPlayerTurn = true;
    
    // messageStatus = 'Watch the pattern...';
    //playSequence();
}

for (let i = 0; i < colorsArray.length; i ++) {
    colorsArray[i].addEventListener("click", playerChoice);
}

colorButtons.forEach(function(color) {
color.addEventListener('click', playSequence);
    if (!isPlayerTurn);
    const choice = color.id;

    console.log(choice)
})































// GRAVEYARDDDDDD

// function getRandom() {
//     const randomColor = colorsArray[Math.floor(Math.random() * colorsArray.length)];
//     return buttonColors[randomColor];
// }

// function updateSequence(){
//     colorsArray.push(randomColor)
// }


//     sequence.push(randomColor);
//     playerSequence = [];
//     isPlayerTurn = false;
//     messageStatus = "Repeat the sequence...";
// }

// main sequence loop
// function randomColor() {
//     let randomColor = Math.floor(Math.random() * colorsArray.length);
//     randomColor.push(randomColor)
//     // const randomIndex = // equation for random color?
//     // return colorsArray[randomIndex];
// }
// console.log(colorsArray) //<----not defined?

// function sequence() {
//     const randomColor = colorsArray[Math.floor(Math.random() * colorsArray.length)];
//     sequence.push(randomColor);
//     playerSequence = [""];
//     isPlayerTurn = false;
// }
// console.log(sequence)
// flash function:
// function buttonFlash() {
// }

// sound function:
// function playSound () { ***REFER TO DOM LEVEL UP
// } 