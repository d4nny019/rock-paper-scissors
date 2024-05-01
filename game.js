function playGame() {
    let humanScore = 0
    let computerScore = 0
    for (let i = 0; i < 5; i++) {
        playRound()
        function playRound() {
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
        let humanChoice = prompt('Which guesture do you want to play? (rock/paper/scissors)')
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

    if (humanSelection == 1 && computerSelection == 3 || humanSelection == 2 && computerSelection == 1 || humanSelection == 3 && computerSelection == 2) {
        humanScore++
        console.log('you win')
        console.log('')
    } else if (computerSelection == 1 && humanSelection == 3 || computerSelection == 2 && humanSelection == 1 || computerSelection == 3 && humanSelection == 2) {
        computerScore++
        console.log('you lose')
        console.log('')
    } else if (computerSelection == humanSelection) {
        console.log('draw')
        console.log('')
    } else {
        computerScore++
        console.log('you lose')
        console.log('')
    }
    console.log('your score:' + ' ' + humanScore)
    console.log("computer's score:" + ' ' + computerScore)
}
}
}