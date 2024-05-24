let winners = []
function startGame() {
    let buttons = document.querySelectorAll('button')
    buttons.forEach((button) =>
        button.addEventListener(('click'), () =>{
            if (button.id) {
                playRound(button.id);
            }
        }))
    }
    function playRound(humanSelection) {
    const computerSelection = getComputerChoice();
        const winner = checkWinner(humanSelection, computerSelection)
        winners.push(winner)
        tallyWins();
    }

    let pWinCount = 0
    let cWinCount = 0
    let draws = 0
    
    function checkWinner(humanSelection, computerSelection) {
        if (pWinCount === 5) {
            alert("You Win!")
        } else if (cWinCount === 5) {
            alert("Computer Wins!")
        } else {
    if (humanSelection == "rock" && computerSelection == "scissors" || humanSelection == "paper" && computerSelection == "rock" || humanSelection == "scissors" && computerSelection == "paper") {
        pWinCount++
        console.log('you win')
        console.log('')
        return "you win"
    } else if (computerSelection == "rock" && humanSelection == "scissors" || computerSelection == "paper" && humanSelection == "rock" || computerSelection == "scissors" && humanSelection == "paper") {
        cWinCount++
        console.log('you lose')
        console.log('')
        return "you lose"
    } else if (computerSelection == humanSelection) {
        draws++
        console.log('draw')
        console.log('')
        return "draw"
    } else {
        cWinCount++
        console.log('you lose')
        console.log('')
    }
    }
    }

    function tallyWins() {
        document.querySelector("#Player").textContent = `Your score = ${pWinCount}`
        document.querySelector("#Computer").textContent = `Computer score = ${cWinCount}`
        document.querySelector("#Draw").textContent = `${draws} draws`
    }

    function getComputerChoice() {
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        let computerChoice
        let computerChoiceNumber = getRandomInt(1,3)
        if (computerChoiceNumber === 1) {
            computerChoice = "rock"
            console.log('computer chooses rock')}
        else if (computerChoiceNumber === 2) {
            computerChoice = "paper"
            console.log('computer chooses paper')}
        else {
            computerChoice = "scissors"
            console.log('computer chooses scissors')}
        return computerChoice;
    }
startGame();