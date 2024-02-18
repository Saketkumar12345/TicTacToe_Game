let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user_score");
const compScorepara = document.querySelector("#computer_score");

const genComputerChoice = () =>{
    const options = ["paper", "scissor", "stone"];
    const randChoice = Math.floor(Math.random() *3);
    return options[randChoice];
}

const drawGame = ()=>{
    console.log("Game was Draw");
    msg.innerText ="Game was Draw. Play Again";
    msg.style.backgroundColor = "#081b31";
}

const showwinner = (userwin,userChoice,compChoice)=>{
    if(userwin){
        console.log("You Win");
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText =`You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        console.log("computer win");
        computerScore++;
        compScorepara.innerText = computerScore;
        msg.innerText =`You lose!  ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playgame = (userChoice) =>{
    console.log("User Choice = " ,userChoice)
    // Generate computer Choice
    const compChoice = genComputerChoice();
    console.log("Computer Choice = ",compChoice);

    if(userChoice === compChoice){
        //draw game
        drawGame();
    }else{
        let userwin =true;
        if(userChoice === "stone"){
            // computer choice should be paper and scissor
            userwin = compChoice === "paper" ? false : true;
        }
        else if ( userChoice === "paper"){
            // computer choice should be stone and scissor
            userwin = compChoice ==="scissor" ? false : true;
        }
        else {
            // paper, stone
            userwin = compChoice === "stone" ? false: true;
        }
        showwinner(userwin,userChoice,compChoice);
    }

    
}

choices.forEach((choice) =>{
    //console.log(choices)
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        ///console.log("Choice was clicked",userChoice);

        playgame(userChoice);
    });
});