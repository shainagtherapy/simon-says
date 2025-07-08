/*-------------------------------- Constants --------------------------------*/
const buttonColors = ['blue', 'yellow', 'green', 'red'];
// push random to add to array each turn?

/*-------------------------------- Variables --------------------------------*/

// let blue;
// let yellow;
// let green;
// let red;

// let player;
// let winner;



/*------------------------ Cached Element References ------------------------*/

const playButtons = document.querySelectorAll('.button');
const messageStatus = document.querySelector('#message');

/*----------------------------- Event Listeners -----------------------------*/

// click event for button colors:
buttonColors.addEventListener('click', colorClick);

function colorClick(event) {
    const colorIndex = event.target.id;
}
console.log(colorClick)

/*-------------------------------- Functions --------------------------------*/

// main sequence loop
function getRandom() {
    // const randomIndex = // equation for random color?
    // renturn buttonColors[randomIndex];
}

// flash function:
// function buttonFlash() {
// }

// sound function:
// function playSound () { ***REFER TO DOM LEVEL UP
// }