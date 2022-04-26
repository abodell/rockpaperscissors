const button = document.querySelector('.toggle');
const theme = document.querySelector('#theme-link');
button.addEventListener('click', function() {
    if (theme.getAttribute('href') === "styles/dark.css") {
        theme.href = "styles/light.css";
        button.textContent = "Dark Mode";
    } else {
        theme.href = "styles/dark.css";
        button.textContent = "Light Mode";
    }
})

/*const choices = ['rock', 'paper', 'scissors']

function computerPlay(picks) {
    let choice = picks[Math.floor(Math.random() * choices.length)]
    return choice
}

function playRound(userChoice, computerChoice) {
    if (userChoice === 'rock' && computerChoice === 'paper') {
        return "Computer wins! Paper beats rock!"
    } else if (userChoice === 'rock' && computerChoice === 'scissors') {
        return "User wins! Rock beats scissors!"
    } else if (userChoice == 'rock' && computerChoice === 'rock') {
        return "Tie! Rock ties Rock"
    } else if (userChoice === 'paper' && computerChoice === 'scissors') {
        return "Computer wins! Scissors beats paper!"
    } else if (userChoice === "paper" && computerChoice === 'rock') {
        return "User wins! Paper beats rock!"
    } else if (userChoice === 'paper' && computerChoice === 'paper') {
        return "Tie! Paper ties Paper"
    } else if (userChoice === 'scissors' && computerChoice === 'scissors') {
        return "Tie! Scissors ties Scissors"
    } else if (userChoice === 'scissors' && computerChoice === 'paper') {
        return "User wins! Scissors beats paper!"
    } else {
        return "Computer wins! Rock beats scissors!"
    }
}



function game() {
    for (let i = 0; i < 5; i++) {
        let userChoice = prompt("Pick rock, paper, scissors")
        userChoice = userChoice.toLowerCase()
        let computerChoice = computerPlay(choices)
        console.log(playRound(userChoice, computerChoice))
    }
}



game() */
