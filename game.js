const choices = ['rock', 'paper', 'scissors']

function computerPlay(choices) {
    let choice = choices[Math.floor(Math.random() * choices.length)]
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

const button = document.querySelector('#toggle');
const theme = document.querySelector('#theme-link');
button.addEventListener('click', function() {
    if (theme.getAttribute('href') === "styles/dark.css") {
        theme.href = "styles/light.css";
        button.textContent = "Dark Mode";
    } else {
        theme.href = "styles/dark.css";
        button.textContent = "Light Mode";
    }
});

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

// add event listeners to these buttons and then play the game with the choice
let computerWins = 0;
let userWins = 0;
rock.addEventListener('click', () => {
    let userChoice = "rock";
    let computerChoice = computerPlay(choices);
    let text = playRound(userChoice, computerChoice);
    if (text.includes("Computer")) {
        computerWins += 1;
    } else if (text.includes("User")) {
        userWins += 1;
    }
    const result = document.querySelector('#result');
    result.textContent = text;
    const num1 = document.querySelector(".user h1");
    num1.textContent = userWins;
    const num2 = document.querySelector(".computer h1");
    num2.textContent = computerWins;
});

paper.addEventListener('click', () => {
    let userChoice = "paper";
    let computerChoice = computerPlay(choices);
    let text = playRound(userChoice, computerChoice);
    if (text.includes("Computer")) {
        computerWins += 1;
    } else if (text.includes("User")) {
        userWins += 1;
    }
    const result = document.querySelector('#result');
    result.textContent = text;
    const num1 = document.querySelector(".user h1");
    num1.textContent = userWins;
    const num2 = document.querySelector(".computer h1");
    num2.textContent = computerWins;
});

scissors.addEventListener('click', () => {
    let userChoice = "scissors";
    let computerChoice = computerPlay(choices);
    let text = playRound(userChoice, computerChoice);
    if (text.includes("Computer")) {
        computerWins += 1;
    } else if (text.includes("User")) {
        userWins += 1;
    }
    const result = document.querySelector('#result');
    result.textContent = text;
    const num1 = document.querySelector(".user h1");
    num1.textContent = userWins;
    const num2 = document.querySelector(".computer h1");
    num2.textContent = computerWins;
});
