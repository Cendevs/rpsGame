
//array of computer play chances
let playChances = ["rock", "paper", "scissors"];
const computerPlay = () => {
    randomNum = Math.floor(Math.random()*playChances.length);
    return playChances[randomNum];
};

//declration variables
let playerScore = 0;
let computerScore = 0;
let tieGame = 0;
let computerSelection = computerPlay();
let playerSelection = ""
const btnRK = document.querySelector('#rock')
const btnPP = document.querySelector('#paper');
const btnSS = document.querySelector('#scissors');
let playerWins = document.querySelector('#pWins');
let drawGame = document.querySelector('#tie')
let computerWins = document.querySelector('.cWins');
let result = document.querySelector('#res');
let endGame = document.querySelector('.endGame');
const replay = document.querySelector('#replay');

//single rounds play function
document.querySelector('#res').textContent = "Select Rock, Paper or Scissors to play"
const singleRound = (playerSelection, computerSelection) => {
    //nested ifs and else ifs statment
    if(playerSelection != computerSelection){
        if(playerSelection === "rock" && computerSelection === "paper"){
            computerWins.textContent = `${computerScore += 1}`;
            document.querySelector("#res").textContent = `Failed! ${computerSelection} covers ${playerSelection}.`;
            console.log("You lose");
        
    }else if(playerSelection === "rock" && computerSelection === "scissors"){
        playerWins.textContent = `${playerScore += 1}` 
        document.querySelector("#res").textContent = `Success! ${playerSelection} cruches ${computerSelection}.`
        console.log("You win");
    
    }else if(playerSelection === "paper" && computerSelection === "scissors"){
        computerWins.textContent = `${computerScore += 1}` ;
        document.querySelector("#res").textContent = `Failed! ${computerSelection} cuts ${playerSelection}.`;
        console.log("You lose");
    
    }else if(playerSelection === "paper" && computerSelection === "rock"){
        playerWins.textContent = `${playerScore += 1}`;
        document.querySelector("#res").textContent = `Success! ${playerSelection} covers ${computerSelection}.`;
        console.log("You win");
    
    }else if(playerSelection === "scissors" && computerSelection === "rock"){
        computerWins.textContent =`${computerScore += 1}`;
        document.querySelector("#res").textContent = `Failed! ${computerSelection} cruches ${playerSelection}.`;
        console.log("You lose");
    
    }else if(playerSelection === "scissors" && computerSelection === "paper"){
        playerWins.textContent = `${playerScore += 1}`;
        document.querySelector("#res").textContent = `Success! ${playerSelection} cuts ${computerSelection}.`;
        console.log("You win");
    }
}else if(playerSelection === computerSelection){
        drawGame.textContent = `${tieGame += 1}`
        document.querySelector("#res").textContent = 'That\'s a tie';
        console.log("That's a tie!")
    }

    else{
        document.querySelector('#res').textContent = "Select Rock, Paper or Scissors to play";
    }
    
};


function displayHide(){
    replay.style.visibility = "hidden";
}
//displayHide()
document.querySelector('#replay').disabled = true;
endGame.textContent = "Game on!";
endGame.style.color ="green";
function game(){
    singleRound(playerSelection, computerSelection)
        if(playerScore >= 5){
        document.querySelector('#res').textContent = `Yea! You won. You beat the computer by 
        ${playerScore} to ${computerScore} point(s).`
        document.querySelector('#res').style.color = 'green'
        gameOver();
        }
        else if(computerScore >= 5){
        document.querySelector('#res').textContent = `Ooops! You Lose. Computer beat you by 
        ${computerScore} to ${playerScore} point(s).` 
        document.querySelector('#res').style.color = 'red'
        gameOver();
        }

        else if(tieGame >= 5){
            document.querySelector('#res').textContent = `Cool, You got a tie game! You scored ${playerScore}, 
            computer scored ${computerScore} point(s) and ${tieGame} tie games.`;
            document.querySelector('#res').style.color = 'orange'
            gameOver();
            
        }
       
}

btnRK.addEventListener('click', ()=>{
    playerSelection = "rock"
    computerSelection = computerPlay()
    game()
});

btnPP.addEventListener('click', ()=>{
    playerSelection = 'paper'
    computerSelection = computerPlay();
    game()
});

btnSS.addEventListener('click', ()=>{
    playerSelection = 'scissors'
    computerSelection = computerPlay();
    game()
});

function displayShow(){
    replay.style.visibility = "visible";

}

function gameOver(){
    document.querySelector('#rock').disabled = true;
    document.querySelector('#paper').disabled = true;
    document.querySelector('#scissors').disabled = true;
    endGame.textContent = "Game Over!"
    endGame.style.color = 'red'
    document.querySelector('#replay').disabled = false;
    replay.textContent = "Restart";
    displayShow()
    
}


replay.addEventListener('click', ()=>{
    playAgain();
});
function playAgain(){
    //game();
    document.querySelector('#rock').disabled = false;
    document.querySelector('#paper').disabled = false;
    document.querySelector('#scissors').disabled = false;
    endGame.textContent = "Game on!";
    endGame.style.color = "green"
    document.querySelector('#res').textContent = "Select Rock, Paper or Scissors to play"
    playerScore = 0; 
    computerScore = 0;
    tieGame = 0;
    computerWins.textContent = computerScore;
    playerWins.textContent = playerScore;
    drawGame.textContent = tieGame;
    displayHide()
    };
