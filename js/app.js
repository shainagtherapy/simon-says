
/*-------------------------------- Constants --------------------------------*/

// user landing page with color buttons.
const colorsArray = ['blue', 'yellow', 'green', 'red'];

// formula for random color pick - cross checked on MDN, Google & Chatgpt
const randomColor = colorsArray[Math.floor(Math.random() * colorsArray.length)]

/*-------------------------------- Variables --------------------------------*/
// gamestart:
let sequence = [];
let playerSequence = [];
let isPlayerTurn

/*------------------------ Cached Element References ------------------------*/

const colorButtons = document.querySelector('.gameboard');

const colorDivs = document.querySelectorAll('.color');
const messageStatus = document.querySelector('#message');
const startButton = document.querySelector('#start')

// user initializes the game to start

/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/



startButton.addEventListener('click', startGame);

// game begins by computer choosing one color button
function startGame() {
    sequence = [];
    playerSequence = []
    isPlayerTurn = false;
   messageStatus.textContent = 'Watch the pattern...'; //*********** something isn't working with message
   addColorToSequence();
   playSequence(); //defined below
   isPlayerTurn = true;
}


function addColorToSequence() {
    if (sequence.length < 100) {
        const randomColor = colorsArray[Math.floor(Math.random() * colorsArray.length)];
        sequence.push(randomColor);
        console.log(sequence)
    }
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
    // addColorToSequence();
    // for (let i = 0; i < 100; i++)
        
    colorDivs.forEach ((colorDiv) => {
            if (colorDiv.id === sequence[0]) {
                colorDiv.style.backgroundColor = 'white';
                    setTimeout (() => {
                        colorDiv.removeAttribute('style');
                    }, 200)
        }
   })
}

// DO NOT DELETE!!!!!!!!!!!
colorButtons.addEventListener('click', playerClick) // <---- THIS IS THE CORRECT EVENT LISTENER
// !!!!!!!!!!!!!!!!!!!!!!!!!

// player click pushes to array
// player sequence < computer sequence then don't compare
function playerClick (event) {
    isPlayerTurn = true;

    flash(event);
    
   // playerSequence.push(currentStep);

    // const currentStep = playerSequence.length - 1;
    // if (playerSequence[currentStep] !== sequence[currentStep]) {
    //     messageStatus.textContent = "Wrong! Start Over"
    //     isPlayerTurn = false;
    //     return;
    // }
    // if (playerSequence.length[currentStep] === sequence.length[currentStep]) 
    //     messageStatus.textContent = "Great Job! Watch closely...";
    //     isPlayerTurn = false;
    //     playerSequence = [];
    //     playSequence();
        // setTimeout(() => {
        //     addColorToSequence();
        //     playSequence();
        // }, 1000);
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