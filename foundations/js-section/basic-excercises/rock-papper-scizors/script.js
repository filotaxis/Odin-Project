const buttons = document.querySelectorAll("button");
const winner = document.querySelector(".winner");
const playerSel = document.querySelector(".player-selection");
const playerScore = document.querySelector(".player-score");
const computerSel = document.querySelector(".computer-selection");
const computerScore = document.querySelector(".computer-score");
const gameRes = document.querySelector("#game-result");
const options = ["papper", "rock", "scissors"];

const computerPlay = () => {
    const prob = Math.floor(Math.random() * 3);
    return options[prob];
}

const rules = (player, computer) => {
    
    if (player === computer) {
        return "draw";
    }
    else if (player === "papper" && computer === "rock") {
        return "player";
    }
    else if (player === "papper" && computer === "scissors") {
        return "computer";
    }
    else if (player === "rock" && computer === "scissors") {
        return "player";
    }
    else if (player === "rock" && computer === "papper") {
        return "computer";
    }
    else if (player === "scissors" && computer === "papper") {
        return "player";
    }
    else if (player === "scissors" && computer === "rock") {
        return "computer";
    }
}

// const game = (rounds) => {
//     for (let i = 0; i < rounds; i++){
//         // const player = prompt("enter your guess").toLowerCase();
//         const computer = computerPlay();
//         console.log(`🤷 ${player} vs 💻 ${computer}`);
//         console.log(singleRound(player, computer));
//     }
// }

const singleRound = () => {
    let score_p = 0;
    let score_c = 0;
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const player = button.id;
            const computer = computerPlay();
            
            playerSel.textContent = player;
            computerSel.textContent = computer;

            const win = rules(player, computer);
            // winner.textContent = win + " wins!";
            
            if (win === "player") {
                score_p++;
                winner.textContent = ">";
            } else if (win === "computer") {
                score_c++;
                winner.textContent = "<";
            } else if (win === "draw") {
                winner.textContent = "=";
                
            }

            playerScore.textContent = score_p;
            computerScore.textContent = score_c;

            if (score_p >= 3) {
                gameRes.textContent = "Player! 🤑"
            }
            else if (score_c >= 3) {
                gameRes.textContent = "Mr. Roboto! 🤖"
            }
        });
    });
}

singleRound();



