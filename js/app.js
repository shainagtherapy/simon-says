
/*-------------------------------- Constants --------------------------------*/

// user landing page with color buttons.
const colorsArray = ['blue', 'yellow', 'green', 'red'];

// formula for random color pick - cross checked on MDN, Google & Chatgpt
const randomColor = colorsArray[Math.floor(Math.random() * colorsArray.length)]

/*-------------------------------- Variables --------------------------------*/

let isPlayerTurn

/*------------------------ Cached Element References ------------------------*/

const colorButtons = document.querySelector('.gameboard');

const colorPanels = document.querySelectorAll('.color');

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
   messageStatus.textContent = 'Watch the pattern...'; //*********** something isn't working with message
   addColorToSequence();
   playSequence(); //defined below
}

function addColorToSequence() {
    sequence.push(randomColor);
}

//FLASH COLOR TO PLAYERSEQUENCE:
function flash(event) {
    //const colorId = document.getElementById(color);
    event.target.style.backgroundColor = 'black';
    setTimeout (() => {
        event.target.removeAttribute('style');
    }, 200);
}

function playSequence() {
   colorPanels.forEach ((panel) => {
        panel.style.backgroundColor = 'black';
        setTimeout (() => {
            panel.removeAttribute('style');
        }, 200);
    
   })
// play random selected sequence as a flash
// call random color selected to apply background color change
// timed/time out color change for "flash" affect    
}

// DO NOT DELETE!!!!!!!!!!!
colorButtons.addEventListener('click', playerClick) // <---- THIS IS THE CORRECT EVENT LISTENER
// !!!!!!!!!!!!!!!!!!!!!!!!!
function playerClick (event) {
    if (!isPlayerTurn) {
        return;
    }
    const clickedColor = event.target.id;

    flash(clickedColor);
    
    playerSequence.push(clickedColor);

    console.log(playerSequence)

    const currentStep = playerSequence.length - 1;
    if (playerSequence[currentStep] !== sequence[currentStep]) {
        messageStatus.textContent = "Wrong! Start Over"
        isPlayerTurn = false;
        setTimeout(startGame, 1000);
        return;
    }
    if (playerSequence.length === sequence.length) 
        messageStatus.textContent = "Great Job! Watch closely...";
        isPlayerTurn = false;
        playerSequence = [];
        setTimeout(() => {
            addColorToSequence();
            playSequence();
        }, 1000);
    }


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