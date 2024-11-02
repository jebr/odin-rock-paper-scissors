
// Variables
let computerChoice = 0
let humanChoice = 0

function getComputerChoice(){
    let computerChoice = ""
    let number = Math.random()

    if (number < 0.33){
        computerChoice = "Rock"
    } else if (number < 0.66){
        computerChoice = "Paper"
    } else {
        computerChoice = "Scissors"
    }
    return computerChoice
}

function getHumanChoice(){
    let humanChoice = prompt("Maak een keuze:" +
        "1: Rock" +
        "2: Paper" +
        "3: Scissors")

    while (isNaN(humanChoice) || humanChoice === "" || humanChoice < 1 || humanChoice > 3) {
        humanChoice = prompt("Dat is geen geldig nummer. Probeer het opnieuw:");
    }

    if (humanChoice == 1){
        humanChoice = "Rock"
    } else if (humanChoice == 2){
        humanChoice = "Paper"
    } else if (humanChoice == 3){
        humanChoice = "Scissors"
    }

    return humanChoice
}

function playRound(computerChoice, humanChoice){
    computerScore = 0
    humanScore = 0

    if (computerScore > 4 || humanScore > 4){

    }

}

const computerSelection = (getComputerChoice())
const humanSelection = (getHumanChoice())

playRound(computerSelection, humanSelection)