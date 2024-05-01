let randomNumber = Math.random()
let trimmedRandomNumber = randomNumber.toFixed(2)
let humanScore = 0
let computerScore = 0



function playRound(ComputerChoice, HumanChoice) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    function getComputerChoice() {
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        let computerChoice = getRandomInt(1,3)
        if (computerChoice === 1) {
            console.log('computer chooses rock')}
        else if (computerChoice === 2) {
            console.log('computer chooses paper')}
        else {
            console.log('computer chooses scissors')}
        return computerChoice;
    }
    
    function getHumanChoice() {
        let humanChoice = prompt('wut it gonna be? (select from: rock/paper/scissors)')
        let choice = humanChoice.toLowerCase()
        if (choice == 'rock') {
            console.log('you chose rock')
            return 1;}
            else if (choice == 'paper') {
                console.log('you chose paper')
                return 2;}
            else if (choice == 'scissors') {
                console.log('you chose scissors')
                return 3;}
                else {
                    console.log('learn to follow instructions')}
    }

    if (humanSelection == computerSelection) {
        console.log('draw')
    }
    else {
        console.log('not a draw')
    }
}