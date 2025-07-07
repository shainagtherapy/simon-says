# simon-bop-it
Simon Bop-It Browser-Based Game
Simon Project Planning Deliverable

As a user, 

I want to see a landing page with color buttons and instructions.
I want to clearly see and hear which buttons the computer is pressing.
I want to hear a noise played with each button press.
I want to see a visible response to my button being pressed.
I want a clear message when I've made a mistake, ending the game.
I want to play play another round.

Pseudocode:
// user landing page with yellow, purple, and blue buttons
// user initializes the game to start
// game begins by computer choosing one color button
    // THEN the user respond with the same button
// computer chooses another color button
    // THEN the user responds with the first button, followed by the second
// computer chooses another color button
    // THEN the use responds with the first, second, then third color button

// process repeats of computer adding a color button to grow the sequence

// define a const for yellow, purple and blue button
// define a variable for computer's choice
// define a variable for users choice
// add retry/ play again button

// add event listener to yellow button
// add event listener to purple button
// add event listener to blue button
// add event listener to play again

// using a random equation generator, create a sequence array from the computer
    // create a function to 'flash' color buttons at a timed interval to demonstrate sequence
// create 'sequenceToGuess' array that matches
    // create a 'flash' function for buttons clicked


// using a click event, assign the user choice to the variable for user's choice
// Render?
// repeat function? to compare user choice sequence to computer choice sequence
// IF user sequence matches the computer choice
    // THEN computer takes another turn
// IF user sequence does not match computer choice
    // THEN use loses

// Render the game message when game is over
// Upon user selecting 'play again'
    // reset computers choice to 0
