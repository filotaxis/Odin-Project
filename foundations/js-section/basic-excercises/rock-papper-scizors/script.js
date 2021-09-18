const options = ["papper", "rock", "scissors"];

const computerPlay = () => {
    const prob = Math.floor(Math.random() * 3);
    return options[prob];
}

const singleRound = (player, computer) => {
    if (player === computer) {
        return "draw";
    }
    else if (player === "papper" && computer === "rock") {
        return "player wins";
    }
    else if (player === "papper" && computer === "scissors") {
        return "computer wins";
    }
    else if (player === "rock" && computer === "scissors") {
        return "player wins";
    }
    else if (player === "rock" && computer === "papper") {
        return "computer wins";
    }
    else if (player === "scissors" && computer === "papper") {
        return "player wins";
    }
    else if (player === "scissors" && computer === "rock") {
        return "computer wins";
    }
}

const game = () => {
    for (let i = 0; i < 5; i++){
        const player = prompt("enter your guess").toLowerCase();
        const computer = computerPlay();
        console.log(`🤷 ${player} vs 💻 ${computer}`);
        console.log(singleRound(player, computer));
    }
}

game();
