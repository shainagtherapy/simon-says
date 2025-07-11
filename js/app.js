
/*-------------------------------- Constants --------------------------------*/

// user landing page with color buttons.
const colorsArray = ['blue', 'yellow', 'green', 'red'];

// formula for random color pick - cross checked on MDN, Google & Chatgpt
//const randomColor = colorsArray[Math.floor(Math.random() * colorsArray.length)]

/*-------------------------------- Variables --------------------------------*/
// gamestart:
let sequence = [];
let playerSequence = [];
let isPlayerTurn;


/*------------------------ Cached Element References ------------------------*/

const colorButtons = document.querySelector('.gameboard');

const colorDivs = document.querySelectorAll('.color');
const messageStatus = document.querySelector('#message');
const startButton = document.querySelector('#start')

// user initializes the game to start

/*----------------------------- Event Listeners -----------------------------*/

startButton.addEventListener('click', startGame);

// DO NOT DELETE!!!!!!!!!!!
colorButtons.addEventListener('click', playerClick) // <---- THIS IS THE CORRECT EVENT LISTENER
// !!!!!!!!!!!!!!!!!!!!!!!!!

/*-------------------------------- Functions --------------------------------*/



function render() {
   
}

// game begins by computer choosing one color button
function startGame() {
    sequence = [];
    playerSequence = []
    isPlayerTurn = false;
    flash();
   messageStatus.textContent = 'Watch the sequence...'; //*********** something isn't working with message
   updateSequence();
}

// function getRandom() {
//     const randomColor = colorsArray[Math.floor(Math.random() * colorsArray.length)]
//     return colorsArray[randomColor];
// }

function updateSequence() {
    playerSequence = [];
    isPlayerTurn = false;
    if (sequence.length < 100) {
    const randomColor = colorsArray[Math.floor(Math.random() * colorsArray.length)];
    sequence.push(randomColor);

    let delay = 0;
    for (let i = 0; i < sequence.length; i++) {
        setTimeout (() => {
            flash(sequence[i], 'white'); // should flash white
        }, delay); delay += 600;
    }
        
    console.log('new color added:', randomColor);
    console.log('Sequence length:', sequence.length);
    console.log('current sequence:', sequence);
    }
    
    if (isPlayerTurn = true) ;
        return messageStatus.textContent = "Repeat the sequence!";
}

// function computerFlash() {
//     for (let i= 0; i < colorDivs.length; i++) {
//         let delay = 0;
//         if (colorDivs[i].id === sequence[i]) {
//             colorDivs[i].style.backgroundColor = 'white';
//             setTimeout(() => {
//             colorDivs[i].removeAttribute('style');
//         } , delay);
//             delay += 600;
//         console.log('selected', colorDivs[i])
//         }
//     }
// }   // <-------- switched from forEach loop with help from chatgpt, much better for me!!!!!!

// function nextSequence() {
// //     updateSequence();

//     isPlayerTurn = false;
//     let delay = 0;
// }

//FLASH COLOR TO PLAYERSEQUENCE:
// function Flash(event) {
//     //const colorId = document.getElementById(color);
//     event.target.style.backgroundColor = 'black';
//     setTimeout (() => {
//         event.target.removeAttribute('style');
//     }, 200);
// }

function flash(color, flashColor) {
    for (let i= 0; i < colorDivs.length; i++) {
        if (colorDivs[i].id === color) {
        colorDivs[i].style.backgroundColor = flashColor;

        /* PLACEHOLDER FOR SOUND EFFECTS!!!!!!!
        const soundeffect = new Audio(`sounds/${}.mp3`)
        soundeffect.play();
        */

        setTimeout(() => {
            colorDivs[i].removeAttribute('style');
        }, 500);
        console.log("color flashing:", flashColor)
    }
}
}


// player click pushes to array
// player sequence < computer sequence then don't compare
function playerClick (event) {
    isPlayerTurn = true;
    messageStatus.textContent = "Repeat the sequence!";

    const clickedColor = event.target.id;
    flash(clickedColor, 'black'); // player clicks color

    playerSequence.push(clickedColor);

    const currentClick = (playerSequence.length - 1);

    // WIN/LOSS LOGIC: *******************************************
    if (playerSequence[currentClick] != sequence[currentClick]) {
        messageStatus.textContent = "Wrong! Start Over...";
        }
    if (playerSequence.length < sequence.length) {
        return;
        }

    if (playerSequence.length === sequence.length) {
        messageStatus.textContent = "It's a match!"
        }
    
    
    updateSequence();

    render();
}

    // if (playerSequence.length === sequence.length &&
    //     playerSequence[currentClick] === sequence[currentClick]) {
    //     messageStatus.textContent = "it's a match!";
    //     isPlayerTurn = false;
    //     updateSequence();

    // } else {
    //     messageStatus.textContent = "Wrong! Start Over...";
    //     isPlayerTurn = false;
    //     render();
    // }

    // console.log(currentStep)
    //console.log(playerSequence)
    //console.log(sequence)

    // playerSequence.forEach(() => {
    //         let i = 0;
    //         if (playerSequence[i] === sequence[i]) {
    //             messageStatus.textContent = "It's a match!"
    //             isPlayerTurn = false;
    //             console.log("it's a match!")
    //             i++;
    //             updateSequence();
    //         } else {
    //             messageStatus.textContent = "Wrong! Start Over"
    //             isPlayerTurn = false;
    //             console.log('not a match');
    //             return;
    //         }
    //     })

    // if (playerSequence !== sequence) {
    //     messageStatus.textContent = "Wrong! Start Over"
    //     isPlayerTurn = false;
    //     return;
    // }
    // if (playerSequence.length === sequence.length)
    //     messageStatus.textContent = "Great Job! Watch closely...";
    //     isPlayerTurn = false;
    //     playerSequence = [];
    //     updateSequence();
    //     nextSequence();
    //     // setTimeout(() => {
    //     //     addColorToSequence();
    //     //     playSequence();
    //     // }, 1000);

   

    // check for winner:
    // foreach sequence
    //    nest player sequence
    //    if seq === player seq then establish winning/next round


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