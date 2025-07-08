/*-------------------------------- Constants --------------------------------*/
const colors = ['blue', 'yellow', 'green', 'red'];
// push random to add to array each turn?

/*-------------------------------- Variables --------------------------------*/

// let blue;
// let yellow;
// let green;
// let red;

// let player;
// let winner;
// message;
let sequence = colors[''];
let playerSequence;
let isPlayerTurn = false;
console.log(sequence)
console.log(isPlayerTurn)

/*------------------------ Cached Element References ------------------------*/

const colorButtons = document.querySelectorAll('.color');
const messageStatus = document.querySelector('#message');
const startButton = document.querySelector('#start')
console.log(messageStatus)
console.log(startButton)

/*----------------------------- Event Listeners -----------------------------*/
// buttonColors.addEventListener('click', (event)) => {

// }

// click event for button colors:
// buttonColors.addEventListener('click', colorClick);

// function colorClick(event) {
//     const colorIndex = event.target.id;
//     currentInput += buttonColors;
// }
// console.log(colorClick)
// playButtons.addEventListener('click', () => {
    
// })

/*-------------------------------- Functions --------------------------------*/

// main sequence loop
// function getRandom(randomColor) {
//     let randomColor = Math.floor(Math.random() * buttonColors.length);
//     getRandom.push(buttonColors)
    // const randomIndex = // equation for random color?
    // renturn buttonColors[randomIndex];
// }
// console.log(randomColor)
// flash function:
// function buttonFlash() {
// }

// sound function:
// function playSound () { ***REFER TO DOM LEVEL UP
// }