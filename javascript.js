let playerScore= 0;
let computerScore= 0;

function getComputerChoice(){
    const choices= ['Rock', 'Paper', 'Scissors'];
    
      const choice= Math.floor(Math.random()*choices.length);
    
     return choices[choice];
    
}
// console.log(getComputerChoice());

function playRound(playerSelection, computerSelection){
    playerSelection.toLowerCase();

    if (playerSelection===computerSelection){
        return "It is a tie!"
    }
    if(
        (playerSelection==="Rock" && computerSelection==="Scissors") 
    || (playerSelection==="Paper" && computerSelection==="Rock")
    || (playerSelection==="Scissors" && computerSelection==="Paper")
    ) 
    {
        playerScore++;

        return `You Win! ${playerSelection} beats ${computerSelection}`;
    
    }else{
        
        computerScore++;
    
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
        
}
    // const playerSelection= "Rock";
    // const computerSelection= getComputerChoice();
    // console.log(playRound(playerSelection, computerSelection));

    function game(){
        
        for (let i=0; i<5; i++){
            const playerSelection= prompt('please choose from these: Rock, Paper, Scissors');
            const computerSelection= getComputerChoice();
            const result= playRound(playerSelection, computerSelection);
            console.log(result);
        }
        console.log(`Final score: Player: ${playerScore} - Computer: ${computerScore} `);
        if(playerScore>computerScore){
            console.log("You are the winner");
        }else if(computerScore>playerScore){
            console.log("You lost the game");
        }else{
            console.log("It is a tie!");
    
        }

        }
        game();



 

