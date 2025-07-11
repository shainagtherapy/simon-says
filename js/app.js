
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
let level = 1;

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


//******** try an empty color button click:
//  also use likesCount from dom Events for a level up?
//  */
/*-------------------------------- Functions --------------------------------*/

//if (isPlayerTurn = false)
//    colorButtons.removeEventListener('click', playerClick);

function render() {
    disableClick();
    sequence = [];
    playerSequence = [];
    isPlayerTurn = false;
    messageStatus.textContent = "Game reset. Click start to play again!"
    level = 1;
}

// computer begins by computer choosing one color button
function startGame() {
    colorButtons.style.opacity = '1';
    sequence = [];
    playerSequence = []
    isPlayerTurn = false;
    messageStatus.textContent = 'Watch the sequence...';
    updateSequence();
    const levelCounter = document.createElement('h3');
    levelCounter.textcontent = `${level}`;
}

function updateSequence() {
    playerSequence = [];
    isPlayerTurn !== true;
    messageStatus.textContent = "Watch the sequence..."
    if (sequence.length < 100) {
    const randomColor = colorsArray[Math.floor(Math.random() * colorsArray.length)];
    sequence.push(randomColor);
    
    console.log('new color added:', randomColor);
    console.log('Sequence length:', sequence.length);
    console.log('current sequence:', sequence);
    }
    let delay = 1500; // 2 seconds?

    for (let i = 0; i < sequence.length; i++) {
        flash(sequence[i], 'white', delay); // should flash white
        delay += 800; // 8/10 or 800/1000ths of a second?
    }
    
    setTimeout(() => {
        isPlayerTurn = true;
        messageStatus.textContent = "Repeat the sequence!"
    }, delay);

    enableClick();
  }



function flash(color, flashColor, delay) {
    for (let i= 0; i < colorDivs.length; i++) {
        if (colorDivs[i].id === color) {
            setTimeout(() => {
                colorDivs[i].style.borderColor= flashColor;

            setTimeout(() => {
                colorDivs[i].removeAttribute('style');
            }, 500);

        }, delay)
        /* PLACEHOLDER FOR SOUND EFFECTS!!!!!!!
        const soundeffect = new Audio(`sounds/${}.mp3`)
        soundeffect.play();

        // add a /sounds/ folder with mp3 files named with corresponding colors?
        */
    }
    }
}



function enableClick() {
    //colorButtons.style.opacity = '1';
    colorButtons.addEventListener('click', playerClick);
    //console.log('enableClick check!')
}

function disableClick() {
    colorButtons.style.opacity = '0.5';
    colorButtons.removeEventListener('click', playerClick)
}



function playerClick(event) {
    isPlayerTurn = true;

    const clickedColor = event.target.id;
    flash(clickedColor, 'cyan'); // player clicks color

    playerSequence.push(clickedColor);

    const currentClick = (playerSequence.length - 1);
    
    // WIN/LOSS LOGIC: *******************************************
    if (playerSequence[currentClick] !== sequence[currentClick]) {
        messageStatus.textContent = "Wrong! Start Over...";
        isPlayerTurn = false;
        disableClick();
        render();
    } else if (playerSequence.length < sequence.length) {
        return;
    } else if (playerSequence[currentClick] === sequence[currentClick] &&
        playerSequence.length === sequence.length) {
        messageStatus.textContent = "Next level!";
        level = (level + 1);
        isPlayerTurn = false;
        updateSequence()
    }
    
    // updateSequence();
    // render();
}

function render() {
    disableClick();
    sequence = [];
    playerSequence = [];
    isPlayerTurn = false;
    messageStatus.textContent = "Game reset. Click start to play again!"
    level = 1;
}


/* TO DO 7/12

- render() to reset the game and enable the start button
- after start button, enable player clicks AND disable start button for the rest of the game
- add level counter for each matching player sequence
- add 3 second countdown timer when start button initializes the game
- sound effects (required feature per game choice)

add ons:
- change colors and highlighting effects
- speed up player click highlights
- cap the game at level 20


questions:
- if the render() function resets the board, which begins with the 'start button',
    I shouldn't need a second button?

*/


















// GRAVEYARDDDDDD
// HELP FROM DEV******* NOT SURE?
// function PlayerEndTurnDelay(){};
//     if playerWin(){endPlayerTurn};

// function endplayerturn(){

// }
// function sleep(){
//     setTimeout(resolve, 1000);
// }
// function endPlayerTurn(){
//     let counter = 0;
//     while counter < 5 {sleep(); counter++}
//     while ()
//     do (sleep() );
// }
// ^^^^help suggestions start

// start game over
// counter vs timeout?


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