const options = ["papper", "rock", "scissors"];

const computerPlay = () => {
    const prob = Math.floor(Math.random() * 3);
    console.log(options[prob]);
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

computerPlay();
singleRound("papper", "papper");

