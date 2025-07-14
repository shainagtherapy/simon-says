
/*-------------------------------- Constants --------------------------------*/

// user landing page with color buttons.
const colorsArray = ['yellow', 'purple', 'blue', 'red'];

// formula for random color pick - cross checked on MDN, Google & Chatgpt
//const randomColor = colorsArray[Math.floor(Math.random() * colorsArray.length)]

/*-------------------------------- Variables --------------------------------*/
// gamestart:
let sequence = [];
let playerSequence = [];
let isPlayerTurn;
let level;

/*------------------------ Cached Element References ------------------------*/

const colorButtons = document.querySelector('.gameboard');
const colorDivs = document.querySelectorAll('.color');
const messageStatus = document.querySelector('#message');
const levelDisplay = document.querySelector('#level-message')
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


// computer begins by computer choosing one color button
function startGame() {
    colorButtons.style.opacity = '1';
    sequence = [];
    playerSequence = []
    isPlayerTurn = false;
    messageStatus.textContent = 'Watch the sequence...';
    levelDisplay.textContent = 'Round 1 / 20';
    level = 1;
    updateSequence();
}

function updateSequence() {
    playerSequence = [];
    isPlayerTurn = false;
    messageStatus.textContent = "Watch the sequence..."
    
    const randomColor = colorsArray[Math.floor(Math.random() * colorsArray.length)];
    sequence.push(randomColor);
    
    console.log('new color added:', randomColor);
    console.log('Sequence length:', sequence.length);
    console.log('current sequence:', sequence);
    
    let delay = 1500; // 2 seconds?

    for (let i = 0; i < sequence.length; i++) {
        flash(sequence[i], 'cyan', delay); // should flash white
        delay += 800; // 8/10 or 800/1000ths of a second?
    }
    
    setTimeout(() => {
        isPlayerTurn = true;
        delay;
        messageStatus.textContent = "Repeat the sequence!"
    }, delay); /////////******is this delay actually working or not? */

    enableClick();

    }



function flash(color, flashColor = null, delay) {
    for (let i= 0; i < colorDivs.length; i++) {
        
        if (colorDivs[i].id === color) {
            setTimeout(() => {
                const div = colorDivs[i];                
                div.style.borderColor = flashColor;
            const soundEffect = new Audio(`./sounds/${colorDivs[i].id}.mp3`)
                soundEffect.play();
                soundEffect.volume = 0.5;
                console.log(soundEffect.volume)
            setTimeout(() => {
                colorDivs[i].removeAttribute('style');
            }, 300);
        }, delay);

        
        } //setInterval method help from mdn
    }
}




function enableClick() {
    colorButtons.addEventListener('click', playerClick);
}

function disableClick() {
    colorButtons.removeEventListener('click', playerClick)
}



function playerClick(event) {
    isPlayerTurn = true;

    const clickedColor = event.target.id;
    flash(clickedColor, 'magenta'); // player clicks color

    playerSequence.push(clickedColor);

    const currentClick = (playerSequence.length - 1);
    
    // WIN/LOSS LOGIC: *******************************************
    if (playerSequence[currentClick] !== sequence[currentClick]) {
        isPlayerTurn = false;
        const wrongSound = new Audio('./sounds/wrong.mp3');
        wrongSound.play();
        wrongSound.volume = 0.5;
        render();

    } else if (playerSequence.length < sequence.length) {
        return;

    } else if 
        (playerSequence[currentClick] === sequence[currentClick] &&
        playerSequence.length === sequence.length) {
            if (level === 20) {
                messageStatus.textContent = "CHAMPION!!!";
                const winnerSound = new Audio('./sounds/winner.mp3');
                winnerSound.play();
                winnerSound.volume = 0.5;
                disableClick();
            } else 
                {level = (level + 1); // or level++
                levelDisplay.textContent = `Round ${level} / 20`;
                isPlayerTurn = false;
                updateSequence()
                }
    }
}

function render() {
    disableClick();
    colorButtons.style.opacity = '0.5';
    sequence = [];
    playerSequence = [];
    isPlayerTurn = false;
    messageStatus.textContent = "Wrong! Press start to play again"
}

/* TO DO 7/12

- after start button, enable player clicks AND disable start button for the rest of the game

add ons:
- fade in messages/ message changes
- winning lights interval at level 20

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