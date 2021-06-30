'use strict';

const userMessage = document.querySelector('.message');

const scoreLabel = document.querySelector('.label-score');
const scoreNum = document.querySelector('.score');
const highscore = document.querySelector('.label-highscore');

const answerBox = document.querySelector('.choice')

const replay = document.querySelector('.replay');

const userInput = document.querySelector('.guess');
const submit = document.querySelector('.submit');

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
}

let score = 2;
let highScore = 0;


//This exposes the computer choice for testing
answerBox.textContent = computerPlay();


//User submit
document.querySelector('.submit').addEventListener('click', function(){
   const guess = document.querySelector('.guess').value;

   console.log(guess, computerPlay());
   if(!guess){
       document.querySelector('.message').textContent = `🛑 Error - You must answer me!`

   } else if(guess === answerBox.textContent){
       
//needs a score decrementer implemented for draw!!! score-- does not work for some reason?

    userMessage.textContent = `😐 Draw! ${guess} doesn't beat ${answerBox.textContent}`;
    document.querySelector('h1').textContent = "Is that all you got?!";
    document.querySelector('h1').style.color = "#fff"
    document.querySelector('body').style.backgroundImage = "linear-gradient(pink, pink)";
    document.querySelector('.choice').style.backgroundImage = "linear-gradient(#fff, #fff)";
    document.querySelector('.choice').textContent = "🙄";
    document.querySelector('.submit').style.color = 'black';
    document.querySelector('.replay').style.color = 'black';
    document.querySelector('p').style.color = '#fff';
    document.querySelector('.label-score').style.color = "#fff";
    document.querySelector('.score').style.color = '#fff';
    document.querySelector('.label-highscore').style.color = "#fff";
    document.querySelector('.message').style.color = "#fff";
    document.querySelector('.score').textContent = '1';//fix
       

   } else if(guess === 'paper' && answerBox.textContent === 'rock' || guess === 'rock' && answerBox.textContent === 'scissors' || guess === 'scissors' && answerBox.textContent === 'paper'){
       if(score > 1){
        userMessage.textContent = `😁 You won! ${guess} beats ${answerBox.textContent}!`;
        score++;
        document.querySelector('.score').textContent = score;
        document.querySelector('body').style.backgroundImage = "linear-gradient(#60b347, #60b347)";
        document.querySelector('.choice').style.width = '55rem';
        document.querySelector('body').style.color = '#fff';
        document.querySelector('.choice').style.color = '#60b347';
        document.querySelector('.guess').style.color = '#fff';
        document.querySelector('.replay').style.color = '#60b347';
        document.querySelector('.submit').style.color = 'red';
        document.querySelector('.submit').textContent = 'Click Replay!';
        document.querySelector('.message').style.color = '#fff';
        document.querySelector('.label-score').style.color = "#fff";
        document.querySelector('.label-highscore').style.color = "#fff";
        document.querySelector('.score').style.color = '#fff';
        document.querySelector('h1').textContent = `👹 You're a legend!`
        document.querySelector('.choice').style.color = '#60b347';
        document.querySelector('.choice').style.backgroundImage =  "linear-gradient(#fff, #fff)";
        answerBox.textContent = computerPlay();

        if(score > highScore){
            highScore = score;
            document.querySelector('.label-highscore1').textContent = highScore;
        }
        
       } else{
           document.querySelector('.message').textContent = `🤯 GAME OVER DWEEB!`;
           document.querySelector('.score').textContent = '0';
       }
      

   } else if(guess === 'paper' && answerBox.textContent === 'scissors' || guess === 'scissors' && answerBox.textContent === 'rock' || guess === 'rock' && answerBox.textContent === 'paper'){
       if(score > 1){
        userMessage.textContent = `😾 You are DEFEATED! ${guess} does not beat ${answerBox.textContent} you silly mortal!`;
        score--;
        document.querySelector('.score').textContent = score;
        
       } else{
        document.querySelector('.message').textContent = `🤯 GAME OVER DWEEB!`;
        document.querySelector('.score').textContent = '0';
        document.querySelector('body').style.backgroundImage = "linear-gradient(black, black)";
        document.querySelector('.choice').style.width = '10rem';
        document.querySelector('.choice').textContent = '☠️';
        document.querySelector('body').style.color = 'red';
        document.querySelector('.choice').style.color = 'red';
        document.querySelector('.guess').style.color = 'red';
        document.querySelector('.replay').style.color = 'red';
        document.querySelector('.submit').style.color = 'red';
        document.querySelector('.submit').textContent = 'Click Replay!';
        document.querySelector('.message').style.color = 'red';
        document.querySelector('.label-score').style.color = "red";
        document.querySelector('.label-highscore').style.color = "red";
        document.querySelector('.score').style.color = 'red';
        document.querySelector('h1').textContent = 'Your end has come!'
        document.querySelector('.choice').style.backgroundImage = "linear-gradient(#fff, #fff)";
        document.querySelector('h1').style.color = 'red';

        
    }
      
   }
})

document.querySelector('.replay').addEventListener('click', function(){
    score = score;
    document.querySelector('body').style.backgroundImage = 'linear-gradient(cyan, teal)';
    document.querySelector('h1').textContent = "☀️ Choose Rock, Paper, or Scissors friend!";
    document.querySelector('h1').style.color = "rgba(28, 18, 161, 0.473)";
    document.querySelector('.choice').textContent = '?';
    document.querySelector('.choice').style.backgroundImage = "linear-gradient(#fff, #fff)";
    document.querySelector('.choice').style.color = "teal";
    document.querySelector('.guess').value = "";
    document.querySelector('.choice').style.width = '40rem'
    document.querySelector('.submit').style.color = "teal";
    document.querySelector('.replay').style.color = "teal";
    document.querySelector('p').style.color = "#fff";
    document.querySelector('.guess').style.color = "#fff";
    document.querySelector('.message').style.color = "#fff";
    document.querySelector('.score').style.color = "#fff";
    document.querySelector('.label-score').style.color = "#fff";
    document.querySelector('.label-highscore').style.color = "#fff";
    document.querySelector('.message').textContent = "Make your choice..."
    document.querySelector('.submit').textContent = 'Submit';
    document.querySelector('.score').textContent = 2;
    
    answerBox.textContent = computerPlay();  
})

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
 
