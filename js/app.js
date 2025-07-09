
/*-------------------------------- Constants --------------------------------*/

// user landing page with color buttons.
const colorsArray = ['blue', 'yellow', 'green', 'red'];

// formula for random color pick - cross checked on MDN, Google & Chatgpt
const randomColor = colorsArray[Math.floor(Math.random() * colorsArray.length)]

/*-------------------------------- Variables --------------------------------*/

let isPlayerTurn

/*------------------------ Cached Element References ------------------------*/

const colorButtons = document.querySelector('.gameboard');

const messageStatus = document.querySelector('#message');

const startButton = document.querySelector('#start')
// user initializes the game to start

/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/



startButton.addEventListener('click', startGame);

// game begins by computer choosing one color button
function startGame() {
    sequence = [];
    isPlayerTurn = false;
   // messageStatus = 'Watch the pattern...'; //*********** something isn't working with message
   addColorToSequence();
   playerSequence(); //defined below
   console.log()
}

function addColorToSequence() {
    sequence.push(randomColor);
}



function playSequence() {

}


function playerClick (event) {
    console.log(event.target.id)
}

colorButtons.addEventListener('click', playerClick) 


// document.querySelector('#blue').addEventListener('click', play);
// document.querySelector('#yellow').addEventListener('click', play);
// document.querySelector('#green').addEventListener('click', play);
// document.querySelector('#red').addEventListener('click', play);

const play = (event) => {
    console.log(event.target);
}


function playerSequence() {
    isPlayerTurn = true;
    
    // messageStatus = 'Watch the pattern...';
    //playSequence();
}

// for (let i = 0; i < colorsArray.length; i ++) {
//     colorsArray[i].addEventListener("click", playerChoice);
// }

// colorButtons.forEach(function(color) {
// color.addEventListener('click', playSequence);
//     if (!isPlayerTurn);
//     const choice = color.id;

//     console.log(choice)
// })































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