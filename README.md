# rockPaperScissors
Odin Project JS Assignment

This project helped me to learn better:
1) DOM and DOM manipulation
2) Selecting and manipulating elements
3) Handling click events
4) Implementing game logic
5) Implementing CSS Styles

A brief overview of the pertinent JS code is given below.

To create a random computer choice the computerPlay() function was created.
```JavaScript
const computerPlay = function(){
    const pick = Math.floor(Math.random()*3)+1;
    if(pick === 1){
        return 'rock'
    } else if(pick === 2){
        return 'scissors'
    } else if( pick === 3){
        return 'paper'
    } else console.log('Error'); 
}
```

The anonymous functions inside of the addEventListeners on replay and submit buttons are very long - please check the index.js file to review them. Once the computer choice can be generated and the user inputs are accepted then the game can be played after creating the singleRound() function.
```JavaScript
//single-round of play
const singleRound = function(playerSelection, computerSelection){
    if(playerSelection === computerSelection)
    { 
       console.log(`The match is a draw!`);

    } else if((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'rock')){
        
        console.log(`You win! ${playerSelection} beats ${computerSelection}!`);

    } else if((playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'scissors' && computerSelection === 'rock') || (playerSelection === 'paper' && computerSelection === 'scissors')){

        console.log(`You lost! ${playerSelection} loses to ${computerSelection}!`);
    } else{console.log('error ahh!')}

}
```

***End Walkthrough
