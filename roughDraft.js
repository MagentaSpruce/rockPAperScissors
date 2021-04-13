'use strict';

//User choice
const userInput = prompt('Welcome to the Paper, Rock & Scissors game! Choose rock, paper, or scissors to play!').toLowerCase();
console.log(userInput);


//Random computer choice picker
const computerPlay = function(){
    const pick = Math.floor(Math.random()*3)+1;
    if(pick === 1){
        return 'rock'
    } else if(pick === 2){
        return 'scissors'
    } else if( pick === 3){
        return 'paper'
    } else console.log('Error');
    console.log(pick);
}
console.log(computerPlay());

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
    
singleRound(userInput,computerPlay());


const game = function(){
    for (let i = 0; i <=5;i++){
        singleRound(userInput,computerPlay());
    }
}
game();


    
    
    
    


